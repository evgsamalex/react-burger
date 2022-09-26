import sendRequest from "../sendRequest";

export const createOrder = async (ingredients) => {
  return sendRequest({
    url: '/api/orders',
    method: 'POST',
    data: {"ingredients": ingredients}
  });
}
