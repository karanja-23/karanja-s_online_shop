import { createContext, useState} from "react";


const ProductContext = createContext();

const ProductProvider = ({ children }) => {
    const [currentProduct, setcurrentProduct] = useState("");
    const [theSearchedProduct, setTheSearchedProduct] = useState(null)

    return (
        <ProductContext.Provider value={{ currentProduct, setcurrentProduct,theSearchedProduct, setTheSearchedProduct }}>
            {children}
        </ProductContext.Provider>
    );};

export { ProductProvider, ProductContext };