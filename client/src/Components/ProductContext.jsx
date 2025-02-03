import { createContext, useState} from "react";


const ProductContext = createContext();

const ProductProvider = ({ children }) => {
    const [currentProduct, setcurrentProduct] = useState("");
    const [products, setProducts] = useState(null)
    const [theSearchedProduct, setTheSearchedProduct] = useState(null)
    const [login, setLogin] = useState(false)
    const [token, setToken] = useState(useState(''))
    const [cartItems, setCartItems] = useState(0)
    const [userCart, setUserCart] = useState([])
    const [adminLoggedIn, setAdminLoggedIn]=useState(false)
    return (
        <ProductContext.Provider value={{ currentProduct, setcurrentProduct,theSearchedProduct, setTheSearchedProduct, login, setLogin, products, setProducts, token, setToken,cartItems, setCartItems, userCart, setUserCart, adminLoggedIn, setAdminLoggedIn }}>
            {children}
        </ProductContext.Provider>
    );};

export { ProductProvider, ProductContext };