import tokenStorage, {ITokenStorage} from "./storage/token-storage";

const API_URL = "https://norma.nomoreparties.space";
const WS_PUBLIC_URL = "wss://norma.nomoreparties.space/orders/all";
const WS_PRIVATE_URL = "wss://norma.nomoreparties.space/orders"

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
  apiUrl: API_URL,
  wsPublicUrl: WS_PUBLIC_URL,
  wsPrivateUrl: WS_PRIVATE_URL,
  errorHandler: errorHandler,
  tokenStorage: tokenStorage,
}

export default config;
