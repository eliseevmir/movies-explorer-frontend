import { useState, useMemo, useContext } from "react";
import { useNavigate } from "react-router-dom"
import "./MainLogin.css";
import AuthForm from "../AuthForm";
import InpurForm from "../InputForm";
import ButtonForm from "../ButtonForm";
import Question from "../Question";
import ErrorStatusText from "../ErrorStatusText";
import { REGEXEMAIL } from "../../utils/constant";
import { CurrentUserContext } from "../../context/userContext/CurrentUserContext";


function MainLogin({ onSubmit }) {
    const navigate = useNavigate();
    const [errorText, setErrorText] = useState("");
    const { dispatch } = useContext(CurrentUserContext);
    const [inputValues, setInputValues] = useState({
        email: "",
        password: "",
    });

    const [errorsInput, setErrorsInput] = useState({
        emailErrorText: "",
        passwordErrorText: "",
        emailValid: false,
        passwordValid: false,
    });

    const isValid = useMemo(() => {
        return errorsInput.emailValid && errorsInput.passwordValid
    }, [errorsInput])


    function validate(value, message, name) {
        switch (value) {
            case true:
                setErrorsInput((perErrorsInput) => ({
                    ...perErrorsInput,
                    [`${name}ErrorText`]: "",
                    [`${name}Valid`]: true,
                }));
                break;
            case false:
                setErrorsInput((perErrorsInput) => ({
                    ...perErrorsInput,
                    [`${name}ErrorText`]: message,
                    [`${name}Valid`]: false,
                }));
                break;

            default:
                break;
        }
    }

    function validateEmail(value, name) {
        !REGEXEMAIL.test(String(value).toLowerCase())
            ? setErrorsInput((perErrorsInput) => ({
                ...perErrorsInput,
                [`${name}ErrorText`]: "Некорректный email",
                [`${name}Valid`]: false,
            }))
            : setErrorsInput((perErrorsInput) => ({
                ...perErrorsInput,
                [`${name}ErrorText`]: "",
                [`${name}Valid`]: true,
            }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        onSubmit(inputValues)
            .then(data => {
                setInputValues({
                    email: "",
                    password: "",
                });
                localStorage.setItem("token", data.token);
                dispatch({
                    type: "setLogged",
                    payload: true,
                });
                setErrorText("")
                navigate("/movies");

            })
            .catch(err => setErrorText(err.message))
    }

    function handleChange(e) {
        const { name, value } = e.currentTarget;
        setInputValues((preValues) => ({
            ...preValues,
            [name]: value,
        }));

        if (name === "email") {
            validateEmail(value, name);
        } else {
            validate(e.target.validity.valid, e.target.validationMessage, name);
        }
    }

    return (
        <section className="auth">
            <AuthForm handleSubmit={handleSubmit}>
                <InpurForm
                    label="E-mail"
                    type="email"
                    name="email"
                    handleChange={handleChange}
                    errorText={errorsInput.emailErrorText}
                />
                <InpurForm
                    label="Пароль"
                    type="password"
                    name="password"
                    handleChange={handleChange}
                    errorText={errorsInput.passwordErrorText}
                />
                <ErrorStatusText errorText={errorText} />
                <ButtonForm disabled={!isValid}>Войти</ButtonForm>
            </AuthForm>

            <Question
                question="Ещё не зарегистрированы?"
                textLink="Регистрация"
                path="/signup"
            />
        </section>
    );
}

export default MainLogin;
