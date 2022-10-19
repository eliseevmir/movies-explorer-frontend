import "./ButtonForm.css";

function ButtonForm({ children }) {

    return (
        <button type="submit" className="button__submit">{children}</button>
    )
}

export default ButtonForm;