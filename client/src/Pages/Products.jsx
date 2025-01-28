import NavBar from "../Components/NavBar"
import Footer from "../Components/Footer"
import { useState, useEffect, useContext } from "react"
import ProductCard from "../Components/ProductCard"
function Products(){
    
    const [products, setProducts] = useState(null)
    useEffect(() =>{
        fetch('http://localhost:5555/product',{
            method: 'GET',
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            setProducts(data)
           
            })
    }, [])
    return(
        <div className="main">
            <NavBar />
            <div  id="products-container">
                {products ? products.map((product) =>{
                    
                    return <ProductCard image={product.image} name={product.name} description={product.description} price={product.price} product={product}/>
                }) : <h1></h1>}
                
            </div>
            
        </div>

    )
}
export default Products