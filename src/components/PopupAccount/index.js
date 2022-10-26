import { useNavigate } from "react-router-dom";
import "./PopupAccount.css";
import Account from "../Account"

function PopupAccount({ isOpen, onRequestClose }) {

    const className = `popup ${isOpen ? "popup_opened" : ""}`

    const navigate = useNavigate()
    const handleLocation = (event) => {
        event.preventDefault()
        navigate(event.target.getAttribute('href'))
        onRequestClose()
    }

    return (
        <>
            <div className={className}>
                <div className="popup__overlay" onClick={onRequestClose} />
                <div className="popup__container">
                    <div className="popup__block">
                        <div className="popup__list">
                            <a onClick={handleLocation} className="popup__link" href="/movies">Фильмы</a>
                            <a onClick={handleLocation} className="popup__link" href="/">Главная</a>
                            <a onClick={handleLocation} className="popup__link" href="/saved-movies">Сохраненные фильмы</a>
                        </div>
                        <Account />
                    </div>

                    <button type="button" className="popup__button" onClick={onRequestClose} />
                </div>
            </div>
        </>
    );
}

export default PopupAccount;
