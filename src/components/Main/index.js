import "./Main.css";
import AboutProject from "../AboutProject";
import Techs from "../Techs";
import AboutMe from "../AboutMe";
import Title from "../Title";
import Promo from "../Promo";
import Portfolio from "../Portfolio";

function Main() {
    return (
        <main className="main">
            <Promo />
            <AboutProject>
                <Title>О проекте</Title>
            </AboutProject>
            <Techs>
                <Title>Технологии</Title>
            </Techs>
            <AboutMe>
                <Title>Студент</Title>
                <Portfolio />
            </AboutMe>
        </main>
    );
}

export default Main;
