import sendRequest, {defaultHeaders} from "../sendRequest";
import {RequestMethod, TResponseBody} from "../types";
import {TIngredient} from "../../services/types/data";

export const getIngredients = async (): Promise<TResponseBody<'data', Array<TIngredient>>> => {
  return sendRequest({url: '/api/ingredients', method: RequestMethod.Get, data: null, headers: defaultHeaders()});
}
