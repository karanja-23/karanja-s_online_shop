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
        path:"/admin",
        element:<AdminLogin/>
    },
    {
        path:"/admin/home",
        element:<AdminHome/>
    }
]

export default routes