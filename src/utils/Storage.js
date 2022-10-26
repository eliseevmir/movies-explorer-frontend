const storage = {
    getItem: (name) => {
        const storageItem = localStorage.getItem(name);

        if (storageItem === null) {
            return null
        }
        try {
            return JSON.parse(storageItem)
        } catch (e) {
            return null
        }
    },

    setItem: (name, data) => {
        localStorage.setItem(name, JSON.stringify(data))
    },

    resetItem: () => localStorage.removeItem("movies"),
    resetQuery: () => localStorage.removeItem("query"),

    // getToken: () => storage.getItem("token"),

    // setToken: (token) => {
    //     storage.setItem("token", token)
    // },

    // resetToken: () => localStorage.removeItem("token"),

}

export default storage;