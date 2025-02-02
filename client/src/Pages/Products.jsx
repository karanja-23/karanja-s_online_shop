import NavBar from "../Components/NavBar"
import Footer from "../Components/Footer"
import Loading from "../Components/Loading"
import { useState, useEffect, useContext } from "react"
import ProductCard from "../Components/ProductCard"
import { ProductContext } from "../Components/ProductContext"
import { useNavigate } from "react-router-dom"

function Products(){
    const [categories, setCategories] = useState(null)
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(12)
    const {products, setProducts} = useContext(ProductContext)
    const navigate = useNavigate()
    const{login} = useContext(ProductContext)
    const [loadingCategories, setLoadingCategories] = useState(true);
    const [loadingProducts, setLoadingProducts] = useState(true);

    useEffect(() =>{
        if (login ===false){
            navigate ('/login')
        }
    },[])    

    useEffect(() =>{
        fetch('https://karanja-s-online-shop-v1q7.onrender.com/product',{
            method: 'GET',
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            setProducts(data)
            setLoadingProducts(false)
            })
    }, [currentPage, itemsPerPage])

    useEffect(() =>{
        fetch ('https://karanja-s-online-shop-v1q7.onrender.com/categories', {
            method: 'GET',
            headers: {
                'Content-Type':'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            setCategories(data)
            setLoadingCategories(false)
        })
           
    },[])

    function handleFilter(e) {
        const selectedId = e.target.value;
        if (selectedId == "") {
            fetch('https://karanja-s-online-shop-v1q7.onrender.com/product', {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json'
              }
            })
            .then(response => response.json())
            .then(data => {
              setProducts(data)
              setCurrentPage(1)
            })
          }
        else{
            fetch (`https://karanja-s-online-shop-v1q7.onrender.com/select/category/${selectedId}`,{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => response.json())
            .then(data => {
                setProducts(data)
                setCurrentPage(1)
            })        
        }
    }
    

    return(
        <div className="main">
            <NavBar />
            <div  id="products-container">
                <div id="selectCategories">
                    <select onChange={(e) => {handleFilter(e)}}>
                        <option value="">All Categories</option>
                        {categories.map((category,index ) =>{
                           return <option key={index} value={category.id}>{category.name}</option>
                        })}
                    </select>
                </div>
                {products ? (
                        <div id="my-products">
                        {products.map((product,index) =>{
                            const start = (currentPage -1) * itemsPerPage;
                            const end = currentPage * itemsPerPage
                            if(index >= start && index < end){
                                
                                return <ProductCard  key={index} image={product.image} name={product.name} description={product.description} price={product.price.toLocaleString("en-US")} id={product.id}/>
                            }
                            else{
                                return null
                            }
                            
                        })}            
                        </div>            

                ) : ( <Loading />)}
                
                <div id="pagination">
                    <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
                    <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === Math.ceil(products.length / itemsPerPage)}>Next</button>
                </div>    
            </div>

            
        </div>

    )
}
export default Products