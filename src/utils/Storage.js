const storage = {
    getItem: (name) => {
        const storageItem = localStorage.getItem(name);

        if (storageItem === null) {
            return null;
        }
        try {
            return JSON.parse(storageItem);
        } catch (e) {
            return null;
        }
    },

    setItem: (name, data) => {
        localStorage.setItem(name, JSON.stringify(data));
    },


    resetItem: (name) => localStorage.removeItem(name)
};

export default storage;
