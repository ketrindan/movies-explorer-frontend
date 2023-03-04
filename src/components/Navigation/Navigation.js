import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

import './Navigation.css';

function Navigation(props) {
  const [isMenuOpen, setMenuOpen] = useState(false);

  function handleBurgerClick() {
    setMenuOpen((state) => !state);
  }

  return (
    <nav className="navigation">
      {props.isLoggedIn ? (
          <>
          <div className='navigation__movies'>
            <NavLink to='/movies' className={({isActive}) => `${isActive ? "navigation__link navigation__link_movies navigation__link_active" : "navigation__link navigation__link_movies"}`}>
              Фильмы
            </NavLink>
            <NavLink to='/saved-movies' className={({isActive}) => `${isActive ? "navigation__link navigation__link_movies navigation__link_active" : "navigation__link navigation__link_movies"}`}>
              Сохранённые фильмы
            </NavLink>
          </div>
          <Link to='/profile'>
            <button className='navigation__button navigation__button_profile'>
              Аккаунт
            </button>
          </Link>

          <div className={`navigation__burger-btn ${isMenuOpen ? "navigation__burger-btn_transformed" : ""}`} onClick={handleBurgerClick}>
            <span className="navigation__burger-layer"></span>
            <span className="navigation__burger-layer"></span>
            <span className="navigation__burger-layer"></span>
          </div>
          
          <div className={`navigation__background ${isMenuOpen ? "navigation__background_opened" : ""}`}>
            <div className={`navigation__menu ${isMenuOpen ? "navigation__menu_opened" : ""}`}>
              <div className='navigation__movies_menu'>
              <NavLink to='/' className={({isActive}) => `${isActive ? "navigation__link navigation__link_menu navigation__link_active" : "navigation__link navigation__link_menu"}`}>
                  Главная
                </NavLink>
                <NavLink to='/movies' className={({isActive}) => `${isActive ? "navigation__link navigation__link_menu navigation__link_active" : "navigation__link navigation__link_menu"}`}>
                  Фильмы
                </NavLink>
                <NavLink to='/saved-movies' className={({isActive}) => `${isActive ? "navigation__link navigation__link_menu navigation__link_active" : "navigation__link navigation__link_menu"}`}>
                  Сохранённые фильмы
                </NavLink>
              </div>
              <Link to='/profile'>
                <button className='navigation__button navigation__button_profile'>
                  Аккаунт
                </button>
              </Link>
            </div>
          </div>
        </>
      ) : (
        <div className='navigation__auth'>
          <Link to='/signup' className='navigation__link'>Регистрация</Link>
          <Link to='/signin'>
            <button className='navigation__button'>
              Войти
            </button>
          </Link>
        </div>
      )
    }
    

    </nav> 
  )
}

export default Navigation;