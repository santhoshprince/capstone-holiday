import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import logo from "../img/logo/capstonelogo.png"
import "../components/header.css"
const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleMouseEnter = () => setShowDropdown(true);
  const handleMouseLeave = () => setShowDropdown(false);

  return (
    <header>
    <nav class="main-header">
      <div class="logo">
        <img src={logo} alt="Tourm Logo" />
      </div>
      
      <ul class="main-menu">
        <li><a href="#">About Us</a></li>
        <li><a href="#">Tour Package</a></li>
        <li><a href="#">Group Tour</a></li>
        <li><a href="#">Luxury Tour</a></li>
        <li><a href="#">Honeymoon Tour</a></li>
        <li><a href="#">Contact Us</a></li>
        <li><a href="#">Blog</a></li>
      </ul>
  
      <div class="header-button">
        <a href="#" class="th-btn">Book Now</a>
      </div>
    </nav>
  </header>
  );
};

export default Header;
