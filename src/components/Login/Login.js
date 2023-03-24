import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../images/logo.svg';
import useForm from "../../hooks/useForm";
import './Login.css';

function Login(props) {
  const { values, errors, isValid, onChange } = useForm({
    email: "",
    password: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    props.onSubmit(values);
  }

  return (
    <section className="login">
      <div className="login__header">
        <Link to="/">
          <img src={logo} className="login__logo" alt="Логотип" />
        </Link>
        <h1 className="login__title">Рады видеть!</h1>
      </div>
      <form className="login__form" onSubmit={handleSubmit}>
        <label className="login__label" htmlFor="email">E-mail</label>
        <input type="email" className={"login__input " + (errors.email ? "login__input_error" : "")}
          id="email" name="email" required placeholder="qwerty@yandex.ru"
          value={values.email} onChange={onChange}
        />
        <span className={"login__error " + (errors.email ? "login__error_active" : "")}>{errors.email}</span>
        <label className="login__label" htmlFor="password">Пароль</label>
        <input type="password" className={"login__input " + (errors.password ? "login__input_error" : "")}
          id="password" name="password" required placeholder="Введите пароль" minLength="6"
          value={values.password} onChange={onChange}
        />
        <span className={"login__error " + (errors.password ? "login_error_active" : "")}>{errors.password}</span>
        <button className={"login__btn " + (isValid ? "" : "login__btn_inactive" )} type="submit" disabled={!isValid}>Войти</button>
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