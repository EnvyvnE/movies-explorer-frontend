import React from 'react';
import { Link } from 'react-router-dom';
import './Navtab.css'

function Navtab(props) {
    return (
        <>
            <nav className='navtab'>
                <button onClick={props.onClick} className='navtab__close_btn' type='button'></button>
                <div className="navtab__list">
                    <Link onClick={props.onClick} className='navtab__link navtab__link_main' to="/" >Главная</Link>
                    <Link onClick={props.onClick} className='navtab__link' to="/movies" >Фильмы</Link>
                    <Link onClick={props.onClick} className='navtab__link' to="/saved-movies" >Сохранённые фильмы</Link>
                </div>
                <div className='navtab__account'>
                <Link onClick={props.onClick} className='navtab__link navtab__link_account' to="/profile" >Аккаунт</Link>
                </div>
            </nav>


        </>
    )
}

export default Navtab;