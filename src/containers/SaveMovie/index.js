import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import Account from "../../components/Account";
import MainMovie from "../../components/MainMovie";
import Block from "../../components/Block"
import Footer from "../../components/Footer";


function SaveMovie() {

    return (
        <>
            <Header className="header header__color-white">
                <Navigation />
                <Account />
            </Header>
            <MainMovie >
                <Block />
            </MainMovie>
            <Footer />
        </>
    )
}

export default SaveMovie;