import sendRequest from "../sendRequest";

export const getIngredients = async () => {
  return sendRequest({url: '/api/ingredients'});
}
