import { Link } from "react-router-dom";
import "./Authorization.css";

function Authorization() {


    return (
        <div className="authorization">
            <Link to="/signup" className="authorization__registration">Регистрация</Link>
            <button className="authorization__button">Войти</button>
        </div>
    )
}

export default Authorization