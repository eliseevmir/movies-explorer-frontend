import { useEffect, useReducer, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
    defaultStateMovies,
    reducer,
    MoviesContext,
} from "../../context/moviesContext/reducer";
import { CurrentUserContext } from "../../context/userContext/CurrentUserContext";
import * as movie from "../../utils/MainApi";
import storage from "../../utils/Storage";

function MainContextRender({ savedMovies, children }) {
    const defaultState = {
        ...defaultStateMovies,
        savedMovies,
        allMovies: storage.getItem("allMovies") || [],
        query: storage.getItem("query"),
        isShort: Boolean(storage.getItem("isShort")),
        isShortSavedMovies: storage.getItem("isShortSavedMovies"),
    };
    const [state, dispatch] = useReducer(reducer, defaultState);

    return (
        <MoviesContext.Provider value={{ state, dispatch }}>
            {children}
        </MoviesContext.Provider>
    );
}

function MoviesContextProvider({ children }) {
    const { dispatch } = useContext(CurrentUserContext);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [preloadedData, setPreloadedData] = useState({});

    useEffect(() => {
        movie.getSaveMovies().then((savedMovies) => {
            setPreloadedData({ savedMovies });
            setLoading(false);
        })
            .catch(err => {
                err.message === "Необходима авторизация" &&
                    dispatch({
                        type: "setLogged",
                        action: false
                    })
                setLoading(false);
                navigate("/");
                storage.resetItem("query");
                storage.resetItem("isShort");
                localStorage.removeItem("token")
            })
    }, [dispatch, navigate]);

    if (loading) {
        return <>loading</>;
    }

    return <MainContextRender {...preloadedData}>{children}</MainContextRender>;
}

export default MoviesContextProvider;
