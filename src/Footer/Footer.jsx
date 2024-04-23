import './Footer.css'
import logo from '../../public/autozoom.svg'
const Footer = () => {
  return (
    <div className='footer container'>
        <div className=" footer-wrapper">
            <div className="footer-box">
                <img className='footer-logo' src={logo} alt="autozoom" />
                <h2 className="footer-title">
                LUXURY CAR RENTAL IN DUBAI
                </h2>
                <p className="footer-subtitle colors">
                Rent sports and luxury cars directly without intermediaries. Rent a car in Dubai with Auto Zoom Car Rental - safety and driving pleasure
                </p>
            </div>
            <div className="footer-box">
                <ul className="footer-list">
                    <li className="footer-item active">Cars</li>
                    <li className="footer-item colors">Suv</li>
                    <li className="footer-item colors">Sports Cars</li>
                    <li className="footer-item colors"> Luxury Cars</li>
                    <li className="footer-item colors"> Convertivle Cars</li>
                    <li className="footer-item colors"> Burget Cars</li>
                    <li className="footer-item colors"> Aьerican Brand </li>
                </ul>
            </div>
            <div className="footer-box">
                <ul className="footer-list">
                    <li className="footer-items active">Blog</li>
                    <li className="footer-items active">Service</li>
                    <li className="footer-items active">Contact</li>
                    <li className="footer-items colors">  Elite 3 Sports City, Dubai 26W8 24J, United Arab Emirates</li>
                </ul>
            </div>
            <div className="footer-box">
                <ul className="footer-list">
                    <li className="footer-left active">About Us</li>
                    <li className="footer-left colors">Our Team</li>
                    <li className="footer-left colors ">Faq</li>
                    <li className="footer-left active"> Follow Us</li>
                    <li className="footer-left">  <i className=" fa-brands fa-instagram icons"></i> <i className=" fa-brands fa-facebook icons"></i> <i className="  fa-brands fa-youtube icons"></i></li>
                </ul>
            </div>
        </div>
        <div className="footer-bottom">
            <button className="footer-btn">GET BEST OFFER</button>
            <div className="footer-info">
                <p className="foooter-test">© 2024 Auto Zoom Car Rental. United Arab Emirates.</p>
                <p className="foooter-test">Terms and Conditions</p>
            </div>
        </div>
    </div>
  )
}

export default Footer