import {TOrder} from "./data";

export enum WsType {
  Feed = 'FEED',
  Orders = 'ORDERS'
}

export type TMessage = {
  success: boolean;
  wsType: WsType;
}

export type TOrdersMessage = TMessage & {
  orders: ReadonlyArray<TOrder>;
  total: number,
  totalToday: number
}
