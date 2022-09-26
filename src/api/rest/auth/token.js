import sendRequest from "../../sendRequest";

export const refreshToken = async (data) => {
  return sendRequest({
    url: '/api/auth/token',
    method: 'POST',
    data: data
  });
}
