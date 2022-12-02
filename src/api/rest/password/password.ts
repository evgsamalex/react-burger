import sendRequest, {defaultHeaders} from "../../sendRequest";
import {RequestMethod, TResponseBody} from "../../types";

export const forgetPassword = async (email: string): Promise<TResponseBody> => {
  return sendRequest({
    url: '/api/password-reset/',
    method: RequestMethod.Post,
    headers: defaultHeaders(),
    data: {"email": email}
  });
}

export const resetPassword = async (password: string, token: string): Promise<TResponseBody> => {
  return sendRequest({
    url: '/api/password-reset/reset',
    method: RequestMethod.Post,
    headers: defaultHeaders(),
    data: {
      "password": password,
      "token": token
    }
  });
}
