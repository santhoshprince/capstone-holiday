import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import "./SubscriptionModal.css";

const SubscriptionModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Loader state
  const [successMessage, setSuccessMessage] = useState(""); // Success message state

  useEffect(() => {
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
    setIsLoading(true); // Start loading

    const emailData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    };

    emailjs
      .send(
        "service_y4z6nwg",
        "template_zi8tr79",
        emailData,
        "gQ-fRG2hzy4c59xWp"
      )
      .then((response) => {
        console.log("Email sent successfully!", response.status, response.text);
        setSuccessMessage("Your message has been sent successfully!"); // Set success message
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
        setIsOpen(false);
      })
      .catch((error) => {
        console.error("Failed to send email. Error: ", error);
        setSuccessMessage("Failed to send your message. Please try again.");
      })
      .finally(() => {
        setIsLoading(false); // Stop loading
      });
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

              <div className="header-button" style={{ paddingTop: "20px" }}>
                <button type="submit" className="th-btn" disabled={isLoading}>
                  {isLoading ? "Sending..." : <span>SUBMIT NOW</span>}
                </button>
              </div>
            </form>

            {successMessage && <p className="success-message">{successMessage}</p>}
          </div>
        </div>
      )}
    </div>
  );
};

export default SubscriptionModal;
