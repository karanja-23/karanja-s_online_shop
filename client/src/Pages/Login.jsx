import NavBar from "../Components/NavBar"
import SignIn from "../Components/SignIn"
import SignUp from "../Components/SignUp" 
import { useState, useEffect } from "react"
import Footer from "../Components/Footer"
import { useContext, useEffect } from "react"
import { ProductProvider } from "../Components/ProductContext"
import { useNavigate } from "react-router-dom"
function Login(){
    const { login} = useContext(ProductProvider)
    const [isSignUp, setIsSignUp] = useState(false)
    const navigate = useNavigate()
    useEffect(() =>{
        if (login ===false){
            navigate ('/login')
        }
    },[])    

    function handleSignupClick(){
        setIsSignUp(true)
    }
    function handleSignInClick(){
        setIsSignUp(false)
    }
    useEffect(() =>{
        setIsSignUp(false)
    },[])
    return(
        <div className="main">
            <NavBar/>
            <div id="register" style={{
                fontWeight: '900',
            }}>
                <div id="signup-signin">
                    <div onClick={ handleSignupClick} id="signup" style={{
                        backgroundColor: isSignUp ? 'rgb(15, 23, 66)' : 'white',
                        color: isSignUp ? 'white' : 'rgb(15, 23, 66)',
                    }}>
                        <span >Sign Up</span>
                    </div>
                    <div onClick={handleSignInClick} id="signin" style={{
                        backgroundColor: isSignUp ? 'white' : 'rgb(15, 23, 66)',
                        color: isSignUp ? 'rgb(15, 23, 66)' : 'white',                        
                    }}>
                        <span>Sign In</span>
                    </div>
                    {isSignUp ? <SignUp/> : <SignIn/>}


                </div>
                
            </div>
            <div id="empty">
                <Footer />
            </div>
            
        </div>
    )
}

export default Login