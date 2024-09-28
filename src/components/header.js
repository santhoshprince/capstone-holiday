import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo/capstonelogo.png";
import "../components/header.css";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleMouseEnter = () => setShowDropdown(true);
  const handleMouseLeave = () => setShowDropdown(false);

  return (
    <header className="sticky-header">
      <div className="header-content">
        <nav className="main-header">
          <div className="logo">
            <a href="/">
              <img src={logo} alt="Tourm Logo" />
            </a>
          </div>

          <ul className="main-menu">
            <li>
              <Link to="#">About Us</Link>
            </li>
            <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <Link to="#">Tour Package</Link>
              {showDropdown && (
                <ul className="dropdown">
                  <li className="dropdown-container">
                    <div className="dropdown-section">
                      <strong>International Packages</strong>
                      <ul>
                        <li>
                          <Link to="/tour-destination/bali-tour">
                            <span className="icon fas fa-plane"></span> Bali
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <span className="icon fas fa-plane"></span>Maldives
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <span className="icon fas fa-plane"></span> Dubai
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <span className="icon fas fa-plane"></span>Thailand
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <span className="icon fas fa-plane"></span>Mauritius
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <span className="icon fas fa-plane"></span>Turkey
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <span className="icon fas fa-plane"></span>Singapore
                            & Malaysia
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <span className="icon fas fa-plane"></span>Vietnam
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="dropdown-section">
                      <strong>Domestic Packages</strong>
                      <ul>
                        <li>
                          <Link to="#">
                            <span className="icon fas fa-plane"></span> Andaman
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <span className="icon fas fa-plane"></span> Goa
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <span className="icon fas fa-plane"></span> Himachal
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <span className="icon fas fa-plane"></span> Kerala
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <span className="icon fas fa-plane"></span>Jammu And
                            Kashmir
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <span className="icon fas fa-plane"></span>Rajasthan
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <span className="icon fas fa-plane"></span> Sikkim
                            And West Bengal
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link to="#">Group Tour</Link>
            </li>
            <li>
              <Link to="#">Luxury Tour</Link>
            </li>
            <li>
              <Link to="#">Honeymoon Tour</Link>
            </li>
            <li>
              <Link to="#">Contact Us</Link>
            </li>
            <li>
              <Link to="#">Blog</Link>
            </li>
          </ul>

          <div className="header-button">
            <Link to="#" className="th-btn">
              Book Now
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
