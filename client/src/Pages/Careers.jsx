import NavBar from "../Components/NavBar"

import Footer from "../Components/Footer"

function Careers(){

    return(
        <div className="main">
            <NavBar/>
            <div id="careers">
                <span>There are no open positions at the momentss</span>
            </div>

            <div id="empty">
                <Footer />
            </div>
            
        </div>
    )
}

export default Careers