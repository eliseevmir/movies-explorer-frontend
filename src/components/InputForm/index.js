import "./InputForm.css";

function InpurForm({ label, type, name, handleChange, errorText, min, max }) {
    return (
        <label className="form__label">
            {label}
            <input
                type={type}
                name={name}
                className="form__input"
                minLength={min}
                maxLength={max}
                onChange={handleChange}
                required
            />
            <span className="form__error">{errorText || ""}</span>
        </label>
    );
}

export default InpurForm;
