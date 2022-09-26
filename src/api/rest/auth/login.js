import sendRequest from "../../sendRequest";

export const login = async (data) => {
  return sendRequest({
    url: '/api/auth/login',
    method: 'POST',
    data: data
  });
}
