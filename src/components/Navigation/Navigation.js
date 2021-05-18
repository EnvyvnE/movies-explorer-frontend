import './Navigation.css';
import { Link } from 'react-router-dom';
function Navigation(props) {
    return (
       
         <>
         <nav className='navigation'>
             <button onClick={props.onClick} className='navigation__close_btn' type='button'></button>
             <div className="navigation__list">
                 <Link onClick={props.onClick} className='navigation__link navigation__link_main' to="/" >Главная</Link>
                 <Link onClick={props.onClick} className='navigation__link' to="/movies" >Фильмы</Link>
                 <Link onClick={props.onClick} className='navigation__link' to="/saved-movies" >Сохранённые фильмы</Link>
             </div>
             <div className='navigation__account'>
             <Link onClick={props.onClick} className='navigation__link navigation__link_account' to="/profile" >Аккаунт</Link>
             </div>
         </nav>


     </>
    )
}
export default Navigation;