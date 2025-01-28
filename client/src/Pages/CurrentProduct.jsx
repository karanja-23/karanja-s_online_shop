import NavBar from "../Components/NavBar"
import { useContext } from "react"
import Footer from "../Components/Footer"
import { ProductContext } from "../Components/ProductContext"
import ProductCard from "../Components/ProductCard"
function CurrentcurrentProduct(){
    const {currentProduct } =useContext(ProductContext)
    console.log(currentProduct)
    return(
        <div className="main">
            <NavBar/>
            <div id="current-product">
                <ProductCard image={currentProduct.image} name={currentProduct.name} description={currentProduct.description} price={currentProduct.price} />
                
            </div>

            <div id="empty-currentProduct">
                <Footer />
            </div>
            
        </div>
    )
}

export default CurrentcurrentProduct