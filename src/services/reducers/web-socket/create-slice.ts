import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type TWsState = {
  connecting: boolean;
  connected: boolean;
  error: string | undefined
}

const initialState: TWsState = {
  connected: false,
  error: undefined,
  connecting: false,
}

const createSocketSlice = (name: string) => createSlice({
  name: name,
  initialState,
  reducers: {
    start: (state) => {
      state.connecting = true;
    },
    stop: () => {
      return {...initialState};
    },
    success: (state) => {
      state.connected = true;
      state.error = undefined;
      state.connecting = false;
      console.log('start');
    },
    error: (state, action: PayloadAction<string>) => {
      state.connected = false;
      state.error = action.payload;
    },
    closed: (state, action: PayloadAction<string>) => {
      console.log(action.payload);
      return {...initialState};
    },
  }
});

export default createSocketSlice;
