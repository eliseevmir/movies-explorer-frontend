import "./Authorization.css";
import ProfileBox from "./ProfileBox";
import NotAuthBox from "./NotAuthBox";

function Authorization() {

    // Логика авторизации реализуется в следующем этапе дипломной работы
    const isAuth = true;

    return (
        <div className="authheader">
            {isAuth && <ProfileBox />}
            {!isAuth && <NotAuthBox />}
        </div>
    )
}

export default Authorization;