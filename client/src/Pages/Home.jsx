import NavBar from "../Components/NavBar"
import image from "../assets/cart.png"
import incentivesImage from"../assets/incentives.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import delivery from "../assets/delivery.png"
import quality from "../assets/quality.png"
import prices from "../assets/prices.png"
import service from "../assets/service.png"
import { faCheck,faArrowRightLong } from "@fortawesome/free-solid-svg-icons"
import partner from "../assets/team.png"
import Textimonials from "../Components/TestimonialsCard"
import Footer from "../Components/Footer"
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

                <div id="sell-with-us-text">
                    <span id="sell-heading">Partner with us</span>
                    <span id="sell-content">Sell with us and reach a global audience! Our e-commerce platform makes it easy to list and sell your products, with competitive fees and flexible payment options. Sign up now and start growing your business!</span>
                    <span > contact us <FontAwesomeIcon style={{marginLeft: "10px"}} icon={faArrowRightLong} /> </span>
                </div>
                <div id="sell-with-us-image">
                    <img src={partner} alt="team" />
                </div>

            </div>
            <div id="testimonials">
                <span id="testimonials-heading">Testimonials</span>
                <div style={{display: "flex", gap: "30px", flexWrap:"wrap", justifyContent: "center"}}>
                    <Textimonials customer="Emily Karanja" content="I've been using this app for a few months now and I'm absolutely loving it! The products are always delivered on time and the customer service is top-notch. I've already recommended it to all my friends and family!"/>
                    <Textimonials customer="Henry Olelempaka" content="I was a bit skeptical about shopping online, but this app has completely changed my mind. The products are high-quality, the prices are competitive, and the shipping is fast. I've already made several purchases and I'm always happy with the results!" />
                    <Textimonials customer ="Felix Mumbai" content ="I accidentally ordered the wrong size, but the return process was so easy and hassle-free. The customer service team was very helpful and responsive. I'm definitely going to continue shopping with this app!" />
                    <Textimonials customer = "Christine Wambua" content="I love that this app has such a wide selection of products. I can always find what I'm looking for, and the prices are always competitive. The app is also very user-friendly and easy to navigate." />
                    <Textimonials customer="Jane Njagi" content="I was amazed at how quickly my order arrived. I placed the order on a Monday and it was delivered by Wednesday. The shipping is so fast and reliable. I'm definitely going to continue shopping with this app!" />
                    <Textimonials customer="Erick Mwagangi" content="I've been impressed with the high-quality of the products I've received from this app. The materials are always top-notch and the products are well-made. I'm definitely going to continue shopping with this app!" />
                </div>
                <Footer />
            </div>
                        
        </div>
    )
}

export default Home