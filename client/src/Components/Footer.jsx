import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone, faMobile, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import logo from "../assets/logo.png"
function Footer(){
    return (
        <div id="footer">
            <div className="footer-div" id="contacts">
                <h3>contact</h3>
                <div className="footer-content">
                    <div style={{display: "flex", gap: "10px", alignItems: "centers"}}>
                    <FontAwesomeIcon icon={faPhone} />
                    020-1234567
                    </div>
                    <div style={{display: "flex", gap: "10px", alignItems: "centers"}}>
                    <FontAwesomeIcon icon={faMobile} />
                    +254700300492
                    </div>
                    <div style={{display: "flex", gap: "10px", alignItems: "centers"}}>
                    <FontAwesomeIcon icon={faEnvelope} />
                    karanja@online.co.ke
                    </div>

                </div>
            </div>
            <div className="footer-div" id="company">
                <h3>Company</h3>
                <div className="footer-content">
                <div style={{display: "flex", gap: "10px", alignItems: "centers"}}>
                    About us
                </div>
                <div style={{display: "flex", gap: "10px", alignItems: "centers"}}>
                    Careers
                </div>                
                </div>                

            </div>

            <div  className="footer-div" id="socials">
                <h3>Socials</h3>
                <div className="footer-content">
                <div style={{display: "flex", flexDirection: "column",gap: "10px", alignItems: "centers"}}>
                    <span>Twitter</span>
                    <span>Instagram</span>
                    <span>Facebook</span>
                </div>

                </div>                
            </div>
            <div style={{position: "absolute", bottom: "10px"}}>
                @ 2025, Karanja's Shop. LCC

            </div>
        </div>
    )
}

export default Footer