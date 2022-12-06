import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getCategories} from "../../utils/utils";
import {TCategory, TIngredient, TStateBase} from "../types/data";

export type TIngredientsState = TStateBase & {
  items: Array<TIngredient>;
  categories: Array<TCategory>;
}

const initialState: TIngredientsState = {
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
    success: (state, action: PayloadAction<Array<TIngredient>>) => {
      state.isLoading = false;
      state.items = action.payload;
      state.error = '';
      state.categories = getCategories(action.payload)
    },
    error: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  }
})

export default ingredientsSlice.reducer;


