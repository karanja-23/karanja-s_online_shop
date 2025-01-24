import { use } from "react"
import logo from "../assets/adminLogo.png"
import { useContext } from "react"
import { AuthContext } from "./AuthContext"
function Nav(){
    const {user} = useContext(AuthContext)
    return(
        <div id="admin-nav">
            <div id="admin-logo">
                <img id="admin-logo-img" src={logo} alt="logo" />
            </div>
            <div id="welcome">
            {user ? <h3 id="admin-welcome">Welcome, {user}</h3> : <h3 id="admin-welcome">Welcome, Admin</h3>}
            </div>
                       
        </div>
    )
}

export default Nav