import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCard from '../MoviesCard/MoviesCard';
import React from 'react';
import Preloader from '../Preloader/Preloader';

function Movies(props) {
    const [visibleMovies, setVisibleMovies] = React.useState(3);
    function showMoreMovies() {
        console.log(props.movies.length)
        setVisibleMovies(visibleMovies + 3);
    }

    return (
        <>
            <main className="movies__containe">
                <SearchForm setMoviesList={props.setMoviesList} handleSearchSubmit={props.handleSearchSubmit} />
                {props.isLoading && <Preloader />}
                <section className="movies">
                    {props.movies.map((item, i) => {
                        return (
                            i <= visibleMovies && (
                                <MoviesCard
                                    movies={props.movies}
                                    savedList={props.savedMovies}
                                    onLike={props.onLike}
                                    onDelete={props.onDelete}
                                    movie={item}
                                    key={i}
                                    {...item} />
                            ))
                    })
                    }
                    {props.movies.length === 0 && <p className="movies__not-found">Ничего не найдено</p>}
                    <button type='button' onClick={showMoreMovies} className={`movies__more ${props.movies.length !== 0 && props.movies.length > visibleMovies  && 'movies__more_visible'}`} >Еще</button>
                </section>

            </main>
        </>
    )
}

export default Movies;