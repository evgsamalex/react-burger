import sendRequest from "../../sendRequest";

export const getUser = async (data) => {
  return sendRequest({
    url: '/api/auth/user',
    headers: {
      authorization: true
    },
    data: data
  });
}

export const updateUser = async (data) => {
  return sendRequest({
    url: '/api/auth/user',
    method: 'PATCH',
    headers: {
      authorization: true
    },
    data: data
  })
}
