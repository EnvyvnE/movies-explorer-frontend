import React from 'react';
import './MoviesCard.css';
import black from '../../images/like.svg';
import red from '../../images/redlike.svg';

function MoviesCard(props) {
    const [isLiked, setIsLiked] = React.useState(false);

    function handleSetIsLiked(e) {
        setIsLiked(!isLiked);
    }
   
    return (
        <div className="movie" >
            <div className="movie__info">
                <h3 className="movie_title">{props.title}</h3>
                <p className="movie__length">{props.length}</p>
                <img onClick={handleSetIsLiked} className='movie__like' src={isLiked ? red : black} alt ='like'/>
            </div>
            <img className="movie__image" src={props.image} alt={props.title} />
        </div>
    )
}
export default MoviesCard;