
import { useState } from "react"
function SignUp(){
    const [name,setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    return(
        <div id="signUp_form">
            <form>
                <h1>Sign Up</h1>
                <input type="text" placeholder="Enter your name ..."/>
                <input type="text" placeholder="Enter your email address ..."/>
                <input type="password" placeholder="Generate a password"/>
                <input type="submit" value="Create Account"/>
            </form>
            
        </div>
    )
}

export default SignUp