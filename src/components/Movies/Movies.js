import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import './Movies.css';

import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';

import movie from '../../utils/MoviesApi';

function Movies(props) {
  const [allMovies, setAllMovies] = useState([]);
  const [foundMovies, setFoundMovies] = useState([]);
  const [shortMoviesSelected, setShortMoviesSelected] = useState(false);
  const [searchRequest, setSearchRequest] = useState('');
  const [isError, setIsError] = useState(false);

  const location = useLocation();

  const shortMovieMaxDuration = 40;

  function getMovies() {
    props.setLoading(true)
    movie.getMovies()
    .then((movies) => {
      localStorage.setItem('allMovies', JSON.stringify(movies));
      setAllMovies(movies)
    })
    .catch((err) => {
      console.log(err);
      setIsError(true)
    })
    .finally(() => {
      props.setLoading(false);
    })
  }

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

  useEffect(() => {
    localStorage.setItem('searchRequest', searchRequest);
    localStorage.setItem('shortMoviesSelected', shortMoviesSelected);
    localStorage.setItem('foundMovies', JSON.stringify(foundMovies));
    setFoundMovies(foundMovies)
  }, [searchRequest, shortMoviesSelected, foundMovies]);

  useEffect(() => {
    const foundMovies = searchMovies(allMovies, searchRequest, shortMoviesSelected);
    setFoundMovies(foundMovies)
  }, [allMovies, searchRequest, shortMoviesSelected])
  
  function handleSearchSubmit(searchRequest, shortMoviesSelected) {
    setShortMoviesSelected(shortMoviesSelected);
    setSearchRequest(searchRequest);
    getMovies();
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
    if (localStorage.getItem('shortMoviesSelected') === true) {
      setShortMoviesSelected(true)
      console.log(shortMoviesSelected)
    }
  }, [location, shortMoviesSelected])

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
        : isError ? (
          <p className="movies__message">Во время запроса произошла ошибка. 
            Возможно, проблема с соединением или сервер недоступен. 
            Подождите немного и попробуйте ещё раз
          </p>
        )
        : allMovies.length === 0 ? (
          <section className="movies__empty"></section>
        )
        : foundMovies.length === 0 ? (
          <p className="movies__message">Ничего не найдено</p>
        ) : (
          <>
            <MoviesCardList isSavedMovies={false} movies={foundMovies}
            onSaveMovie={props.onSaveMovie} savedMovies={props.savedMovies}
            />
          </>
        )
      }
      <Footer />
    </section>
  )
}

export default Movies;