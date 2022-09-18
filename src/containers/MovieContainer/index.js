import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import Account from "../../components/Account";
import Movies from "../../components/Movies";
import Footer from "../../components/Footer";


function MovieContainer() {

    return (
        <>
            <Header className="header header__color-white">
                <Navigation />
                <Account />
            </Header>
            <Movies />
            <Footer />
        </>
    )
}

export default MovieContainer;