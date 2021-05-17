import './AboutProject.css';
import About from '../About/About';
function AboutProject(props) {
    return (
        <About type="about-project" title="О проекте">
            <div className='project__container'>
                <div className="project">
                    <div className="project__block_phase">
                        <h3 className="project__block_phase-title">Дипломный проект включал 5 этапов</h3>
                        <p className="project__block_phase-paragraph">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                    </div>
                    <div className="project__block_time">
                        <h3 className="project__block_time-title">На выполнение диплома ушло 5 недель</h3>
                        <p className="project__block_time-paragraph">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                    </div>
                </div>
                <div className="project__graph">
                    <div className="project__graph_backend">
                        <div className="project__graph_backend-visual"><p className="info__graph_backend-visual-text">1 неделя</p></div>
                        <p className="project__graph_backend-paragraph">Back-end</p>
                    </div>
                    <div className="project__graph_frontend">
                        <div className="project__graph_frontend-visual"><p className="info__graph_frontend-visual-text">5 недель</p></div>
                        <p className="project__graph_frontend-paragraph">Front-end</p>
                    </div>
                </div>
            </div>
        </About>
    )
}
export default AboutProject;