import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {TCreateOrder, TStateBase} from "../types/data";

export type TCreateOrderState = TStateBase & {
  order: TCreateOrder | null,
  isOpen: boolean
}

const initialState: TCreateOrderState = {
  isLoading: false,
  error: '',
  order: null,
  isOpen: false,
}

export const createOrderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    fetching: (state) => {
      state.error = ''
      state.isLoading = true
      state.isOpen = true;
    },
    error: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    success: (state, action: PayloadAction<TCreateOrder>) => {
      state.order = action.payload;
      state.isLoading = false;
    },
    close: () => {
      return initialState;
    }
  }
})

export default createOrderSlice.reducer;
