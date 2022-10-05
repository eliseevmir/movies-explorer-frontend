import { Link } from "react-router-dom";
import "./Header.css";
import ContentArea from "../ContentArea";
import headerLogo from "../../image/logo.svg"


function Header({ children, className }) {

    return (
        <header className={className}>
            <ContentArea>
                <div className="header__block">
                    <Link to="/">
                        <img src={headerLogo} alt="Логотип" />
                    </Link>
                    {children}
                </div>
            </ContentArea>
        </header>
    )
}

export default Header;