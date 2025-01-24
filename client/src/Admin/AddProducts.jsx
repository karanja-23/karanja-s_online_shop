import Nav from "./AdminNavBar"
import AdminMenu from "./AdminMenu"
import { useState } from "react"

function AddProducts(){
    

    return(
        <div>
            <Nav/>
            <AdminMenu/>
            <div id="admin-content">
                <h1>Add a new product</h1>
               <form>


               </form>
            </div>
            
        </div>
    )
}

export default AddProducts

