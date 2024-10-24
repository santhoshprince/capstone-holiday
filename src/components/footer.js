import React from "react";
import galleryImage1 from "../img/widget/1.png";
import galleryImage2 from "../img/widget/2.png";
import galleryImage3 from "../img/widget/3.png";
import galleryImage4 from "../img/widget/4.jpg";
import galleryImage5 from "../img/widget/5.jpg";
import galleryImage6 from "../img/widget/6.jpg";
import phone1 from "../img/icon/phone.svg";
import envelope1 from "../img/icon/envelope.svg";
import location1 from "../img/icon/location-dot.svg";
import logo from "../img/logo/capstonelogo.png";
import card1 from "../img/shape/cards.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const galleryImages = [
    galleryImage1,
    galleryImage2,
    galleryImage3,
    galleryImage4,
    galleryImage5,
  ];
  const galleryData = [
    {
      image: galleryImage1,
      links: [
        { name: "facebook", url: "https://www.facebook.com/capstoneholidays/" },
      ],
    },
    {
      image: galleryImage2,
      links: [
        {
          name: "instagram",
          url: "https://www.instagram.com/capstone_holidays_chennai/",
        },
      ],
    },
    {
      image: galleryImage4,
      links: [{ name: "whatsapp", url: "https://www.whatsapp.com/" }],
    },
    {
      image: galleryImage3,
      links: [
        {
          name: "linkedin",
          url: "https://www.linkedin.com/company/capstone-holidays/",
        },
      ],
    },
    {
      image: galleryImage5,
      links: [{ name: "twitter", url: "https://x.com/adamantony123" }],
    },
    {
      image: galleryImage6,
      links: [{ name: "youtube", url: "https://www.youtube.com/@capstoneholidays" }],
    },
    // Add more images and their respective links as needed
  ];

  return (
    <footer className="footer-wrapper footer-layout1">
      <div className="widget-area">
        <div className="container">
          <div className="newsletter-area">
            <div className="newsletter-top">
              <div className="row gy-4 align-items-center">
                <div className="col-lg-5">
                  <h2 className="newsletter-title text-capitalize mb-0">
                    Get updated with the latest newsletter
                  </h2>
                </div>
                <div className="col-lg-7">
                  <form className="newsletter-form">
                    <input
                      className="form-control"
                      type="email"
                      placeholder="Enter Email"
                      required
                    />
                    <Link to="/contact-us">
                      <button type="submit" className="th-btn style3">
                        Subscribe Now
                        <img
                          src="assets/img/icon/plane.svg"
                          alt=""
                          loading="lazy"
                        />
                      </button>
                    </Link>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-between">
            <div className="col-md-6 col-xl-3">
              <div className="widget footer-widget">
                <div className="th-widget-about">
                  <div className="about-logo">
                    <a href="/">
                      <img src={logo} alt="Tourm" loading="lazy" />
                    </a>
                  </div>
                  <p className="about-text">
                    Join us Today as we travel the world and take you on
                    incredible adventures to beautiful places.
                  </p>
                  <div className="th-social">
                    <a href="https://www.facebook.com/capstoneholidays/">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://x.com/adamantony123">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://www.linkedin.com/company/capstone-holidays/">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="https://www.whatsapp.com/">
                      <i className="fab fa-whatsapp"></i>
                    </a>
                    <a href="https://www.instagram.com/capstone_holidays_chennai/">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://www.youtube.com/@capstoneholidays/">
                      <i className="fab fa-youtube"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto">
              <div className="widget widget_nav_menu footer-widget">
                <h3 className="widget_title">Quick Links</h3>
                <div className="menu-all-pages-container">
                  <ul className="menu">
                    <li>
                      <a href="./">Home</a>
                    </li>
                    <li>
                      <a href="/about-us">About us</a>
                    </li>
                    <li>
                      <a href="/group-tour-packages">Group Tour</a>
                    </li>
                    <li>
                      <a href="/europe-tour-packages-from-chennai">Europe Tour</a>
                    </li>
                    <li>
                      <a href="/honeymoon-packages-from-chennai">Honeymoon Tour</a>
                    </li>
                    <li>
                      <a href="/travel-blog">Blog</a>
                    </li>
                    <li>
                      <a href="/contact-us">Contact Us</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto">
              <div className="widget footer-widget">
                <h3 className="widget_title">Address</h3>
                <div className="th-widget-contact">
                  <div className="info-box_text">
                    <div className="icon">
                      <img src={phone1} alt="img" loading="lazy" />
                    </div>
                    <div className="details">
                      <p>
                        <a href="tel:+01234567890" className="info-box_link">
                          +91 73584 94431
                        </a>
                      </p>
                      <p>
                        <a href="tel:+09876543210" className="info-box_link">
                          +91 89254 04222
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="info-box_text">
                    <div className="icon">
                      <img src={envelope1} alt="img" loading="lazy" />
                    </div>
                    <div className="details">
                      <p>
                        <a
                          href="mailto:mailinfo00@tourm.com"
                          className="info-box_link"
                        >
                          tour@capstoneholidays.com
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="info-box_text">
                    <div className="icon">
                      <img src={location1} alt="img" loading="lazy" />
                    </div>
                    <div className="details">
                      <p>
                        PSK, Booshnam Mahal, 127, 2nd floor, Velachery Bypass
                        Rd, Velachery, Chennai, Tamil Nadu 600042
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto">
              <div className="widget footer-widget">
                <h3 className="widget_title">Social Media Post</h3>
                <div className="sidebar-gallery">
                  {galleryData.map((item, index) => (
                    <div className="gallery-thumb" key={index}>
                      <img
                        src={item.image}
                        alt={`Gallery Image ${index + 1}`}
                        loading="lazy"
                      />
                      {item.links.map((social, idx) => (
                        <a
                          key={idx}
                          target="_blank"
                          rel="noopener noreferrer"
                          href={social.url}
                          className="gallery-btn"
                        >
                          <i className={`fab fa-${social.name}`}></i>
                        </a>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-wrap">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-md-6">
              <p className="copyright-text">
               <Link to="./"><span style={{cursor:"pointer",fontSize:"14px"}}>Copyright 2024 Capstone Holidays All Rights Reserved | </span> </Link><Link to="/privacy-policy"><span  style={{cursor:"pointer",fontSize:"14px"}}>Privacy
                Policy</span> </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
