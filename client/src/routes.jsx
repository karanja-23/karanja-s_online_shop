import Home from "./Pages/Home"
import Login from "./Pages/Login"
import AdminLogin from "./Admin/AdminLogin"
import AdminHome from "./Admin/AdminHome"
import ViewProducts from "./Admin/ViewProducts"
import AddProducts from "./Admin/AddProducts"
import AddCategories from "./Admin/AddCategories"
import ViewCategories from "./Admin/ViewCategories"
import DeleteCategories from "./Admin/DeleteCategories"
import UpdateCategories from "./Admin/UpdateCategories"
import Careers from "./Pages/Careers"
import Contact from "./Pages/Contact"
import Products from "./Pages/Products"
import CurrentProduct from "./Pages/CurrentProduct"
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
    },
    {
        path: '/admin/delete_categories',
        element: <DeleteCategories />

    },
    {
        path: '/admin/update_categories',
        element: <UpdateCategories />
    },
    {
        path: '/careers',
        element: <Careers />
    },
    {
        path: '/contact',
        element: <Contact />
    },
    {
        path: '/products',
        element: <Products />
    },
    {
        path:'/product',
        element: < CurrentProduct />
    }
]

export default routes