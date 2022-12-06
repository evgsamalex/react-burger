import {passwordSlice} from "../../reducers/passwordSlice";
import api from "../../../api";
import {AppDispatch} from "../../types";

export const forgetPasswordAsync = (email: string) => async (dispatch: AppDispatch) => {

  if (!email) {
    dispatch(passwordSlice.actions.error(`Введите email`))
    return;
  }

  dispatch(passwordSlice.actions.fetching());
  try {
    const result = await api.forgetPassword(email);
    if (result.success) {
      dispatch(passwordSlice.actions.successRecoverySend());
    } else {
      dispatch(passwordSlice.actions.error(`Ошибка восстановления пароля ${result}`));
    }
  } catch (e) {
    dispatch(passwordSlice.actions.error((e as Error).message));
  }
}
