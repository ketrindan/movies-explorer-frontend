import React, { useState } from 'react';

import './App.css';

import Header from '../Header/Header';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div className="body">
      <div className="page">
       <Header isLoggedIn={isLoggedIn} />
      </div>
    </div>
  );
}

export default App;
