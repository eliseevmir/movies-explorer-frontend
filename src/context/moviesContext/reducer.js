import { createContext } from "react";
import storage from "../../utils/Storage";
import * as movies from "../../utils/MainApi";
import { APISERVERHOSTNAME } from "../../utils/constant";

export const defaultStateMovies = {
    displayMovies: [],
    cardShow: [12, 3],
    pending: false,
    hasError: false,
    savedMovies: [],
    movies: [],
    query: null,
    savedQuery: null,
    isShort: false,
};

export function reducer(state, action) {
    switch (action.type) {
        case "setState": {
            const newState = { ...state, ...action.payload };
            storage.setItem("movies", newState.movies);
            storage.setItem("query", newState.query);
            storage.setItem("savedQuery", newState.savedQuery);
            storage.setItem("isShort", newState.isShort);
            return newState;
        }

        case "saveMovie": {
            const {
                country,
                director,
                duration,
                year,
                image,
                description,
                trailerLink,
                nameRU,
                nameEN,
                id,
            } = action.payload;
            const movieData = {
                country,
                director,
                duration,
                year,
                description,
                trailerLink,
                nameRU,
                nameEN,
                movieId: id,
                thumbnail: `${APISERVERHOSTNAME}${image.formats.thumbnail.url}`,
                image: `${APISERVERHOSTNAME}${image.url}`,
            };

            const savedMovies = [...(state.savedMovies || [])].concat([movieData]);
            const newState = { ...state, savedMovies: [...new Set(savedMovies)] };
            movies.postSaveMovies(movieData);
            return newState;
        }

        case "deleteMovie": {
            const savedMovies = [...(state.savedMovies || [])].filter((item) => {
                return item.movieId !== action.payload.movieId;
            });
            const newState = { ...state, savedMovies };
            movies.deleteSaveMovies(action.payload.movieId);
            return newState;
        }

        case "setPending":
            return { ...state, pending: action.payload };
        default:
            return state;
    }
}

export const MoviesContext = createContext(defaultStateMovies);
