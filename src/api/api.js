export default class Api {
  constructor(url) {
    this._url = url;
  }

  async getIngredients() {
    const response = await fetch(`${this._url}/ingredients`);

    return await this._checkResponse(response);
  }

  async _checkResponse(response) {
    if (!response.ok) {
      throw new Error(`error while sending request: ${response.status}`)
    }

    return await response.json();
  }
}
