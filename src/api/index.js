import {getIngredients} from "./rest/ingredients";
import {createOrder} from "./rest/order";
import {register} from "./rest/register";
import {login} from "./rest/auth/login";
import {getUser, updateUser} from "./rest/auth/user";
import {logout} from "./rest/auth/logout";
import {forgetPassword, resetPassword} from "./rest/password/password";

export {getIngredients, createOrder, register, login, getUser, logout, updateUser, forgetPassword, resetPassword}
