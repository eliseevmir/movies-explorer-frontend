import "./ButtonCardAdd.css";

function ButtonCardAdd({ onClick, savedMovies }) {

    const className = savedMovies ? "card__button card__button_save" : "card__button"

    return (
        <button type="button" className={className} onClick={onClick}></button>
    )
}

export default ButtonCardAdd;