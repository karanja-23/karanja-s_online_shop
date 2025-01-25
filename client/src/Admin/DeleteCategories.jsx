import Nav from "./AdminNavBar"
import AdminMenu from "./AdminMenu"
import { useState, useEffect } from "react"
import { data } from "react-router-dom"


function DeleteCategories(){
    const[categories, setCategories] = useState(null)
    const[isDelete, setIsDelete] = useState(false)
  
  useEffect(()=>{
    fetch('http://localhost:5555/categories',{
        method: 'GET',
        headers: {
            'Content-Type':'application/json'
        }        
    })
    .then(response => response.json())
    .then(data => setCategories(data))
  },[isDelete])  
  function handleDelete(id){
    fetch(`http://localhost:5555/category/${id}`,{
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => console.log(data))
    setIsDelete(true)
    }
    useEffect(() => {
        if (isDelete) {
          fetch('http://localhost:5555/categories',{
            method: 'GET',
            headers: {
              'Content-Type':'application/json'
            }        
          })
          .then(response => response.json())
          .then(data => {
            setCategories(data)
            setIsDelete(false)
          })
        }
      }, [isDelete])
    return(
        <div>
            <Nav/>
            <AdminMenu/>
            <div id="admin-content">
            <h1>Delete categories</h1>
            <div id="categories_container">
                {categories ? (
                        categories.map((category,index) =>{
                            
                            return <div className="category-items" key={category.id}>
                                {index+1}. {category.name}
                                    <div id="btn-container">
            
                                        <button onClick={() => handleDelete(category.id)}>Delete</button>
                                    </div>                
                                </div>
                            
                        })              
                ) :(<h1>Loading ...</h1>)}
            </div>                          
                               
            </div>
            
        </div>
    )
}

export default DeleteCategories