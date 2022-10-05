import "./AboutProject.css";

function AboutProject({ children }) {
    return (
        <section className="project">
            {children}
            <div className="project__stage">
                <div className="project__container">
                    <h3 className="project__header">Дипломный проект включал 5 этапов</h3>
                    <p className="project__text">
                        Составление плана, работу над бэкендом, вёрстку, добавление
                        функциональности и финальные доработки.
                    </p>
                </div>
                <div className="project__container">
                    <h3 className="project__header">
                        На выполнение диплома ушло 5 недель
                    </h3>
                    <p className="project__text">
                        У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
                        соблюдать, чтобы успешно защититься.
                    </p>
                </div>
            </div>
            <div className="project__duration">
                <div className="project__one-week">
                    <p className="project__week">1 неделя</p>
                </div>
                <div className="project__four-week">
                    <p className="project__week">4 недели</p>
                </div>
                <p className="project__dev">Back-end</p>
                <p className="project__dev">Front-end</p>
            </div>
        </section>
    );
}

export default AboutProject;
