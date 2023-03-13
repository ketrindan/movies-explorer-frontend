import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../images/logo.svg'
import './Register.css';

function Register() {
  return (
    <section className="register">
      <div className="register__header">
        <Link to="/">
          <img src={logo} className="register__logo" alt="Логотип" />
        </Link>
        <h1 className="register__title">Добро пожаловать!</h1>
      </div>
      <form className="register__form">
        <label className="register__label" htmlFor="name">Имя</label>
        <input type="text" className="register__input" 
          id="name" name="name" required minLength="2" placeholder="Иван" value={"Катя"}
        />
        <span className="register__error"></span>
        <label className="register__label" htmlFor="email">E-mail</label>
        <input type="email" className="register__input" 
          id="email" name="email" required placeholder="qwerty@yandex.ru" value={"katya@yandex.ru"}
        />
        <span className="register__error"></span>
        <label className="register__label" htmlFor="password">Имя</label>
        <input type="password" className="register__input register__input_error" 
          id="password" name="password" placeholder="Введите пароль" required minLength="6" value={"123456"}
        />
        <span className="register__error register__error_active">Что-то пошло не так...</span>
        <button className="register__btn" type="submit">Зарегистрироваться</button>
      </form>
      <div className="register__container">
      <p className="register__caption">Уже зарегистрированы? 
        <Link to="/signin" className="register__signin-link">Войти</Link> 
      </p>
      </div>
    </section>
  )
}

export default Register;