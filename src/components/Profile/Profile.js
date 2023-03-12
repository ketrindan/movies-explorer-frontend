import React, { useState } from 'react';

import './Profile.css';
import Header from '../Header/Header';

function Profile(props) {
  const [name, setName] = useState('Катя');
  const [email, setEmail] = useState('katya@yandex.ru');

  function handleChangeName(e) {
    setName(e.target.value)
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value)
  }

  return (
    <section className="profile">
      <Header 
        isLoggedIn={props.isLoggedIn} 
        isAbsolute={true}
      />
      <div className="profile__container">
        <h1 className="profile__title">Привет, {props.name}!</h1>
        <form className="profile__form">
          <div className="profile__input-box">
            <label className="profile__label">Имя</label>
            <input className="profile__input" type="text" value={name} onChange={handleChangeName} minLength="2" required/>
          </div>
          <div className="profile__input-box">
            <label className="profile__label">E-mail</label>
            <input className="profile__input" type="email" value={email} onChange={handleChangeEmail} required/>
          </div>
        </form>
        <div className="profile__links">
          <button className="profile__btn profile__btn_edit">Редактировать</button>
          <button className="profile__btn profile__btn_signout">Выйти из аккаунта</button>
        </div>
      </div>
    </section>
  )
}

export default Profile;