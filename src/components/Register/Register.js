import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../images/logo.svg';
import useForm from "../../hooks/useForm";
import './Register.css';

function Register(props) {
  const { values, errors, isValid, onChange } = useForm({
    name: "",
    email: "",
    password: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    props.onSubmit(values);
  }

  return (
    <section className="register">
      <div className="register__header">
        <Link to="/">
          <img src={logo} className="register__logo" alt="Логотип" />
        </Link>
        <h1 className="register__title">Добро пожаловать!</h1>
      </div>
      <form className="register__form" noValidate onSubmit={handleSubmit}>
        <label className="register__label" htmlFor="name">Имя</label>
        <input type="text" className={"register__input " + (errors.name ? "register__input_error" : "")}  
          id="name" name="name" required minLength="2" placeholder="Иван" 
          value={values.name} onChange={onChange}
        />
        <span className={"register__error " + (errors.name ? "register__error_active" : "")}>{errors.name}</span>
        <label className="register__label" htmlFor="email">E-mail</label>
        <input type="email" className={"register__input " + (errors.email ? "register__input_error" : "")}  
          id="email" name="email" required placeholder="qwerty@yandex.ru" 
          value={values.email} onChange={onChange}
        />
        <span className={"register__error " + (errors.email ? "register__error_active" : "")}>{errors.email}</span>
        <label className="register__label" htmlFor="password">Пароль</label>
        <input type="password" className={"register__input " + (errors.password ? "register__input_error" : "")} 
          id="password" name="password" placeholder="Введите пароль" required minLength="6" 
          value={values.password} onChange={onChange}
        />
        <span className={"register__error " + (errors.password ? "register__error_active" : "")}>{errors.password}</span>
        <button type="submit" className={"register__btn " + (isValid ? "" : "register__btn_inactive" )} disabled={!isValid}>Зарегистрироваться</button>
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