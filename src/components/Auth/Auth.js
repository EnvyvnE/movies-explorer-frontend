import './Auth.css';
import { React } from 'react';
import { Link } from 'react-router-dom';
function Auth(props) {

    return (
        <>
            <section className={`${props.type}`}>
                <form onSubmit={props.onSubmit} className={`${props.type}__form`}>
                    <Link className={`${props.type}__logo`} to='/'></Link>
                    <h2 className={`${props.type}__title`}>{props.greetings}</h2>
                    {props.children}
                </form>
            </section>
        </>
    )
}

export default Auth;