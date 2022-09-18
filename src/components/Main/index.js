import "./Main.css";
import AboutProject from "../AboutProject";
import Techs from "../Techs";
import AboutMe from "../AboutMe";
import Title from "../Title";
import Promo from "../Promo";

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
            </AboutMe>
        </main>
    );
}

export default Main;
