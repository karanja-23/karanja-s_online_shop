
import AdminSignUp from "./AdminSignUp"
import AdminSignIn from "./AdminSignIn"
import { useState, useEffect } from "react"



function AdminLogin(){
    const [isSignUp, setIsSignUp] = useState(false)    
    const [isLoggedIn, setIsLoggedIn] = useState(false)
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
        <div className="admin-main">
            
            <div id="register" style={{
                fontWeight: '900',
                backgroundColor: 'rgb(97, 99, 112)'
            }}>
               
                <div id="signup-signin">
                    <div onClick={ handleSignupClick} id="signup" style={{
                        backgroundColor: isSignUp ? 'maroon' : 'white',
                        color: isSignUp ? 'white' : 'maroon',
                    }}>
                        <span >Sign Up</span>
                    </div>
                    <div onClick={handleSignInClick} id="signin" style={{
                        backgroundColor: isSignUp ? 'white' : 'maroon',
                        color: isSignUp ? 'maroon' : 'white',                        
                    }}>
                        <span>Sign In</span>
                    </div>
                    {isSignUp ? <AdminSignUp/> : <AdminSignIn />}


                </div>

            </div>
            
        </div>
    )
}

export default AdminLogin