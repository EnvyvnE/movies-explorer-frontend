import './Profile.css';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useFormWithValidation } from '../../utils/validation';

function Profile(props) {
  const currentUser = useContext(CurrentUserContext);
  const { values, handleChange, errors, isValid } = useFormWithValidation({
    email: currentUser.email,
    name: currentUser.name});

  function handleSubmit(e) {
    e.preventDefault();
    props.handleUpdate(values);
  }

  return (
    <>
      <section className="profile">
        <form method='POST' onSubmit={handleSubmit} className="profile__form" noValidate>
          <h3 className="profile__greeting">Привет, {currentUser.name}</h3>
          <div className="profile__inputs">
            <p className="profile__text profile__text_type_name">Имя</p>
            <div className="profile__area profile__area_type_name">
              <input onChange={handleChange}
                className="profile__input profile__input_type_name"
                value={values.name}
                type='text'
                placeholder="Имя"
                autoComplete="off"
                id="name-input"
                name="name" minLength="2" maxLength="30"
              ></input>
              <span className="register__input-error">
                {errors && errors['name'] !== '' && errors['name']}
              </span>
            </div>
            <div className="profile__area profile__area_type_email">
              <input onChange={handleChange}
                className="profile__input profile__input_type_email"
                type="email"
                value={values.email}
                autoComplete="off"
                placeholder="Почта"
                id="email-input" name="email"
                pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[a-z]{2,})\b"></input>
              <span className="login__input-error">
                {errors && errors['email'] !== '' && errors['email']}
              </span>
            </div>
            <p className="profile__text profile__text_type_email">Почта</p>
          </div>
          <button type="submit" className={`profile__button ${isValid && 'profile__button_disabled'}`} disabled={!isValid} >Редактировать</button>
          <Link onClick={props.handleLogout} to="/" className="profile__link" >Выйти из аккаунта</Link>
        </form>
      </section>
    </>
  )
}
export default Profile;