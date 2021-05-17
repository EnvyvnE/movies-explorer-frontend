import './App.css';
import React from 'react';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import data from '../../utils/data';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import PageNotFound from '../PageNotFound/PageNotFound';
import Footer from '../Footer/Footer';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
function App() {

  const [loggedIn, setLoggedIn] = React.useState(null);
  const [movies, setMovies] = React.useState([]);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  // const [savedMovies, setSavedMovies] = React.useState([]);
  // const [currentUser, setCurrentUser] = React.useState([]);
  const history = useHistory();

  const location = useLocation();

  function openMenu() {
    console.log('menu opened');
    setIsMenuOpen(true);
  }
  function closeAll(){
    console.log('closed');
    setIsMenuOpen(false);
  }

  React.useEffect(() => {
    setMovies(data);
  }, []);

 
  React.useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      console.log('token confirm')
      setLoggedIn(true);
    } else {
      console.log('no token')
      setLoggedIn(false)
    }
  },[])

  return (

      <div className="page">
            <div className={`${ isMenuOpen && 'navtab__cover'}`} ></div>
        <Header pathname={location.pathname} menuState={isMenuOpen} onClose={closeAll} onClick={openMenu} state={loggedIn} />
        <Switch>
          <Route exact path='/'>
            <Main />
          </Route>
          <ProtectedRoute state={loggedIn} movies={movies} component={Movies} path='/movies' />
          <ProtectedRoute state={loggedIn} movies={movies} component={Movies} path='/saved-movies' />
          <ProtectedRoute state={loggedIn} onSubmit={setLoggedIn} component={Profile} path='/profile' />
          <Route state={loggedIn} component={Register} path='/signup' />
          <Route onSubmit={setLoggedIn} state={loggedIn} component={Login} path='/signin' />
          <Route component={PageNotFound} path='*' />
        </Switch>
        <Footer pathname={location.pathname} state={loggedIn} />
      </div>
  )

}

export default App;
