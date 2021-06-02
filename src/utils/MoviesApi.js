export const BASE_URL_MOVIE = "https://api.nomoreparties.co";

class MoviesApi {
    constructor({
        address
    }) {
        this._address = address;
    }
    _getResponseData(res) {
        if (!res.ok) {
            return Promise.reject(`Ошибка: ${res.status}`)
        }
        return res.json();
    }
    getMovies() {
        return fetch(`${this._address}`, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(this._getResponseData);

    }

}

const moviesApi = new MoviesApi({
    address: `${BASE_URL_MOVIE}/beatfilm-movies`
});
export default moviesApi;