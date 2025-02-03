import Nav from "./AdminNavBar"
import AdminMenu from "./AdminMenu"
import { ProductContext } from "../Components/ProductContext"
import { useNavigate } from "react-router-dom"
import { useContext, useEffect } from "react"

function AdminHome(){
    const {adminLoggedIn} = useContext(ProductContext)
    const navigate = useNavigate()
    
    useEffect(() => {
        if (!adminLoggedIn) {
            navigate('/admin/auth')
        }
    }, [adminLoggedIn, navigate])
   
    return(
        <div>
            <Nav/>
            <AdminMenu/>
            <div id="admin-content">
               <h1>Admin Home</h1>
            </div>
            
        </div>
    )
}

export default AdminHome