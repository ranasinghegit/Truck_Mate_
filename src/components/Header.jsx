// components/Header.js
import React from 'react';
import './Header.css';

function Header() {
  return (
    <header>
      <div className="logo-container">
        <a href="Homepage"><img   className="logo" src ='./LOGO.png'/>
        </a>
      </div>
      <nav className='navv'>
        
        <a href="Homepage">Home</a>
        <a href="TrackOrder">TrackOrder</a>
        <a href="ManageOrder">ManageOrder</a>
        <a href="Directions">Directions</a>
        <a href="YourProfile" className='you'>YourAccount</a>
        <a href="YourProfileD" className='you'>YourAccountD</a>
        <a href="YourProfileA" className='you'>YourAccountA</a>
        <a href="Login/Signup" className='Loginn'>Login/Signup</a>
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