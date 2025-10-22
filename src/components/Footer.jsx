import React from 'react'
import { assets } from "../assets/assets";
const Footer = () => {
  return (
    <>
    <div className='footer'>
    <div>
        <img src={assets.logo} alt="" />
        <p>Forever is your go-to destination for trendy and affordable fashion.<br />
          We bring you the latest collections with fast delivery and great support.<br />
          Your style, our passion making fashion easy and accessible.
          </p>
    </div>
     <div>
        <h3>COMPANY</h3>
        <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
        </ul>
    </div> 
    <div>
        <h3>GET IN TOUCH</h3>
        <ul>
            <li>+91-1234567890</li>
            <li>contactforever@gmail.com</li>
        </ul>
    </div>
    </div>
    <div className='footer-copy'>
        <p>Copyright 2025@forever.com - All Right Reserved.</p>
    </div>
    </>
  )
}

export default Footer;
