const BASE_URL = "https://api.nomoreparties.co/beatfilm-movies";

class MoviesApi {
    constructor(baseUrl) {
        this._baseUrl = baseUrl;
    }

    getMoviesOnSearch() {
        return new Promise((resolve, reject) => {
            fetch(this._baseUrl, {
                method: "GET"
            }).then(res => res.json())
                .then(movies => {
                    // setTimeout(() => {
                    resolve(movies)
                    // }, 2000)
                }).catch(e => {
                    reject(e)
                })
        })
    }


}

export const apiMovie = new MoviesApi(BASE_URL);