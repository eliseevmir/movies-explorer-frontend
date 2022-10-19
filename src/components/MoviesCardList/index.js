import "./MoviesCardList.css";
import MovieCard from "../MovieCard";

function MoviesCardList() {
    return (
        <section className="card">
            <ul className="card__list">
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
            </ul>

        </section>
    )
}
export default MoviesCardList;