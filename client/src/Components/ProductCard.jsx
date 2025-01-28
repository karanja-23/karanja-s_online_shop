import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { ProductContext } from "./ProductContext"
function ProductCard(props) {
    const { currentProduct, setcurrentProduct } = useContext(ProductContext)
    function handleClick(){
        const product = {
            image: props.image,
            name: props.name,
            description: props.description,
            price: props.price,
          };
        
        setcurrentProduct(product)
        console.log(currentProduct)

        
    }
    return(
        <div id="product-card">
            <img src={props.image} alt="product" />
            <h2>{props.name}</h2>
            <span className="price">Ksh. {props.price}</span>
            <NavLink to="/product"><div onClick={() => handleClick()} className="add-to-cart">View details</div></NavLink>

        </div>
    )
}

export default ProductCard