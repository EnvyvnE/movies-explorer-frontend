import './SearchForm.css';
import React from 'react';
import { useFormWithValidation } from '../../utils/validation.js';
import { useLocation} from 'react-router-dom'
function SearchForm(props) {
    const { values, handleChange, errors } = useFormWithValidation({});
    const [isChecked, setIsChecked] = React.useState(false);
    const location = useLocation();
    function handleSubmit(e) {
        e.preventDefault();
        props.handleSearchSubmit(values.movie);
    }

    function handleClick(state) {
        if(location.pathname === '/movies'){
        const moviesList =  JSON.parse(localStorage.getItem('searchList'));
        if (state === true && localStorage.getItem('searchList')) {
            const filteredList = moviesList.filter(function (e) {
                return e.duration <= 40;
            })
            localStorage.setItem('shortFilms', JSON.stringify(filteredList))
            props.setMoviesList(JSON.parse(localStorage.getItem('shortFilms'))
            );
        }
        if (state === false) {
            localStorage.removeItem('shortFilms');
            props.setMoviesList(JSON.parse(localStorage.getItem('searchList')))
        }
    } else {
        const moviesList = JSON.parse(localStorage.getItem('savedMovies')) 
        if (state === true && localStorage.getItem('savedMovies')) {
            const filteredList = moviesList.filter(function (e) {
                return e.duration <= 40;
            })
            localStorage.setItem('shortFilms', JSON.stringify(filteredList))
            props.setSavedMoviesList(JSON.parse(localStorage.getItem('shortFilms'))
            );
        }
        if (state === false) {
            localStorage.removeItem('shortFilms');
            props.setSavedMoviesList(JSON.parse(localStorage.getItem('savedMovies')))
        }
    }
    }

    function handleCheckboxChange(e) {
        setIsChecked(e.target.checked);
        handleClick(e.target.checked);
    }

    return (
        <>
            <form onSubmit={handleSubmit} method='POST' className='search'>
                <input onChange={handleChange} required className='search__input' type='text' name="movie" placeholder='Фильм' noValidate />
                <span className="search__input-error">
                    {errors && errors["movie"] && errors["movie"]}
                </span>
                <button type='submit' className='search__button'>|&gt;</button>
            </form>
            <label className="search__tumbler">
                <input checked={isChecked} onChange={handleCheckboxChange} type="checkbox" name="shortFilmCheckbox" className="search__checkbox"></input>
                <span className="search__slider"></span>
                <span className="search__label-text">Короткометражки</span>
            </label>
        </>
    )
}

export default SearchForm;