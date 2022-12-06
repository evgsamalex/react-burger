import {authSlice} from "../../reducers/authSlice";
import api from "../../../api";
import {AppDispatch} from "../../types";

export const loginAsync = ({email, password}: { email: string, password: string }) => async (dispatch: AppDispatch) => {
  dispatch(authSlice.actions.fetching());
  try {
    const authResult = await api.login({email, password});

    if (authResult.success) {
      dispatch(authSlice.actions.setUser(authResult.user))
    }
    console.log(authResult);
  } catch (e) {
    dispatch(authSlice.actions.error((e as Error).message))
  }
}
