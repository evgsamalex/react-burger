import {passwordSlice} from "../../reducers/passwordSlice";
import {resetPassword} from "../../../api";

export const resetPasswordAsync = (password, code) => async (dispatch) => {

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
    const result = await resetPassword(password, code);
    if (result.success) {
      dispatch(passwordSlice.actions.successRecoverySend());
    } else {
      dispatch(passwordSlice.actions.error(`Ошибка восстановления пароля ${result}`));
    }
  } catch (e) {
    dispatch(passwordSlice.actions.error(e.message));
  }
}
