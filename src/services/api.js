export default class Api {
  constructor(url) {
    this._url = url;
  }

  async getIngredients() {
    const response = await fetch(`${this._url}/ingredients`);

    return await this._checkResponse(response);
  }

  async createOrder(ingredients) {
    const response = await fetch(`${this._url}/orders`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({"ingredients": ingredients})
    })

    return await this._checkResponse(response);
  }

  async _checkResponse(response) {
    if (response.ok) {
      return await response.json();
    }

    if (response.status === 400) {
      const json = await response.json();
      throw new Error(`error while sending request: ${response.status} ${json.message}`)
    }

    throw new Error(`error while sending request: ${response.status}`)
  }
}
