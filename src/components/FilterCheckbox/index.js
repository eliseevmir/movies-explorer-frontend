import { useState } from "react";
import "./FilterCheckbox.css";

function FilterCheckbox({ onChange, value }) {
    const [state, setState] = useState(value);
    return (
        <div className="search__check">
            <input
                checked={state}
                className="search__checkbox"
                type="checkbox"
                onChange={(e) => {
                    onChange(e.currentTarget.checked);
                    setState(e.currentTarget.checked);
                }}
            />
            <span className="search__text">Короткометражки</span>
        </div>
    );
}
export default FilterCheckbox;
