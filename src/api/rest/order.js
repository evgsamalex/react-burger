import sendRequest from "../sendRequest";

export const createOrder = async (ingredients) => {
  return sendRequest({
    url: '/api/orders',
    method: 'POST',
    headers: {
      authorization: true
    },
    data: {"ingredients": ingredients}
  });
}
