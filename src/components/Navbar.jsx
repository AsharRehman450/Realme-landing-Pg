import React from 'react';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <h1 className="brand">realme</h1> 
          <ul className="nav-links">     
            <li><a href="#smrt" className="bold">realme smartphone</a></li>
            <li><a href="#smrt" className="bold">narzo smartphone</a></li> 
            <li><a href="#smrt" className="bold">Audio </a></li>
            <li><a href="#smrt2" className="bold">Accessories</a></li>
          </ul>
        </div>
       
        <div className="navbar-right">
          <ul className="nav-links">
            <li><a href="#">Brand</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">Community</a></li>
          </ul>
        </div>
      </div> 
    </header>
    
)
}

export default Navbar;
