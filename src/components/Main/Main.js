import './Main.css';
import Promo from '../Promo/Promo';
import Navigation from '../Navigation/Navigation';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import Student from '../Student/Student';

function Main(props) {
    return (
        <>
            <main className="main">
                <Promo />
                <Navigation />
                <AboutProject />
                <Techs />
                <Student />
            </main>
        </>
    )
}
export default Main;