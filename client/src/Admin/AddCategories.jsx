import Nav from "./AdminNavBar"
import AdminMenu from "./AdminMenu"
import { useState } from "react"

function AddCategories(){
    const [name, setName]=useState('')
    function handleSubmit(event){
        event.preventDefault()
        const new_category = {
            name,
        }
        fetch(`https://karanja-s-online-shop-v1q7.onrender.com/category`,{
            method : 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(new_category)            
        })
        .then(response => response.json())
        .then(data => console.log(data))
        event.target.reset()

    }
    return(
        <div>
            <Nav/>
            <AdminMenu/>
            <div id="admin-content">
                <h1>Add a new Category</h1>
               <form onSubmit={handleSubmit} id="add-category">
                <input onChange={(e) => setName(e.target.value)} id="add-category-field" type="text" placeholder="enter category name"></input>
                <input id="add-category-btn" type="submit" value="add category"></input>

               </form>
            </div>
            
        </div>
    )
}

export default AddCategories