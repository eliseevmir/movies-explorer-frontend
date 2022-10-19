import { useLocation } from "react-router-dom";
import Header from "../../components/Header";
import MainMovie from "../../components/MainMovie";
import Footer from "../../components/Footer";
import More from "../../components/More";
import Block from "../../components/Block";

function Movies() {

    const { pathname } = useLocation();

    return (
        <>
            <Header />
            <MainMovie >
                {pathname === "/movies" ? <More /> : <Block />}
            </MainMovie>
            <Footer />
        </>
    )
}

export default Movies;