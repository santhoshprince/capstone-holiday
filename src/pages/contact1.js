import React from 'react';
import ContentSection from '../components/contentbg';
import contactbg from "../assets/contactusimg/paris-6803796_1920.jpg";
import icon1 from "../img/icon/location-dot2.svg"; // Location icon
import icon2 from "../img/icon/call.svg"; // Phone icon
import icon3 from "../img/icon/mail.svg"; // Email icon
import icon4 from "../img/icon/location-dot3.svg"; // Another location icon

const ContactPage = () => {
  const ContactCard = ({ icon, title, details }) => (
    <div className="col-md-6" style={{ paddingBottom: "20px", cursor: "pointer" }}>
      <div className="about-contact-grid">
        <div className="about-contact-icon">
          <img src={icon} alt="" />
        </div>
        <div className="about-contact-details">
          <h6 className="box-title">{title}</h6>
          {details.map((detail, index) => (
            <p key={index} className="about-contact-details-text">
              {detail}
            </p>
          ))}
        </div>
      </div>
    </div>
  );

  

  return (
    <>
      <ContentSection heading={"CONTACT US"} children={""} backgroundImage={contactbg} />
      <div className="space">
        <div className="container">
          <div className="title-area text-center">
            <span className="sub-title">Get In Touch</span>
            <h2 className="sec-title">Our Contact Information</h2>
          </div>

          {/* Row for Contact Card and Map */}
          <div className="row">
            <ContactCard
              icon={icon1}
              title="Location - Chennai"
              details={[
                "PSK, Booshnam Mahal",
                "127, 2nd floor, Velachery",
                "Bypass Rd, Velachery",
                "Chennai, Tamil Nadu",
                "600042"
              ]}
            />
            <div className="col-md-6" style={{ paddingBottom: "20px" }}>
              <div className="contact-map style2">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.885023985374!2d80.21919009999999!3d12.979204999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525dbe667af707%3A0x1ee76ab5009a7374!2sCapstone%20Holidays%20-%20Travel%20Agency%20in%20Chennai%2C%20Velachery!5e0!3m2!1sen!2sin!4v1728730135734!5m2!1sen!2sin"
                  allowFullScreen=""
                  loading="lazy"
                  style={{ width: '100%', height: '400px', border: '0' }}
                ></iframe>
                <div className="contact-icon">
                  <img src={icon4} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <ContactCard
              icon={icon1}
              title="Location - Coimbatore"
              details={[
                "24A, Srinagar Rd, Peelamedu,",
                "Chitra Nagar, Hope College,",
                "Coimbatore, Tamil Nadu",
                "641004"
              ]}
            />
            <div className="col-md-6" style={{ paddingBottom: "20px" }}>
              <div className="contact-map style2">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.885023985374!2d80.21919009999999!3d12.979204999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525dbe667af707%3A0x1ee76ab5009a7374!2sCapstone%20Holidays%20-%20Travel%20Agency%20in%20Chennai%2C%20Velachery!5e0!3m2!1sen!2sin!4v1728730135734!5m2!1sen!2sin"
                  allowFullScreen=""
                  loading="lazy"
                  style={{ width: '100%', height: '400px', border: '0' }}
                ></iframe>
                <div className="contact-icon">
                  <img src={icon4} alt="" />
                </div>
              </div>
            </div>
          </div>

          {/* Row for Phone Number and Email Cards */}
          <div className="row">
            <ContactCard
              icon={icon2}
              title="Phone Number"
              details={[
                <a href="tel:01234567890">+91 73584 94431</a>,
                <a href="tel:01234567890">+91 89254 04222</a>,
                <a href="tel:01234567890">+91 89254 04222</a>
              ]}
            />
            <ContactCard
              icon={icon3}
              title="Email Address"
              details={[
                <a href="mailto:mailinfo00@tourm.com">tour@capstoneholidays.com</a>,
                <a href="mailto:mailinfo00@tourm.com">tour.capstone@gmail.com</a>,
                <a href="mailto:mailinfo00@tourm.com">b2b@capstoneholidays.com</a>,
              ]}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
