import {Toast, ToastFailed} from "../Components/Toast";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";
function AdminSignIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] =useState('')
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const [showToast, setshowToast] = useState(false)
    const [emailNotFound, setEmailNotFound] = useState(false)
    const [wrongPassword, setWrongPassword] = useState(false)
    const [notAdmin, setNotAdmin] = useState(false)
    {/*const [user, setUser] = useState(null)*/}
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const navigate = useNavigate()
    const {setIsAuthenticated, setUser} = useContext(AuthContext)

    useEffect(() => {
        if (emailError && email !== ''){
            setEmailError(false)
        }
        if (passwordError && password !== ''){
            setPasswordError(false)
        }
        
    },[emailError, passwordError,email, password])
    function handleSubmit(event){
        event.preventDefault();
        if (email == ''){
            setEmailError(true)
            return;
        }
        if (password == ''){
            setPasswordError(true)
            return;
        }
        fetch(`http://localhost:5555/user/${email}`,{
            method: 'GET',
            headers: {
                'Content-Type':'application/json'
            }
            
        })
        .then(response => response.json())
        .then(data => {
            if ('message' in data){
                setEmailNotFound(true)
                setTimeout(() => {
                    setEmailNotFound(false)
                }, 1000)
            }
            else{
                if ('password' in data && data['password']== password){
                   
                    if (data['role'] == 'admin'){
                        setshowToast(true)
                        setTimeout(() => {
                            setshowToast(false)
                        },1000)
                        event.target.reset()                        
                        setIsLoggedIn(true)
                        setIsAuthenticated(true)
                        setUser(data['name'])
                        setTimeout(() => {
                            navigate('/admin')
                        }, 3000)
                    }
                    else{
                        setNotAdmin(true)
                        setTimeout(() => {
                            setNotAdmin(false)
                        }, 1000)
                        event.target.reset()
                    }
                    

                }
                else{
                    setWrongPassword(true)
                    setTimeout(() => {
                        setWrongPassword(false)
                    }, 1000)
                }
            }
        })

        
    }
    if (isLoggedIn){
        navigate('/admin')
    }

    return (
        <div id="signIn_form">
            {showToast ? <Toast title="Success" message="Successfully logged in"/> : null}
            {emailNotFound ? <ToastFailed title="Account not found" message="Please check your email address"/> : null}
            {wrongPassword ? <ToastFailed title="Wrong password" message="Please check your password"/> : null}
            {notAdmin ? <ToastFailed title="Not an admin" message="Please sign in as an admin"/> : null}
            <form onSubmit={handleSubmit} > 
                <h1>Sign In</h1>
                <input onChange={(e) => setEmail(e.target.value)}  type="text" placeholder="Email"/>
                {emailError && <p style={{
                    color: 'rgb(53, 2, 2)',
                    position: 'absolute',
                    fontSize: '0.82em',
                    fontWeight: '700',
                    top: '33.5%',
                    left: '50%',
                    transform: 'translateX(-50%)'
                }}>*You must provide an email address*</p>}
                <input onChange = {(e) => setPassword(e.target.value)} type="password" placeholder="Password"/>
                {passwordError && <p style={{
                    color: 'rgb(53, 2, 2)',
                    position: 'absolute',
                    fontSize: '0.82em',
                    fontWeight: '700',
                    top: '48%',
                    left: '50%',
                    transform: 'translateX(-50%)'
                }}>** Please enter your password **</p>}                
                <input style={{backgroundColor: 'maroon', fontWeight: '700'}} type="submit" value="Log in"/>
            </form>
            
        </div>
    )
}

export default AdminSignIn