import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-brand">
        <img className="logo2" src ='./LOGOw.png'/>
        <div className="footer-apps">
          <a href="#" ><img className='appp' src="app01.png" alt="App Store" /></a>
          <a href="#" ><img className='playy' src="play01.png" alt="Google Play" /></a>
        </div>
        <div className="footer-company">
          <p>Company # 490039-445, Registered with <br />House of companies.</p>
        </div>
        </div>
        <div className="footer-subscription">
          <h3>Get Exclusive Deals in your Inbox</h3>
          <div className="subscription-input">
            <input type="email" placeholder="youremail@gmail.com" />
            <button>Subscribe</button>
          </div>
          <p>we wont spam, read our email policy</p>
        </div>
        <div className="footer-social">
          <a href="#"><img src="fb.png" alt="" /></a>
          <a href="#"><img src="inst.png" alt="" /></a>
          <a href="#"><img src="tw.png" alt="" /></a>
          <a href="#"><img src="in.png" alt="" /></a>
        </div>


        <div className="footer-links">
          <div className="footer-link-group">
            <h4>Legal Pages <br /><br /></h4>
            <ul>
              <li>Terms and conditions</li>
              <br />
              <li>Privacy</li>
              {/* <li>Cookies</li>
              <li>Modern Slavery Statement</li> */}
            </ul>
          </div>
          {/* <div className="footer-link-group">
            <h4>Important Links</h4>
            <ul>
              <li>Get help</li>
              <li>Add your restaurant</li>
              <li>Sign up to deliver</li>
              <li>Create a business account</li>
            </ul>
          </div> */}
        </div>
      
        
        
      </div>
      <div className="footer-bottom">
        <p>&copy; TruckMate.lk  Copyright 2024, All Rights Reserved.</p>
        <div className="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms</a>
          <a href="#">Do not sell or share my personal information</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;