import "./MoviesListError.css";

function MoviesListError() {
    return (
        <p className="card__request-error">Во время запроса произошла ошибка. Возможно, проблема с соединением или
            сервер недоступен. Подождите немного и попробуйте ещё раз</p>
    );
}

export default MoviesListError;