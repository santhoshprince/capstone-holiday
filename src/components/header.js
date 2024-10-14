import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo/capstonelogo.png";
import "../components/header.css";

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleMouseEnter = (dropdown) => setActiveDropdown(dropdown);
  const handleMouseLeave = () => setActiveDropdown(null);

  const tourPackages = {
    international: [
      { name: "Bali", link: "/tour-destination/bali-tour" },
      { name: "Maldives", link: "/tour-destination/maldives-tour" },
      { name: "Dubai", link: "/tour-destination/dubai-tour" },
      { name: "Thailand", link: "/tour-destination/thailand-tour" },
      { name: "Mauritius", link: "/tour-destination/mauritius-tour" },
      { name: "Turkey", link: "/tour-destination/turkey-tour-package" },
      {
        name: "Singapore & Malaysia",
        link: "/tour-destination/singapore-malaysia-tour",
      },
      { name: "Vietnam", link: "/tour-destination/vietnam-tour-package" },
      { name: "Sri Lanka", link: "/tour-destination/sri-lanka-tour-package" },
    ],
    domestic: [
      { name: "Andaman", link: "/tour-destination/andaman-tour-package/" },
      { name: "Goa", link: "/tour-destination/goa-tour" },
      { name: "Himachal", link: "/tour-destination/himachal-tour/" },
      { name: "Kerala", link: "/tour-destination/kerala-tour/" },
      {
        name: "Jammu and Kashmir",
        link: "/tour-destination/jammu-and-kashmir-tour/",
      },
      { name: "Rajasthan", link: "/tour-destination/rajasthan-tour/" },
      {
        name: "Sikkim and West Bengal",
        link: "/tour-destination/sikkim-and-west-bengal-tour/",
      },
    ],
    groupTour: [
      { name: "Kerala", link: "/tour-destination/kerala-group-tour" },
      { name: "Andaman", link: "/tour/andaman-group-tour-packages" },
      { name: "Bali", link: "/tour/bali-group-tour-package" },
      { name: "Shimla & Manali", link: "/tour/shimla-manali-group-tour" },
      { name: "Sri Lanka", link: "/tour/sri-lanka-group-tour-package/" },
      {
        name: "Singapore & Malaysia",
        link: "/tour/singapore-malaysia-group-tour",
      },
      { name: "Thailand", link: "/tour/thailand-group-tour-package" },
      { name: "Vietnam", link: "/tour/vietnam-group-tour-packages" },
    ],
    EuropeTour: [
      { name: "Azerbaijan", link: "/tour-destination/azerbaijan-europe-tour" },
      { name: "China", link: "/tour/china-europe-tour-package" },
      { name: "Greece", link: "/tour/greece-europe-tour-package" },
    ],
    HoneymoonTour: [
      { name: "Andaman", link: "/tour/anadaman-honeymoon-tour-packages" },
      { name: "Bali", link: "/tour/bali-honeymoon-tour-packages" },
      { name: "Kashmir", link: "/tour/kashmir-honeymoon-tour-packages" },
      { name: "Kerala", link: "/tour/kerala-honeymoon-tour-packages" },
      { name: "Rajasthan", link: "/tour/rajasthan-honeymoon-tour-packages" },
    ],
  };

  return (
    <header className="sticky-header">
      <div className="header-content">
        <nav className="main-header">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="Tourm Logo" />
            </Link>
          </div>

          <ul className="main-menu">
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="international-tour-package">Tour Packages</Link>
              <div className="dropdown">
                <div className="dropdown-container">
                  <div className="dropdown-section international">
                    <Link to="international-tour-package">
                      <h3>International Packages</h3>
                    </Link>
                    <ul>
                      {tourPackages.international.map((pkg, index) => (
                        <li key={index}>
                          <Link to={pkg.link}>
                            <span className="icon fas fa-plane"></span>{" "}
                            {pkg.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="divider" /> {/* Divider between sections */}
                  <div className="dropdown-section domestic">
                    <Link to="domestic-tour-package">
                      <h3>Domestic Packages</h3>
                    </Link>

                    <ul>
                      {tourPackages.domestic.map((pkg, index) => (
                        <li key={index}>
                          <Link to={pkg.link}>
                            <span className="icon fas fa-plane"></span>{" "}
                            {pkg.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Link to="/group-tour-packages">Group Tour</Link>
              <div className="dropdownnew">
                <div className="dropdown-containernew">
                  <div className="dropdown-sectionnew international">
                    <Link to="group-tour-packages" className="link-container">
                      <h3>Group Tour Countrys</h3>
                    </Link>

                    <ul>
                      {tourPackages.groupTour.map((pkg, index) => (
                        <li key={index}>
                          <Link to={pkg.link}>
                            <span className="icon fas fa-plane"></span>{" "}
                            {pkg.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Link to="europe-tour-packages">Europe Tour</Link>
              <div className="dropdownnew">
                <div className="dropdown-containernew">
                  <div className="dropdown-sectionnew international">
                    <Link to="europe-tour-packages" className="link-container">
                      <h3>Europe Tour Countrys</h3>
                    </Link>

                    <ul>
                      {tourPackages.EuropeTour.map((pkg, index) => (
                        <li key={index}>
                          <Link to={pkg.link}>
                            <span className="icon fas fa-plane"></span>{" "}
                            {pkg.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Link to="/honeymoon-tour-packages">Honeymoon Tour</Link>
              <div className="dropdownnew">
                <div className="dropdown-containernew">
                  <div className="dropdown-sectionnew international">
                    <Link to="/honeymoon-tour-packages" className="link-container">
                      <h3>Honeymoon Tour Countrys</h3>
                    </Link>
                    <ul>
                      {tourPackages.HoneymoonTour.map((pkg, index) => (
                        <li key={index}>
                          <Link to={pkg.link}>
                            <span className="icon fas fa-plane"></span>{" "}
                            {pkg.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <Link to="/blogs">Blog</Link>
            </li>

            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>

          <div className="header-button">
            <Link to="/contact" className="th-btn">
              Book Now
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
