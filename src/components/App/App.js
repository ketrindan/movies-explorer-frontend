import React, { useState } from 'react';

import './App.css';

import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="body">
      <div className="page">
       <Promo isLoggedIn={isLoggedIn} />
       <AboutProject />
      </div>
    </div>
  );
}

export default App;
