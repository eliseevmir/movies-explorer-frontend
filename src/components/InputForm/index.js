import "./InputForm.css";

function InpurForm({ label, type, error }) {

    return (
        <label className="form__label">
            {label}
            <input type={type} className="form__input" required />
            <span className="form__error">{error}Что-то пошло не так</span>
        </label>
    )
}

export default InpurForm;