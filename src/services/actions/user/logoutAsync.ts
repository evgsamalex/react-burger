import api from "../../../api";
import {authSlice} from "../../reducers/authSlice";
import {AppDispatch} from "../../types";


export const logoutAsync = () => async (dispatch: AppDispatch) => {
  try {
    const result = await api.logout();
    if (result.success) {
      dispatch(authSlice.actions.logout());
    }
  } catch (e) {

  }
}
