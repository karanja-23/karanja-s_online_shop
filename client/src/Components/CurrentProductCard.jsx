import { NavLink } from "react-router-dom"
function CurrentProductCard(props) {
   

    return(
        <div id="current-product-card">
            <div style={{ position: "relative",width: '50%',height: "90%", display : "flex", justifyContent: "center"}}>
             <img src={props.image} alt="product" />
            </div>
            <div id="product-details">
                <h2>{props.name}</h2>
                <p>{props.description}</p>
                <span className="price">Ksh. {props.price}</span>
                <label for="quantity">Amount</label>
                <input value="1" id="quantity" style={{
                    border: "1px solid maroon",
                    margin: "10px 0px",
                    padding: "4px",
                    width: "50%"
                }} type="number"></input>
                <div className="add-to-cart">Add to cart</div>        
            </div>

        </div>
    )
}

export default CurrentProductCard