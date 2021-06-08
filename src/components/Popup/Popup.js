import closeBtn from '../../images/close.svg';
import './Popup.css';

function Popup(props) {

  return (
    <section className={`popup popup_type_alert-succes ${props.isOpen && 'popup_opened'}`}>
      <div className='popup__container popup__container_alert'>
        <p className="popup__title popup__title_black">{props.state ? 'Профиль отредактирован!' : 'Что-то пошло не так! Попробуйте ещё раз.'}</p>
        <button className="popup__button popup__button_close" type="reset" onClick={props.onClose}><img className="popup__close-image"
          src={closeBtn} alt="закрыть форму" /></button>
      </div>
    </section>
  )
}
export default Popup;