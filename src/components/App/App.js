import React, { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import './App.css';

import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import NotFoundPage from '../NotFoundPage/NotFoundPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div className="body">
      <div className="page">
      <Switch>
        <Route exact path="/">
          <Main isLoggedIn={isLoggedIn} />
        </Route> 
        <Route path="/movies">
          <Movies isLoggedIn={isLoggedIn} />
        </Route> 
        <Route path="/saved-movies">
          <SavedMovies isLoggedIn={isLoggedIn} />
        </Route> 
        <Route path="/profile">
          <Profile 
            isLoggedIn={isLoggedIn} 
            name={"Катя"}
          />
        </Route> 
        <Route path="/signup">
          <Register />
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
