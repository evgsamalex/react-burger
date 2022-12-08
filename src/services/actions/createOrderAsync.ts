import {createOrderSlice} from "../reducers/create-order-slice";
import api from "../../api";
import {AppDispatch} from "../types";

export const createOrderAsync = (ingredientIds: string[]) => async (dispatch: AppDispatch) => {
  dispatch(createOrderSlice.actions.fetching())
  try {
    const result = await api.createOrder(ingredientIds);
    dispatch(createOrderSlice.actions.success(result.order));
  } catch (e) {
    dispatch(createOrderSlice.actions.error((e as Error).message))
  }
}
