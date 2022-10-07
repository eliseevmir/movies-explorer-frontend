import "./SearchForm.css";

function SearchForm({ children }) {

    return (

        <section className="search">
            <div className="search__block">
                <input className="search__input" placeholder="Фильм" type="text"></input>
                <button type="button" className="search__button" />
            </div>
            {children}
        </section>

    )
}

export default SearchForm;