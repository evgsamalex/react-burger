import {ingredientsSlice} from "../reducers/ingredientsSlice";
import {api} from "../api";
import {delay} from "../../utils/utils";

export const fetchIngredients = () => async (dispatch) => {
  dispatch(ingredientsSlice.actions.fetching())
  try {
    const ingredients = await api.getIngredients();
    dispatch(ingredientsSlice.actions.success(ingredients));
  } catch (e) {
    dispatch(ingredientsSlice.actions.error(e.message))
  }
}
