import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCard from '../MoviesCard/MoviesCard';
import React from 'react';

function Movies(props) {
    const [visibleMovies, setVisibleMovies] = React.useState(3);

    function showMoreMovies() {
        setVisibleMovies(visibleMovies + 3);
    }


    return (
        <>
            <main className="movies__containe">

                <SearchForm />

                <section className="movies">
                    {props.movies.map((item, i) => {
                        return (
                            i < visibleMovies && (
                                <MoviesCard
                                    movie={item}
                                    key={i}
                                    {...item} />
                            ))
                    })}
                    <button type='button' onClick={showMoreMovies} className='movies__more'>Еще</button>
                </section>

            </main>
        </>
    )
}

export default Movies;