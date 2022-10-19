import { Link, useNavigate } from "react-router-dom";
import "./Authorization.css";

function Authorization() {

    const navigate = useNavigate();

    return (
        <div className="authorization">
            <Link to="/signup" className="authorization__registration">Регистрация</Link>
            <button className="authorization__button" onClick={() => { navigate("/signin") }}>Войти</button>
        </div>
    )
}

export default Authorization