import { useContext, useState } from "react";
import SearchForm from "../SearchForm";
import FilterCheckbox from "../FilterCheckbox";
import MoviesCardList from "../MoviesCardList";
import Block from "../Block";
import { MoviesContext } from "../../context/moviesContext/reducer";
import filmFilter from "../../utils/filmFilter";
import "./SavedMainMovie.css";

function SavedMainMovie() {
    const { state } = useContext(MoviesContext);
    const { savedMovies } = state;
    const [isShort, setIsShort] = useState(false)
    const [query, setQuery] = useState(null);

    const movies = filmFilter(savedMovies, { query, isShort });



    return (
        <>
            <main className="movie">
                <SearchForm onSearch={(str) => setQuery(str)} searchList={true}>
                    <FilterCheckbox
                        value={isShort}
                        onChange={(checked) => setIsShort(checked)}
                    />
                </SearchForm>
                <MoviesCardList movies={movies || []} />
                <Block />
            </main>
        </>
    );
}

export default SavedMainMovie;
