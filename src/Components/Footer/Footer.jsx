import React from 'react'
import "./Footer.css"
import footer_log from "../Assets/logo_big.png"
import instagram_logo from "../Assets/instagram_icon.png"
import pint_logo from "../Assets/pintester_icon.png"
import whatsapp from "../Assets/whatsapp_icon.png"

function Footer() {
  return (
    <div className='footer'>
        <div className="footer-log">
            <img src={footer_log} alt="" />
            <p>SHOPPER</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Product</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="social-media">
            <img src={instagram_logo} alt="" />
            <img src={pint_logo} alt="" />
            <img src={whatsapp} alt="" />
        </div>
      
    </div>
  )
}

export default Footer
