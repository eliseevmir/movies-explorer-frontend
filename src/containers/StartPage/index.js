import Header from "../../components/Header";
import Main from "../../components/Main";
import Footer from "../../components/Footer";
import Authorization from "../../components/Authorization";

function StartPage() {
    return (
        <>
            <Header className="header header__color-grey">
                <Authorization />
            </Header>
            <Main />
            <Footer />
        </>
    );
}

export default StartPage;
