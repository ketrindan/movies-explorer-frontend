export const moviesConfig = {
  baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
  headers: {
    'Content-Type': 'application/json',
  }
}


export const mainConfig = {
  baseUrl: 'http://localhost:3000',
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

export const SHORTMOVIEDURATION = 40;

export const SCREENFORMATCHANGE = 526;
export const DESKTOPMOVIELISTLENGTH = 7;
export const MOBILEMOVIELISTLENGTH = 5;
