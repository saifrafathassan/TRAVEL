import React from 'react'
import './Footer.css'
import {FaYoutube,  FaInstagram,FaTwitter,FaPinterest, FaFacebook} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="container">
        <div className="top">
            <h3>BEACHES.</h3>
            <div className="social">
                <FaFacebook className='icon'/>        
                <FaInstagram className='icon'/>        
                <FaTwitter className='icon'/>        
                <FaPinterest className='icon'/>        
                <FaYoutube className='icon'/>   
            </div>
        </div>
        <div className="bottom">
            <div className="left">
                <ul>
                    <li>About</li>
                    <li>Partnerships</li>
                    <li>Careers</li>
                    <li>Newsroom</li>
                    <li>Advertising</li>
                </ul>
            </div>
            <div className="right">
                <ul>
                    <li>Contact</li>
                    <li>Terms</li>
                    <li>Policy</li>
                    <li>Privacy</li>
                    <li>Pricing</li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
