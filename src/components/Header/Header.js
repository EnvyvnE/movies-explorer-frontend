import { Link } from 'react-router-dom';
import './Header.css';
import Navigation from '../Navigation/Navigation';
function Header(props) {
  
    const headerClassName = (
        `header 
          ${(props.pathname === '/movies' || props.pathname === '/saved-movies' || props.pathname === '/profile') && 'header_logged-in'}
           ${props.pathname === '/' && 'header_visible'}
          `)
    return (
            <header className={headerClassName}>
                <div className='header__container'>
                    <Link to='/' className="header__logo"></Link>
                    {
                        !props.state && props.pathname === '/' ?
                            <nav className='header__nav_logged-off'>
                                <Link className='header__link' to="/signup" >Регистрация</Link>
                                <Link className='header__link header__link_active' to="/signin" onClick={props.handleLogout}>Войти</Link>
                            </nav> :
                            <div className={`header__nav ${props.menuState && 'header__nav_opened'}`} >
                                <Navigation onClick={props.onClose} state={props.state} />
                            </div>
                    }
                    <button className='header__burger_menu' type="button" onClick={props.onClick}></button>
                </div>
            </header>
    )
}
export default Header;