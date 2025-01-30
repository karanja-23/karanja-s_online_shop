import NavBar from "../Components/NavBar"
import { useContext, useEffect } from "react"
import { ProductContext } from "../Components/ProductContext"
function Cart() {
const {userCart} = useContext(ProductContext)
useEffect(() => {
    console.log(userCart)
},[])

    return(
        <div className="main">
            <NavBar />
            <div id="cart-container">
                <table id="cart-table">
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Total</th>
                    </tr>
                    {Object.keys(userCart).map((key) => {
                      const product = userCart[key];
                      return (
                        <tr key={key}>
                          <td style={{ textAlign: "left" }}>{product.product.name}</td>
                          <td>{product.quantity}</td>
                          <td>{product.product.price.toLocaleString("en-US")}</td>
                          <td>{(product.product.price * product.quantity).toLocaleString("en-US")}</td>
                          
                        </tr>
                      );
                    })}
                    <tr>
                        <td colSpan="3" style={{ textAlign: "right", fontWeight: "bold" }}>Total:</td>
                        <td>{userCart.reduce((total, item) => total + item.product.price * item.quantity, 0).toLocaleString("en-US")}</td>
                    </tr>
                </table>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "10px",
                    gap: "10px"
                }}>
                    <div>
                        <button id="checkout-button">Checkout</button>
                    </div>
                    <div>
                        <button id="clear-button">Clear Cart</button>
                    </div>
                </div>            
            </div>

        </div>
    )
}
export default Cart