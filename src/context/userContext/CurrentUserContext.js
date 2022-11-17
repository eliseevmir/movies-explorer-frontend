import React from "react";

export const currentUser = {
    name: "",
    email: "",
    loggedIn: Boolean(localStorage.getItem("token")),
    errorMessage: ""

};

export const CurrentUserContext = React.createContext(currentUser);