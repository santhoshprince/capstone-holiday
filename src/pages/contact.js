import React from 'react';
import ContentSection from '../components/contentbg';
import contact1 from "../assets/contactusimg/ship-5551818_1920.jpg"
import icon1 from "../img/icon/location-dot2.svg"
import icon2 from "../img/icon/call.svg"
import icon3 from "../img/icon/mail.svg"
import icon4 from "../img/icon/location-dot3.svg"
import contactbg from "../assets/contactusimg/paris-6803796_1920.jpg"


const ContactPage = () => {
  
const ContactCard = ({ icon, title, details }) => (
  <div className="col-xl-6 col-lg-6" style={{paddingBottom:"20px",cursor:"pointer"}}>
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

const ContactForm = () => {
  return (
    <form
      action="https://html.themeholy.com/tourm/demo/mail.php"
      method="POST"
      className="contact-form style2 ajax-contact"
    >
      <h3 className="sec-title mb-30 text-capitalize">Leave us your info</h3>
      <h5>and we will get back to you</h5>
      <div className="row">
        <div className="col-12 form-group">
          <input
            type="text"
            className="form-control"
            name="name"
            style={{marginBottom:"20px"}}
            placeholder="Full Name"
          />
          <input
            type="text"
            className="form-control"
            style={{marginBottom:"20px"}}
            name="phonenumber"
            placeholder="Phone Number"
          />
          <input
            type="text"
            className="form-control"
            name="phonenumber"
            placeholder="Subject"
          />
          <img src="assets/img/icon/user.svg" alt="" />
        </div>
        <div className="col-12 form-group">
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="Your Mail"
          />
          <img src="assets/img/icon/mail.svg" alt="" />
        </div>
      
        <div className="form-group col-12">
          <textarea
            name="message"
            cols="30"
            rows="3"
            className="form-control"
            placeholder="Your Message"
          ></textarea>
          <img src="assets/img/icon/chat.svg" alt="" />
        </div>
        <div className="form-btn col-12 mt-24">
          <button type="submit" className="th-btn style3">
            Submit now
            <img src="assets/img/icon/plane.svg" alt="" />
          </button>
        </div>
      </div>
      <p className="form-messages mb-0 mt-3"></p>
    </form>
  );
};


  return (
    <>
    <ContentSection heading={"CONTACT US"} children={""}  backgroundImage={contactbg} />
      <div className="space">
      <div className="container">
        <div className="title-area text-center">
          <span className="sub-title">Get In Touch</span>
          <h2 className="sec-title">Our Contact Information</h2>
        </div>
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

      <div
  className="space-extra2-top space-extra2-bottom"
  style={{ backgroundImage: `url(${contact1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
>
  <div className="container">
    <div className="row flex-row-reverse justify-content-center align-items-center">
      <div className="col-lg-6">
        <div className="video-box1">
          <a
            href="https://www.youtube.com/watch?v=cQfIUPw72Dk"
            className="play-btn style2 popup-video"
          >
            {/* <i className="fa-sharp fa-solid fa-play"></i> */}
          </a>
        </div>
      </div>
      <div className="col-lg-6">
        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  </div>
</div>

      <div className="">
        <div className="container-fluid">
          <div className="contact-map style2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.885023985374!2d80.21919009999999!3d12.979204999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525dbe667af707%3A0x1ee76ab5009a7374!2sCapstone%20Holidays%20-%20Travel%20Agency%20in%20Chennai%2C%20Velachery!5e0!3m2!1sen!2sin!4v1728730135734!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
            <div className="contact-icon">
              <img src={icon4} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="" style={{marginTop:"20px"}}>
        <div className="container-fluid">
          <div className="contact-map style2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15664.699930412033!2d77.0210447!3d11.0254947!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8596042e23f3d%3A0x7dd18e73285061f7!2sCapstone%20holidays%20-%20No%3A1%20Travel%20Agency%20in%20Coimbatore!5e0!3m2!1sen!2sin!4v1728922411781!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
            <div className="contact-icon">
              <img src={icon4} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
 

  );
};


export default ContactPage;
