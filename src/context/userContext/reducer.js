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
                name: "",
                email: "",
                loggedIn: false,
                errorMessage: ""
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