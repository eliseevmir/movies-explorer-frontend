import "./Portfolio.css";
import linkImage from "../../image/link__git.svg"

function Portfolio() {

    return (
        <>
            <p className="portfolio">Портфолио</p>

            <ul className="portfolio__list">
                <li className="portfolio__list-name">
                    <p className="portfolio__page">Статичный сайт</p>
                    <a
                        className="portfolio__link"
                        href="https://github.com/eliseevmir/how-to-learn"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={linkImage} alt="Ссылка на страницу" className="portfolio__image"></img>
                    </a>
                </li>
                <li className="portfolio__list-name">
                    <p className="portfolio__page">Адаптивный сайт</p>
                    <a
                        className="portfolio__link"
                        href="https://github.com/eliseevmir/russian-travel"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={linkImage} alt="Ссылка на страницу" className="portfolio__image"></img>
                    </a>
                </li>
                <li className="portfolio__list-name">
                    <p className="portfolio__page">Одностраничное приложение</p>
                    <a
                        className="portfolio__link"
                        href="https://github.com/eliseevmir/react-mesto-api-full"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={linkImage} alt="Ссылка на страницу" className="portfolio__image"></img>
                    </a>
                </li>
            </ul></>
    )
}

export default Portfolio;