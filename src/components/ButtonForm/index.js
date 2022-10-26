import "./ButtonForm.css";

function ButtonForm({ children, disabled }) {

    return (
        <button type="submit" className="button__submit" disabled={disabled}>{children}</button>
    )
}

export default ButtonForm;