import Home from "./Pages/Home"
import Login from "./Pages/Login"
import AdminLogin from "./Admin/AdminLogin"
import AdminHome from "./Admin/AdminHome"
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
        element:<AdminHome/>
    }
]

export default routes