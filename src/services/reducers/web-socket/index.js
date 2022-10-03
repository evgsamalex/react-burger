import {WsType} from "../../../types/wsType";
import {wsFeedActions} from "./ws-feed-slice";
import {ordersSlice} from "../orders-slice";
import {wsOrdersActions} from "./ws-orders-slice";

const dataActions = (wsType) => {
  return {
    onMessage: (message) => dispath => {
      dispath(ordersSlice.actions.onMessage({wsType: wsType, message: message}))
    },
    wsStop: () => dispatch => {
      return dispatch(ordersSlice.actions.wsStop(wsType))
    }
  }
}

const wsConfig = {
  [WsType.Feed]: {
    wsActions: wsFeedActions,
    dataActions: dataActions(WsType.Feed)
  },
  [WsType.Orders]: {
    wsActions: wsOrdersActions,
    dataActions: dataActions(WsType.Orders)
  }
}

export default wsConfig;
