import {WsType} from "../../types/wsType";
import {wsFeedActions} from "../reducers/web-socket/ws-feed-slice";
import {wsOrdersActions} from "../reducers/web-socket/ws-orders-slice";
import {ordersSlice} from "../reducers/orders-slice";

const config = {
  [WsType.Feed]: {
    wsActions: wsFeedActions,
    dataActions: ordersSlice.actions
  },
  [WsType.Orders]: {
    wsActions: wsOrdersActions,
    dataActions: ordersSlice.actions
  }
}


const webSocketMiddleware = (wsUrl, type, getToken = undefined) => {
  let socket = null;

  const {wsActions, dataActions} = config[type];

  return store => next => action => {
    const {dispatch} = store;

    if (wsActions.start.match(action)) {
      if (socket && socket.readyState === WebSocket.OPEN) {
        return next(action);
      }

      const url = getToken ? `${wsUrl}?token=${getToken().replace('Bearer ', '')}` : wsUrl;

      try {
        socket = new WebSocket(url);
      } catch (e) {
        dispatch(wsActions.error(e.message));
        return;
      }

      socket.onopen = () => {
        dispatch(wsActions.success());
      }

      socket.onerror = event => {
        dispatch(wsActions.error(event));
      }

      socket.onclose = event => {
        if (event.code !== 1000) {
          dispatch(wsActions.closed(event))
        }
      }

      socket.onmessage = event => {
        const data = JSON.parse(event.data);

        dispatch(dataActions.onMessage({wsType: type, message: data}));
      }
    }

    if (wsActions.stop.match(action) && socket) {
      dispatch(dataActions.wsStop(type))

      socket.close(1000);
      socket = null;
    }

    return next(action);
  }
}

export default webSocketMiddleware;
