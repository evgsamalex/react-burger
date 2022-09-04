import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  items: [],
  isLoading: false,
  error: ''
}


export const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState,
  reducers: {
    fetching: (state) => {
      state.isLoading = true;
      state.error = '';
    },
    success: (state, action) => {
      state.isLoading = false;
      state.items = action.payload.data;
      state.error = '';
    },
    error: (state, action) => {
      state.isLoading = false;
      state.error = '';
    }
  }
})

export default ingredientsSlice.reducer;
