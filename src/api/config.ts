import tokenStorage, {ITokenStorage} from "./storage/token-storage";

const apiUrl = "https://norma.nomoreparties.space";
const wsPublicUrl = "wss://norma.nomoreparties.space/orders/all";
const wsPrivateUrl = "wss://norma.nomoreparties.space/orders"

const errorHandler = (error: string) => {
  console.error(error);
}

export type TConfig = {
  apiUrl: string,
  wsPublicUrl: string,
  wsPrivateUrl: string,
  errorHandler: (error: string) => void,
  tokenStorage: ITokenStorage
}

const config: TConfig = {
  apiUrl: apiUrl,
  wsPublicUrl: wsPublicUrl,
  wsPrivateUrl: wsPrivateUrl,
  errorHandler: errorHandler,
  tokenStorage: tokenStorage,
}

export default config;
