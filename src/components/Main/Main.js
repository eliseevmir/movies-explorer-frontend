import "./Main.css"
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Title from "../Title/Title";

function Main() {
    return (
        <>
            <AboutProject>
                <Title titleText="О проекте" />
            </AboutProject>
            <Techs>
                <Title titleText="Технологии" />
            </Techs>
            <AboutMe>
                <Title titleText="Студент" />
            </AboutMe>
        </>
    );
}

export default Main;
