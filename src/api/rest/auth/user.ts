import sendRequest, {authHeaders} from "../../sendRequest";
import {RequestMethod, TResponseBody} from "../../types";
import {TUserAuth, TUser} from "../../../services/types/data";

export const getUser = async (): Promise<TResponseBody<'user', TUser>> => {
  return sendRequest({
    url: '/api/auth/user',
    method: RequestMethod.Get,
    headers: authHeaders(),
    data: null
  });
}

export const updateUser = async (data: TUserAuth): Promise<TResponseBody<'user', TUser>> => {
  return sendRequest({
    url: '/api/auth/user',
    method: RequestMethod.Patch,
    headers: authHeaders(),
    data: data
  })
}
