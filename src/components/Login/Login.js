import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../images/logo.svg'
import './Login.css';

function Login() {
  return (
    <section className="login">
      <div className="login__header">
        <Link to="/">
          <img src={logo} className="login__logo" alt="Логотип" />
        </Link>
        <h1 className="login__title">Рады видеть!</h1>
      </div>
      <form className="login__form">
        <label className="login__label" htmlFor="email">E-mail</label>
        <input type="email" className="login__input" 
          id="email" name="email" required placeholder="qwerty@yandex.ru" value={"katya@yandex.ru"}
        />
        <span className="login__error"></span>
        <label className="login__label" htmlFor="password">Имя</label>
        <input type="password" className="login__input" 
          id="password" name="password" required placeholder="Введите пароль" minLength="6" value={"123456"}
        />
        <span className="login__error"></span>
        <button className="login__btn" type="submit">Войти</button>
      </form>
      <div className="login__container">
      <p className="login__caption">Еще не зарегистрированы? 
        <Link to="/signup" className="login__signin-link">Регистрация</Link> 
      </p>
      </div>
    </section>
  )
}

export default Login;