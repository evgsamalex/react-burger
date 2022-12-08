import {getIngredients} from "./rest/ingredients";
import {createOrder} from "./rest/order";
import {register} from "./rest/register";
import {login} from "./rest/auth/login";
import {getUser, updateUser} from "./rest/auth/user";
import {logout} from "./rest/auth/logout";
import {forgetPassword, resetPassword} from "./rest/password/password";

export interface IApi {
  getIngredients: typeof getIngredients;
  createOrder: typeof createOrder;
  register: typeof register;
  login: typeof login;
  getUser: typeof getUser;
  logout: typeof logout;
  updateUser: typeof updateUser;
  forgetPassword: typeof forgetPassword;
  resetPassword: typeof resetPassword;
}

const api: IApi = {
  getIngredients,
  createOrder,
  register,
  login,
  getUser,
  logout,
  updateUser,
  forgetPassword,
  resetPassword
}

export default api;
