
import { useState, useEffect,useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "./ProductContext";
function SignIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] =useState('')
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const {setLogin} = useContext(ProductContext)
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
        fetch(`http://localhost:5555/login`,{
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
    return (    
        <div id="signIn_form">
            <form onSubmit={handleSubmit} > 
                <h1>Sign In</h1>
                <input onChange={(e) => setEmail(e.target.value)}  type="text" placeholder="Email"/>
                {emailError && <p style={{
                    color: 'red',
                    position: 'absolute',
                    fontSize: '0.8em',
                    fontWeight: '500',
                    top: '32%',
                    left: '50%',
                    transform: 'translateX(-50%)'
                }}>** You must provide an email address **</p>}
                <input onChange = {(e) => setPassword(e.target.value)} type="password" placeholder="Password"/>
                {passwordError && <p style={{
                    color: 'red',
                    position: 'absolute',
                    fontSize: '0.8em',
                    fontWeight: '500',
                    top: '48%',
                    left: '50%',
                    transform: 'translateX(-50%)'
                }}>** Please enter your password **</p>}                
                <input type="submit" value="Log in"/>
            </form>
            
        </div>
    )
}

export default SignIn