import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {TStateBase} from "../types/data";

export type TPasswordState = TStateBase & {
  recoverySent: boolean,
  success: boolean,
}

const initialState = {
  isLoading: false,
  error: '',
  recoverySent: false,
  success: true,
}

export const passwordSlice = createSlice({
  name: 'password',
  initialState,
  reducers: {
    fetching: (state) => {
      state.isLoading = true;
      state.error = ''
      state.success = false;
    },
    error: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    successRecoverySend: (state) => {
      state.isLoading = false;
      state.error = '';
      state.recoverySent = true;
    },
    successRecoveryPassword: (state) => {
      state.isLoading = false;
      state.error = '';
      state.recoverySent = false;
      state.success = true;
    }
  }
})

export default passwordSlice.reducer;
