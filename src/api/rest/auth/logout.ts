import sendRequest, {defaultHeaders} from "../../sendRequest";
import {HeadersKeys, RequestMethod, TResponseBody} from "../../types";

export const logout = async (): Promise<TResponseBody> => {
  const headers = defaultHeaders();
  headers.set(HeadersKeys.Logout, 'true');
  return sendRequest({
    url: '/api/auth/logout',
    method: RequestMethod.Post,
    headers,
    data: null
  });
}
