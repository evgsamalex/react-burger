export enum RequestMethod {
  Get = 'get',
  Post = 'post',
  Patch = 'PATCH'
}

export type TRequest = {
  url: string,
  method: RequestMethod,
  headers: Headers,
  data: any | null | { [key: string]: string }
}

export enum HeadersKeys {
  Authorization = "authorization",
  Logout = 'logout'
}

export type TResponseBody<TDataKey extends string = '', TDataType = {}> = {
  [key in TDataKey]: TDataType
} & {
  success: boolean;
  message?: string;
  headers?: Headers;
  accessToken?: string,
  refreshToken?: string
};

export interface CustomBody<T extends any> extends Body {
  json(): Promise<T>;
}

export interface CustomResponse<T> extends CustomBody<T> {
  readonly headers: Headers;
  readonly ok: boolean;
  readonly redirected: boolean;
  readonly status: number;
  readonly statusText: string;
  readonly type: ResponseType;
  readonly url: string;

  clone(): Response;
}
