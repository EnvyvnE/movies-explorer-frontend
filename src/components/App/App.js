import './App.css';
import React from 'react';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies'
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import PageNotFound from '../PageNotFound/PageNotFound';
import Footer from '../Footer/Footer';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import moviesApi from '../../utils/MoviesApi';
import mainApi from '../../utils/MainApi';
import * as auth from '../../utils/auth';

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [moviesList, setMoviesList] = React.useState([]);
  const [currentUser, setCurrentUser] = React.useState([]);
  const [isSavedMoviePage, setIsSavedMoviePage] = React.useState(false);
  const history = useHistory();
  const location = useLocation();

  function openMenu() {
    setIsMenuOpen(true);
  }
  function closeAll() {
    setIsMenuOpen(false);
  }

  function handleRegister(values) {
    auth.register(values.name, values.email, values.password)
      .then((res) => {
        if (res && res.status === 200) {
          history.push('/signin');
        } else {
          history.push('/');
        }
      })
      .catch((err) => {
        console.log(err);
      })
  }
  function handleLogin(data) {
    auth.authorize(data)
      .then((res) => {
        if (res.token) {
          localStorage.setItem('jwt', res.token);
          setLoggedIn(true);
          setCurrentUser(data);
          getMoviesList();
          history.push('/');
        } else {
          setLoggedIn(false);
        }
      })
      .catch((err) => {
        console.log(err);
      })
  }
  function handleLogout() {
    localStorage.removeItem('jwt');
    clearStorage()
    setLoggedIn(false);
  }

  function saveMovie(item) {
    if (localStorage.getItem('jwt')) {
      setIsLoading(true);
      const jwt = localStorage.getItem('jwt');
      const localSavedMovies = JSON.parse(localStorage.getItem('savedMovies'));
      const isSaved = localSavedMovies.some((m) => { return m.moveiId === item.id})
      if(!isSaved){
      mainApi.saveMovie(jwt, item)
        .then((movie) => {
          setMoviesList(moviesList.map((m) => {
            console.log(m)
            console.log(movie)
           return m.id === movie.data.movieId ?  movie.data : m ;
          }))
          const newSavedMovies = [movie.data, ...localSavedMovies];
          localStorage.setItem('savedMovies',JSON.stringify(newSavedMovies));
          setSavedMovies(newSavedMovies);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setIsLoading(false)
        })
      }
    }
  }
  function deleteMovie(movie) {
    const jwt = localStorage.getItem('jwt');
    const localSavedMovies = JSON.parse(localStorage.getItem('savedMovies'));
    setIsLoading(true);
    mainApi.deleteMovie(movie, jwt)
      .then((res) => {
        const newMovies = localSavedMovies.filter((movie) => movie._id !== res.movie._id);
        localStorage.setItem('savedMovies', JSON.stringify(newMovies));
        setSavedMovies(newMovies);
        setMoviesList(moviesList.map((movie) => movie._id === res.movie.movieId ? moviesList.find((m) => m.id === movie.movieId) : movie));
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  function handleUpdateInfo(data) {
    const jwt = localStorage.getItem('jwt');
    setIsLoading(true);
    mainApi.patchUserInfo(data, jwt)
      .then((currentUser) => {
        setCurrentUser(currentUser.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(()=>{
        setIsLoading(false)
      })
  }

  function updateMovieList(moviesList) {
    const listWithSavedMovies = moviesList.map((movie) => {
      const savedItem = savedMovies.find((m) => parseInt(m.movieId) === movie.id);
      return savedItem ? savedItem : movie;
    });
    localStorage.setItem('movies', JSON.stringify(listWithSavedMovies));
    setMoviesList(JSON.parse(localStorage.getItem('movies')));

  }

  function handleSearchSubmit(data) {
    if(localStorage.getItem('moviesList')){
      const movies = JSON.parse(localStorage.getItem('moviesList'));
      const result = movies.filter(function (e) {
        return e.nameRU.toLowerCase().indexOf(data.toLowerCase()) > -1 || e.nameEN.toLowerCase().indexOf(data.toLowerCase()) > -1;
      })
      localStorage.setItem('searchList', JSON.stringify(result));
      if(localStorage.getItem('savedMovies')){
        updateMovieList(result);
        setMoviesList(JSON.parse(localStorage.getItem('movies')));
      }else {
        setMoviesList(JSON.parse(localStorage.getItem('searchList')));
      }

    } else (
      getMoviesList()
    )
  }
  function handleSearchSaved(data) {
    if(localStorage.getItem('savedMovies')){
      const movies = JSON.parse(localStorage.getItem('savedMovies'));
      const result = movies.filter(function (e) {
        return e.nameRU.toLowerCase().indexOf(data.toLowerCase()) > -1 || e.nameEN.toLowerCase().indexOf(data.toLowerCase()) > -1;
      })
      console.log(result)
      localStorage.setItem('searchInSaved', JSON.stringify(result));
      setSavedMovies(JSON.parse(localStorage.getItem('searchInSaved')));
    }
  }

  function getMoviesList() {
    setIsLoading(true)
    moviesApi.getMovies()
      .then((res) => {
        localStorage.setItem('moviesList', JSON.stringify(res, function (key, value) { return value === null ? "" : value }));
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  function clearStorage(){
    localStorage.removeItem('savedMovies');
    localStorage.removeItem('movies');
    localStorage.removeItem('moviesList');
    localStorage.removeItem('searchList');
    localStorage.removeItem('searchInSaved');
  }

  React.useEffect(() => {
    function handleTokenCheck() {
      if (localStorage.getItem('jwt')) {
        const jwt = localStorage.getItem('jwt');
        auth.checkToken(jwt)
          .then((res) => {
            if (res) {
              setCurrentUser({ email: res.data.email, name: res.data.name, _id: res.data._id });
              setLoggedIn(true);
              history.push('/movies');
            }
            else {
              setLoggedIn(false);
              history.push('/');
            }
          })
          .catch((err) => console.log(err));
      }
    }
    handleTokenCheck();
    localStorage.removeItem('movies');
  }, [history]);

  React.useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      setIsLoading(true);
      if(loggedIn){
      Promise.all([
        mainApi.getUserInfo(jwt),
        mainApi.getMovies(jwt)
      ])
        .then((values) => {
          const [userInfo, savedMovies] = values;
          const userSavedMovies = savedMovies.data.filter((m) => {
            return m.owner === currentUser._id
          })
          localStorage.setItem('savedMovies', JSON.stringify(userSavedMovies));
          setSavedMovies(userSavedMovies);
          setCurrentUser(userInfo.data);
        })
        .catch((err) => console.log(err))
        .finally(() => {
          setIsLoading(false)
        })
    }
  }
  }, [currentUser._id,loggedIn]);


  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className={`${isMenuOpen && 'navigation__cover'}`} ></div>
        <Header pathname={location.pathname}
          menuState={isMenuOpen}
          onClose={closeAll}
          onClick={openMenu}
          state={loggedIn} />
        <Switch>
          <Route exact path='/'>
            <Main />
          </Route>
          <ProtectedRoute onLike={saveMovie}
            isLoading={isLoading}
            user={currentUser}
            onDelete={deleteMovie}
            setMoviesList={setMoviesList}
            savedPage={isSavedMoviePage}
            setPage={setIsSavedMoviePage}
            state={loggedIn} handleGetMovieList={getMoviesList}
            handleSearchSubmit={handleSearchSubmit}
            movies={moviesList}
            savedMovies={savedMovies}
            component={Movies}
            path='/movies' />
          <ProtectedRoute savedPage={isSavedMoviePage}
            user={currentUser}
            isLoading={isLoading}
            setSavedMoviesList={setSavedMovies}
            setMoviesList={setMoviesList}
            setPage={setIsSavedMoviePage}
            state={loggedIn}
            handleSearchSubmit={handleSearchSaved}
            movies={savedMovies}
            onDelete={deleteMovie}
            component={SavedMovies}
            path='/saved-movies' />
          <ProtectedRoute state={loggedIn}
            handleUpdate={handleUpdateInfo}
            handleLogout={handleLogout}
            component={Profile}
            path='/profile' />
          <Route path='/signup' >
            <Register state={loggedIn} handleRegister={handleRegister} component={Register} />
          </Route>
          <Route path='/signin' >
            <Login handleLogin={handleLogin} state={loggedIn} component={Login} />
          </Route>
          <Route component={PageNotFound} path='*' />
        </Switch>
        <Footer pathname={location.pathname} state={loggedIn} />
      </div>
    </CurrentUserContext.Provider>
  )

}

export default App;
