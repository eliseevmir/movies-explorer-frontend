import AuthBlock from "../../components/AuthBlock";
import AuthHeader from "../../components/AuthHeader";
import MainLogin from "../../components/MainLogin";


function Login() {

    return (
        <AuthBlock>
            <AuthHeader>
                Рады видеть!
            </AuthHeader>
            <MainLogin />
        </AuthBlock>
    )
}

export default Login;