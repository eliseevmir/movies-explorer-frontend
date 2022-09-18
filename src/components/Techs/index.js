import "./Techs.css";

function Techs({ children }) {
    return (
        <section className="techs">
            {children}
            <h2 className="techs__title">7 технологий</h2>
            <p className="techs__text">
                На курсе веб-разработки мы освоили технологии, которые применили в
                дипломном проекте.
            </p>
            <ul className="techs__list">
                <li className="techs__steck">
                    <p className="techs__name">HTML</p>
                </li>
                <li className="techs__steck">
                    <p className="techs__name">CSS</p>
                </li>
                <li className="techs__steck">
                    <p className="techs__name">JS</p>
                </li>
                <li className="techs__steck">
                    <p className="techs__name">React</p>
                </li>
                <li className="techs__steck">
                    <p className="techs__name">Git</p>
                </li>
                <li className="techs__steck">
                    <p className="techs__name">Express.js</p>
                </li>
                <li className="techs__steck">
                    <p className="techs__name">mongoDB</p>
                </li>
            </ul>
        </section>
    );
}

export default Techs;
