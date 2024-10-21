import React, { useState, useEffect, useRef } from "react";
import { Link ,useLocation} from "react-router-dom";
import logo from "../img/logo/capstonelogo.png";
import "../components/header.css";

const Header = () => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation(); // Get the current location

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false); // Close the menu when the route changes
  }, [location]); // This effect runs every time location changes



  const tourPackages = {
    international: [
      { name: "Bali", link: "/bali-tour" },
      { name: "Maldives", link: "/maldives-tour" },
      { name: "Dubai", link: "/dubai-tour" },
      { name: "Thailand", link: "/thailand-tour" },
      { name: "Mauritius", link: "/mauritius-tour" },
      { name: "Turkey", link: "/turkey-tour" },
      {
        name: "Singapore & Malaysia",
        link: "/singapore-malaysia-tour",
      },
      { name: "Vietnam", link: "/vietnam-tour-package" },
      { name: "Sri Lanka", link: "/sri-lanka-tour" },
    ],
    domestic: [
      { name: "Andaman", link: "/andaman-tour" },
      { name: "Goa", link: "/goa-tour" },
      { name: "Himachal", link: "/himachal-tour" },
      { name: "Kerala", link: "/kerala-tour" },
      {
        name: "Kashmir",
        link: "/kashmir-tour",
      },
      { name: "Rajasthan", link: "/rajasthan-tour" },
      {
        name: "Sikkim",
        link: "/sikkim-tour",
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

          <button
            className={`mobile-menu-toggle ${isMobileMenuOpen ? "active" : ""}`}
            onClick={toggleMobileMenu}
            aria-expanded={isMobileMenuOpen} // Accessibility
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"} // Accessibility
          >
            {isMobileMenuOpen ? "✖" : "☰"} {/* Change icon based on state */}
          </button>

          <ul
            className={`main-menu ${isMobileMenuOpen ? "open" : ""}`}
            ref={menuRef}
          >
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="#">Tour Packages</Link>
              <div className="dropdown">
                <div className="dropdown-container">
                  <div className="dropdown-section international">
                    <Link
                      to="/international-tour-packages-from-chennai"
                      className="link-container"
                    >
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
              <Link to="/europe-tour-packages-from-chennai">Europe Tour</Link>
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
