import { useState } from "react";
import PopupAccount from "../PopupAccount";
import "./BurgerMenu.css";


function BurgerMenu() {
    const [isOpenPopup, setIsOpenPopup] = useState(false)

    return (
        <>
            <button type="button" className="burger-menu" onClick={() => setIsOpenPopup(true)} />
            <PopupAccount isOpen={isOpenPopup} onRequestClose={() => setIsOpenPopup(false)} />
        </>


    )
}

export default BurgerMenu;