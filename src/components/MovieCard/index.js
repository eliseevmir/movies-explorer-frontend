import { useContext, useMemo } from "react";
import { MoviesContext } from "../../context/moviesContext/reducer";
import { useLocation } from "react-router-dom";
import ButtonCardAdd from "../ButtonCardAdd";
import ButtonCardDelete from "../ButtonCardDelete";
import { APISERVERHOSTNAME } from "../../utils/constant";
import "./MoviesCard.css";

function MovieCard(item) {
    const { state, dispatch } = useContext(MoviesContext);
    const { savedMovies } = state;

    const isSaved = useMemo(() => {
        return (
            savedMovies.find((movie) => {
                return movie.movieId === item.id;
            }) || false
        );
    }, [savedMovies, item.id]);

    const { pathname } = useLocation();

    const { duration, trailerLink, nameRU } = item;

    const hours = Math.floor(duration / 60);
    const minutes = duration - hours * 60;

    function toggleSaveMovie() {
        if (isSaved) {
            const mongoId = savedMovies.find((movie) => {
                return movie.movieId === item.id;
            });
            if (mongoId) {
                dispatch({
                    type: "deleteMovie",
                    payload: mongoId,
                });
            }
        } else {
            dispatch({
                type: "saveMovie",
                payload: item,
            });
        }
    }

    const imageSrc =
        typeof item.image === "string"
            ? `${item.image}`
            : `${APISERVERHOSTNAME}${item.image.url}`;

    function deleteSavedMovie() {
        dispatch({
            type: "deleteMovie",
            payload: item,
        });
    }

    return (
        <li className="card__movie">
            <div className="card__info">
                <div className="card__block">
                    <h2 className="card__name">{nameRU}</h2>
                    <span className="card__duration">{`${hours} ч ${minutes} м`}</span>
                </div>
                {pathname === "/saved-movies" ? (
                    <ButtonCardDelete onClick={deleteSavedMovie} />
                ) : (
                    <ButtonCardAdd onClick={toggleSaveMovie} savedMovies={isSaved} />
                )}
            </div>
            <a target="_blank" href={trailerLink} rel="noreferrer">
                <img
                    className="card__image"
                    src={imageSrc}
                    alt="Изображение карточки"
                ></img>
            </a>
        </li>
    );
}

export default MovieCard;
