import {createSlice} from "@reduxjs/toolkit";
import {TStateBase, TUser} from "../types/data";

export type TAuthState = TStateBase & {
  auth: boolean;
  user: TUser | null,
}

const initialState: TAuthState = {
  auth: false,
  user: null,
  isLoading: false,
  error: ''
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    fetching: (state) => {
      state.isLoading = true;
      state.error = '';
    },

    error: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    setUser: (state, action) => {
      console.log(action);
      state.isLoading = false;
      state.user = action.payload;
      state.auth = true;
    },

    logout: (state) => {
      state.isLoading = false;
      state.user = null;
      state.auth = false;
      state.error = '';
    }
  }
})

export default authSlice.reducer;
