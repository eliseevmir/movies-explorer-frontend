import Header from "../../components/Header";
import SavedMainMovie from "../../components/SavedMainMovie";
import Footer from "../../components/Footer";
import MoviesContextProvider from "../../components/MoviesContextProvider";

function SaveMovie() {

    return (
        <MoviesContextProvider>
            <Header />
            <SavedMainMovie />
            <Footer />
        </MoviesContextProvider>
    )
}

export default SaveMovie;