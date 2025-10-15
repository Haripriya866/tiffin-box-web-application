import React from 'react';

import './index.css'

function Footer() {
  return (
    <footer id="footer" className='footer-container' >
        <div className='footer-tiffin-box-image-container'>
            <img src='/images/footer/image-1.png' alt='image-1' className='footer-tiffin-box' />
        </div>
        <h1 className='footer-heading'>Subscribe to our newsletter</h1>
        <div className='footer-address-subscribe-container'>
            <div className='footer-address-container'>
                <p className='footer-email-address'>Email Address</p>
                <hr className='footer-line' />
            </div>
            <button type='button' className='subscribe-button'>Subscribe</button>
        </div>
        <h3 className='footer-contact-u-heading'>Contact U</h3>
        <p className='footer-text'>0151 245 1500</p>
        <p className='footer-text'>Info@tiffinbox.co.uk</p>
        <p className='footer-text'>Allerton Rd, Liverpool L25 7RE</p>
        <div className='footer-bottom-container'>
            <p className='menu'>Menu</p>
            <p className='footer-bottom-text'>Order Online</p>
            <p className='footer-bottom-text'>Book a Table</p>
            <p className='footer-bottom-text'>About Us</p>
            <p className='footer-bottom-text'>Contact U</p>
        </div>
    </footer>
  );
}

export default Footer;

