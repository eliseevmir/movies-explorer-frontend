import { useLocation, matchPath } from "react-router-dom";
import { useMemo, useContext } from "react";
import "./Navigation.css";
import NavLink from "./NavLink";
import useMediaQuery from "../../utils/useMediaQuery";
import { CurrentUserContext } from "../../context/userContext/CurrentUserContext";

function Navigation() {
    const { state } = useContext(CurrentUserContext);
    const { loggedIn } = state;
    const is768 = useMediaQuery("(max-width:768px)");

    const { pathname } = useLocation();
    const navMap = useMemo(() => {
        const pages = [
            {
                link: "/movies",
                label: "Фильмы",
                isActive: matchPath("/movies/*", pathname) !== null,
            },
            {
                link: "/saved-movies",
                label: "Сохраненные фильмы",
                isActive: matchPath("/saved-movies/*", pathname) !== null,
            },
        ];

        return loggedIn ? pages : [];
    }, [pathname, loggedIn]);

    return (
        <>
            {is768 ? null : (
                <nav className="navigation">
                    {navMap.map(({ link, label, isActive }, index) => (
                        <NavLink key={index.toString()} link={link} isActive={isActive}>
                            {label}
                        </NavLink>
                    ))}
                </nav>
            )}
        </>
    );
}

export default Navigation;
