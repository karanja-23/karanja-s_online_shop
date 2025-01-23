import { useState } from "react";
function SignIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] =useState('')
    function handleSubmit(event){
        event.preventDefault();
        
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
                <input onChange = {(e) => setPassword(e.target.value)} type="password" placeholder="Password"/>
                <input type="submit" value="Log in"/>
            </form>
            
        </div>
    )
}

export default SignIn