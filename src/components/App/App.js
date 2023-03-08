import React, { useState } from 'react';

import './App.css';

import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="body">
      <div className="page">
       <Promo isLoggedIn={isLoggedIn} />
       <AboutProject />
       <Techs />
       <AboutMe />
       <Portfolio />
       <Footer />
      </div>
    </div>
  );
}

export default App;
