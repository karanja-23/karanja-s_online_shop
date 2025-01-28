import { createContext, useState } from "react";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
    const [currentProduct, setcurrentProduct] = useState("");
    

    return (
        <ProductContext.Provider value={{ currentProduct, setcurrentProduct }}>
            {children}
        </ProductContext.Provider>
    );};

export { ProductProvider, ProductContext };