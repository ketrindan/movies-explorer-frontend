import React, { useState } from 'react';
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

function App() {
  const [currentUser, setCurrentUser] = useState({});

  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const [isInfoTooltipOpen, setInfoTooltipOpen] = useState(false);
  const [infoMessage, setInfoMessage] = useState('')
  const [isSuccessful, setIsSuccessful] = useState(false);

  const history = useHistory();

  function openInfoTooltip() {
    setInfoTooltipOpen(true);
  }

  function closeInfoTooltip() {
    setInfoTooltipOpen(false);
    setInfoMessage('');
  }

  return (
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
          /> 
          <ProtectedRoute path="/saved-movies"
            component={SavedMovies}
            isLoggedIn={isLoggedIn} 
          />
          <ProtectedRoute path="/profile"
            component={Profile} 
            isLoggedIn={isLoggedIn} 
            name={"Катя"}
          />
          <Route path="/signup">
            <Register />
          </Route>
          <Route path="/signin">
            <Login />
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
  )
}

export default App;
