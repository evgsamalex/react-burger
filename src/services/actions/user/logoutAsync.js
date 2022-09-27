import {logout} from "../../../api";
import {authSlice} from "../../reducers/authSlice";


export const logoutAsync = () => async dispath => {
  try {
    const result = await logout();
    if (result.success) {
      dispath(authSlice.actions.logout());
    }
  } catch (e) {

  }
}
