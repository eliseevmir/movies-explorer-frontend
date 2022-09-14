import "./Title.css";

function Title({ titleText }) {
    return (
        <div className="title">
            <h2 className="title__name">{titleText}</h2>
        </div>
    );
}

export default Title;
