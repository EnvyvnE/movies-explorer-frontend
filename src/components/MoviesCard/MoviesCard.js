import React from 'react';
import './MoviesCard.css';
import { useLocation } from 'react-router-dom';
import black from '../../images/like.svg';
import red from '../../images/redlike.svg';
import close from '../../images/close.svg'
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { BASE_URL_MOVIE } from '../../utils/MoviesApi';

function MoviesCard(props) {
    const currentUser = React.useContext(CurrentUserContext)
    const location = useLocation();
    const isOwn = props.movie && props.movie.owner === currentUser._id;
    const [isSaved,setIsSaved] = React.useState(false)
    const defaultPicture = 'https://images.unsplash.com/photo-1622323758558-8d1513e61e9b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2689&q=80';
    function handleLikeMovie() {
        if (!isOwn && !isSaved) {
            props.onLike(props.movie);
            setIsSaved(true)
        } else if(isOwn){
            props.onDelete(props.movie._id);
            console.log('delete')
            setIsSaved(false)
        } else {
            console.log('delete2')
            setIsSaved(false)
        }
 
    }

    

    return (
        <>
        <div className="movie" >
            <div className="movie__info">
                <h3 className="movie_title">{props.nameRU}</h3>
                <p className="movie__length">{parseInt(props.duration / 60)} h {props.duration % 60} min</p>
                {
                    location.pathname === '/saved-movies' ?
                        <img onClick={handleLikeMovie} className='movie__close' src={close} alt='delete' /> :
                        <img onClick={handleLikeMovie} className='movie__like' src={isOwn || isSaved ? red : black} alt='like' />
                }
            </div>
            <a className='movie__trailer' href={ props.trailerLink ? props.trailerLink : props.trailer} target="_blank" rel="noreferrer"><img className="movie__image" src= {isOwn ? props.image : (props.movie.image.url ? (BASE_URL_MOVIE + props.movie.image.url) : defaultPicture)}  alt={props.nameRU} /></a>
        </div>
        </>
    )
}
export default MoviesCard;