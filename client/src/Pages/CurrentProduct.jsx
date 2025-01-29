import NavBar from "../Components/NavBar"
import { useContext } from "react"
import Footer from "../Components/Footer"

import { ProductContext } from "../Components/ProductContext"
import CurrentProductCard from "../Components/CurrentProductCard"
function CurrentcurrentProduct(){
    const {currentProduct } =useContext(ProductContext)
    
    return(
        <div className="main">
            <NavBar/>
            <div id="current-product">
                <CurrentProductCard image={currentProduct.image} name={currentProduct.name} description={currentProduct.description} price={currentProduct.price} id={currentProduct.id} />
                
            </div>

            <div id="empty-currentProduct">
                <Footer />
            </div>
            
        </div>
    )
}

export default CurrentcurrentProduct