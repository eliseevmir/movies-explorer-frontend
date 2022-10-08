import "./MainMovie.css";
import SearchForm from "../SearchForm";
import FilterCheckbox from "../FilterCheckbox";
import MoviesCardList from "../MoviesCardList";

function MainMovie({ children }) {

    return (
        <>
            <main className="movie">
                <SearchForm>
                    <FilterCheckbox />
                </SearchForm>
                <MoviesCardList />
                {children}
            </main>
        </>
    )
}

export default MainMovie;