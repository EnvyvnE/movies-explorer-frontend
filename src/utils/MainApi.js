import {BASE_URL_MOVIE} from './MoviesApi';
class MainApi {
    constructor({
        address,
        token
    }) {
        this._address = address;
        this._token = token;
    }
    _getResponseData(res) {
        if (!res.ok) {
            return Promise.reject(`Ошибка: ${res.status}`)
        }
        return res.json();
    }
    patchUserInfo(data, jwt) {
        return fetch(`${this._address}/users/me`, {
            method: 'PATCH',
            headers: {
                authorization: `Bearer ${jwt}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: data.name,
                email: data.email
            })

        })
            .then(this._getResponseData);
    }
    getUserInfo(jwt) {
        return fetch(`${this._address}/users/me`, {
            headers: {
                authorization: `Bearer ${jwt}`,
            }
        })
            .then(this._getResponseData);
    }

    getMovies(jwt) {
        return fetch(`${this._address}/movies`, {
            headers: {
                authorization: `Bearer ${jwt}`,
            }
        })
            .then(this._getResponseData);
    }
    saveMovie(jwt, movie) {
        return fetch(`${this._address}/movies`, {
            method: 'POST',
            headers: {
                authorization: `Bearer ${jwt}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                country: movie.country ? movie.country : 'default',
                director: movie.director ? movie.director : 'default',
                duration: movie.duration ? movie.duration : 0,
                year: movie.year ? movie.year : 0,
                description: movie.description ? movie.description : 'default',
                image:movie.image ?  BASE_URL_MOVIE + movie.image.url : 'default',
                trailer: movie.trailer ? movie.trailer : movie.trailerLink,
                nameRU: movie.nameRU ? movie.nameRU : 'default',
                nameEN: movie.nameEN ? movie.nameEN : 'default',
                thumbnail: (movie.image && movie.image.formats.thumbnail) ? BASE_URL_MOVIE + movie.thumbnail : 'default',
                movieId: movie.id
            })

        })
            .then(this._getResponseData);
    }
    deleteMovie(id, jwt) {
        return fetch(`${this._address}/movies/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${jwt}`,
            }
        })
            .then(this._getResponseData);
    }
}



const mainApi = new MainApi({
    address: 'http://api.kozhevatov-diploma.nomoredomains.icu'
});
export default mainApi;