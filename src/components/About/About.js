import './About.css';
function About(props) {
    return (
            <section id={props.type} className={`info info_type_${props.type}`}>
                <div className={`info__container info__container_type_${props.type}`}>
                <h2 className="info__heading">{props.title}</h2>
                {props.children}
                </div>
            </section>
    )
}
export default About;