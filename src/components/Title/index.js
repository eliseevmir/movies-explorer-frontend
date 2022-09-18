import "./Title.css";

function Title({ children }) {
    return (
        <div className="title">
            <h2 className="title__name">{children}</h2>
        </div>
    );
}

export default Title;
