import {createSlice, Draft} from "@reduxjs/toolkit";
import {PayloadAction} from "@reduxjs/toolkit";
import {TOrdersMessage, WsType} from "../types/feed";
import {TOrder} from "../types/data";

export type TOrdersState = {
  feedIds: string[],
  total: number,
  totalToday: number,
  orderIds: string[],
  orders: { [key: string]: TOrder }
}

const initialState: TOrdersState = {
  feedIds: [],
  total: 0,
  totalToday: 0,
  orderIds: [],
  orders: {}
}

export const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    onMessage: (state, action: PayloadAction<TOrdersMessage>) => {
      const {wsType, orders, total, totalToday} = action.payload;
      setIds(state, wsType, orders.map(x => x._id))
      addOrUpdate(state, orders);
      state.total = total;
      state.totalToday = totalToday;
    },
    wsStop: (state, action: PayloadAction<WsType>) => {
      const type = action.payload;
      setIds(state, type, [])
      state.total = 0;
      state.totalToday = 0;
    }
  }
})

const setIds = (state: Draft<TOrdersState>, type: WsType, ids: string[]) => {
  switch (type) {
    case WsType.Feed:
      state.feedIds = ids;
      break;
    case WsType.Orders:
      state.orderIds = ids.reverse();
      break;
    default:
      break;
  }
}

const addOrUpdate = (state: Draft<TOrdersState>, orders: ReadonlyArray<TOrder>) => {
  orders.forEach((order: TOrder | any) => {
    const stateOrder = state.orders[order._id];
    if (!stateOrder || stateOrder.status !== order.status) {
      state.orders[order._id] = order;
    }
  })
}

export default ordersSlice.reducer;
