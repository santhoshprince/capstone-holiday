import React from 'react';
import logo from '../img/logo/capstonelogo.png';
import backgroundImage from '../img/bg/widget_bg_1.jpg';
import './HelpOffer.css'; // Import the CSS file

const HelpOffer = () => {
  return (
    <div className="widget widget_offer wide-new" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="offer-banner">
        <div className="offer-content">
          <h6 className="box-title">Need Help? We Are Here To Help You</h6>
          <div className="banner-logo">
            <img src={logo} alt="Tourm" />
          </div>
          <div className="offer-details">
            <h6 className="offer-title">You Get Online Support</h6>
            <a className="offer-num" href="tel:+256214203215">+256 214 203 215</a>
          </div>
          <a href="contact.html" className="th-btn style2 th-icon">Read More</a>
        </div>
      </div>
    </div>
  );
};

export default HelpOffer;
