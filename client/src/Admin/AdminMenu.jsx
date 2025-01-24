import { Outlet } from "react-router-dom"
function AdminMenu() {
    return (
        <div id="admin-menu">
            <h1 style={{
                textAlign: 'center',
                color: 'maroon',
                textDecoration: 'underline',
                textUnderlineOffset: '4px'
            }}>Admin Menu</h1>
            <ul id="adminmenuItems">
                <li>Add Products</li>
                <li>Add Categories</li>
                <li>Edit Product</li>
                <li>Show Product list</li>
            </ul>
            <div id="admin-content">
                <Outlet />
            </div>
        </div>
    )
}

export default AdminMenu