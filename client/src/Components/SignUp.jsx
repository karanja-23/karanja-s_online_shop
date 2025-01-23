
import { useState } from "react"
function SignUp(){
    const [name,setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(event){
        event.preventDefault();
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
            if (data['message'] == 'User added succesfully'){
                window.alert('success!')
                Navigate('/')
            }
        })
        .catch(error => console.error(error));
        event.target.reset()

        
    }

    return(
        <div id="signUp_form">
            <form onSubmit={handleSubmit} >
                <h1>Sign Up</h1>
                <input onChange={(e) => setName(e.target.value)}  type="text" placeholder="Enter your name ..."/>
                <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Enter your email address ..."/>
                <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Generate a password"/>
                <input type="submit" value="Create Account"/>
            </form>
            
        </div>
    )
}

export default SignUp