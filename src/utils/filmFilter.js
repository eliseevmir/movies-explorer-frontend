import { DURATIONTIME } from "./constant";

export default function filmFilter(movies, options) {
    const { query, isShort } = { query: "", isShort: false, ...options };

    const querys = String(query || "")
        .split(" ")
        .map((item) =>
            item
                .trim()
                .toLowerCase()
                .replace(/[^a-z0-9A-ZА-Я-]/gi, "")
        );

    return movies
        .filter((movie) => {
            return querys
                .map((query) => {
                    return movie.nameRU.trim().toLowerCase().indexOf(query) !== -1;
                })

                .some(Boolean);
        })
        .filter((movie) => {
            if (!isShort) {
                return true;
            }
            return movie.duration <= DURATIONTIME;
        });
}
