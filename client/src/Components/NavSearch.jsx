import { ProductContext } from "./ProductContext"
import { useContext,useEffect } from "react"
function NavSearch (){
    const {theSearchedProduct} = useContext(ProductContext)
    
    
    return(
        <div id="navsearch" style={{display: "flex", flexDirection: "column"}}>
            {theSearchedProduct ? (<div style={{display: "flex", flexDirection: "column", gap: "7px",overflowX: "auto"}}>
                {theSearchedProduct.map((product) => {
                    return <div style={{display: "flex",justifyContent:"space-between", position: "relative", height: "50px"}}>
                        <div style={{width:"30%",height: "100%", position: "relative"}}>
                         <img style={{maxWidth: "100%", height: "100%"}} src={product.image} />
                        </div>
                        <span>{product.name}</span>
                        <button style={{maxHeight: "60%",padding: "5px",width:"fit content", boxSizing: "border-box", backgroundColor: "maroon",color: "whitesmoke", fontWeight: "700"}}>view details</button>
                    </div>
                })}
            </div >): null}

        </div>
    )
}

export default NavSearch