import React, { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import './App.css';

import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFoundPage from '../NotFoundPage/NotFoundPage';

function App() {
  return (
    <div className="body">
      <div className="app">
      <Switch>
        <Route exact path="/">
          <Main isLoggedIn={false} />
        </Route> 
        <Route path="/movies">
          <Movies isLoggedIn={true} />
        </Route> 
        <Route path="/saved-movies">
          <SavedMovies isLoggedIn={true} />
        </Route> 
        <Route path="/profile">
          <Profile 
            isLoggedIn={true} 
            name={"Катя"}
          />
        </Route> 
        <Route path="/signup">
          <Register />
        </Route>
        <Route path="/signin">
          <Login />
        </Route>
        <Route path="*">
          <NotFoundPage />
        </Route> 
       </Switch>
      </div>
    </div>
  )
}

export default App;
