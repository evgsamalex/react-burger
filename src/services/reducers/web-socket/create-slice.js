import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  connected: false,
  error: undefined,
}

const createSocketSlice = (name) => createSlice({
  name: name,
  initialState,
  reducers: {
    start: (state) => {
      state.connecting = true;
    },
    stop: () => {
      return {...initialState};
      console.log('stop');
    },
    success: (state) => {
      state.connected = true;
      state.error = undefined;
      console.log('start');
    },
    error: (state, action) => {
      state.connected = false;
      state.error = action.payload;
    },
    closed: (state, action) => {
      console.log(action.payload);
      return {...initialState};
    },
  }
});

export default createSocketSlice;
