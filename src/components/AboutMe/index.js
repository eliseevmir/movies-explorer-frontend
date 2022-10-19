import "./AboutMe.css";
import photoStudent from "../../image/photo.png";

function AboutMe({ children }) {
    const [title, portfolio] = children;
    return (
        <section className="student">
            {title}
            <div className="student__card">
                <div className="student__info">
                    <h2 className="student__name">Владимир</h2>
                    <h3 className="student__data">Веб-разработчик, 33 года</h3>
                    <p className="student__text">
                        Я живу в городе Екатеринбург, имею опыт в сфере продаж, недавно
                        начал изучать программирование, планирую сменить работу и
                        развиваться в IT индустрии. Увлекаюсь биохимией и биомеханикой
                        человеческого организма. Есть сертификат нутрициолога и диплом
                        фитнес-тренера. С интересом погружаюсь во все новое, люблю различные
                        задачи и находить пути для их решения.
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
                <img
                    className="student__photo"
                    src={photoStudent}
                    alt="Фотография студента"
                ></img>
            </div>
            {portfolio}
        </section>
    );
}

export default AboutMe;
