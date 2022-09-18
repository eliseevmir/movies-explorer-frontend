import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard";

function MoviesCardList() {

    return (
        <section className="card">
            <ul className="card__list">
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />

            </ul>

        </section>
    )
}
export default MoviesCardList;