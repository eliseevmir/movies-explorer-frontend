import { useEffect, useReducer, useState } from "react";
import {
    defaultStateMovies,
    reducer,
    MoviesContext,
} from "../../context/moviesContext/reducer";
import * as movie from "../../utils/MainApi";
import storage from "../../utils/Storage";

function MainContextRender({ savedMovies, children }) {
    const defaultState = {
        ...defaultStateMovies,
        savedMovies,
        movies: storage.getItem("movies"),
        query: storage.getItem("query"),
        savedQuery: storage.getItem("savedQuery"),
        isShort: storage.getItem("isShort")
    };
    const [state, dispatch] = useReducer(reducer, defaultState);

    return (
        <MoviesContext.Provider value={{ state, dispatch }}>
            {children}
        </MoviesContext.Provider>
    );
}

function MoviesContextProvider({ children }) {
    const [loading, setLoading] = useState(true);
    const [preloadedData, setPreloadedData] = useState({});

    useEffect(() => {
        movie.getSaveMovies().then((savedMovies) => {
            setPreloadedData({ savedMovies });
            setLoading(false);
        });
    }, []);

    if (loading) {
        return <>loading</>;
    }

    return <MainContextRender {...preloadedData}>{children}</MainContextRender>;
}

export default MoviesContextProvider;
