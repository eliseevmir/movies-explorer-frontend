import React from "react";

export const currentUser = {
    name: "",
    email: "",
    loggedIn: false,
    errorMessage: ""

};

export const CurrentUserContext = React.createContext(currentUser);