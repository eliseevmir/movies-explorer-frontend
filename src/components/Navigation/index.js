import { Link } from "react-router-dom";
import "./Navigation.css"

function Navigation() {

    return (
        <nav className="navigation">
            <Link to="/movies" className="navigation__films">Фильмы</Link>
            <Link to="/saved-movies" className="navigation__save-films">Сохраненные фильмы</Link>
        </nav>
    )
}

export default Navigation;