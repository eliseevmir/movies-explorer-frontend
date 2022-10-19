import "./SearchForm.css";

function SearchForm({ children }) {

    return (

        <section className="search">
            <form className="search__block">
                <input className="search__input" placeholder="Фильм" type="text" required></input>
                <button type="submit" className="search__button" />
            </form>
            {children}
        </section>

    )
}

export default SearchForm;