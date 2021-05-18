import './SearchForm.css';
import React from 'react';
import {useFormWithValidation} from '../../utils/validation.js';
function SearchForm(props) {
    const { values, handleChange, errors, isValid } = useFormWithValidation({});

    return (
        <>
            <form  className='search'>
                <input onChange={handleChange} className='search__input' type='text' name="movie" placeholder='Фильм' noValidate />
                <span className="search__input-error">
                    {errors && errors["movie"] && errors["movie"]}
                </span>
                <button className='search__button'>|&gt;</button>
            </form>
            <label className="search__tumbler">
                <input type="checkbox" name="shortFilmCheckbox" className="search__checkbox"></input>
                <span className="search__slider"></span>
                <span className="search__label-text">Короткометражки</span>
            </label>
        </>
    )
}

export default SearchForm;