import {wsFeedActions} from "./ws-feed-slice";
import {ordersSlice} from "../orders-slice";
import {wsOrdersActions} from "./ws-orders-slice";
import {WsType} from "../../types/feed";

export type TWsActions = typeof wsFeedActions | typeof wsOrdersActions;

export type TWsConfig = {
  wsType: WsType
  wsActions: TWsActions;
  dataActions: typeof ordersSlice.actions;
}

const wsConfig: Record<WsType, TWsConfig> = {
  [WsType.Feed]: {
    wsType: WsType.Feed,
    wsActions: wsFeedActions,
    dataActions: ordersSlice.actions
  },
  [WsType.Orders]: {
    wsType: WsType.Orders,
    wsActions: wsOrdersActions,
    dataActions: ordersSlice.actions
  }
}

export default wsConfig;
