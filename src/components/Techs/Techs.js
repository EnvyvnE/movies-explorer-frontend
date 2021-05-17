import './Techs.css';
import About from '../About/About';
function Techs(props) {
    return (
        <About type="techs" title="Технологии">

            <div className="techs">
                    <h3 className="techs__title">7 технологий</h3>
                    <p className="techs__paragraph">На курсе веб-разработки мы освоили технологии, 
                    которые применили в дипломном проекте.</p>
                        <ul className="techs__list">
                          <p className="techs__item">HTML</p>
                          <p className="techs__item">CSS</p>
                          <p className="techs__item">JS</p>
                          <p className="techs__item">React</p>
                          <p className="techs__item">Git</p>
                          <p className="techs__item">Express.js</p>
                          <p className="techs__item">mongoDB</p>
                        </ul>
                
            </div>

        </About>
    )
}
export default Techs;