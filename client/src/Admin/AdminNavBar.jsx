import logo from "../assets/adminLogo.png"
function Nav(){
    return(
        <div id="admin-nav">
            <div id="admin-logo">
                <img id="admin-logo-img" src={logo} alt="logo" />
            </div>
            <div id="welcome">
            <h3>Welcome Admin</h3>
            </div>
                       
        </div>
    )
}

export default Nav