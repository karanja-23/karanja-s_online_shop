import {Toast} from "../Components/Toast";
import { useState,useEffect } from "react"
function AdminSignUp(){
    const [name,setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorName, setErrorName] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [showToast, setshowToast] = useState(false);
    const[existingUser, setExistingUser] = useState(false)
    const[existingEmail, setExistingEmail] = useState(false)
   
    useEffect(() => {
        if (name !== '' && errorName){
            setErrorName(false)
        }
        if (email !== '' && errorEmail){
            setErrorEmail(false)
        }
        if (password !== '' && errorPassword){
            setErrorPassword(false)
        }
        
    },[name, email, password, errorName, errorEmail, errorPassword])

    function handleSubmit(event){
        event.preventDefault();
        if (name == ''){
            setErrorName(true)
            return;
        }
        if (email == ''){
            setErrorEmail(true)
            return;
        }
        if (password == ''){
            setErrorPassword(true)
            return;
        }
        const newUser = {
            name,
            email,
            password
        }; 
        fetch ('http://localhost:5555/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
        .then(response => response.json())
        .then(data => {
            if (data['message'] == 'username already exists'){
                setExistingUser(true)
                setTimeout(() => {
                    setExistingUser(false)
                },3000);
            }
            if (data['message'] == 'email already exists'){
                setExistingEmail(true)
                setTimeout(() => {
                    setExistingEmail(false)
                },3000);
            }   
            if (data['message'] == 'User added succesfully'){
                setshowToast(true)
                event.target.reset()
                setTimeout(() => {
                    setshowToast(false)
                    window.location.reload()
                }, 2000);
            }
        })
        .catch(error => console.error(error));
        

        
    }

    return(
        <div id="signUp_form">
             {showToast ? <Toast title="Account created" message="You can now sign in"/> : null}
            <form onSubmit={handleSubmit} >
                <h1>Sign Up</h1>
                <input onChange={(e) => setName(e.target.value)}  type="text" placeholder="Enter your name ..."/>
                {errorName ? <p style={{
                    color: 'rgb(53, 2, 2)',
                    position: 'absolute',
                    fontSize: '0.82em',
                    fontWeight: '700',
                    top: '28%',
                    left: '50%',
                    transform: 'translateX(-50%)'
                }}>** You must enter a name **</p> : null}
                {existingUser ? <p style={{
                    color: 'rgb(53, 2, 2)',
                    position: 'absolute',
                    fontSize: '0.82em',
                    fontWeight: '700',
                    top: '28%',
                    left: '50%',
                    transform: 'translateX(-50%)'
                }}>** This username already exists **</p> : null}                
                <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Enter your email address ..."/>
                {errorEmail ? <p style={{
                    color: 'rgb(53, 2, 2)',
                    position: 'absolute',
                    fontSize: '0.82em',
                    fontWeight: '700',
                    top: '41%',
                    left: '50%',
                    transform: 'translateX(-50%)'
                }}>** You must enter an email address **</p> : null}
                {existingEmail ? <p style={{
                    color: 'rgb(53, 2, 2)',
                    position: 'absolute',
                    fontSize: '0.82em',
                    fontWeight: '700',
                    top: '41%',
                    left: '50%',
                    transform: 'translateX(-50%)'
                }}>** This email address already exists **</p> : null}               
                <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Generate a password"/>
                {errorPassword ? <p style={{
                    color: 'rgb(53, 2, 2)',
                    position: 'absolute',
                    fontSize: '0.82em',
                    fontWeight: '700',
                    top: '53%',
                    left: '50%',
                    transform: 'translateX(-50%)'
                }}>** You must enter a password **</p> : null}
               
                <input style={{backgroundColor: 'maroon', fontWeight: '700'}} type="submit" value="Create Account"/>
            </form>
            
        </div>
    )
}

export default AdminSignUp