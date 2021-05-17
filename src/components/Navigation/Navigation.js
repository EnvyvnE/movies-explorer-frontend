import './Navigation.css';
function Navigation(props) {
    return (
        <>
            <section className="nav">
                <ul className="nav__list">
                    <li className="nav__item"><a href='#about-project' className="nav__link">О проекте </a></li>
                    <li className="nav__item"><a href='#techs' className="nav__link">Технологии</a></li>
                    <li className="nav__item"><a href='#student' className="nav__link">Студент</a></li>
                </ul>
            </section>
        </>
    )
}
export default Navigation;