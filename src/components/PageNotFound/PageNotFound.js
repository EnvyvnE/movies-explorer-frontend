import './PageNotFound.css';
import {Link} from 'react-router-dom';

function PageNotFound(){
    return(
        <>
        <div className='alert'>
        <p className='alert__number'>404</p>
        <p className='alert__text'>Страница не найдена</p>
        <Link className='alert__link' to='/'>Назад</Link>
        </div>
        </>
    )
}
export default PageNotFound;