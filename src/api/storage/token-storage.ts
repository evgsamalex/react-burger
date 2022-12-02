const accessTokenKey = 'accessToken'
const refreshTokenKey = 'refreshToken'

export interface ITokenStorage {
  setRefreshToken: (token: string) => void;
  getRefreshToken: () => string,

  setAccessToken: (token: string) => void;

  getAccessToken: () => string;

  clear: () => void;
}

const setRefreshToken = (token: string): void => {
  localStorage.setItem(refreshTokenKey, token);
}

const getRefreshToken = (): string => {
  const token = localStorage.getItem(refreshTokenKey);
  return token ? token : '';
}

const setAccessToken = (token: string) => {
  localStorage.setItem(accessTokenKey, token);
}

const getAccessToken = (): string => {
  const token = localStorage.getItem(accessTokenKey);
  return token ? token : '';
}

const clear = () => {
  localStorage.removeItem(accessTokenKey);
  localStorage.removeItem(refreshTokenKey);
}

const tokenStorage: ITokenStorage = {getAccessToken, setAccessToken, getRefreshToken, setRefreshToken, clear}

export default tokenStorage;
