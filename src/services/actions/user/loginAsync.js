import {authSlice} from "../../reducers/authSlice";
import {login} from "../../../api";

export const loginAsync = ({email, password}) => async (dispatch) => {
  dispatch(authSlice.actions.fetching());
  try {
    const authResult = await login({email, password});
    
    if (authResult.success) {
      dispatch(authSlice.actions.setUser(authResult.user))
    }
    console.log(authResult);
  } catch (e) {
    dispatch(authSlice.actions.error(e.message))
  }
}
