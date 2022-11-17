import { Link } from "react-router-dom";
import "./Header.css";
import ContentArea from "../ContentArea";
import Navigation from "../Navigation";
import Authorization from "./Authorization";

function Header({ variant }) {
    const color = variant === "grey" ? "grey" : "white";
    const className = `header header__color-${color}`;

    return (
        <header className={className}>
            <ContentArea>
                <div className="header__block">
                    <Link to="/" className="header__logo" />
                    <Navigation />
                    <Authorization />
                </div>
            </ContentArea>
        </header>
    );
}

export default Header;
