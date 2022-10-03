import {createSlice} from "@reduxjs/toolkit";
import {WsType} from "../../types/wsType";

const initialState = {
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
    onMessage: (state, action) => {
      const {wsType, message} = action.payload;
      setIds(state, wsType, message.orders.map(x => x._id))
      addOrUpdate(state, message.orders);
      state.total = message.total;
      state.totalToday = message.totalToday;
    },
    wsStop: (state, action) => {
      const type = action.payload;
      setIds(state, type, [])
      state.total = 0;
      state.totalToday = 0;
    }
  }
})

const setIds = (state, type, ids) => {
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

const addOrUpdate = (state, orders) => {
  orders.forEach(order => {
    const stateOrder = state.orders[order._id];
    if (!stateOrder || stateOrder.status !== order.status) {
      state.orders[order._id] = order;
    }
  })
}

export default ordersSlice.reducer;
