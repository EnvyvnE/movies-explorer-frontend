import './Main.css';
import Promo from '../Promo/Promo';
import Navtab from '../Navtab/Navtab';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import Student from '../Student/Student';

function Main(props) {
    return (
        <>
            <main className="main">
                <Promo />
                <Navtab />
                <AboutProject />
                <Techs />
                <Student />
            </main>
        </>
    )
}
export default Main;