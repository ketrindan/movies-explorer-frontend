import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../images/logo.svg'
import Navigation from '../Navigation/Navigation';

import './Header.css';

function Header(props) {
  return (
    <header className={`header ${props.isAbsolute ? "header_absolute" : ""}`}>
      <Link to="/">
        <img src={logo} className="header__logo" alt="Логотип" />
      </Link>
      <Navigation isLoggedIn={props.isLoggedIn} />
    </header>
  )
}

export default Header;