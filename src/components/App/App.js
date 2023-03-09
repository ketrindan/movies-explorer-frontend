import React, { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import './App.css';

import Main from '../Main/Main';
import Movies from '../Movies/Movies';

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
       </Switch>
      </div>
    </div>
  )
}

export default App;
