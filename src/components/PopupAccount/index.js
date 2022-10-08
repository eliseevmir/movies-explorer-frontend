import { Link } from "react-router-dom";
import "./PopupAccount.css";
import Account from "../Account"

function PopupAccount({ isOpen }) {

    const className = `popup ${isOpen ? "popup_opened" : ""}`

    return (
        <>
            <div className={className}>
                <div className="popup__container">
                    <div className="popup__block">
                        <div className="popup__list">
                            <Link to="/" className="popup__link">Главная</Link>
                            <Link to="/movies" className="popup__link">Фильмы</Link>
                            <Link to="/saved-movies" className="popup__link">Сохраненные фильмы</Link>
                        </div>
                        <Account />
                    </div>

                    <button className="popup__button" />
                </div>
            </div>
        </>
    );
}

export default PopupAccount;
