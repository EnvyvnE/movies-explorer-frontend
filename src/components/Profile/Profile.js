import './Profile.css';
import {Link,useHistory} from 'react-router-dom';

function Profile(props){
  const history = useHistory();
  function handleOnClick(e) {
    e.preventDefault();
    localStorage.removeItem('token');
    history.push('/')
}

    return(
        <>
         <section className="profile">
      <form className="profile__form" noValidate>
        <h3 className="profile__greeting">Привет!</h3>
        <div className="profile__inputs">
          <p className="profile__text profile__text_type_name">Имя</p>
          <div className="profile__area profile__area_type_name">
            <input className="profile__input profile__input_type_name" placeholder="Имя" id="name-input"
              name="name" minLength="2" maxLength="30" required ></input>
          </div>
          <div className="profile__area profile__area_type_email">
            <input className="profile__input profile__input_type_email" type="email" placeholder="Почта"
              id="email-input" name="email" 
              pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[a-z]{2,})\b"></input>
          </div>
          <p className="profile__text profile__text_type_email">Почта</p>
        </div>
        <button type="submit" onSubmit={props.onSubmit} className="profile__button" >Редактировать</button>
        <Link onClick={handleOnClick} to="/" className="profile__link" >Выйти из аккаунта</Link>
      </form>
    </section>
        </>
    )
}
export default Profile;