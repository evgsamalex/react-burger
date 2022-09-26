import config from "../config";

const setTokensIfExist = (json) => {
  if (json.accessToken) {
    config.tokenStorage.setAccessToken(json.accessToken);
  }
  if (json.refreshToken) {
    config.tokenStorage.setRefreshToken(json.refreshToken);
  }
}

const clearTokensIfLogout = (response) => {
  if (response.url.includes('/logout')) {
    config.tokenStorage.clear();
  }
}

const helpers = {
  setTokensIfExist, clearTokensIfLogout
}

export default helpers;
