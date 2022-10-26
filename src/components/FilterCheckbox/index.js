import "./FilterCheckbox.css";

function FilterCheckbox({ onChange }) {
    return (
        <div className="search__check">
            <input
                className="search__checkbox"
                type="checkbox"
                onChange={(e) => {
                    onChange(e.currentTarget.checked);
                }}
            ></input>
            <span className="search__text">Короткометражки</span>
        </div>
    );
}
export default FilterCheckbox;
