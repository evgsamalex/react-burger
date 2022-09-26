import config from "./config";
import helpers from "./helpers/helpers"


const sendRequest = async ({
                             url = '/',
                             method = 'get',
                             headers = {"Content-Type": "application/json"},
                             data = null
                           }) => {

  const request = () => {
    if (headers.authorization) {
      headers.authorization = config.tokenStorage.getAccessToken();
    }

    if (headers.logout) {
      data = {token: config.tokenStorage.getRefreshToken()}
    }

    if (data) {
      headers["Content-Type"] = "application/json";
    }

    return fetch(config.apiUrl + url, {
      method: method,
      headers: headers,
      body: data ? JSON.stringify(data) : null
    })
  }

  let response = await request();

  if (response.status === 401 || response.status === 403) {
    const refresh = await tryRefreshToken();
    if (refresh) {
      response = await request();
    }
  }

  return await checkResponse(response);
}

const codes = new Set([400, 403])

const checkResponse = async (response) => {
  if (response.ok) {
    const json = await response.json();

    helpers.setTokensIfExist(json)

    helpers.clearTokensIfLogout(response);

    return json;
  }

  if (codes.has(response.status)) {
    const json = await response.json();
    const message = `error while sending request: ${response.status} ${json.message}`
    config.errorHandler(message);
    throw new Error(message)
  }

  const message = `error while sending request: ${response.status}`
  config.errorHandler(message);
  throw new Error(message)
}

const tryRefreshToken = async () => {
  const refreshToken = config.tokenStorage.getRefreshToken();
  if (!refreshToken) {
    return false;
  }
  try {
    const response = await fetch(config.apiUrl + '/api/auth/token', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({token: refreshToken})
    })

    const result = await checkResponse(response);

    return result.success;

  } catch (e) {
    return false;
  }
}

export default sendRequest;
