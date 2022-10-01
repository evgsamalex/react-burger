import {createOrderSlice} from "../reducers/create-order-slice";
import {createOrder} from "../../api";

export const createOrderAsync = (ingredientIds) => async (dispatch) => {
  dispatch(createOrderSlice.actions.fetching())
  try {
    const result = await createOrder(ingredientIds);
    dispatch(createOrderSlice.actions.success(result));
  } catch (e) {
    dispatch(createOrderSlice.actions.error(e.message))
  }
}
