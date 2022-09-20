
import "./NotFoundPage.css";


function NotFoundPage() {


    return (
        <section className="not-found-err">
            <h1 className="not-found-err__status">404</h1>
            <span className="not-found-err__text">Страница не найдена</span>
            <button className="not-found-err__button" >Назад</button>
        </section>
    )
}

export default NotFoundPage;