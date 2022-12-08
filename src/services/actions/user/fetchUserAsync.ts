import {authSlice} from "../../reducers/authSlice";
import api from "../../../api";
import {AppDispatch} from "../../types";

export const fetchUserAsync = (dispatchError: boolean = true) => async (dispatch: AppDispatch) => {
  dispatch(authSlice.actions.fetching);
  try {
    const response = await api.getUser();
    if (response.success) {
      dispatch(authSlice.actions.setUser(response.user));
    }
  } catch (e) {
    if (dispatchError) {
      dispatch(authSlice.actions.error((e as Error).message))
    }
  }
}
