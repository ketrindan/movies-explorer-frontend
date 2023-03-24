import React, { useState, useEffect } from 'react';

import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';

import './SavedMovies.css';

function SavedMovies(props) {
  const [foundMovies, setFoundMovies] = useState([]);
  const [shortMoviesSelected, setShortMoviesSelected] = useState(false);
  const [searchRequest, setSearchRequest] = useState('');

  const shortMovieMaxDuration = 40;

  function searchShortMovies(movies) {
    return movies.filter((movie) =>
      movie.duration <= shortMovieMaxDuration
    )
  }

  function searchMovies(movies, searchRequest, areShortMoviesSelected) {
    let foundMovies = movies.filter((movie) =>
      movie.nameRU.toLowerCase().includes(searchRequest.toLowerCase())
    )

    if (areShortMoviesSelected) {
      return searchShortMovies(foundMovies);
    }else {
      return foundMovies;
    }
  }

  function handleSearchSubmit(searchRequest, shortMoviesSelected) {
    setShortMoviesSelected(shortMoviesSelected);
    setSearchRequest(searchRequest);
  }

  function handleCheckbox() {
    setShortMoviesSelected(!shortMoviesSelected);
    if (!shortMoviesSelected) {
      setFoundMovies(searchShortMovies(foundMovies));
    } else {
      setFoundMovies(foundMovies);
    }
  }

  useEffect(() => {
    const foundMovies = searchMovies(props.savedMovies, searchRequest, shortMoviesSelected);
    setFoundMovies(foundMovies)
  }, [props.savedMovies, searchRequest, shortMoviesSelected])

  return (
    <section className="movies">
      <Header 
        isLoggedIn={props.isLoggedIn}
      />
      <SearchForm 
         onSubmit={handleSearchSubmit}
         onCheckboxClick={handleCheckbox}
         shortMoviesSelected={shortMoviesSelected}
      />
      {props.isLoading ? <Preloader /> 
        : props.savedMovies.length === 0 ? (
          <section className="saved-movies__empty"></section>
        ) : foundMovies.length === 0 ? (
          <p className="saved-movies__message">Ничего не найдено</p>
        ) : (
          <>
            <MoviesCardList isSavedMovies={true} movies={foundMovies}
            onDeleteMovie={props.onDeleteMovie} savedMovies={props.savedMovies}
            />
          </>
        )
      }
      <Footer />
    </section>
  )
}

export default SavedMovies;