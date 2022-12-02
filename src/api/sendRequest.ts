import config from "./config";
import {CustomResponse, HeadersKeys, RequestMethod, TRequest, TResponseBody} from "./types";

export const defaultHeaders = () => new Headers({'Content-Type': 'application/json'});

export const authHeaders = () => {
  const headers = defaultHeaders();
  headers.set(HeadersKeys.Authorization, 'true');
  return headers;
}

const sendRequest = async <TDataKey extends string = '', TDataType = {}>({
                                                                           url = '/',
                                                                           method = RequestMethod.Get,
                                                                           headers = defaultHeaders(),
                                                                           data = null
                                                                         }: TRequest): Promise<TResponseBody<TDataKey, TDataType>> => {

  const request = async (): Promise<CustomResponse<TResponseBody<TDataKey, TDataType>>> => {
    console.log(url);
    console.log(headers);
    if (headers.has(HeadersKeys.Authorization)) {
      headers.set(HeadersKeys.Authorization, config.tokenStorage.getAccessToken());
    }

    if (headers.has(HeadersKeys.Logout)) {
      data = {token: config.tokenStorage.getRefreshToken()}
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

  return checkResponse(response);
}

const codes = new Set([400, 403, 401])

const checkResponse = async <TDataKey extends string = '', TDataType = {}>(response: CustomResponse<TResponseBody<TDataKey, TDataType>>): Promise<TResponseBody<TDataKey, TDataType>> => {
  if (response.ok) {
    const json = await response.json();

    if (json.accessToken) {
      config.tokenStorage.setAccessToken(json.accessToken);
    }

    if (json.refreshToken) {
      config.tokenStorage.setRefreshToken(json.refreshToken);
    }

    if (response.url.includes('/logout')) {
      config.tokenStorage.clear();
    }

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


const tryRefreshToken = async (): Promise<boolean> => {
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
