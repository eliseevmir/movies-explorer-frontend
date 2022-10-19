import AuthBlock from "../../components/AuthBlock";
import AuthHeader from "../../components/AuthHeader";
import MainRegister from "../../components/MainRegister";


function Register() {

    return (
        <AuthBlock>
            <AuthHeader>
                Добро пожаловать!
            </AuthHeader>
            <MainRegister />
        </AuthBlock>
    )
}

export default Register;