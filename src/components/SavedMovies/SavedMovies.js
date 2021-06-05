import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCard from '../MoviesCard/MoviesCard';
import React from 'react';
import Preloader from '../Preloader/Preloader'


function SavedMovies(props) {
    const [visibleMovies, setVisibleMovies] = React.useState(3);
    const filterMovieList = props.movies.filter(function (e) {
        return e.owner === props.user._id
    })
    function showMoreMovies() {
        setVisibleMovies(visibleMovies + 3);
    }

    return (
        <>
            <main>
                <SearchForm setSavedMoviesList={props.setSavedMoviesList} setMoviesList={props.setMoviesList} handleSearchSubmit={props.handleSearchSubmit} />
                <section className="movies">
                    {props.isLoading && <Preloader />}
                    {filterMovieList.map((item, i) => {
                        return (
                            i < visibleMovies && (
                                <MoviesCard
                                    user={props.user}
                                    onDelete={props.onDelete}
                                    movie={item}
                                    key={item._id}
                                    {...item} />
                            ))

                    })}
                    {filterMovieList.length === 0 && <p className="movies__not-found">Ничего не найдено</p>}
                    <button type='button' onClick={showMoreMovies} className={`movies__more ${filterMovieList.length !== 0 && filterMovieList.length > visibleMovies  && 'movies__more_visible'}`} >Еще</button>
                </section>

            </main>
        </>
    )
}

export default SavedMovies;