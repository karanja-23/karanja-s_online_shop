import Nav from "./AdminNavBar"
import AdminMenu from "./AdminMenu"
import { useEffect, useState } from "react"
import ProductCard from "./ProductCards"

function ViewProducts(){
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5555/products')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setProducts(data)
        })
    })
    return(
        <div>
            <Nav/>
            <AdminMenu/>
            <div id="admin-content">
                <h1>View Products</h1> 
                {products ? products.map(product => {
                    return(
                     <ProductCard name={product.name} price={product.price} description={product.description} image={product.image} /> 
                    )

                }) : <h1>Loading...</h1>
                }              
            </div>
            
            
        </div>
    )
}

export default ViewProducts