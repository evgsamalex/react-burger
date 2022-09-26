import {createSlice} from "@reduxjs/toolkit";

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
    error: (state, action) => {
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
