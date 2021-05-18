import './Promo.css';

import promo from '../../images/promo.png';


function Promo(props) {
    return (
        <section className="promo">
            <img className="promo__image" src={promo} alt='promo' />
            <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
        </section>
    )
}

export default Promo;