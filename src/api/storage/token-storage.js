const accessTokenKey = 'accessToken'
const refreshTokenKey = 'refreshToken'

const setRefreshToken = (token) => {
  localStorage.setItem(refreshTokenKey, token);
}

const getRefreshToken = () => {
  return localStorage.getItem(refreshTokenKey);
}

const setAccessToken = (token) => {
  localStorage.setItem(accessTokenKey, token);
}

const getAccessToken = () => {
  return localStorage.getItem(accessTokenKey);
}

const clear = () => {
  localStorage.removeItem(accessTokenKey);
  localStorage.removeItem(refreshTokenKey);
}

const tokenStorage = {getAccessToken, setAccessToken, getRefreshToken, setRefreshToken, clear}

export default tokenStorage;
