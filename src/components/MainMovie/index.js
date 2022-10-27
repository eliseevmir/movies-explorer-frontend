import { useEffect, useMemo, useCallback, useRef, useContext } from "react";
import "./MainMovie.css";
import SearchForm from "../SearchForm";
import FilterCheckbox from "../FilterCheckbox";
import MoviesCardList from "../MoviesCardList";
import MoviesListError from "../MoviesListError";
import More from "../More";
import Block from "../Block";
import Preloader from "../Preloader";
import MoviesListNotFound from "../MoviesListNotFound";
import { MoviesContext } from "../../context/moviesContext/reducer";
import { apiMovie } from "../../utils/MoviesApi";
import { DURATIONTIME } from "../../utils/constant";

function MainMovie() {
    const { state, dispatch } = useContext(MoviesContext);

    const getPerPage = useCallback(() => {
        const mediaScreen = window.screen.width;
        switch (true) {
            case mediaScreen >= 1280:
                return [12, 3];
            case mediaScreen >= 480:
                return [8, 2];
            case mediaScreen < 480:
                return [5, 2];
            default:
                return [12, 3];
        }
    }, []);

    const { movies, displayMovies, cardShow, pending, hasError, isShort } = state;

    const listMovies = displayShowShort(displayMovies, movies, isShort);

    const onResizeTimeOutRef = useRef(null);

    useEffect(() => {
        dispatch({
            type: "setState",
            payload: {
                displayMovies: [...(movies || [])].slice(0, cardShow[0]),
            },
        });
    }, [movies, cardShow, dispatch]);

    useEffect(() => {
        const onWindowResize = () => {
            if (onResizeTimeOutRef.current) {
                clearTimeout(onResizeTimeOutRef.current);
            }

            onResizeTimeOutRef.current = setTimeout(() => {
                dispatch({
                    type: "setState",
                    payload: {
                        cardShow: getPerPage(),
                    },
                });
            }, 250);
        };
        window.addEventListener("resize", onWindowResize);
        return () => {
            window.removeEventListener("resize", onWindowResize);
        };
    }, [getPerPage, dispatch]);

    const displayShowMore = useMemo(() => {
        return (
            displayMovies &&
            movies &&
            movies.length > displayMovies.length &&
            !isShort
        );
    }, [displayMovies, movies, isShort]);

    function handleShowMore() {
        const startMovies = displayMovies ? displayMovies.length : 0;
        dispatch({
            type: "setState",
            payload: {
                displayMovies: [...(movies || [])].slice(0, startMovies + cardShow[1]),
            },
        });
    }

    async function handleOnSearch(query) {
        dispatch({
            type: "setPending",
            payload: true,
        });

        apiMovie
            .getMoviesOnSearch()
            .then((movies) => {
                const querys = String(query || "")
                    .split(" ")
                    .map((item) =>
                        item
                            .trim()
                            .toLowerCase()
                            .replace(/[^a-z0-9A-ZА-Я-]/gi, "")
                    );

                return movies.filter((movie) => {
                    return querys
                        .map((query) => {
                            return movie.nameRU.trim().toLowerCase().indexOf(query) !== -1;
                        })

                        .some(Boolean);
                });
            })
            .then((movies) => {
                dispatch({
                    type: "setState",
                    payload: {
                        movies,
                        pending: false,
                        query,
                    },
                });
            })
            .catch((err) => {
                dispatch({
                    type: "setState",
                    payload: {
                        hasError: true,
                        pending: false,
                        displayMovies: null,
                    },
                });
                console.error(err);
            });
    }

    const notFound = useMemo(() => {
        return (
            !pending &&
            !hasError &&
            movies !== null &&
            displayMovies !== null &&
            displayMovies.length === 0
        );
    }, [displayMovies, pending, hasError, movies]);

    function displayShowShort(displayMoviesList, moviesList, isShort) {
        if (!isShort) {
            return displayMoviesList;
        }

        return [...moviesList || []].filter((movie) => {
            return movie.duration <= DURATIONTIME;
        });
    }

    return (
        <>
            <main className="movie">
                <SearchForm onSearch={handleOnSearch} pending={pending}>
                    <FilterCheckbox
                        value={isShort}
                        onChange={(checked) => {
                            dispatch({
                                type: "setState",
                                payload: {
                                    isShort: checked,
                                },
                            });
                        }}
                    />
                </SearchForm>
                {pending && <Preloader />}
                {!pending && displayMovies && <MoviesCardList movies={listMovies} />}
                {notFound && <MoviesListNotFound />}
                {hasError && <MoviesListError />}
                {displayShowMore ? <More onClick={handleShowMore} /> : <Block />}
            </main>
        </>
    );
}

export default MainMovie;
