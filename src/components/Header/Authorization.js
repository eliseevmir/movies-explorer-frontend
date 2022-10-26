import { useContext } from "react";
import "./Authorization.css";
import ProfileBox from "./ProfileBox";
import NotAuthBox from "./NotAuthBox";
import { CurrentUserContext } from "../../context/userContext/CurrentUserContext";

function Authorization() {
    const { state } = useContext(CurrentUserContext);
    const { loggedIn } = state;

    return (
        <div className="authheader">
            {loggedIn && <ProfileBox />}
            {!loggedIn && <NotAuthBox />}
        </div>
    );
}

export default Authorization;
