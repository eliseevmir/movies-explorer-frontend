import "./AboutMe.css";
import photoStudent from "../../image/енот.jpg";
import linkImage from "../../image/list_git_link.svg"

function AboutMe({ children }) {
    return (
        <section className="student">
            {children}
            <div className="student__card">
                <div className="student__info">
                    <h2 className="student__name">Владимир</h2>
                    <h3 className="student__data">Фронтенд-разработчик, 33 года</h3>
                    <p className="student__text">
                        Я родился и живу в Саратове, закончил факультет экономики СГУ. У
                        меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
                        бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
                        Контур». После того, как прошёл курс по веб-разработке, начал
                        заниматься фриланс-заказами и ушёл с постоянной работы.
                    </p>
                    <a
                        className="student__github"
                        href="https://github.com/eliseevmir"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Github
                    </a>
                </div>
                <img className="student__photo" src={photoStudent} alt="Фотография студента"></img>
            </div>
            <p className="student__portfolio">Портфолио</p>

            <ul className="student__list">
                <li className="student__list-name">
                    <p className="student__page">Статичный сайт</p>
                    <a
                        className="student__link"
                        href="https://github.com/eliseevmir/how-to-learn"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={linkImage} alt="Ссылка на страницу"></img>
                    </a>
                </li>
                <li className="student__list-name">
                    <p className="student__page">Адаптивный сайт</p>
                    <a
                        className="student__link"
                        href="https://github.com/eliseevmir/russian-travel"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={linkImage} alt="Ссылка на страницу"></img>
                    </a>
                </li>
                <li className="student__list-name">
                    <p className="student__page">Одностраничное приложение</p>
                    <a
                        className="student__link"
                        href="https://github.com/eliseevmir/react-mesto-api-full"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={linkImage} alt="Ссылка на страницу"></img>
                    </a>
                </li>
            </ul>
        </section>
    );
}

export default AboutMe;
