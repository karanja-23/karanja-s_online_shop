import Home from "./Pages/Home"
import Login from "./Pages/Login"
import AdminLogin from "./Components/AdminLogin"
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
  
]

export default routes