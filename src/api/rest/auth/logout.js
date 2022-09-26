import sendRequest from "../../sendRequest";

export const logout = async () => {
  return sendRequest({
    url: '/api/auth/logout',
    method: 'POST',
    headers: {
      logout: true
    }
  });
}
