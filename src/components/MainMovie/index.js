import {
  useEffect,
  useMemo,
  useCallback,
  useRef,
  useContext,
  useState,
} from "react";
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
import filmFilter from "../../utils/filmFilter";

function MainMovie() {
  const { state, dispatch } = useContext(MoviesContext);
  const { pending, hasError, isShort, query, allMovies } = state;

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

  const [filteredMovies, setFilteredMovies] = useState([]);
  // filmFilter(allMovies, { query, isShort })

  const [currentPage, setCurrentPage] = useState(1);
  const onResizeTimeOutRef = useRef(null);

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

  useEffect(() => {
    if (!allMovies.length) {
      return;
    }
    dispatch({
      type: "setState",
      payload: {
        query,
      },
    });

    if (!query) {
      return;
    }
    setFilteredMovies(filmFilter(allMovies, { query, isShort }));
  }, [query, allMovies, dispatch, isShort]);

  const [dispalyPerPage, loadPerPage] = getPerPage();

  const hasMore = useMemo(() => {
    return dispalyPerPage * currentPage < filteredMovies.length;
  }, [currentPage, dispalyPerPage, filteredMovies.length]);

  const moviesSlice = useMemo(() => {
    return currentPage === 1
      ? dispalyPerPage
      : dispalyPerPage + loadPerPage * (currentPage - 1);
  }, [currentPage, dispalyPerPage, loadPerPage]);

  async function handleOnSearch(query) {
    if (!allMovies.length) {
      try {
        dispatch({
          type: "setPending",
          payload: true,
        });
        const moviesResponse = await apiMovie.getMovies();
        dispatch({
          type: "setState",
          payload: {
            allMovies: moviesResponse,
            query,
            hasError: false,
            pending: false,
          },
        });
      } catch (e) {
        console.error(e);
        dispatch({
          type: "setState",
          payload: {
            hasError: true,
            pending: false,
          },
        });
      }
    } else {
      dispatch({
        type: "setState",
        payload: {
          query,
        },
      });
    }
  }

  const movies = filteredMovies.slice(0, moviesSlice);
  const notFound = useMemo(() => {
    return !movies.length && !hasError && !!allMovies.length && query;
  }, [hasError, movies.length, allMovies, query]);

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
        {!pending && (
          <MoviesCardList
            movies={movies}
          />
        )}
        {notFound && <MoviesListNotFound />}
        {hasError && <MoviesListError />}
        {hasMore ? (
          <More onClick={() => setCurrentPage((n) => n + 1)} />
        ) : (
          <Block />
        )}
      </main>
    </>
  );
}

export default MainMovie;
