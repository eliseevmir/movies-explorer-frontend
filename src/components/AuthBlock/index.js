import "./AuthBlock.css"

function AuthBlock({ children }) {

    return (
        <div className="auth-block">
            {children}
        </div>
    )
}

export default AuthBlock;