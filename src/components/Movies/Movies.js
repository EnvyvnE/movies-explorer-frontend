import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCard from '../MoviesCard/MoviesCard';
import React from 'react';
import Preloader from '../Preloader/Preloader';

function Movies(props) {
    const [visibleMovies, setVisibleMovies] = React.useState(3);
    function showMoreMovies() {
        setVisibleMovies(visibleMovies + 3);
    }
  
    return (
        <>
            <main className="movies__containe">
                <SearchForm setMoviesList={props.setMoviesList} handleSearchSubmit={props.handleSearchSubmit}/>
                {props.isLoading && <Preloader />}
                <section className="movies">
                    {props.movies.map((item, i) => {
                        return (
                            i <= visibleMovies && (
                                <MoviesCard
                                movies ={props.movies}
                                savedList={props.savedMovies} 
                                onLike={props.onLike}
                                onDelete={props.onDelete}
                                    movie={item}
                                    key={i}
                                    {...item} />
                            ))
                    })
                    }
                    <button type='button' onClick={showMoreMovies} className='movies__more'>Еще</button>
                </section>

            </main>
        </>
    )
}

export default Movies;