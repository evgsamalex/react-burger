import tokenStorage from "./storage/token-storage";

const apiUrl = "https://norma.nomoreparties.space";

const errorHandler = (error) => {
  console.error(error);
}

const config = {
  apiUrl: apiUrl,
  errorHandler: errorHandler,
  tokenStorage: tokenStorage,
}

export default config;
