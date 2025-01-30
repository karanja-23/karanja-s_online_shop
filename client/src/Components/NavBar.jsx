import Sticker from "./Sticker"
import logo from "../assets/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from "react-router-dom"
import { useState, useEffect, useContext, useRef } from "react"
import { ProductContext } from "./ProductContext"
import NavSearch from "./NavSearch"
import Loading from "../Components/Loading"


function NavBar(){
    const [isSearching, setIsSearching] = useState('')
    const navSearchRef = useRef(null)
    const [showNavSearch, setShowNavSearch] = useState(false)
    const [categories, setCategories] = useState(null)
    const {theSearchedProduct, setTheSearchedProduct} = useContext(ProductContext)
    const [showCategories, setShowCategories] = useState(false)
    const {login, setLogin} = useContext(ProductContext)
    const {cartItems, setCartItems} = useContext(ProductContext) 
    const {userCart, setUserCart} = useContext(ProductContext)
    const {token, setToken} = useContext(ProductContext) 
    useEffect(() => {
        const timeoutId = setTimeout(() => {
          fetch('http://localhost:5555/product', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
          })
          .then(res => res.json())
          .then(data => {
            const searchedProduct = data.filter((product) => product.name.toLowerCase().includes(isSearching.toLowerCase()));
            
            setTheSearchedProduct(searchedProduct)
          });
        }, 100);
       
        return () => clearTimeout(timeoutId);
        
      }, [isSearching]);

      useEffect (() =>{
        const handleOutsideClick = (event) => {
            if (navSearchRef.current && !navSearchRef.current.contains(event.target)) {
              // Hide the NavSearch component when clicking outside of it
              setShowNavSearch(false);
            }
          };
          document.addEventListener("mousedown", handleOutsideClick);
          return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
          };
      }, [navSearchRef])

    const handleSearchInput = (e) => {
        setIsSearching(e.target.value);
        if(e.target.value !== '') {
            setShowNavSearch(true);
        } else {
            setShowNavSearch(false);
        }
    }
    function handleSubmit(event){
        event.preventDefault();
        fetch('http://localhost:5555/product',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data =>{
            data.forEach((product) => {
                if (theSearchedProduct.some((searchedProduct) => product.name.toLowerCase().includes(searchedProduct.toLowerCase()))) {
                    console.log(product.name);
                }
            })
        } )
    }
    useEffect(() =>{
        fetch ('http://localhost:5555/categories', {
            method: 'GET',
            headers: {
                'Content-Type':'application/json'
            }
        })
        .then(response => response.json())
        .then(data => setCategories(data))
           
    },[])
    useEffect(() => {
        const timeoutId = setTimeout(() => {
          fetch('http://localhost:5555/getcart', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`
            }
          })
          .then(response => response.json())
          .then(data => {
            setUserCart(data)
            setCartItems(data.length)
          })
        }, 100);
        return () => clearTimeout(timeoutId);
      }, [token])
    function handleSetCategories(){
        setShowCategories(!showCategories)
        
    }
    function handleLogOut(){
        setLogin(false)
    }
 
    return(
        <div id="navigation"> 
            <Sticker />
            {showCategories && categories ? (<div id="categories">
                {categories.map((category, index) =>{
                    return (<span className="category-div" key={index}>{category.name}</span>)
                            
                })}

            </div>): null}
            { categories === null && showCategories ? <div id="categories"><Loading /></div>: null}
            <div id="logoStrip">
                <NavLink to="/">
                <div id="logo">
                    <img id="logo-img" src={logo} alt="logo" />
                </div>        
                </NavLink>
                <div  id="searchBar">
                    <FontAwesomeIcon style={{
                        position: 'absolute',
                        left: '30px',
                    }} icon={faMagnifyingGlass} />
                    <form onSubmit={handleSubmit}>
                        <input onChange={handleSearchInput} id="search-input" type="text" placeholder="Search..."/>
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
                    {showNavSearch && isSearching ? <div ref={navSearchRef}><NavSearch /> </div>: null}

                </div>
                <div id="cart">
                    <div id="login-link" style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '5px',
                        cursor: 'pointer',
                        color : "rgb(4, 4, 48)"
                    }}>
                    <FontAwesomeIcon style={{
                        fontSize: '1.5em'
                    }} icon={faUser} />
                    <NavLink className="link" to="/login">{login ? <span onClick={handleLogOut}>logout</span>: <span>Login/Register</span> }</NavLink>
                    
                    </div>
                    <div style={{display:'flex', position: 'relative',flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                    <NavLink to="/cart">
                    <FontAwesomeIcon style={{
                        fontSize: '1.5em',
                        color: "rgb(4, 4, 48)"
                    }} icon={faCartShopping} />            
                    </NavLink>
                    {login ? <span style={{position:"absolute", top:"-20px", right:"-3px", fontSize: "0.8em", color: "white",fontWeight: "700", backgroundColor: "maroon", width: "20px", height: "20px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center"}}>{cartItems}</span> : null}
                    </div>

                </div>
            </div>
            <div id="menu"> 
                <ul id="menuItems">
                    
                     <li onClick={handleSetCategories}><FontAwesomeIcon icon={faBars} /> Categories</li>
                     <li>About us</li>
                     <li><NavLink to="/careers">Careers</NavLink></li>
                     <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>

                <div id="faq">                    
                    <span><NavLink to="/products">Products</NavLink></span>
                    <span>FAQ</span>
                </div>



            </div>

        </div>
    )
}

export default NavBar