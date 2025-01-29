import Nav from "./AdminNavBar"
import AdminMenu from "./AdminMenu"
import { useEffect, useState } from "react"
import Loading from "../Components/Loading"


function ViewProducts(){
    const [products, setProducts] = useState([])
    useEffect(() => {
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
        <div>
            <Nav/>
            <AdminMenu/>
            <div id="admin-content">
                <h1>View Products</h1> 
                <div id="product-container">
                {products && products.length > 0 ? products.map((product, index) => {
                    return(
                     <div id="productz-card"> 
                        <span> {index +1}. {product.name}</span>
                        <div id="status">{product.status}</div>
                        <span>{product.category['name']}</span>
                     </div>
                    )

                }) : <Loading />
                } 

                </div>             
            </div>
            
            
        </div>
    )
}

export default ViewProducts