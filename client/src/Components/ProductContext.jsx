import { createContext, useState} from "react";


const ProductContext = createContext();

const ProductProvider = ({ children }) => {
    const [currentProduct, setcurrentProduct] = useState("");
    const [products, setProducts] = useState(null)
    const [theSearchedProduct, setTheSearchedProduct] = useState(null)
    const [login, setLogin] = useState(false)
    const [token, setToken] = useState(useState(''))
    return (
        <ProductContext.Provider value={{ currentProduct, setcurrentProduct,theSearchedProduct, setTheSearchedProduct, login, setLogin, products, setProducts, token, setToken }}>
            {children}
        </ProductContext.Provider>
    );};

export { ProductProvider, ProductContext };