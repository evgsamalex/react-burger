import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  error: '',
  order: {},
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
    error: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    success: (state, action) => {
      state.order = action.payload.order;
      state.isLoading = false;
    },
    close: () => {
      return initialState;
    }
  }
})

export default createOrderSlice.reducer;
