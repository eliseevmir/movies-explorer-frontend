import { Route, Routes } from "react-router-dom";
import StartPage from "../../containers/StartPage";
import Movies from "../../containers/Movies";
import Profile from "../../containers/Profile";
import Register from "../../containers/Register";
import Login from "../../containers/Login";
import NotFoundPage from "../NotFoundPage";
import PopupAccount from "../PopupAccount";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<StartPage />} />
                <Route path="/movies" element={<Movies />} />
                <Route path="/saved-movies" element={<Movies />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/signup" element={<Register />} />
                <Route path="/signin" element={<Login />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
            <PopupAccount isOpen={false} />
        </>

    );
}

export default App;
