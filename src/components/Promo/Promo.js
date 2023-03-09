import React from 'react';

import Header from '../Header/Header';
import NavTab from '../NavTab/NavTab';

import './Promo.css';
 
function Promo(props) {
  return (
    <section className="promo">
      <Header 
        isLoggedIn={props.isLoggedIn} 
        isMain={true}
      />
      <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
      <NavTab />
    </section>
  )
}

export default Promo;