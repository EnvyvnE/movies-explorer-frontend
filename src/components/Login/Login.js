import './Login.css';
import React from 'react';
import Auth from '../Auth/Auth';
import { Link } from 'react-router-dom';
import { useFormWithValidation } from '../../utils/validation';

function Login(props) {
    const { values, handleChange, errors, isValid } = useFormWithValidation({});

    function handleSubmit(e) {
        e.preventDefault();
        if (isValid) {
            props.handleLogin(values);
        }
       
    }

    return (
            <Auth state={props.state} onSubmit={handleSubmit} greetings={'Рады видеть!'} type={'login'} >
                    <span className='login__input_label'>E-mail</span>
                    <input onChange={handleChange} placeholder='Email' name='email' type='email' className='login__input'
                    pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[a-z]{2,})\b" />

                    <span className="login__input-error">
                        {errors && errors['email'] !== '' && errors['email']}
                    </span>
                    <span className='login__input_label'>Пароль</span>
                    <input onChange={handleChange} placeholder='Пароль' required minLength='8' maxLength='16' name='password' type='password' className='login__input' />
                    <span className="login__input-error">
                        {errors && errors['password'] !== '' && errors['password']}
                    </span>
                    <button onClick={props.setState} type='submit' disabled={!isValid} className={`login__button ${!isValid && 'login__button_disabled'}`}>Войти</button>
                    <span className='login__span'>Ещё не зарегистрированы?<Link className='login__link' to='/signup'>Регистрация</Link></span>
            </Auth>
    )
}

export default Login;