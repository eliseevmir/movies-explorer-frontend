import { currentUser } from "./CurrentUserContext";

const reducer = (state, action) => {
    switch (action.type) {
        case "setUserData": {
            return {
                ...state,
                ...action.payload,
            };
        }
        case "setLogged": {
            return {
                ...state,
                loggedIn: action.payload,
            };
        }

        case "signOut": {
            return {
                ...currentUser,
            };
        }

        case "setErrorMessage": {
            return {
                ...state,
                errorMessage: action.payload
            }
        }

        default:
            return state;
    }
};

export default reducer;