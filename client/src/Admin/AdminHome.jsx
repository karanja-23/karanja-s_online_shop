import Nav from "./AdminNavBar"
import AdminMenu from "./AdminMenu"
import { AuthContext } from "./AuthContext"
import { useNavigate } from "react-router-dom"
import { useContext, useEffect } from "react"
function AdminHome(){
    const {isAuthenticated} = useContext(AuthContext)
    const navigate = useNavigate()
    
    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/admin/auth')
        }
    }, [isAuthenticated, navigate])
   
    return(
        <div>
            <Nav/>
            <AdminMenu/>
            
        </div>
    )
}

export default AdminHome