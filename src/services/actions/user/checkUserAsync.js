import {authSlice} from "../../reducers/authSlice";
import {getUser} from "../../../api";

export const checkUserAsync = () => async (dispatch) => {
  try {
    const response = await getUser();
    if (response.success) {
      dispatch(authSlice.actions.setUser(response.user));
    }
  } catch (e) {
    dispatch(authSlice.actions.logout())
  }
}
