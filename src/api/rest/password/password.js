import sendRequest from "../../sendRequest";

export const forgetPassword = async (email) => {
  return sendRequest({
    url: '/api/password-reset/',
    method: 'POST',
    data: {"email": email}
  });
}

export const resetPassword = async (password, token) => {
  return sendRequest({
    url: '/api/password-reset/reset',
    method: 'POST',
    data: {
      "password": password,
      "token": token
    }
  });
}
