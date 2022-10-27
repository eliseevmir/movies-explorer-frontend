import { useContext, useState } from "react";
import SearchForm from "../SearchForm";
import FilterCheckbox from "../FilterCheckbox";
import MoviesCardList from "../MoviesCardList";
import Block from "../Block";
import { MoviesContext } from "../../context/moviesContext/reducer";
import filmFilter from "../../utils/filmFilter";
import "./SavedMainMovie.css";

function SavedMainMovie() {
    const { state, dispatch } = useContext(MoviesContext);
    const { savedMovies, isShort } = state;
    const [savedQuery, setSavedQuery] = useState(null);

    const movies = filmFilter(savedMovies, { query: savedQuery, isShort });

    function handleOnSearch(query) {
        setSavedQuery(query)
    }

    return (
        <>
            <main className="movie">
                <SearchForm onSearch={handleOnSearch} searchList={true}>
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
                <MoviesCardList movies={movies || []} />
                <Block />
            </main>
        </>
    );
}

export default SavedMainMovie;
