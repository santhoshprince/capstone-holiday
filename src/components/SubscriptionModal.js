// SubscriptionModal.js
import React, { useState, useEffect } from "react";
import "./SubscriptionModal.css"; // Import the updated CSS file
import { Link } from "react-router-dom";

const SubscriptionModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Automatically open the form when the component mounts
    setIsOpen(true);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission (e.g., send data to the server)
    console.log("Form submitted:", formData);
    setIsOpen(false); // Close the modal after submission
  };

  return (
    <div>
      {isOpen && (
        <div className="popup">
          <div className="popup-content">
            <span className="close-button" onClick={() => setIsOpen(false)}>
              &times;
            </span>
            <h2>Subscribe</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <label htmlFor="phone">Phone Number:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />

              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />

              {/* <Link to="/contact"><button type="submit" className=''>Subscribe</button></Link> */}
              <div className="header-button" style={{paddingTop:"20px"}}>
                <Link to="/contact" className="th-btn">
                  <span>SUBMIT NOW</span>
                </Link>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubscriptionModal;
