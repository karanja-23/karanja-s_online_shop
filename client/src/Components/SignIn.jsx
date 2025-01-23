
function SignIn() {

    function handleSubmit(event){
        event.preventDefault();
        

    }
    return (
        <div id="signIn_form">
            <form>
                <h1>Sign In</h1>
                <input type="text" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <input onSubmit={handleSubmit} type="submit" value="Sign In"/>
            </form>
            
        </div>
    )
}

export default SignIn