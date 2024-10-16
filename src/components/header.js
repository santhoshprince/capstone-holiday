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
      { name: "Kerala", link: "/tour/kerala-group-tour-package" },
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
      { name: "Azerbaijan", link: "/azerbaijan-tour-packages-from-india" },
      { name: "China", link: "/china-tour-package-from-chennai" },
      { name: "Greece", link: "/greece-tour-packages-from-india" },
    ],
    HoneymoonTour: [
      { name: "Andaman", link: "/andaman-honeymoon-packages-from-chennai" },
      { name: "Bali", link: "/bali-honeymoon-packages-from-chennai" },
      { name: "Kashmir", link: "/kashmir-honeymoon-package-for-couple" },
      { name: "Kerala", link: "/kerala-honeymoon-packages-from-chennai" },
      { name: "Rajasthan", link: "/agra-honeymoon-package" },
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
              <Link to="#">Tour Packages</Link>
              <div className="dropdown">
                <div className="dropdown-container">
                  <div className="dropdown-section international">
                    <Link to="/international-tour-packages-from-chennai"  className="link-container">
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
                  {/* <div className="divider" />  */}
                  <div className="dropdown-section domestic">
                    <Link to="/domestic-tour-packages-from-chennai">
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
                      <h3>Group Tour Packages</h3>
                    </Link>

                    <ul>
                      {tourPackages.groupTour.map((pkg, index) => (
                        <li key={index} className="link-container">
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
              <Link to="europe-tour-packages-from-chennai">Europe Tour</Link>
              <div className="dropdownnew">
                <div className="dropdown-containernew">
                  <div className="dropdown-sectionnew international">
                    <Link to="europe-tour-packages-from-chennai" className="link-container">
                      <h3>Europe Tour Packages</h3>
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
              <Link to="/honeymoon-packages-from-chennai">Honeymoon Tour</Link>
              <div className="dropdownnew">
                <div className="dropdown-containernew">
                  <div className="dropdown-sectionnew international">
                    <Link to="/honeymoon-packages-from-chennai" className="link-container">
                      <h3>Honeymoon Tour Packages</h3>
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
              <Link to="/blog">Blog</Link>
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
