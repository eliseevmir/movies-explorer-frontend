import "./Footer.css";
import ContentArea from "../ContentArea";

function Footer() {
    return (
        <>
            <footer className="footer">
                <ContentArea>
                    <p className="footer__text">
                        Учебный проект Яндекс.Практикум х BeatFilm.
                    </p>
                    <div className="footer__info">
                        <span className="footer__year">© 2022</span>
                        <div>
                            <a
                                href="https://practicum.yandex.ru/"
                                className="footer__school"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Яндекс.Практикум
                            </a>
                            <a
                                className="footer__link"
                                href="https://github.com/eliseevmir"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Github
                            </a>
                        </div>
                    </div>
                </ContentArea>
            </footer>
        </>
    );
}

export default Footer;
