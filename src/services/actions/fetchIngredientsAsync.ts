import {ingredientsSlice} from "../reducers/ingredientsSlice";
import api from "../../api";
import {AppDispatch} from "../types";

export const fetchIngredientsAsync = () => async (dispatch: AppDispatch) => {
  dispatch(ingredientsSlice.actions.fetching())
  try {
    const response = await api.getIngredients();
    dispatch(ingredientsSlice.actions.success(response.data));
  } catch (e) {
    dispatch(ingredientsSlice.actions.error((e as Error).message))
  }
}
