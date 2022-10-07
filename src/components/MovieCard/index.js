import "./MoviesCard.css";
import cardPhoto from "../../image/image__poster.png";

function MovieCard() {
    return (
        <li className="card__movie">
            <div className="card__info">
                <div>
                    <h2 className="card__name">Film name</h2>
                    <span className="card__duration">1h 26m</span>
                </div>
                <button className="card__button"></button>
            </div>
            <img
                className="card__image"
                src={cardPhoto}
                alt="Изображение карточки"
            ></img>

        </li>
    );
}

export default MovieCard;
