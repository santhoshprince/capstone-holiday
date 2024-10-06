import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo/capstonelogo.png";
import "../components/header.css";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [grouptour,setGroupTour] = useState(false)

  const handleMouseEnter = () => setShowDropdown(true);
  const handleMouseLeave = () => setShowDropdown(false);
  
  const handleMouseEnters = () => setGroupTour(true);
  const handleMouseLeaves = () => setGroupTour(false);


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
                          <Link to="/tour-destination/maldives-tour">
                            <span className="icon fas fa-plane"></span>Maldives
                          </Link>
                        </li>
                        <li>
                          <Link to="/tour-destination/dubai-tour">
                            <span className="icon fas fa-plane"></span> Dubai
                          </Link>
                        </li>
                        <li>
                          <Link to="/tour-destination/thailand-tour">
                            <span className="icon fas fa-plane"></span>Thailand
                          </Link>
                        </li>
                        <li>
                          <Link to="/tour-destination/mauritius-tour">
                            <span className="icon fas fa-plane"></span>Mauritius
                          </Link>
                        </li>
                        <li>
                          <Link to="/tour-destination/turkey-tour-package">
                            <span className="icon fas fa-plane"></span>Turkey
                          </Link>
                        </li>
                        <li>
                          <Link to="/tour-destination/singapore-malaysia-tour">
                            <span className="icon fas fa-plane"></span>Singapore
                            & Malaysia
                          </Link>
                        </li>
                        <li>
                          <Link to="/tour-destination/vietnam-tour-package/">
                            <span className="icon fas fa-plane"></span>Vietnam
                          </Link>
                        </li>
                        <li>
                          <Link to="/tour-destination/sri-lanka-tour-package/">
                            <span className="icon fas fa-plane"></span>Srilanka
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="dropdown-section">
                      <strong>Domestic Packages</strong>
                      <ul>
                        <li>
                          <Link to="/tour-destination/andaman-tour-package/">
                            <span className="icon fas fa-plane"></span> Andaman
                          </Link>
                        </li>
                        <li>
                          <Link to="/tour-destination/goa-tour">
                            <span className="icon fas fa-plane"></span> Goa
                          </Link>
                        </li>
                        <li>
                          <Link to="/tour-destination/himachal-tour/">
                            <span className="icon fas fa-plane"></span> Himachal
                          </Link>
                        </li>
                        <li>
                          <Link to="/tour-destination/kerala-tour/">
                            <span className="icon fas fa-plane"></span> Kerala
                          </Link>
                        </li>
                        <li>
                          <Link to="/tour-destination/jammu-and-kashmir-tour/">
                            <span className="icon fas fa-plane"></span>Jammu And
                            Kashmir
                          </Link>
                        </li>
                        <li>
                          <Link to="/tour-destination/rajasthan-tour/">
                            <span className="icon fas fa-plane"></span>Rajasthan
                          </Link>
                        </li>
                        <li>
                          <Link to="/tour-destination/sikkim-and-west-bengal-tour/">
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
            <li onMouseEnter={handleMouseEnters} onMouseLeave={handleMouseLeaves}>
              <Link to="#">Group Tour</Link>
              {grouptour && (
                <ul className="dropdown">
                  <li className="dropdown-container">
                    <div className="dropdown-section">
                      {/* <strong>International Packages</strong> */}
                      <ul>
                        <li>
                          <Link to="/tour-destination/kerala-group-tour">
                            <span className="icon fas fa-plane"></span>Kerala
                          </Link>
                        </li>
                        <li>
                          <Link to="/tour/andaman-group-tour-packages">
                            <span className="icon fas fa-plane"></span>Andaman
                          </Link>
                        </li>
                        <li>
                          <Link to="/tour/bali-group-tour-package">
                            <span className="icon fas fa-plane"></span> Bali
                          </Link>
                        </li>
                        <li>
                          <Link to="/tour/shimla-manali-group-tour">
                            <span className="icon fas fa-plane"></span>Shimla & Manali
                          </Link>
                        </li>
                        <li>
                          <Link to="/tour/sri-lanka-group-tour-package/">
                            <span className="icon fas fa-plane"></span>Srilanka
                          </Link>
                        </li>
                        <li>
                          <Link to="/tour/singapore-malaysia-group-tour">
                            <span className="icon fas fa-plane"></span>Singapore & Malaysia
                          </Link>
                        </li>
                      
                        <li>
                          <Link to="/tour/thailand-group-tour-package">
                            <span className="icon fas fa-plane"></span>Thailand
                          </Link>
                        </li>
                        <li>
                          <Link to="/tour/vietnam-group-tour-packages">
                            <span className="icon fas fa-plane"></span>Vietnam
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              )}
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
