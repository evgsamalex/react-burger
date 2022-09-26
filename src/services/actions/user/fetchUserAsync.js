import {authSlice} from "../../reducers/authSlice";
import {getUser} from "../../../api";

export const fetchUserAsync = (dispatchError = true) => async (dispatch) => {
  dispatch(authSlice.actions.fetching);
  try {
    const response = await getUser();
    if (response.success) {
      dispatch(authSlice.actions.setUser(response.user));
    }
  } catch (e) {
    if (dispatchError) {
      dispatch(authSlice.actions.error(e.message))
    }
  }
}
