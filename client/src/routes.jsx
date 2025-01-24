import Home from "./Pages/Home"
import Login from "./Pages/Login"
import AdminLogin from "./Admin/AdminLogin"
import AdminHome from "./Admin/AdminHome"
import ViewProducts from "./Admin/ViewProducts"
import AddProducts from "./Admin/AddProducts"
import AddCategories from "./Admin/AddCategories"
import ViewCategories from "./Admin/ViewCategories"
const routes=[
    {
        path:"/",
        element:<Home/>
    },
    {
        path:"/login",
        element:<Login/>
    },
    {
        path:"/admin/auth",
        element:<AdminLogin/>
    },
    {
        path:"/admin",
        element:<AdminHome/>,
        
    },
    {
        path:"/admin/products",
        element:<ViewProducts/>
    },
    {
        path: "/admin/add_product",
        element: <AddProducts />
    },
    {
        path: "/admin/add_category",
        element: <AddCategories />
    },
    {
        path: "/admin/view_categories",
        element: <ViewCategories />
    }
]

export default routes