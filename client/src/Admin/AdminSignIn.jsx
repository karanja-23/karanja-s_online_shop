import {Toast, ToastFailed} from "../Components/Toast";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../Components/ProductContext";
function AdminSignIn() {
    const [isNotAdmin, setIsNotAdmin] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] =useState('')
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const {setAdminLoggedIn} = useContext(ProductContext)
    const {setToken,token} = useContext(ProductContext)
    const navigate = useNavigate()
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

            if(data['token']){
                setToken(data['token'])                
                localStorage.setItem('token', data['token'])
                event.target.reset()
                setAdminLoggedIn
                navigate('/')
            }
            else{
                window.alert(data['message'])
            }
        })
        
    }


    return (
        <div id="signIn_form">

            {isNotAdmin ? <ToastFailed title="Not an admin" message="Please sign in as an admin"/> : null}
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