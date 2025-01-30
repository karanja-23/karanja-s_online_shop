import { NavLink } from "react-router-dom"
import { useState,useContext,useEffect } from "react"
import { ProductContext } from "./ProductContext"
import { Toast } from "./Toast"
function CurrentProductCard(props) {
   const [quantity, setquantity] = useState(1)
   const {currentProduct} = useContext(ProductContext)
   const {token} = useContext(ProductContext)
   const [addedToCart, setaddedToCart] = useState(false)
   const [updatedCart, setupdatedCart] = useState(false)
   const {cartItems, setCartItems} = useContext(ProductContext)
   const { userCart, setUserCart } = useContext(ProductContext)
    function addToCart(e) {
        e.preventDefault()
        fetch('http://localhost:5555/cart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                 Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({
                
                product_id: parseInt(currentProduct.id),
                quantity: quantity
            })
        })
        .then(response => response.json())
        .then(data => {
            if(data['message'] == 'Product added to cart successfully'){
                setaddedToCart(true)
                setTimeout(() => {
                    setaddedToCart(false)
                }, 1050)
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
            }
            if (data['message'] =='Product quantity updated in cart'){
                setupdatedCart(true)
                setTimeout(() => {
                    setUserCart(data)
                    setupdatedCart(false)
                }, 1050)
                fetch('http://localhost:5555/getcart', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                         Authorization: `Bearer ${token}`
                    }
                })
                .then(response => response.json())
                .then(data => {
                    setCartItems(data.length)
                    console.log(cartItems)
                })
            }
        })

    }
    
    return(
        <div id="current-product-card">
            {addedToCart ? <Toast message="Product added to cart successfully"/> : null}
            {updatedCart ? <Toast message="Product quantity updated in cart"/> : null}
            <div style={{ position: "relative",width: '50%',height: "90%", display : "flex", justifyContent: "center"}}>
             <img src={props.image} alt="product" />
            </div>
            <div id="product-details">
                <h2>{props.name}</h2>
                <p>{props.description}</p>
                <span className="price">Ksh. {props.price}</span>
                <form onSubmit={(e) => addToCart(e)}>
                <label for="quantity">Quantity</label>                
                <input onChange={(e) => setquantity(e.target.value)} value={quantity} id="quantity" style={{
                    border: "1px solid maroon",
                    margin: "10px 0px",
                    padding: "4px",
                    width: "50%"
                }} type="number" />
                <input type="submit"  className="add-to-cart"  value="add to cart"/>             
                </form>
            </div>

        </div>
    )
}

export default CurrentProductCard