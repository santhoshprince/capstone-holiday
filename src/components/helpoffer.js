import React from 'react';
import logo from "../img/logo/capstonelogo.png"
import backgroundImage from "../img/bg/widget_bg_1.jpg"
const HelpOffer = () => {
  return (
    <div className="widget widget_offer wide-new" style={{ backgroundImage: `url(${backgroundImage})` }}  >
      <div className="offer-banner">
        <div className="offer">
          <h6 className="box-title">Need Help? We Are Here To Help You</h6>
          <div className="banner-logo">
            <img src={logo} alt="Tourm" />
          </div>
          <div className="offer">
            <h6 className="offer-title">You Get Online support</h6>
            <a className="offter-num" href="tel:+256214203215">+256 214 203 215</a>
          </div>
          <a href="contact.html" className="th-btn style2 th-icon">Read More</a>
        </div>
      </div>
    </div>
  );
};

export default HelpOffer;
