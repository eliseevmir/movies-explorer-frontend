import './ErrorStatusText.css'

function ErrorStatusText({ errorText }) {

    return (
        <span className='error-text'>{errorText}</span>
    )
}

export default ErrorStatusText;