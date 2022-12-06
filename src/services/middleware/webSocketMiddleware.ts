import {Middleware} from "redux";
import {TWsConfig} from "../reducers/web-socket";
import {TOrdersMessage} from "../types/feed";

const webSocketMiddleware = (wsUrl: string, wsConfig: TWsConfig, getToken?: () => string): Middleware => {
  let socket: WebSocket | null = null;

  const {wsActions, dataActions, wsType} = wsConfig;

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
        dispatch(wsActions.error((e as Error).message));
        return;
      }

      socket.onopen = () => {
        dispatch(wsActions.success());
      }

      socket.onerror = () => {
        dispatch(wsActions.error("socket error"));
      }

      socket.onclose = event => {
        if (event.code !== 1000) {
          dispatch(wsActions.closed("socket closed"))
        }
      }

      socket.onmessage = event => {
        const data = JSON.parse(event.data);
        const message: TOrdersMessage = {...data, wsType: wsType}
        dispatch(dataActions.onMessage(message));
      }
    }

    if (wsActions.stop.match(action) && socket) {
      dispatch(dataActions.wsStop(wsType))

      socket.close(1000);
      socket = null;
    }

    return next(action);
  }
}

export default webSocketMiddleware;
