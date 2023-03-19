import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Profile.css';
import useForm from "../../hooks/useForm";
import Header from '../Header/Header';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Profile(props) {
  const { values, errors, isValid, onChange } = useForm({
    name: "Катя",
    email: "katya@yandex.ru",
  });

  return (
    <section className="profile">
      <Header 
        isLoggedIn={props.isLoggedIn} 
        isAbsolute={true}
      />
      <div className="profile__container">
        <h1 className="profile__title">Привет, {values.name}!</h1>
        <form className="profile__form">
          <div className="profile__input-box">
            <label className="profile__label">Имя</label>
            <input className="profile__input" type="text" placeholder="Иван" id="name" name="name"
            value={values.name} onChange={onChange} minLength="2" required/>
          </div>
          <span className={"profile__error " + (errors.name ? "profile__error_active" : "")}>{errors.name}</span>
          <div className="profile__input-box">
            <label className="profile__label">E-mail</label>
            <input className="profile__input" type="email" placeholder="qwerty@yandex.ru" id="email" name="email"
            value={values.email} onChange={onChange} required/>
          </div>
          <span className={"profile__error " + (errors.email ? "profile__error_active" : "")}>{errors.email}</span>
          <div className="profile__links">
          <button className={"profile__btn profile__btn_edit " + (isValid ? "profile__btn_active" : "" )} type="submit">Редактировать</button>
          <Link to='/signin'>
            <button className="profile__btn profile__btn_signout">Выйти из аккаунта</button>
          </Link>
        </div>
        </form>
      </div>
    </section>
  )
}

export default Profile;