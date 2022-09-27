import {passwordSlice} from "../../reducers/passwordSlice";
import {forgetPassword} from "../../../api";

export const forgetPasswordAsync = (email) => async (dispatch) => {

  if (!email) {
    dispatch(passwordSlice.actions.error(`Введите email`))
    return;
  }

  dispatch(passwordSlice.actions.fetching());
  try {
    const result = await forgetPassword(email);
    console.log(result);
    if (result.success) {
      dispatch(passwordSlice.actions.successRecoverySend());
    } else {
      dispatch(passwordSlice.actions.error(`Ошибка восстановления пароля ${result}`));
    }
  } catch (e) {
    dispatch(passwordSlice.actions.error(e.message));
  }
}
