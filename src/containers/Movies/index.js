import Header from "../../components/Header";
import MainMovie from "../../components/MainMovie";
import Footer from "../../components/Footer";
import MoviesContextProvider from "../../components/MoviesContextProvider";

function Movies() {

    return (
        <MoviesContextProvider>
            <Header />
            <MainMovie />
            <Footer />
        </MoviesContextProvider>
    )
}

export default Movies;