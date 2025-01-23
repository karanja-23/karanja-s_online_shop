import { useState } from "react"
function Sticker() {
    const [isHovered, setIsHovered] = useState(false)
    function handleMouseOver() {
        setIsHovered(true)  
    }
    function handleMouseOut(){
        setIsHovered(!true)
    }
    return (
        <div id="sticker">
            <span>
                Buy what you love, love what you buy! Shop anywhere, anytime. <span  onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} style={{
                    color: !isHovered ? 'white' : 'lightblue',
                    cursor: 'pointer',
                    lineHeight:' 2.5rem',
                    fontWeight: '700',
                    textDecoration: !isHovered ? 'underline': 'none',
                    textUnderlineOffset: '4px',
                    
                }} className="signUp" id="signUpButton">Sign up</span> with us to get started
            </span>
            
        </div>
    )
}

export default Sticker