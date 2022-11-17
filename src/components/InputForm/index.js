import "./InputForm.css";

function InpurForm({ label, type, name, handleChange, errorText, min, max, disabled }) {
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
                disabled={disabled}
            />
            <span className="form__error">{errorText || ""}</span>
        </label>
    );
}

export default InpurForm;
