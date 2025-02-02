import Nav from "./AdminNavBar"
import AdminMenu from "./AdminMenu"
import { useState, useEffect } from "react"


function ViewCategories(){
    const[categories, setCategories] = useState(null)
    const [count, setCount] = useState(1)
    function handleadd(){
        setCount(count+1)
    }
  useEffect(()=>{
    fetch('https://karanja-s-online-shop-v1q7.onrender.com/categories',{
        method: 'GET',
        headers: {
            'Content-Type':'application/json'
        }        
    })
    .then(response => response.json())
    .then(data => setCategories(data))
  },[])  
  
    return(
        <div>
            <Nav/>
            <AdminMenu/>
            <div id="admin-content">
            <h1>Existing categories</h1>
            <div id="categories_container">
                {categories ? (
                        categories.map((category,index) =>{
                            
                            return <div className="category-items" key={category.id}>
                                {index+1}. {category.name}

                                </div>
                            
                        })              
                ) :(<h1>Loading ...</h1>)}
            </div>                          
                               
            </div>
            
        </div>
    )
}

export default ViewCategories