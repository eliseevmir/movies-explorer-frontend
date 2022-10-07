import { Link } from "react-router-dom";
import "./NavLink.css"

function NavLink({ children, link, isActive }) {

    return (
        <Link to={link} className={`navigation__link ${isActive ? "navigation__link_active" : ""}`}>{children}</Link>
    )
}

export default NavLink