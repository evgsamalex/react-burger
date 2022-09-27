import {createSlice} from "@reduxjs/toolkit";
import {getCategories} from "../../utils/utils";

const initialState = {
  isLoading: false,
  error: '',
  items: [],
  categories: [],
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
      state.categories = getCategories(action.payload.data)
    },
    error: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  }
})

export default ingredientsSlice.reducer;

export const selectItemsByCategory = (state, type) => {
  return state.items.filter(x => x.type === type)
};


