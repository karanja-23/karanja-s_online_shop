import NavBar from "../Components/NavBar"
import Footer from "../Components/Footer"
import Loading from "../Components/Loading"
import { useState, useEffect, useContext } from "react"
import ProductCard from "../Components/ProductCard"
function Products(){

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10)
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
    }, [currentPage, itemsPerPage])
    if( products === null){
        return <Loading />
    }
    return(
        <div className="main">
            <NavBar />
            <div  id="products-container">
                {products ? products.map((product,index) =>{
                    const start = (currentPage -1) * itemsPerPage;
                    const end = currentPage * itemsPerPage
                    if(index >= start && index < end){
                        return <ProductCard  key={index} image={product.image} name={product.name} description={product.description} price={product.price} product={product}/>
                    }
                    else{
                        return null
                    }
                    
                }) : <h1></h1>}
                
                <div id="pagination">
                    <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
                    <button onClick={() => setCurrentPage(currentPage + 1)} disabled={products && currentPage === Math.ceil(products.length / itemsPerPage)}>Next</button>
                </div>    
            </div>

            
        </div>

    )
}
export default Products