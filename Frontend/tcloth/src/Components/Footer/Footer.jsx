import React from "react";
import '../Footer/Footer.css'

function Footer(){
    return(
        <div className="footer">
            <div className="footerItem">
                <h1>ABOUT US</h1>
                <ul className="footerList">
                    <li>Akanksha Collection</li>
                    <li>Careers</li>
                </ul>
            </div>
            <div className="footerItem">
                <h1>CATEGORIES</h1>
                <ul className="footerList">
                    <li>Returns & Exchange</li>
                    <li>Contat Us</li>
                </ul>
            </div>
            <div className="footerItem">
                <h1>LEGAL</h1>
                <ul className="footerList">
                    <li>Corporate Information</li>
                    <li>Terms & Conditions</li>
                    <li>Privacy Policy</li>
                    <li>Cookie Policy</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;