import Nav from "./AdminNavBar"
import AdminMenu from "./AdminMenu"
import { useState, useEffect } from "react"

function ViewCategories(){
  useEffect(()=>{
    
  },[])  
  
    return(
        <div>
            <Nav/>
            <AdminMenu/>
            <div id="admin-content">
                <h1>Existing categories</h1>

            </div>
            
        </div>
    )
}

export default ViewCategories