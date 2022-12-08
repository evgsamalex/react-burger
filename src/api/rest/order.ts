import sendRequest, {authHeaders} from "../sendRequest";
import {RequestMethod, TResponseBody} from "../types";
import {TCreateOrder} from "../../services/types/data";

export const createOrder = async (ingredients: Array<string>): Promise<TResponseBody<'order', TCreateOrder>> => {
  return sendRequest({
    url: '/api/orders',
    method: RequestMethod.Post,
    headers: authHeaders(),
    data: {"ingredients": ingredients}
  });
}
