import AuthBlock from "../../components/AuthBlock";
import AuthHeader from "../../components/AuthHeader";
import MainLogin from "../../components/MainLogin";


function Login({ onSubmit }) {

    return (
        <AuthBlock>
            <AuthHeader>
                Рады видеть!
            </AuthHeader>
            <MainLogin onSubmit={onSubmit} />
        </AuthBlock>
    )
}

export default Login;