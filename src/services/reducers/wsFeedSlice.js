import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  connected: false,
  orders: {},
  orderIds: [],
  error: undefined,
}

export const wsFeedSlice = createSlice({
  name: 'wsFeed',
  initialState,
  reducers: {
    start: (state) => {
      state.connecting = true;
    },
    stop: (state) => {
      state.connected = false;
      console.log('stop');
    },
    success: (state) => {
      state.connected = true;
      state.error = undefined;
    },
    error: (state, action) => {
      state.connected = false;
      state.error = action.payload;
    },
    closed: () => {
      return initialState;
    },
    message: (state, action) => {
      addOrUpdate(state, action.payload.orders);
    }
  }
});

const addOrUpdate = (state, orders) => {

  state.orderIds = orders.map(o => o._id);

  orders.forEach(order => {
    const stateOrder = state.orders[order._id];
    if (!stateOrder || stateOrder.status !== order.status) {
      state.orders[order._id] = order;
    }
  })
}

export default wsFeedSlice.reducer;

export const wsFeedActions = wsFeedSlice.actions;
