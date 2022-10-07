import { Link } from "react-router-dom";
import "./Account.css"
import profileIcon from "../../image/icon__profile.svg"

function Account() {

    return (
        <Link to="/profile" className="account">Аккаунт
            <img src={profileIcon} alt="Иконка профиля" className="account__img" />
        </Link>
    )
}

export default Account;
