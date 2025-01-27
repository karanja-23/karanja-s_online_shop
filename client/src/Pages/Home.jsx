import NavBar from "../Components/NavBar"
import image from "../assets/cart.png"
import incentivesImage from"../assets/incentives.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import delivery from "../assets/delivery.png"
import quality from "../assets/quality.png"
import prices from "../assets/prices.png"
import service from "../assets/service.png"
import { faCheck } from "@fortawesome/free-solid-svg-icons"
function Home(){
    return(
        <div className="main">
            <NavBar/>
            <div id="home-landing-page">
                <div id="home-text" style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '70px'
                }} >
                <span id="home-title">Shop Online with Confidence and Trust Always Guaranteed</span>
                <button id="home-button">Shop Now</button>
                </div>
                <div style={{
                    width: '50%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                <img id="landingp_img" src={image} alt="cart"/>
                </div>
            </div>
            <h3 id="barner">Complimentary Shipping on All Orders Over 7,500 Ksh.</h3>
            <div id="incentives">
                <div id="incentives-image">
                    <img src={incentivesImage} alt="incentives" />

                </div>
                <div id="incentives-text">
                    <span id="incentives-title">Customer Incentives</span>
                    <span id="incentives-subtitle">Exclusive offers for our loyal customers</span>
                    <div id="incentives-list">
                        <div className="check">
                        <FontAwesomeIcon className="check" icon={faCheck} />10% off on your first order
                        </div>
                        <div className="check">
                        <FontAwesomeIcon className="check" icon={faCheck} />Bundle deals: discounts on multiple products purchased together
                        </div>
                        <div className="check">
                        <FontAwesomeIcon className="check" icon={faCheck} />Special offers: exclusive discounts and promotions
                        </div>
                        <div className="check">
                        <FontAwesomeIcon className="check" icon={faCheck} />Free shipping: eligible orders receive free shipping
                        </div>
                        <div className="check">
                        <FontAwesomeIcon className="check" icon={faCheck} />Exclusive discounts: special offers and promotions
                        </div>
                 
                    </div>
                </div>
                
            </div>
            <h3 className="why-shop-title" id="why-shop-title">Why Shop With Us</h3>
            <div id="why-shop"> 
                
                <div className="reasons">
                    <img className="reasons-img" src={delivery} alt="delivery" />
                    <span className="reasons-title">24/7 Delivery</span>
                </div>
                <div className="reasons">
                    <img className="reasons-img" src={quality} alt="delivery" />
                    <span className="reasons-title">Quality Products</span>
                </div>  
                <div className="reasons">
                    <img className="reasons-img" src={service} alt="delivery" />
                    <span className="reasons-title">Customer Service</span>
                </div>                   
                <div className="reasons">
                    <img className="reasons-img" src={prices} alt="delivery" />
                    <span className="reasons-title">fair Prices</span>
                </div>  

            </div>
            <div id="sell-with-us">

            </div>
            
        </div>
    )
}

export default Home