
function ProductCard(props){
    return(
        <div className="product-card" style={{
            width: '200px',
            height: '200px',
            backgroundColor: 'rgb(15, 23, 66)',
            color: 'black',
        }}>
            <img style={{width: '100%', height: '100%', objectFit: 'contain'}} src={`data:image/png;base64,${props.image}`} alt="image" />
            <h3>{props.name}</h3>
            <p>{props.price}</p>
            <p>{props.description}</p>
            

        </div>
    )
}

export default ProductCard