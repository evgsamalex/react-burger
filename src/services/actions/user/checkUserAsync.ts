import {authSlice} from "../../reducers/authSlice";
import api from "../../../api";
import {AppDispatch} from "../../types";

export const checkUserAsync = () => async (dispatch: AppDispatch) => {
  try {
    const response = await api.getUser();
    if (response.success) {
      dispatch(authSlice.actions.setUser(response.user));
    }
  } catch (e) {
    console.log(e);
    dispatch(authSlice.actions.logout())
  }
}
