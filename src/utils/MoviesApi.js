import { moviesConfig } from "./utils";

class Movie {
  constructor (config) {
    this._baseUrl = config.baseUrl;
    this._headers = config.headers;
  }

  _serverResponse(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(new Error(`Ошибка: ${res.status}`))
  }

  getMovies() {
    return fetch(this._baseUrl)
    .then(res => this._serverResponse(res));
  }
}

const movie = new Movie(moviesConfig);

export default movie;