import sendRequest, {defaultHeaders} from "../sendRequest";
import {RequestMethod, TRequest, TResponseBody} from "../types";
import {TIngredient, TUser} from "../../services/types/data";

export const getIngredients = async (): Promise<TResponseBody<'data', ReadonlyArray<TIngredient>>> => {
  return sendRequest({url: '/api/ingredients', method: RequestMethod.Get, data: null, headers: defaultHeaders()});
}
