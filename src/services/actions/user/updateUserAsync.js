import {authSlice} from "../../reducers/authSlice";
import {updateUser} from "../../../api";

export const updateUserAsync = (user) => async (dispath) => {
  dispath(authSlice.actions.fetching());
  try {
    const result = await updateUser(user);
    if (result.success) {
      dispath(authSlice.actions.setUser(result.user));
    } else {
      dispath(authSlice.actions.error(`Ошибка обновления пользователя. ${result}`))
    }
  } catch (e) {
    dispath(authSlice.actions.error(e.message));
  }
}
