import React from 'react';
import galleryImage1 from '../img/widget/gallery_1_1.jpg';
import galleryImage2 from '../img/widget/gallery_1_2.jpg';
import galleryImage3 from '../img/widget/gallery_1_3.jpg';
import galleryImage4 from '../img/widget/gallery_1_4.jpg';
import galleryImage5 from '../img/widget/gallery_1_5.jpg';
import galleryImage6 from '../img/widget/gallery_1_6.jpg';
import phone1 from "../img/icon/phone.svg" 
import envelope1 from "../img/icon/envelope.svg" 
import location1 from "../img/icon/location-dot.svg"

import logo from "../img/logo/capstonelogo.png"
import copy1 from "../img/bg/copyright_bg_1.jpg"
import card1 from "../img/shape/cards.png"

const Footer = () => {
  
const galleryImages = [
  galleryImage1,
  galleryImage2,
  galleryImage3,
  galleryImage4,
  galleryImage5,
  galleryImage6
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
                    <button type="submit" className="th-btn style3">
                      Subscribe Now
                      <img src="assets/img/icon/plane.svg" alt="" />
                    </button>
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
                    <a href="home-travel.html">
                      <img src={logo}alt="Tourm" />
                    </a>
                  </div>
                  <p className="about-text">
                  Join us Today as we travel the world and take you on incredible adventures to beautiful places
                  </p>
                  <div className="th-social">
                    <a href="https://www.facebook.com/">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://www.twitter.com/">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://www.linkedin.com/">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="https://www.whatsapp.com/">
                      <i className="fab fa-whatsapp"></i>
                    </a>
                    <a href="https://instagram.com/">
                      <i className="fab fa-instagram"></i>
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
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about.html">About us</a></li>
                    <li><a href="service.html">Our Service</a></li>
                    <li><a href="contact.html">Terms of Service</a></li>
                    <li><a href="contact.html">Tour Booking Now</a></li>
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
                      <img src={phone1} alt="img" />
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
                      <img src={envelope1} alt="img" />
                    </div>
                    <div className="details">
                      <p>
                        <a href="mailto:mailinfo00@tourm.com" className="info-box_link">
                        tour@capstoneholidays.com
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="info-box_text">
                    <div className="icon">
                      <img src={location1} alt="img" />
                    </div>
                    <div className="details">
                      <p>PSK, Booshnam Mahal, 127, 2nd floor, Velachery Bypass Rd, Velachery, Chennai, Tamil Nadu 600042</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto">
              <div className="widget footer-widget">
                <h3 className="widget_title">Instagram Post</h3>
                <div className="sidebar-gallery">
                {galleryImages.map((image, index) => (
                    <div className="gallery-thumb" key={index}>
                      <img src={image} alt={`Gallery Image ${index + 1}`} />
                      <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/" className="gallery-btn">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="copyright-wrap"
      

        style={{ backgroundImage: `url(${copy1})` }}
      >
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-md-6">
              <p className="copyright-text">
                Copyright 2024  Capstone Holidays All Rights Reserved | Privacy Policy
              </p>
            </div>
            <div className="col-md-6 text-end d-none d-md-block">
              <div className="footer-card">
                <span className="title">We Accept</span>
                <img src={card1} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    );
  };
  
  export default Footer;
  