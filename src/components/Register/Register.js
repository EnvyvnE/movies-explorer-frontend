import './Register.css';
import React from 'react';
import Auth from '../Auth/Auth';
import { Link } from 'react-router-dom';
import { useFormWithValidation } from '../../utils/validation';


function Register(props) {
    const { values, handleChange, errors, isValid } = useFormWithValidation({});

    function handleSubmit(e) {
        e.preventDefault();
        if (isValid) {
            console.log(values)
            props.handleRegister(values);
        }

    }

    return (
            <Auth state={props.state} onSubmit={handleSubmit} greetings={'Добро пожаловать!'} type={'register'} >
                    <span className='register__input_label'>Имя</span>
                    <input className='register__input' onChange={handleChange} id='name-input' required minLength='2' maxLength='30' placeholder='Имя' name='name' />
                    <span className="register__input-error">
                        {errors && errors['name'] !== '' && errors['name']}
                    </span>
                    <span className='register__input_label'>E-mail</span>
                    <input className='register__input'  placeholder="Email" type="email" name="email" required id="email-input" onChange={handleChange}
          pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[a-z]{2,})\b"/>
                    <span className="register__input-error">
                        {errors && errors['email'] !== '' && errors['email']}
                    </span>
                    <span className='register__input_label'>Пароль</span>
                    <input className='register__input' placeholder="Пароль" type="password" minLength="8"
          required name="password" id="password-input" onChange={handleChange}/>
                    <span className="register__input-error">
                        {errors && errors['password'] !== '' && errors['password']}
                    </span>
                    <button type='submit' className={`register__button ${!isValid && 'register__button_disabled'}`} disabled={!isValid} >Зарегистрироваться</button>
                    <span className='register__span'>Уже зарегистрированы?<Link className='register__link' to='/signin'>Войти</Link></span>

            </Auth>
    )
}

export default Register;