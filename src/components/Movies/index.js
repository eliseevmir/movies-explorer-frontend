import "./Movies.css";
import SearchForm from "../SearchForm";
import MoviesCardList from "../MoviesCardList";
import More from "../More";


function Movies() {

    return (
        <main className="movies">
            <SearchForm />
            <MoviesCardList />
            <More />
        </main>
    )
}

export default Movies;