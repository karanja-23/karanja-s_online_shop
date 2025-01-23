import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Toast(props) {
    return(
        <div id="toast">
            <div id="toast-icon">
            <FontAwesomeIcon icon={faCheck} style={{
                color: 'green',
                fontSize: '40px',
                fontWeight: '900'
             }} />
            </div>
            <div id="toast-text" style={{
                width: '100%',
                textAlign: 'center',
                color: 'rgb(185, 66, 66)'
            }}>
                <h1>{props.title}</h1>
                <p>{props.message}</p>
            </div>

        </div>
    )
}
function ToastFailed(props) {
    return(
        <div id="toast">
            <div id="toast-icon">
            <FontAwesomeIcon icon={faXmark} style={{
                color: 'green',
                fontSize: '40px',
                fontWeight: '900'
             }} />
            </div>
            <div id="toast-text" style={{
                width: '100%',
                textAlign: 'center',
                color: 'rgb(185, 66, 66)'
            }}>
                <h1>{props.title}</h1>
                <p>{props.message}</p>
            </div>

        </div>
    )
}


export {Toast, ToastFailed}