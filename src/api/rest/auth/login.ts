import sendRequest, {defaultHeaders} from "../../sendRequest";
import {RequestMethod, TResponseBody} from "../../types";
import {TUser} from "../../../services/types/data";

export const login = async (data: { email: string, login: string }): Promise<TResponseBody<'user', TUser>> => {
  return sendRequest({
    url: '/api/auth/login',
    method: RequestMethod.Post,
    headers: defaultHeaders(),
    data: data
  });
}
