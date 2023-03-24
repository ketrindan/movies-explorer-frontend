import { mainConfig } from "./utils";

class User {
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

  register(name, email, password) {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({name, email, password})
    })
    .then(res => this._serverResponse(res))
  }

  authorize(email, password) {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({email, password})
    })
    .then(res => this._serverResponse(res))
  }

  checkToken(token) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        ...this._headers,
        "Authorization" : `Bearer ${token}`,
      },
      credentials: 'include',
    })
    .then(res => this._serverResponse(res))
  }

  changeUserData(data, token) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: {
        ...this._headers,
        'Authorization' : `Bearer ${token}`,
      },
      body: JSON.stringify({name: data.name, email: data.email})
    })
    .then(res => this._serverResponse(res))
  }

  getSavedMovies(token) {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'GET',
      headers: {
        ...this._headers,
        "Authorization" : `Bearer ${token}`,
      },
      credentials: 'include',
    })
    .then(res => this._serverResponse(res))
  }

  saveMovie(movieData, token) {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'POST',
      headers: {
        ...this._headers,
        'Authorization' : `Bearer ${token}`,
      },
      body: JSON.stringify({
        country: movieData.country,
        director: movieData.director,
        duration: movieData.duration,
        year: movieData.year,
        description: movieData.description,
        image: 'https://api.nomoreparties.co/' + movieData.image.url,
        trailerLink: movieData.trailerLink,
        thumbnail: 'https://api.nomoreparties.co/' + movieData.image.formats.thumbnail.url,
        movieId: movieData.id,
        nameRU: movieData.nameRU,
        nameEN: movieData.nameEN
      })
    })
    .then(res => this._serverResponse(res))
  }

  deleteMovie(movieId, token) {
    return fetch(`${this._baseUrl}/movies/${movieId}`,
      {method: 'DELETE',
      headers: {
        ...this._headers,
        'Authorization' : `Bearer ${token}`,
      },
    })
    .then(res => this._serverResponse(res))
  }
}

const user = new User(mainConfig);

export default user;