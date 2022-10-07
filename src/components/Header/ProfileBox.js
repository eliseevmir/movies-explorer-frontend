import { Link } from "react-router-dom";
import "./ProfileBox.css"
import profileIcon from "../../image/icon__profile.svg";
import useMediaQuery from "../../utils/useMediaQuery";
import BurgerMenu from "../BurgerMenu";

function ProfileBox() {

    const is768 = useMediaQuery("(max-width:768px)");

    return (
        <>
            {
                is768 ? (<BurgerMenu />) : (<Link to="/profile" className="account">Аккаунт
                    <img src={profileIcon} alt="Иконка профиля" className="account__img" />
                </Link>)}
        </>

    )
}

export default ProfileBox;