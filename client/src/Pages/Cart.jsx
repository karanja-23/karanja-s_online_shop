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
                    {Object.entries(userCart).map(([key, value]) => {

                        return(
                            <tr>
                                <td style={{textAlign: "left"}}>{value.product['name']}</td>
                                <td>{value.quantity}</td>
                                <td>{value.product.price}</td>
                                <td>{value.product.price * value.quantity}</td>
                            </tr>
                        )
                    })}
                </table>
      
            
            </div>

        </div>
    )
}
export default Cart