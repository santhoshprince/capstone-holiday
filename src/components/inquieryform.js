// InquiryFormWithPrice.js
import React, { useState } from 'react';
import './InquiryFormWithPrice.css';

const InquiryFormWithPrice = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [enquiry, setEnquiry] = useState('');
  const [agreed, setAgreed] = useState(false); // To handle agreement with terms

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agreed) {
      alert('Please agree to the terms before submitting.');
      return;
    }

    console.log('Inquiry submitted:', {
      fullName,
      email,
      phoneNumber,
      enquiry,
    });

    // Reset form fields
    setFullName('');
    setEmail('');
    setPhoneNumber('');
    setEnquiry('');
    setAgreed(false); // Reset agreement
  };

  return (
    <div className="inquiry-form-container">
      {/* <div className="price-section">
        <h2>Price</h2>
        <p>From <span className="price">₹ 17,000</span></p>
      </div> */}
      <div className="inquiry-form">
        {/* <h2>Submit Your Inquiry</h2> */}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullName">Full Name*</label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              placeholder=""
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address*</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder=""
            />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number*</label>
            <input
              type="tel"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
              placeholder=""
            />
          </div>
          <div className="form-group">
            <label htmlFor="enquiry">Your Enquiry*</label>
            <textarea
              id="enquiry"
              value={enquiry}
              onChange={(e) => setEnquiry(e.target.value)}
              required
              placeholder=""
            ></textarea>
          </div>
          <div className="form-group checkbox">
            <input
              type="checkbox"
              id="terms"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              required
            />
            <label htmlFor="terms">
              * I agree with the Terms of Service and Privacy Statement.
            </label>
          </div>
          <a href="contact-us" className="th-btn th-icon">Submit Enquiry</a>
        </form>
      </div>
    </div>
  );
};

export default InquiryFormWithPrice;
