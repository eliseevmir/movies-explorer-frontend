import { useNavigate } from "react-router-dom";
import "./NotFoundPage.css";

function NotFoundPage() {
    const navigate = useNavigate();

    return (
        <section className="not-found-err">
            <h1 className="not-found-err__status">404</h1>
            <span className="not-found-err__text">Страница не найдена</span>
            <button className="not-found-err__button" onClick={() => navigate(-1)}>
                Назад
            </button>
        </section>
    );
}

export default NotFoundPage;
