import React from 'react';
import { useEffect, useState } from 'react';

import MoviesCard from '../MoviesCard/MoviesCard';
import MoreMovies from '../MoreMovies/MoreMovies';
import useScreenWidth from '../../hooks/useScreenWidth';

import './MoviesCardList.css';

function MoviesCardList(props) {
  const screenWidth = useScreenWidth();

  const screenFormatChange = 526;
  const desktopMovieListLength = 7;
  const mobileMovieListLength = 5;

  const [shownMovies, setShownMovies] = useState([]);
  const moviesCounter = props.movies ? props.movies.length : 0;

  function checkIsMovieSaved(movie) {
    return(props.savedMovies.some((savedMovie) => savedMovie.movieId === (movie.movieId || movie.id)));
  }

  useEffect(() => {
    if (screenWidth > screenFormatChange) {
      setShownMovies(props.movies.slice(0, desktopMovieListLength))
    } else {
      setShownMovies(props.movies.slice(0, mobileMovieListLength))
    }
  }, [screenWidth, props.movies])

  function handleMoreMoviesClick() {
    if (screenWidth > screenFormatChange) {
      setShownMovies(props.movies.slice(0, shownMovies.length + desktopMovieListLength))
    } else {
      setShownMovies(props.movies.slice(0, shownMovies.length + mobileMovieListLength))
    }
  }

  return (
    <>
      <section className="movies-list">
        <>
          {shownMovies.map((movie) => (
            <MoviesCard key={props.isSavedMovies ? movie.movieId : movie.id} movie={movie} isSavedMovies={props.isSavedMovies} 
              onDeleteMovie={props.onDeleteMovie} onSaveMovie={props.onSaveMovie} isSaved={checkIsMovieSaved(movie)}
            />
          ))}
        </>
      </section>
      {!props.isSavedMovies && shownMovies.length !== moviesCounter && <MoreMovies onClick={handleMoreMoviesClick}/>}
    </>
  )
}

export default MoviesCardList;