import "./AuthHeader.css";
import logo from "../../image/logo.svg"

function AuthHeader({ children }) {

    return (
        <header className="auth-header">
            <img className="header__logo" src={logo} alt="Логотп" />
            <h1 className="header__text">{children}</h1>
        </header>
    )
}

export default AuthHeader;