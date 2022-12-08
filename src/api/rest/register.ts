import sendRequest, {defaultHeaders} from "../sendRequest";
import {TUserAuth} from "../../services/types/data";
import {RequestMethod, TResponseBody} from "../types";

export const register = async (user: TUserAuth): Promise<TResponseBody<'user', TUserAuth>> => {
  return sendRequest({
    url: '/api/auth/register',
    method: RequestMethod.Post,
    headers: defaultHeaders(),
    data: user
  });
}
