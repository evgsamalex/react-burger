import sendRequest from "../sendRequest";

export const register = async (user) => {
  return sendRequest({
    url: '/api/auth/register',
    method: 'POST',
    data: user
  });
}
