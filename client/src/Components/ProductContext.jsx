import { createContext, useState} from "react";


const ProductContext = createContext();

const ProductProvider = ({ children }) => {
    const [currentProduct, setcurrentProduct] = useState("");
    const [products, setProducts] = useState(null)
    const [theSearchedProduct, setTheSearchedProduct] = useState(null)
    const [login, setLogin] = useState(false)
    return (
        <ProductContext.Provider value={{ currentProduct, setcurrentProduct,theSearchedProduct, setTheSearchedProduct, login, setLogin, products, setProducts }}>
            {children}
        </ProductContext.Provider>
    );};

export { ProductProvider, ProductContext };