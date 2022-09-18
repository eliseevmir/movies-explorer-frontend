import { Link } from "react-router-dom";
import "./Navigation.css"

function Navigation() {

    return (
        <nav className="navigation">
            <Link to="#" className="navigation__films">Фильмы</Link>
            <Link to="#" className="navigation__save-films">Сохраненные фильмы</Link>
        </nav>
    )
}

export default Navigation;