import "./MainLogin.css";
import AuthForm from "../AuthForm";
import InpurForm from "../InputForm";
import ButtonForm from "../ButtonForm";
import Question from "../Question";

function MainLogin() {

    return (
        <section className="auth">
            <AuthForm >
                <InpurForm label="E-mail" type="email" />
                <InpurForm label="Пароль" type="password" />
                <ButtonForm>
                    Войти
                </ButtonForm>
            </AuthForm>

            <Question question="Уже зарегистрированы?" textLink="Войти" path="#" />
        </section>

    )
}

export default MainLogin;