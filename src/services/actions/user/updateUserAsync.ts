import {authSlice} from "../../reducers/authSlice";
import api from "../../../api";
import {TUser} from "../../types/data";
import {AppDispatch} from "../../types";

export const updateUserAsync = (user: TUser) => async (dispatch: AppDispatch) => {
  dispatch(authSlice.actions.fetching());
  try {
    const result = await api.updateUser(user);
    if (result.success) {
      dispatch(authSlice.actions.setUser(result.user));
    } else {
      dispatch(authSlice.actions.error(`Ошибка обновления пользователя. ${result}`))
    }
  } catch (e) {
    dispatch(authSlice.actions.error((e as Error).message));
  }
}
