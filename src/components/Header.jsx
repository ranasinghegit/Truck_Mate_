// components/Header.js
import React from 'react';
import './Header.css';

function Header() {
  return (
    <header>
      <div className="logo-container">
        <img className="logo" src ='./LOGO.png'/>
      </div>
      <nav className='navv'>
        <a href="#">Home</a>
        <a href="#">TrackOrder</a>
        <a href="#">ManageOrder</a>
        <a href="#">Directions</a>
        <a href="#" className='you'>YourAccount</a>
        <a href="#" className='Loginn'>Login/Signup</a>
      </nav>
      
      <div className="menu-icon" onClick={toggleMenu}>
        &#9776;
      </div>



    </header>
  );
}


function toggleMenu() {
  const nav = document.querySelector('.navv');
  nav.classList.toggle('active');
}

export default Header;