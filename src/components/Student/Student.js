import avatar from '../../images/student.jpeg'
import './Student.css';
import About from '../About/About';
import Portfolio from '../Portfolio/Portfolio';
function Student(props) {
    return (
        <About type="student" title="Студент">
            <div className="student">
            <div className="student__info">
                <h3 className="student__title">Влад</h3>
                <p className="student__subtitle">Фронтенд-разработчик, 30 лет</p>
                <p className="student__paragraph">Я живу в Москве, закончил факультет менеджмента MIRBIS. У меня есть жена
и два сына. Я люблю фэнтези и увлекаюсь кулинарией.С 2016 года развиваю собственный бизнес. Полученые знания хочу направить для развития нового направления в компании. </p>
            <ul className="student__social">
                <a className="student__social-item" target='_blank' rel='noreferrer' href='https://www.facebook.com/vlad.kozhevatov'>Facebook</a>
                <a className="student__social-item" target='_blank' rel='noreferrer' href='https://github.com/EnvyvnE'>Github</a>
            </ul>
            </div>
            <img src={avatar} alt="avatar" className="student__image" />
        </div>
        <Portfolio />
        </About>
    )
}
export default Student;