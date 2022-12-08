import {passwordSlice} from "../../reducers/passwordSlice";
import api from "../../../api";
import {AppDispatch} from "../../types";

export const resetPasswordAsync = (password: string, code: string) => async (dispatch: AppDispatch) => {

  if (!password) {
    dispatch(passwordSlice.actions.error(`Введите пароль`))
    return;
  }

  if (!code) {
    dispatch(passwordSlice.actions.error(`Введите код из письма`))
    return;
  }

  dispatch(passwordSlice.actions.fetching());
  try {
    const result = await api.resetPassword(password, code);
    if (result.success) {
      dispatch(passwordSlice.actions.successRecoverySend());
    } else {
      dispatch(passwordSlice.actions.error(`Ошибка восстановления пароля ${result}`));
    }
  } catch (e) {
    dispatch(passwordSlice.actions.error((e as Error).message));
  }
}
