import { NavLink } from "react-router-dom"
import { useState,useContext,useEffect } from "react"
import { ProductContext } from "./ProductContext"
function CurrentProductCard(props) {
   const [quantity, setquantity] = useState(1)
   const {currentProduct} = useContext(ProductContext)
   const {token} = useContext(ProductContext)

    function addToCart() {
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
        .then(data => console.log(data))
        console.log(currentProduct.id)

    }
    return(
        <div id="current-product-card">
            <div style={{ position: "relative",width: '50%',height: "90%", display : "flex", justifyContent: "center"}}>
             <img src={props.image} alt="product" />
            </div>
            <div id="product-details">
                <h2>{props.name}</h2>
                <p>{props.description}</p>
                <span className="price">Ksh. {props.price}</span>
                <label for="quantity">Quantity</label>
                <input onChange={(e) => setquantity(e.target.value)} value={quantity} id="quantity" style={{
                    border: "1px solid maroon",
                    margin: "10px 0px",
                    padding: "4px",
                    width: "50%"
                }} type="number"></input>
                <div onClick={() => addToCart()} className="add-to-cart">Add to cart</div>        
            </div>

        </div>
    )
}

export default CurrentProductCard