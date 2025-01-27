import Nav from "./AdminNavBar"
import AdminMenu from "./AdminMenu"
import { useEffect, useState } from "react"


function ViewProducts(){
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5555/products')
        .then(response => response.json())
        .then(data => {
            
            setProducts(data)
        })
    })
    return(
        <div>
            <Nav/>
            <AdminMenu/>
            <div id="admin-content">
                <h1>View Products</h1> 
                <div id="product-container">
                {products ? products.map((product, index) => {
                    return(
                     <div id="product-card"> 
                        <span> {index +1}. {product.name}</span>
                        <div id="status">{product.status}</div>
                        <span>{product.category['name']}</span>
                     </div>
                    )

                }) : <h1>Loading...</h1>
                } 
                </div>             
            </div>
            
            
        </div>
    )
}

export default ViewProducts