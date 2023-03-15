import React from 'react';

import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import './MoviesCardList.css';

function MoviesCardList(props) {
  return (
    <section className="movies-list">
      {props.isLoading ? <Preloader /> : (
        <>
          {props.movies.map((movie) => (
            <MoviesCard key={movie._id} movie={movie} isSavedMovies={props.isSavedMovies} />
          ))}
        </>
      )}
    </section>
  )
}

export default MoviesCardList;