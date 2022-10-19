import "./AuthForm.css";

function AuthForm({ children }) {
    const [inputName, inputEmail, inputPassword, button] = children;

    return (

        <form className="form" id="auth-form">
            {inputName}
            {inputEmail}
            {inputPassword}
            {button}
        </form>
    )
}

export default AuthForm;