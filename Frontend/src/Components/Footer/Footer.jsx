import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src= {assets.logo} alt="" />
                <p>This layout will create four cards per row. If the screen is too narrow to fit four cards at the specified minimum width, you might want to add a media query to adjust the number of columns for smaller screens:</p>
                <div className="footer-social-icons">
                    <img src= {assets.facebook_icon} alt="" />
                    <img src= {assets.twitter_icon} alt="" />
                    <img src= {assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91 9836521657</li>
                    <li>contact @tomato.com</li>
                </ul>
            </div>
        </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 Tomato.com - All Right Reserved
      </p>
    </div>
  )
}

export default Footer
