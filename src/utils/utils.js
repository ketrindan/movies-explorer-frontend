export const moviesConfig = {
  baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
  headers: {
    'Content-Type': 'application/json',
  }
}


export const mainConfig = {
  baseUrl: 'https://api.movies.ketrindan.nomoredomains.work',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }
}  

export default function convertDuration(duration) {
  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;
  if (hours === 0) {
    return `${minutes}м`;
  } else {
    return `${hours}ч ${minutes}м`;
  }
};