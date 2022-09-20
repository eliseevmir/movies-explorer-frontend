import { Link } from "react-router-dom";
import "./Question.css";

function Question({ question, textLink, path }) {

    return (
        <div className="question">
            <span className="question__text">{question}</span>
            <Link to={path} className="question__link">{textLink}</Link>
        </div>
    )
}

export default Question;