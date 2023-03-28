import React from 'react';
import { useEffect, useState } from 'react';

import MoviesCard from '../MoviesCard/MoviesCard';
import MoreMovies from '../MoreMovies/MoreMovies';
import useScreenWidth from '../../hooks/useScreenWidth';

import {SCREENFORMATCHANGE, DESKTOPMOVIELISTLENGTH, MOBILEMOVIELISTLENGTH } from '../../utils/utils';

import './MoviesCardList.css';

function MoviesCardList(props) {
  const [shownMovies, setShownMovies] = useState([]);

  const screenWidth = useScreenWidth();

  const moviesCounter = props.movies ? props.movies.length : 0;

  function checkIsMovieSaved(movie) {
    return(props.savedMovies.some((savedMovie) => savedMovie.movieId === (movie.movieId || movie.id)));
  }

  useEffect(() => {
    if(!props.isSavedMovies) {
      if (screenWidth > SCREENFORMATCHANGE) {
        setShownMovies(props.movies.slice(0, DESKTOPMOVIELISTLENGTH))
      } else {
        setShownMovies(props.movies.slice(0, MOBILEMOVIELISTLENGTH))
      }
    } else {
      setShownMovies(props.movies)
    }
  }, [screenWidth, props.movies, props.isSavedMovies])

  function handleMoreMoviesClick() {
    if (screenWidth > SCREENFORMATCHANGE) {
      setShownMovies(props.movies.slice(0, shownMovies.length + DESKTOPMOVIELISTLENGTH))
    } else {
      setShownMovies(props.movies.slice(0, shownMovies.length + MOBILEMOVIELISTLENGTH))
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