import React, { useEffect, useContext } from 'react';

import './Profile.css';
import useForm from "../../hooks/useForm";
import Header from '../Header/Header';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Profile(props) {
  const currentUser = useContext(CurrentUserContext);
  const { values, errors, isValid, onChange, resetForm } = useForm({
    name: "",
    email: ""
  });

  const isNewData = (values.name !== currentUser.name || values.email !== currentUser.email)

  function handleSubmit(e) {
		e.preventDefault();

		props.onUpdateUser({name: values.name, email: values.email});
	}

  useEffect(() => {
    resetForm({ name: currentUser.name, email: currentUser.email });
  }, [currentUser, resetForm]); 

  return (
    <section className="profile">
      <Header 
        isLoggedIn={props.isLoggedIn} 
        isAbsolute={true}
      />
      <div className="profile__container">
        <h1 className="profile__title">Привет, {currentUser.name}!</h1>
        <form className="profile__form" noValidate onSubmit={handleSubmit}>
          <div className="profile__input-box">
            <label className="profile__label">Имя</label>
            <input className="profile__input" type="text" placeholder="Иван" id="name" name="name"
            value={values.name} onChange={onChange} minLength="2" required/>
          </div>
          <span className={"profile__error " + (errors.name ? "profile__error_active" : "")}>{errors.name}</span>
          <div className="profile__input-box">
            <label className="profile__label">E-mail</label>
            <input className="profile__input" type="email" placeholder="qwerty@yandex.ru" id="email" name="email"
            pattern="^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$"
            value={values.email} onChange={onChange} required/>
          </div>
          <span className={"profile__error " + (errors.email ? "profile__error_active" : "")}>{errors.email}</span>
          <div className="profile__links">
          <button className={"profile__btn profile__btn_edit " + (isValid & isNewData ? "profile__btn_active" : "" )} 
            type="submit" disabled={!isValid || !isNewData}>Редактировать
          </button>
          <button className="profile__btn profile__signout" onClick={props.onSignOut}>Выйти из аккаунта</button>
        </div>
        </form>
      </div>
    </section>
  )
}

export default Profile;