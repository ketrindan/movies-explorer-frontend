import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import './Movies.css';

import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';

import movie from '../../utils/MoviesApi';
import { SHORTMOVIEDURATION } from "../../utils/utils";

function Movies(props) {
  const [allMovies, setAllMovies] = useState([]);
  const [foundMovies, setFoundMovies] = useState([]);
  const [shortMoviesSelected, setShortMoviesSelected] = useState(false);
  const [searchRequest, setSearchRequest] = useState('');
  const [isError, setIsError] = useState(false);

  const location = useLocation();

  function searchShortMovies(movies) {
    return movies.filter((movie) =>
      movie.duration <= SHORTMOVIEDURATION
    )
  }

  function searchMovies(movies, searchRequest, areShortMoviesSelected) {
    let foundMovies = movies.filter((movie) =>
      movie.nameRU.toLowerCase().includes(searchRequest.toLowerCase())
    )

    if (areShortMoviesSelected) {
      return searchShortMovies(foundMovies);
    } else {
      return foundMovies;
    }
  } 

  function renderMovies(movies, searchRequest, shortMoviesSelected) {
    const foundMovies = searchMovies(movies, searchRequest, shortMoviesSelected);
    localStorage.setItem('foundMovies', JSON.stringify(foundMovies));
    setFoundMovies(foundMovies);
  }
  
  function handleSearchSubmit(searchRequest, shortMoviesSelected) {
    localStorage.setItem('searchRequest', searchRequest);
    localStorage.setItem('shortMoviesSelected', shortMoviesSelected);

    setShortMoviesSelected(shortMoviesSelected);
    setSearchRequest(searchRequest);

    if (allMovies.length === 0) {
      props.setLoading(true)
      movie.getMovies()
      .then((movies) => {
        localStorage.setItem('allMovies', JSON.stringify(movies));
        setAllMovies(movies)
        renderMovies(movies, searchRequest, shortMoviesSelected)
      })
      .catch((err) => {
        console.log(err);
        setIsError(true)
      })
      .finally(() => {
        props.setLoading(false);
      })
    } else {
      renderMovies(allMovies, searchRequest, shortMoviesSelected)
    }
  }

  function handleCheckbox() {
    setShortMoviesSelected(!shortMoviesSelected);
    if (!shortMoviesSelected) {
      setFoundMovies(searchShortMovies(foundMovies));
    } else {
      setFoundMovies(foundMovies);
    }
    localStorage.setItem('shortMoviesSelected', !shortMoviesSelected);
  }
 
  useEffect(() => {
    if (localStorage.getItem('shortMoviesSelected') === 'true') {
      setShortMoviesSelected(true);
    } else {
      setShortMoviesSelected(false);
    }
  }, [location]);

  useEffect(() => {
    const foundMovies = searchMovies(allMovies, searchRequest, shortMoviesSelected);
    setFoundMovies(foundMovies)

    if (localStorage.getItem('foundMovies')) {
      const renderedMovies = JSON.parse(localStorage.getItem('foundMovies'));
      setFoundMovies(renderedMovies);
      if (
        localStorage.getItem('shortMoviesSelected') === 'true'
      ) {
        setFoundMovies(searchShortMovies(renderedMovies));
      } else {
        setFoundMovies(renderedMovies);
      }
    }
  }, [location, allMovies, searchRequest, shortMoviesSelected]);

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
        : allMovies.length === 0 && foundMovies.length === 0 ? (
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