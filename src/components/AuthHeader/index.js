import "./AuthHeader.css";
import logo from "../../image/logo.svg"
import { Link } from "react-router-dom";

function AuthHeader({ children }) {

    return (
        <header className="auth-header">
            <Link to="/"><img className="header__logo" src={logo} alt="Логотп" /></Link>
            <h1 className="header__text">{children}</h1>
        </header>
    )
}

export default AuthHeader;