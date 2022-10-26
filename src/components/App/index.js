import { useReducer } from "react";
import { Route, Routes } from "react-router-dom";
import StartPage from "../../containers/StartPage";
import Movies from "../../containers/Movies";
import SavedMovie from "../../containers/SaveMovie";
import Profile from "../../containers/Profile";
import ProtectedRoute from "../ProtectedRoute";
import Register from "../../containers/Register";
import Login from "../../containers/Login";
import NotFoundPage from "../NotFoundPage";
import reducer from "../../context/userContext/reducer";
import {
    CurrentUserContext,
    currentUser,
} from "../../context/userContext/CurrentUserContext";
import * as mainApi from "../../utils/MainApi";

function App() {
    const [state, dispatch] = useReducer(reducer, currentUser);

    function registerRequest({ name, email, password }) {
        return new Promise((resolve, reject) => {
            mainApi
                .register(name, email, password)
                .then((res) => {
                    const { email } = res;
                    authorizationRequest({ email, password })
                        .then((data) => {
                            resolve(data);
                        })
                        .catch((err) => {
                            reject(err);
                        });
                })
                .catch((err) => {
                    console.log(err);
                    reject(err);
                });
        });
    }

    function authorizationRequest({ password, email }) {
        return new Promise((resolve, reject) => {
            mainApi
                .authorization(email, password)
                .then((data) => {
                    resolve(data);
                })
                .catch((err) => {
                    console.log(err);
                    reject(err);
                });
        });
    }

    return (
        <>
            <CurrentUserContext.Provider value={{ state, dispatch }}>
                <Routes>
                    <Route path="/" element={<StartPage />} />
                    <Route
                        path="/movies"
                        element={<ProtectedRoute component={Movies} />}
                    />
                    <Route
                        path="/saved-movies"
                        element={<ProtectedRoute component={SavedMovie} />}
                    />
                    <Route
                        path="/profile"
                        element={<ProtectedRoute component={Profile} />}
                    />
                    <Route
                        path="/signup"
                        element={<Register onSubmit={(data) => registerRequest(data)} />}
                    />
                    <Route
                        path="/signin"
                        element={<Login onSubmit={(data) => authorizationRequest(data)} />}
                    />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </CurrentUserContext.Provider>
            {/* <PopupAccount isOpen={popupWindow} /> */}
        </>
    );
}

export default App;
