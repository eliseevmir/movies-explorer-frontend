import "./UserInfo.css";

function UserInfo() {

    return (
        <section className="user">
            <h1 className="user__name">Привет, Владимир!</h1>

            <form className="user__form">
                <label className="user__label">
                    Имя
                    <input className="user__input" id="user-name" type="text"></input>
                </label>
                <label className="user__label">
                    E-mail
                    <input className="user__input" id="user-email" type="email"></input>
                </label>

                <button type="submit" className="user__button">Редактировать</button>
                <button className="user__button">Выйти из аккаунта</button>
            </form>

        </section>
    )
}

export default UserInfo;

