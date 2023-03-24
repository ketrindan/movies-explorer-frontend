import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect, useHistory  } from 'react-router-dom';

import './App.css';

import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import InfoTooltip from '../InfoTooltip/InfoTooltip';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import user from '../../utils/MainApi';

function App() {
  const [currentUser, setCurrentUser] = useState({});

  const [isLoggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [savedMovies, setSavedMovies] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const [isInfoTooltipOpen, setInfoTooltipOpen] = useState(false);
  const [infoMessage, setInfoMessage] = useState('');
  const [isSuccessful, setIsSuccessful] = useState(false);

  const history = useHistory();

  function openInfoTooltip() {
    setInfoTooltipOpen(true);
  }

  function closeInfoTooltip() {
    setInfoTooltipOpen(false);
    setInfoMessage('');
  }

  function onRegistration(data) {
    user.register(data.name, data.email, data.password)
    .then((res) => {
      setIsSuccessful(true);
      setInfoMessage('Вы успешно зарегистрировались!')
      openInfoTooltip();
      history.push('/signin');
    })
    .catch((err) => {
      console.log(err);
      setIsSuccessful(false);
      setInfoMessage('При регистрации произошла ошибка');
      openInfoTooltip();
    })
  }

  function onLogin(data) {
    user.authorize(data.email, data.password)
    .then((data) => {
      localStorage.setItem('token', data.token);
      history.push('/movies');
      handleTokenCheck();
    })
    .catch((err) => {
      console.log(err);
      setIsSuccessful(false);
      setInfoMessage('Произошла ошибка') 
      openInfoTooltip();
    })
  }

  function handleTokenCheck() {
    const token = localStorage.getItem('token');
    if (token) {
      Promise.all([user.checkToken(token), user.getSavedMovies(token)])
      .then(([userInfo, savedMoviesInfo]) => {
        setCurrentUser(userInfo);
        setLoggedIn(true);
        setUserName(userInfo.name);
        localStorage.setItem('savedMovies', JSON.stringify(savedMoviesInfo));
        setSavedMovies(savedMoviesInfo);
        history.push('/movies');
      })
      .catch((err) => {
        console.log(err);
      })
    } 
  }

  function handleUpdateUser(newInfo) {
    const token = localStorage.getItem('token');

    user.changeUserData(newInfo, token)
    .then((newUserData) => {
      setCurrentUser(newUserData);
      setIsSuccessful(true);
      setInfoMessage('Данные успешно обновлены!')
      openInfoTooltip();
    })
    .catch((err) => {
      console.log(err);
      setIsSuccessful(false);
      setInfoMessage('Ошибка при обновлении данных')
      openInfoTooltip();
    })
  } 

  function handleChangeMovieStatus(movie) {
    const isSaved = savedMovies.some(i => i.movieId === movie.id);
    const token = localStorage.getItem('token');
    const selectedMovie = savedMovies.find(i => {
      return i.movieId === movie.id
    });

    const id = isSaved ? selectedMovie._id : null;

    if (isSaved) {
      user.deleteMovie(id, token)
      .then((movie) => {
        const updatedMovies = savedMovies.filter(i => movie._id !== i._id)
        localStorage.setItem('savedMovies', JSON.stringify(updatedMovies));
        setSavedMovies(updatedMovies);
      })
      .catch((err) => {
        console.log(err);
        setIsSuccessful(false);
        setInfoMessage('Ошибка при удалении фильма')
        openInfoTooltip();
      })
    } else {
      user.saveMovie(movie, token)
      .then((newMovie) => {
        setSavedMovies((movies) => [...movies, newMovie])
      })
      .catch((err) => {
        console.log(err);
        setIsSuccessful(false);
        setInfoMessage('Ошибка при сохранении фильма')
        openInfoTooltip();
      })
    }
  }

  function handleDeleteMovie(movie) {
    const token = localStorage.getItem('token');

    user.deleteMovie(movie._id, token)
    .then((movie) => {
      const updatedMovies = savedMovies.filter(i => movie._id !== i._id)
      localStorage.setItem('savedMovies', JSON.stringify(updatedMovies));
      setSavedMovies(updatedMovies);
    })
    .catch((err) => {
      console.log(err);
      setIsSuccessful(false);
      setInfoMessage('Ошибка при удалении фильма')
      openInfoTooltip();
    })
  }

  function handleSignOut() {
    setLoggedIn(false);
    setCurrentUser({});
    setSavedMovies([]);
    localStorage.clear();
    history.push('/');
  }

  useEffect(() => {
    handleTokenCheck()
  }, [isLoggedIn])

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="body">
        <div className="app">
          <InfoTooltip 
            isOpen={isInfoTooltipOpen}
            onClose={closeInfoTooltip}
            isSuccessful={isSuccessful}
            message={infoMessage}
          />

          <Switch>
            <Route exact path="/">
              <Main isLoggedIn={isLoggedIn} />
            </Route> 
            <ProtectedRoute path="/movies"
              component={Movies}
              isLoggedIn={isLoggedIn} 
              isLoading={isLoading}
              setLoading={setLoading}
              onSaveMovie={handleChangeMovieStatus}
              onDeleteMovie={handleDeleteMovie}
              savedMovies={savedMovies}
            /> 
            <ProtectedRoute path="/saved-movies"
              component={SavedMovies}
              isLoggedIn={isLoggedIn} 
              onDeleteMovie={handleDeleteMovie}
              savedMovies={savedMovies}
              isLoading={isLoading}
            />
            <ProtectedRoute path="/profile"
              component={Profile} 
              isLoggedIn={isLoggedIn} 
              name={userName}
              onUpdateUser={handleUpdateUser}
              onSignOut={handleSignOut}
            />
            <Route path="/signup">
              <Register onSubmit={onRegistration}/>
            </Route>
            <Route path="/signin">
              <Login onSubmit={onLogin}/>
            </Route>
            <Route path="*">
              <NotFoundPage />
            </Route> 
            <Route>
              {isLoggedIn ? <Redirect to="/" /> : <Redirect to="/signin" />}
            </Route>
          </Switch>
        </div>
      </div>
    </CurrentUserContext.Provider>
  )
}

export default App;
