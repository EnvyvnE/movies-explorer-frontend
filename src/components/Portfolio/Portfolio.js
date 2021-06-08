import './Portfolio.css'
function Portfolio(props) {
    return (
        <div className="portfolio">
        <h3 className="portfolio__title">Портфолио</h3>
        <ul className="portfolio__list">
            <li className="portfolio__item">
                <a href='https://envyvne.github.io/how-to-learn/' className="portfolio__item_link">Статичный сайт</a>
            </li>
            <li className="portfolio__item">
                <a href='https://envyvne.github.io/russian-travel/' className="portfolio__item_link">Адаптивный сайт</a>
            </li>
            <li className="portfolio__item">
                <a href='http://kv.mesto.nomoredomains.icu/#/sign-in' className="portfolio__item_link">Одностраничное приложение</a>
            </li>
        </ul>
        </div>
    )
}
export default Portfolio;