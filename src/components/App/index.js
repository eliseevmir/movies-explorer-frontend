import { Route, Routes } from "react-router-dom";
import StartPage from "../../containers/StartPage";
import Movies from "../../containers/Movies";
import SaveMovie from "../../containers/SaveMovie";
import Profile from "../../containers/Profile";
import Register from "../../containers/Register";
import Login from "../../containers/Login";
import NotFoundPage from "../NotFoundPage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<StartPage />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/saved-movies" element={<SaveMovie />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/signin" element={<Login />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
}

export default App;
