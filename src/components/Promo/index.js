import "./Promo.css";
import ContentArea from "../ContentArea"
import earth from "../../image/Earth.svg"

function Promo() {

    return (
        <section className="promo">
            <ContentArea>
                <div className="promo__info">
                    <div className="promo__project">
                        <h1 className="promo__header">Учебный проект студента факультета Веб-разработки.</h1>
                        <p className="promo__text">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
                    </div>
                    <img className="promo__earth" src={earth} alt="Изображение планеты Земля"></img>
                </div>
                <button className="promo__button">Узнать больше</button>
            </ContentArea>
        </section >



    )
}

export default Promo;