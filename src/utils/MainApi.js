export const BASE_URL = "https://api.diploma.vb.nomoredomains.sbs";
// export const BASE_URL = "http://localhost:3001";

function getToken() {
    return localStorage.getItem("token") || "";
}

async function checkResponse(res) {
    if (res.ok) return res.json();
    return await Promise.reject(await res.json());
}

export const register = (name, email, password) => {
    return fetch(`${BASE_URL}/signup`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
    }).then(checkResponse);
};

export const authorization = (email, password) => {
    return fetch(`${BASE_URL}/signin`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ password, email }),
    }).then(checkResponse);
};

export const getUserData = (token) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    }).then(checkResponse);
};

export const patchUserData = (name, email) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
        },
        body: JSON.stringify({ name, email }),
    }).then(checkResponse);
};

export const getSaveMovies = () => {
    return fetch(`${BASE_URL}/movies`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
        },
    }).then(checkResponse);
};

export const postSaveMovies = (moviesData) => {
    return fetch(`${BASE_URL}/movies`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
        },
        body: JSON.stringify(moviesData),
    }).then(checkResponse);
};

export const deleteSaveMovies = (idMovies) => {
    return fetch(`${BASE_URL}/movies/${idMovies}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
        },
    }).then(checkResponse);
};
