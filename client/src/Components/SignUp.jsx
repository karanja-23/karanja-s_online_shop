
import { useState,useEffect } from "react"
function SignUp(){
    const [name,setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorName, setErrorName] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
   
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
        fetch ('https://karanja-s-online-shop-v1q7.onrender.com/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
        .then(response => response.json())
        .then(data => {
            if(data['message'] =='username already exists'){
                window.alert(data['message'])
            }
            if(data['message'] == 'email already exists'){
                window.alert(data['message'])
            }
            if (data['message'] == 'User added succesfully'){
                
                window.alert('success!')
                Navigate('/')
            }
        })
        .catch(error => console.error(error));
        

        
    }

    return(
        <div id="signUp_form">
            <form onSubmit={handleSubmit} >
                <h1>Sign Up</h1>
                <input onChange={(e) => setName(e.target.value)}  type="text" placeholder="Enter your name ..."/>
                {errorName ? <p style={{
                    color: 'red',
                    position: 'absolute',
                    fontSize: '0.75em',
                    fontWeight: '400',
                    top: '29%',
                    left: '50%',
                    transform: 'translateX(-50%)'
                }}>** You must enter a name **</p> : null}
                <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Enter your email address ..."/>
                {errorEmail ? <p style={{
                    color: 'red',
                    position: 'absolute',
                    fontSize: '0.75em',
                    fontWeight: '400',
                    top: '41%',
                    left: '50%',
                    transform: 'translateX(-50%)'
                }}>** You must enter an email address **</p> : null}
               
                <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Generate a password"/>
                {errorPassword ? <p style={{
                    color: 'red',
                    position: 'absolute',
                    fontSize: '0.75em',
                    fontWeight: '400',
                    top: '53%',
                    left: '50%',
                    transform: 'translateX(-50%)'
                }}>** You must enter a password **</p> : null}
               
                <input type="submit" value="Create Account"/>
            </form>
            
        </div>
    )
}

export default SignUp