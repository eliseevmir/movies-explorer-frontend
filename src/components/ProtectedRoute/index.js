import { Navigate } from "react-router-dom";
import { useEffect, useContext, useState } from "react";
import { CurrentUserContext } from "../../context/userContext/CurrentUserContext";
import * as mainApi from "../../utils/MainApi";

function ProtectedRoute({ component: Component }) {
    const { dispatch } = useContext(CurrentUserContext);
    const [status, setStatus] = useState("pending"); // [pending, signet, notsignet, failed]

    useEffect(() => {
        const jwt = localStorage.getItem("token");

        if (jwt) {
            mainApi
                .getUserData(jwt)
                .then((res) => {
                    dispatch({
                        type: "setUserData",
                        payload: {
                            loggedIn: true,
                            name: res.name,
                            email: res.email,
                        },
                    });
                    setStatus("signet");
                })
                .catch((res) => {
                    console.error(res);
                    setStatus("failed");
                });
        } else {
            setStatus("notsignet");
        }
    }, [dispatch, status]);

    switch (status) {
        case "pending":
            return <>loading...</>;

        case "signet":
            return <Component />;

        case "nosignet":
            return <Navigate to="/signup" />;

        case "failed":
        default:
            return <Navigate to="/signup" />;
    }
}

export default ProtectedRoute;
