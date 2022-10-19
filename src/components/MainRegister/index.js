import "./MainRegister.css"
import AuthForm from "../AuthForm";
import InpurForm from "../InputForm";
import ButtonForm from "../ButtonForm";
import Question from "../Question";

function MainRegister() {

    return (
        <section className="auth">
            <AuthForm >
                <InpurForm label="Имя" type="text" />
                <InpurForm label="E-mail" type="email" />
                <InpurForm label="Пароль" type="password" />
                <ButtonForm>
                    Зарегистрироваться
                </ButtonForm>
            </AuthForm>

            <Question question="Уже зарегистрированы?" textLink="Войти" path="/signin" />
        </section>

    )
}

export default MainRegister;