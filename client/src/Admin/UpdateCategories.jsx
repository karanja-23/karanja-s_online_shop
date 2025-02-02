import Nav from "./AdminNavBar"
import AdminMenu from "./AdminMenu"
import { useState, useEffect } from "react"
import { data } from "react-router-dom"


function UpdateCategories(){
    const[categories, setCategories] = useState(null)
    
    const[categoryNames, setCategoryNames] = useState({})
    
    useEffect(()=>{
        fetch('https://karanja-s-online-shop-v1q7.onrender.com/categories',{
            method: 'GET',
            headers: {
                'Content-Type':'application/json'
            }        
        })
        .then(response => response.json())
        .then(data => {
          setCategories(data)
          const categoryNames = {}
          data.forEach(category => {
            categoryNames[category.id] = category.name
          })
          setCategoryNames(categoryNames)
        })
      },[]) 
      function handleEdit(id){
        fetch(`https://karanja-s-online-shop-v1q7.onrender.com/category/${id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ name: categoryNames[id] })
        })
        .then(response => response.json())
        .then(data => console.log(data))
      }
    
      function handleCategoryNameChange(id, value){
        const newCategoryNames = { ...categoryNames }
        newCategoryNames[id] = value
        setCategoryNames(newCategoryNames)
      }
    return(
        <div>
            <Nav/>
            <AdminMenu/>
            <div id="admin-content">
            <h1>Update categories</h1>
            <div id="categories_container">
                {categories ? (
                        categories.map((category,index) =>{
                            
                            return <div className="category-items" key={category.id}>
                                {index+1}. 
                                
                                    <form>
                                        <input style={{
                                            marginLeft: '10px',
                                            padding: '5px', 
                                        }} type="text" value={categoryNames[category.id]}  onChange={(e) => handleCategoryNameChange(category.id, e.target.value)}></input>
                                    </form>
                                    <div id="btn-container">
            
                                        <button onClick={() => handleEdit(category.id)}>Update</button>
                                    </div>                
                                </div>
                            
                        })              
                ) :(<h1>Loading ...</h1>)}
            </div>                          
                               
            </div>
            
        </div>
    )
}

export default UpdateCategories