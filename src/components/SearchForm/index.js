import "./SearchForm.css";
import searchButton from "../../image/search__button.svg"

function SearchForm({ children }) {

    return (

        <section className="search">
            <div className="search__block">
                <input className="search__input" placeholder="Фильм" type="text"></input>
                <img src={searchButton} alt="Кнопка поиска" />
            </div>
            {children}
        </section>

    )
}

export default SearchForm;