import AuthBlock from "../../components/AuthBlock";
import AuthHeader from "../../components/AuthHeader";
import MainRegister from "../../components/MainRegister";


function Register({ onSubmit }) {

    return (
        <AuthBlock>
            <AuthHeader>
                Добро пожаловать!
            </AuthHeader>
            <MainRegister onSubmit={onSubmit} />
        </AuthBlock>
    )
}

export default Register;