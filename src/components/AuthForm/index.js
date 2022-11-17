import "./AuthForm.css";

function AuthForm({ children, handleSubmit }) {
    return (

        <form className="form" id="auth-form" onSubmit={handleSubmit}>
            {children}
        </form>
    )
}

export default AuthForm;