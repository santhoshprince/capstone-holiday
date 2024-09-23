import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleMouseEnter = () => setShowDropdown(true);
  const handleMouseLeave = () => setShowDropdown(false);

  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave} 
            className="dropdown"
          >
            <Link to="#">Tour Packages</Link>
            {showDropdown && (
              <div className="dropdown-content">
                <div className="package-group">
                  <h4>International Packages</h4>
                  <ul>
                    <li><Link to="/international/bali"><i className="fas fa-plane"></i> Bali</Link></li>
                    <li><Link to="/international/dubai"><i className="fas fa-plane"></i> Dubai</Link></li>
                  </ul>
                </div>
                <div className="package-group">
                  <h4>Domestic Packages</h4>
                  <ul>
                    <li><Link to="/domestic/goa"><i className="fas fa-plane"></i> Goa</Link></li>
                    <li><Link to="/domestic/andaman"><i className="fas fa-plane"></i> Andaman</Link></li>
                  </ul>
                </div>
              </div>
            )}
          </li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
