import { use } from "react";
import { useState, useEffect } from "react";
function SignIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] =useState('')
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)

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
                window.alert(data['message'])
            }
            else{
                if ( 'password' in data && data['password']== password){
                    window.alert('Succesfull!')
                }
                else{
                    window.alert('Wrong password')
                    console.log(data['password'], password)
                }
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