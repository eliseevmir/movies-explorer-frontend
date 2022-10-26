import { useContext } from "react";
import SearchForm from "../SearchForm";
import FilterCheckbox from "../FilterCheckbox";
import MoviesCardList from "../MoviesCardList";
import Block from "../Block";
import { MoviesContext } from "../../context/moviesContext/reducer";
import filmFilter from "../../utils/filmFilter";
import "./SavedMainMovie.css";

function SavedMainMovie() {
    const { state, dispatch } = useContext(MoviesContext);
    const { savedMovies, savedQuery, isShort } = state;

    const movies = filmFilter(savedMovies, { query: savedQuery, isShort });

    function handleOnSearch(query) {
        dispatch({
            type: "setState",
            payload: {
                savedQuery: query,
            },
        });
    }

    return (
        <>
            <main className="movie">
                <SearchForm onSearch={handleOnSearch} searchList={true}>
                    <FilterCheckbox
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
                <MoviesCardList movies={movies || []} />
                <Block />
            </main>
        </>
    );
}

export default SavedMainMovie;
