import Sticker from "./Sticker"
import logo from "../assets/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from "react-router-dom"
function NavBar(){
    return(
        <div id="navigation"> 
            <Sticker />
            <div id="logoStrip">
                <NavLink to="/">
                <div id="logo">
                    <img id="logo-img" src={logo} alt="logo" />
                </div>        
                </NavLink>
                <div id="searchBar">
                    <FontAwesomeIcon style={{
                        position: 'absolute',
                        left: '30px',
                    }} icon={faMagnifyingGlass} />
                    <form>
                        <input id="search-input" type="text" placeholder="Search..."/>
                        <input style={{
                            position: 'absolute',
                            right: '0px',
                            padding: '9px',
                            border: 'none',
                            backgroundColor: 'maroon',
                            color: 'white',
                            fontWeight: '700'
                        }} type="submit" value="Search"/>
                    </form>

                </div>
                <div id="cart">
                    <div id="login-link" style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '5px',
                        cursor: 'pointer'
                    }}>
                    <FontAwesomeIcon style={{
                        fontSize: '1.5em'
                    }} icon={faUser} />
                    <NavLink className="link" to="/login">Login/Register</NavLink>
                    
                    </div>
                    <div>
                    <FontAwesomeIcon style={{
                        fontSize: '1.5em'
                    }} icon={faCartShopping} />
                    </div>

                </div>
            </div>
            <div id="menu"> 
                <ul id="menuItems">
                    
                     <li><FontAwesomeIcon icon={faBars} /> Categories</li>
                     <li>About us</li>
                     <li><NavLink to="/careers">Careers</NavLink></li>
                    <li>Contact</li>
                </ul>

                <div id="faq">                    
                    <span>Products</span>
                    <span>FAQ</span>
                </div>

            </div>

        </div>
    )
}

export default NavBar