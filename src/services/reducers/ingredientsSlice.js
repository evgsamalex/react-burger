import {createSlice} from "@reduxjs/toolkit";
import {getCategories} from "../../utils/utils";

const initialState = {
  isLoading: false,
  error: '',
  items: [],
  categories: [],
  ingredientDetails: null
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
    reset: (state) => {
      state.error = '';
      state.isLoading = false;
      state.items = [];
      state.categories = [];
      state.ingredientDetails = null;
    },
    showDetails: (state, action) => {
      state.ingredientDetails = action.payload;
    },
    hideDetails: (state) => {
      state.ingredientDetails = null;
    }
  }
})

export default ingredientsSlice.reducer;

export const selectItemsByCategory = (state, type) => {
  return state.items.filter(x => x.type === type)
};


