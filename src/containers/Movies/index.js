import Header from "../../components/Header";
import MainMovie from "../../components/MainMovie";
import Footer from "../../components/Footer";
import More from "../../components/More";

function Movies() {

    return (
        <>
            <Header />
            <MainMovie >
                <More />
            </MainMovie>
            <Footer />
        </>
    )
}

export default Movies;