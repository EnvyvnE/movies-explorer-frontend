import './Footer.css';

function Footer(props) {
    const footerClassName = (
        `footer 
          ${(props.pathname === '/movies' || props.pathname === '/saved-movies' ) && 'footer_logged-in'}
           ${(props.pathname=== '/' ) && 'footer_visible'}
          `)
    return (
        <section className={footerClassName}>
            <div className='footer__container'>
                <h3 className='footer__description'>Учебный проект Яндекс.Практикум х BeatFilm.</h3>
                <div className="footer__nav">
                <p className='footer__date'>© 2020</p>
                <ul className='footer__list'>
                    <a target='_blank' rel='noreferrer' href='https://praktikum.yandex.ru/' className='footer__item'>Яндекс.Практикум</a>
                    <a target='_blank' rel='noreferrer' href='https://github.com/EnvyvnE' className='footer__item'>Github</a>
                    <a target='_blank' rel='noreferrer' href='https://www.facebook.com/vlad.kozhevatov' className='footer__item'>Facebook</a>
                </ul>
                </div>
            </div>
        </section>
    )
}

export default Footer;