import { useNavigate } from "react-router-dom";
import { useContext, useState, useMemo, useEffect } from "react";
import "./UserInfo.css";
import { CurrentUserContext } from "../../context/userContext/CurrentUserContext";
import storage from "../../utils/Storage";
import { REGEXEMAIL } from "../../utils/constant";
import * as mainApi from "../../utils/MainApi";

function UserInfo() {
    const { state, dispatch } = useContext(CurrentUserContext);
    const { name, email } = state;
    const navigate = useNavigate();

    const [pending, setPending] = useState(false);

    const [inputValues, setInputValues] = useState({
        name,
        email,
    });

    const [errorsInput, setErrorsInput] = useState({
        nameErrorText: "",
        emailErrorText: "",
        nameValid: true,
        emailValid: true,
    });

    const [errorMessage, setErrorMessage] = useState(null);
    const [successMessage, setSuccsessMessage] = useState(null);

    useEffect(() => {
        if (inputValues.name !== state.name || inputValues.email !== state.email) {
            setSuccsessMessage(null);
        }
    }, [inputValues, state]);

    const isDiff = useMemo(() => {
        return inputValues.name !== state.name || inputValues.email !== state.email;
    }, [inputValues, state]);

    const isValid = useMemo(() => {
        return errorsInput.emailValid && errorsInput.nameValid;
    }, [errorsInput]);

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
                    [`${name}ErrorText`]: `Поле 'Имя': ${message}`,
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
        if (pending) {
            return;
        }
        setPending(true);
        const { name, email } = inputValues;
        mainApi
            .patchUserData(name, email)
            .then((res) => {
                dispatch({
                    type: "setUserData",
                    payload: {
                        name: res.name,
                        email: res.email,
                    },
                });
                setPending(false);
                setSuccsessMessage("Данные успешно изменены");
            })
            .catch((err) => {
                err.message === "Необходима авторизация" &&
                    dispatch({
                        type: "setLogged",
                        action: false,
                    });
                setPending(false);
                setErrorMessage(err.message);
                storage.resetItem("query");
                storage.resetItem("isShort");
                localStorage.removeItem("token");
                navigate("/");
                console.error(err);
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

    function handleSignOutClick() {
        dispatch({
            type: "signOut",
        });
        localStorage.removeItem("token");
        storage.resetItem("query");
        storage.resetItem("isShort");
        navigate("/");
    }

    return (
        <section className="user">
            <h1 className="user__name">Привет, {name}</h1>

            <form className="user__form" onSubmit={handleSubmit}>
                <label className="user__label">
                    Имя
                    <input
                        className="user__input"
                        minLength="2"
                        maxLength="30"
                        name="name"
                        id="user-name"
                        type="text"
                        onChange={handleChange}
                        required
                        value={inputValues.name}
                        disabled={pending}
                    />
                </label>
                <label className="user__label">
                    E-mail
                    <input
                        className="user__input"
                        name="email"
                        id="user-email"
                        type="email"
                        onChange={handleChange}
                        required
                        value={inputValues.email}
                        disabled={pending}
                    />
                </label>
                <span className="form__error">{errorsInput.nameErrorText || ""}</span>
                <span className="form__error">{errorsInput.emailErrorText || ""}</span>
                {errorMessage !== null && (
                    <span className="form__error">{errorMessage}</span>
                )}
                {successMessage !== null && (
                    <span className="form__success">{successMessage}</span>
                )}
                <button
                    type="submit"
                    className="user__button"
                    disabled={!isValid || !isDiff || pending}
                >
                    Редактировать
                </button>
                <button
                    type="button"
                    className="user__button"
                    onClick={handleSignOutClick}
                >
                    Выйти из аккаунта
                </button>
            </form>
        </section>
    );
}

export default UserInfo;
