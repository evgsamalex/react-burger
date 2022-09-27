import {orderSlice} from "../reducers/orderSlice";
import {createOrder} from "../../api";

export const createOrderAsync = (ingredientIds) => async (dispatch) => {
  dispatch(orderSlice.actions.fetching())
  try {
    const result = await createOrder(ingredientIds);
    dispatch(orderSlice.actions.success(result));
  } catch (e) {
    dispatch(orderSlice.actions.error(e.message))
  }
}
