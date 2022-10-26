import { useState } from "react";
import "./SearchForm.css";
import storage from "../../utils/Storage";

function SearchForm({ children, onSearch, pending, searchList }) {
    const [searchData, setSearchData] = useState(
        searchList
            ? storage.getItem("savedQuery") || ""
            : storage.getItem("query") || ""
    );
    const disabled = pending ? true : false;

    const handleChange = (e) => {
        setSearchData(e.currentTarget.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(searchData.trim());
    };


    return (
        <section className="search">
            <form className="search__block" onSubmit={handleSubmit}>
                <input
                    className="search__input"
                    placeholder="Фильм"
                    type="text"
                    required
                    onChange={handleChange}
                    value={searchData}
                    disabled={disabled}
                ></input>
                <button type="submit" className="search__button" disabled={disabled} />
            </form>
            {children}
        </section>
    );
}

export default SearchForm;
