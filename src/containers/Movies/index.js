import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import Account from "../../components/Account";
import MainMovie from "../../components/MainMovie";
import Footer from "../../components/Footer";
import More from "../../components/More";

function Movies() {

    return (
        <>
            <Header className="header header__color-white">
                <Navigation />
                <Account />
            </Header>
            <MainMovie >
                <More />
            </MainMovie>
            <Footer />
        </>
    )
}

export default Movies;