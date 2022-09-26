import {ingredientsSlice} from "../reducers/ingredientsSlice";
import {getIngredients} from "../../api";

export const fetchIngredientsAsync = () => async (dispatch) => {
  dispatch(ingredientsSlice.actions.fetching())
  try {
    const ingredients = await getIngredients();
    dispatch(ingredientsSlice.actions.success(ingredients));
  } catch (e) {
    dispatch(ingredientsSlice.actions.error(e.message))
  }
}
