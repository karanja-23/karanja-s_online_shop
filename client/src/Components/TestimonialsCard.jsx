
function Textimonials(props) {
    return(
        <div className="card">
            <span style={{wordSpacing: "2px"}}><span style={{fontSize: "1.7em", fontWeight: "700", color: "maroon" }}>" </span> <i>{props.content}</i><span style={{fontSize: "1.7em", fontWeight: "700", color: "maroon" }}> "</span></span>
            <span id="customer"> {props.customer}</span>
        </div>
    )
}

export default Textimonials