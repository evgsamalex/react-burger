import {api} from "../api";
import {orderSlice} from "../reducers/orderSlice";
import {burgerConstructorSlice} from "../reducers/burgerConstructorSlice";

export const createOrderAsync = (ingredientIds) => async (dispatch) => {
  dispatch(orderSlice.actions.fetching())
  try {
    const result = await api.createOrder(ingredientIds);
    dispatch(orderSlice.actions.success(result));
  } catch (e) {
    dispatch(orderSlice.actions.error(e.message))
  }
}
