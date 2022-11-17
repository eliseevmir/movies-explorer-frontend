import "./ButtonCardDelete.css";

function ButtonCardDelete({ onClick }) {

    return (
        <button type="button" className="card__button-delete" onClick={onClick}></button>
    )
}

export default ButtonCardDelete;