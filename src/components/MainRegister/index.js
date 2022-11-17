import { useState, useMemo, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./MainRegister.css";
import AuthForm from "../AuthForm";
import InpurForm from "../InputForm";
import ButtonForm from "../ButtonForm";
import ErrorStatusText from "../ErrorStatusText";
import Question from "../Question";
import { REGEXEMAIL } from "../../utils/constant";
import { CurrentUserContext } from "../../context/userContext/CurrentUserContext";

function MainRegister({ onSubmit }) {
    const navigate = useNavigate();
    const [errorText, setErrorText] = useState("");
    const { state, dispatch } = useContext(CurrentUserContext);
    const [inputValues, setInputValues] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [errorsInput, setErrorsInput] = useState({
        nameErrorText: "",
        emailErrorText: "",
        passwordErrorText: "",
        nameValid: false,
        emailValid: false,
        passwordValid: false,
    });
    const [disabled, setDisabled] = useState(false);

    const isValid = useMemo(() => {
        return (
            errorsInput.emailValid &&
            errorsInput.passwordValid &&
            errorsInput.emailValid
        );
    }, [errorsInput]);

    useEffect(() => {
        console.log(state.loggedIn)
        if (state.loggedIn) {
            navigate(-1)
        }
    }, [navigate, state.loggedIn])

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
                    [`${name}Valid`]: true,
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
        if (disabled) {
            return;
        }
        setDisabled(true);
        onSubmit(inputValues)
            .then((data) => {
                localStorage.setItem("token", data.token);
                dispatch({
                    type: "setLogged",
                    payload: true,
                });
                navigate("/movies");
                setInputValues({
                    name: "",
                    email: "",
                    password: "",
                });
                setErrorText("");
                setDisabled(false);
            })
            .catch((err) => {
                setErrorText(err.message);
                setDisabled(false);
            });
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
                    errorText={errorsInput.nameErrorText}
                    label="Имя"
                    type="text"
                    name="name"
                    handleChange={handleChange}
                    min={2}
                    max={30}
                    disabled={disabled}
                />
                <InpurForm
                    errorText={errorsInput.emailErrorText}
                    label="E-mail"
                    type="email"
                    name="email"
                    handleChange={handleChange}
                    disabled={disabled}
                />
                <InpurForm
                    errorText={errorsInput.passwordErrorText}
                    label="Пароль"
                    type="password"
                    name="password"
                    handleChange={handleChange}
                    min={8}
                    disabled={disabled}
                />
                <ErrorStatusText errorText={errorText} />
                <ButtonForm disabled={!isValid || disabled}>
                    Зарегистрироваться
                </ButtonForm>
            </AuthForm>

            <Question
                question="Уже зарегистрированы?"
                textLink="Войти"
                path="/signin"
            />
        </section>
    );
}

export default MainRegister;
