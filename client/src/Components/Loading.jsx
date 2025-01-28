import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpinner } from "@fortawesome/free-solid-svg-icons"

function Loading (){
    return(
        <div id="loading">

            <FontAwesomeIcon style={{
                fontSize: "5em",
                
            }} icon={faSpinner} spinPulse />
        </div>
    )
}
export default Loading