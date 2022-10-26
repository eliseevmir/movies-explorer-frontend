import "./MoviesCardList.css";
import MovieCard from "../MovieCard";

function MoviesCardList({ movies }) {
    return (
        <section className="card">
            <ul className="card__list">
                {movies.map((item) => (
                    <MovieCard key={item.id || item.movieId} {...item} />
                ))}
            </ul>
        </section>
    );
}
export default MoviesCardList;
