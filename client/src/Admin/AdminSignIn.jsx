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
        const loginCredentials = {
            email,
            password
        }
        event.preventDefault();
        if (email == ''){
            setEmailError(true)
            return;
        }
        if (password == ''){
            setPasswordError(true)
            return;
        }
        fetch(`https://karanja-s-online-shop-v1q7.onrender.com/login`,{
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(loginCredentials)
            
        })
        .then(response => response.json())
        .then(data => {
            if(data['token']){
                setToken(data['token'])
                
                localStorage.setItem('token', data['token'])
                setLogin(true)
                navigate('/')
            }
            else{
                window.alert(data['message'])
            }
        })
        event.target.reset()
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