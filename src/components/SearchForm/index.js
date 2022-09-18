import "./SearchForm.css";
import searchButton from "../../image/search__button.svg"

function SearchForm() {

    return (

        <section className="search">
            <div className="search__block">
                <input className="search__input" placeholder="Фильм" type="text"></input>
                <img src={searchButton} alt="Кнопка поиска" />
            </div>
            <div className="search__check">
                <input className="search__checkbox" type="checkbox"></input>
                <span className="search__text">Короткометражки</span>
            </div>
        </section>

    )
}

export default SearchForm;