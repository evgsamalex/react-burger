import tokenStorage from "./storage/token-storage";

const apiUrl = "https://norma.nomoreparties.space";
const wsPublicUrl = "wss://norma.nomoreparties.space/orders/all";
const wsPrivateUrl = "wss://norma.nomoreparties.space/orders"

const errorHandler = (error) => {
  console.error(error);
}

const config = {
  apiUrl: apiUrl,
  wsPublicUrl: wsPublicUrl,
  wsPrivateUrl: wsPrivateUrl,
  errorHandler: errorHandler,
  tokenStorage: tokenStorage,
}

export default config;
