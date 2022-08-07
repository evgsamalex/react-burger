export default class Api {
  constructor(url) {
    this._url = url;
  }

  async GetIngredients() {
    const response = await fetch(`${this._url}/ingredients`);
    
    if (!response.ok) {
      throw new Error(`error while sending request: ${response.status}`)
    }

    return await response.json();
  }
}
