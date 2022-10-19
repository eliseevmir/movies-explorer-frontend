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

            <Question question="Ещё не зарегистрированы?" textLink="Регистрация" path="/signup" />
        </section>

    )
}

export default MainLogin;