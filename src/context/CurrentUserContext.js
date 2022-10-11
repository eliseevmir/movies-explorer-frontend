import React from "react";

export const defaultUserState = {
    name: "",
    email: "",
    loggedIn: false,
};

export const CurrentUserContext = React.createContext(defaultUserState);