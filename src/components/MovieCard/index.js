import { useLocation } from "react-router-dom";
import "./MoviesCard.css";
import cardPhoto from "../../image/image__poster.png";

function MovieCard() {

    const { pathname } = useLocation();
    const classButton = pathname === "/saved-movies" ? "card__button card__button_close" : "card__button"

    return (
        <li className="card__movie">
            <div className="card__info">
                <div>
                    <h2 className="card__name">Film name</h2>
                    <span className="card__duration">1h 26m</span>
                </div>
                <button type="button" className={classButton}></button>
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
