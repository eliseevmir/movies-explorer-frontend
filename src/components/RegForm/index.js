import { useState } from "react";


function RegForm({ onSucces }) {

    const [inputName, setInputName] = useState("")
    const [inputEmail, setInputEmail] = useState("")
    const [inputPassword, setInputPassword] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault();
        setTimeout(() => {
            onSucces({
                name: inputName,
                email: inputEmail,
            })
        }, 2000)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={inputName} onChange={(e) => setInputName(e.currentTarget.value)} />
            <input type="email" value={inputEmail} onChange={(e) => setInputEmail(e.currentTarget.value)} />
            <input type="password" value={inputPassword} onChange={(e) => setInputPassword(e.currentTarget.value)} />

            <button type="submit">Sub</button>
        </form>
    )
}

export default RegForm;