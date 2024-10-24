import React, { useState } from "react";

import ContentSection from "../components/contentbg";

import aboutImage1 from "../assets/aboutusimg/mountain-7986371_640.jpg"; // Replace with your image paths
import aboutImage2 from "../assets/aboutusimg/tower-6521842_640.jpg";
import aboutImage3 from "../assets/aboutusimg/steam-locomotive-6580128_640.jpg";

import destinationImg1 from "../assets/aboutusimg/man-1850181.jpg";
import destinationImg2 from "../assets/aboutusimg/tour-guide-6816049_1920.jpg";
import destinationImg3 from "../assets/aboutusimg/plane-723888_1920.jpg";
import destinationImg4 from "../assets/aboutusimg/map-of-the-world-60526_1920.jpg";

import { Helmet } from 'react-helmet-async';
import aboutbg from "../assets/aboutusimg/passport-2606782_1920.jpg";
const AboutUs = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "",
    description: "",
  });

  // State to track visited categories
  const [visited, setVisited] = useState({});

  // Function to show modal and mark category as visited
  const handleShowModal = (title, description, category) => {
    setModalContent({ title, description });
    setShowModal(true);

    // Mark the category as visited
    setVisited((prevVisited) => ({
      ...prevVisited,
      [category]: true,
    }));
  };

  // Function to close modal
  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <>
     <Helmet>
        <title>About Us | Top Tour and Travel Companies in India</title>
        <meta name="keywords" content="best tour and travel company, top tour and travel companies in India, tours and travels near me, best tour and travel company" />
        <meta name="description" content="Launched in 2016, Capstone Holidays has an innovative team of specialists, and the best tour and travel company in Chennai with custom travel solutions." />
      </Helmet>
      <ContentSection
        heading={"About Us"}
        children={"Tours and Travels company in Chennai"}
        backgroundImage={aboutbg}
      />
      <section className="about-us-section py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="about-content">
                <h2 className="about-title">Top Tour and Travel Companies in India</h2>
                <p className="about-text">
                Capstone Holidays, founded in 2016, has a creative and vibrant team of specialists that has established itself as one of the Top Tour and Travel companies in India, offering personalized travel solutions. Our best tour and travel company offers best-in-class domestic and international tour packages and amenities at budget-friendly rates that match your needs, presenting insider contacts and industry expertise, as well as the advice and information you need to make practical travel decisions.
                </p>
                <p className="about-text">
                Our travel packages are intellectually curated, so you can be confident that they will take you in the correct direction. Over the previous years, we have committed significant efforts in developing comprehensive, in-depth literature for all destinations, in order to address all of your queries. Hence, when working with our best tour and travel company, you can depend on us with trust because you know that by processing through us, you’ll gain more. Let Capstone Holidays plan your most extraordinary experience and cheerful memories!
                </p>
                <p className="about-text">
                Additionally, don’t worry; we’ve been doing this for a while! So, stop stravearching for “tours and travels near me” and trust our adaptable approach that combines with a ton of innovative thinking to provide results that are both affordable and of genuine value to our clients. We are skilled at understanding the operations of domestic and international tour packages for our customers' needs.
                </p>
                <ul>
                  <li>Destination Planning 100%</li>
                  <li>Customer Service 100%</li>
                  <li>Customized Tour Packages 100%</li>
                  <li>Knowledgeable and Experienced Staff 100%</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        className="about-area position-relative overflow-hidden space"
        id="about-sec"
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-7">
              <div className="img-box3">
                <div className="img1">
                  <img src={aboutImage1} alt="About" />
                </div>
                <div className="img2">
                  <img src={aboutImage2} alt="About" />
                </div>
                <div className="img3 movingX">
                  <img src={aboutImage3} alt="About" />
                </div>
              </div>
            </div>
            <div className="col-xl-5">
              <div className="ps-xl-4">
                <div className="title-area mb-20">
                  <span
                    className="sub-title style1"
                    style={{ fontSize: "30px" }}
                  >
                    Welcome To Capstone Holidays
                  </span>
                  <h2 className="sec-title mb-20 pe-xl-5 me-xl-5 heading">
                    Why Choose Capstone Holidays Tours and Travels Company in
                    Chennai
                  </h2>
                </div>
                <p className="pe-xl-5">
                  <span style={{ fontWeight: "700" }}>Expertise:</span> With years of experience in the travel industry, our knowledgeable team of travel consultants has a deep understanding of various destinations worldwide. We are one of the top tour and travel companies in India because we stay updated with the latest trends, ensuring that you receive the best recommendations and advice for your trip.
                </p>
                <p className="mb-30 pe-xl-5">
                  <span style={{ fontWeight: "700" }}>
                    {" "}
                    Personalized Attention:{" "}
                  </span>{" "}
                  We believe in offering excellent customer service. From the minute you contact our best tour and travel company until you return from your vacation, our devoted team will be there to help you, ensuring that every element of your experience is smooth and pleasurable.
                </p>
                <p className="mb-30 pe-xl-5">
                  <span style={{ fontWeight: "700" }}>
                    Competitive Pricing:
                  </span>{" "}
                  At our best Tour and Travel Company, we strive to offer the best value for your money. Our strong partnerships with airlines, hotels, and local suppliers enable us to negotiate competitive rates and exclusive deals, allowing you to make the most of your travel budget.
                </p>

                <p className="mb-30 pe-xl-5">
                  <span style={{ fontWeight: "700" }}>Safety and Security:</span>{" "}
                  Your safety and well-being are our utmost priority. We work with trusted and reliable partners around the globe, ensuring that all our domestic and international tour packages adhere to the highest safety standards. Additionally, we provide comprehensive travel insurance options for your peace of mind.
                </p>
                <p className="mb-30 pe-xl-5">
                  <span style={{ fontWeight: "700" }}>
                    Responsible Tourism:{" "}
                  </span>{" "}
                  We are committed to promoting sustainable and responsible travel practices. We collaborate with local communities, support conservation initiatives, and encourage our travelers to respect the environment and cultures they encounter during their journeys.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section
        className="position-relative overflow-hidden space-bottom"
        id="destination-sec"
      >
        <div className="container">
          <div className="title-area text-center">
            <span className="sub-title">Services offered by our Best tour and travel company</span>
            <h2 className="sec-title">Our Amazing Services</h2>
          </div>
          <div className="row gy-4 gx-4">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="destination-item th-ani">
                <div className="destination-item_img global-img">
                  <img src={destinationImg1} alt="Photo Shoot" style={{width:"300px",height:"300px"}} />
                </div>
                <div className="destination-content">
                  <h3 className="box-title">
                    <a href="#">Tailor-Made Travel</a>
                  </h3>
                <p className="destination-text" style={{padding: "6px"}}>Air ticket, Visa and Passport processing services</p>
                  <a
                    onClick={() =>
                      handleShowModal(
                        "Travel Package",
                        "At Capstone Holidays Tours and Travels Company in Chennai, we believe that every traveler is unique, which is why we specialize in creating personalized itineraries. Our expert travel consultants will work closely with you to understand your preferences, interests, and budget to design a bespoke journey that exceeds your expectations."
                      )
                    }
                    className="th-btn style4 th-icon"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="destination-item th-ani">
                <div className="destination-item_img global-img">
                  <img src={destinationImg2} alt="Tour Guide" style={{width:"300px",height:"300px"}} />
                </div>
                <div className="destination-content">
                  <h3 className="box-title">
                    <a href="group-tour-packages">Group Tours</a>
                  </h3>
                  <p className="destination-text" style={{padding: "6px"}}>Customizable Tour & Premier Cruise packages</p>
                  <a
                    onClick={() =>
                      handleShowModal(
                        "Domestic Tour Package",
                        "Are you looking to explore the beautiful destinations within your own country? Look no further! At Capstone Holidays, we specialize in organizing unforgettable domestic tours that allow you to discover the hidden gems and breathtaking landscapes right on your doorstep. Whether you’re seeking a relaxing beach getaway, an adventurous mountain expedition, or a cultural immersion in historic cities, we have the perfect tour package for you."
                      )
                    }
                    className="th-btn style4 th-icon"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="destination-item th-ani">
                <div className="destination-item_img global-img">
                  <img src={destinationImg3} alt="Cozy Event" style={{width:"300px",height:"300px"}} />
                </div>
                <div className="destination-content">
                  <h3 className="box-title">
                    <a href="/international-tour-packages-from-chennai">International Tour</a>
                  </h3>
                  <p className="destination-text" style={{padding: "6px"}}>Travel Insurance Policy services</p>
                  <a
                    onClick={() =>
                      handleShowModal(
                        "International Tour Package",
                        "Your premier destination for unforgettable international tours! We are thrilled to offer you an incredible selection of travel experiences designed to immerse you in the beauty, culture, and adventure of countries across the globe. With our expertly crafted itineraries, impeccable service, and attention to detail, we ensure that every moment of your journey is extraordinary."
                      )
                    }
                    className="th-btn style4 th-icon"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="destination-item th-ani">
                <div className="destination-item_img global-img">
                  <img src={destinationImg4} alt="Interesting Rest" style={{width:"300px",height:"300px"}}/>
                </div>
                <div className="destination-content">
                  <h3 className="box-title">
                    <a href="/domestic-tour-packages-from-chennai">Domestic Tour</a>
                  </h3>
                  <p className="destination-text" style={{padding: "6px"}}>Accommodation & Reservations</p>
                  <a
                    onClick={() =>
                      handleShowModal(
                        "Domestic Tour Package",
                        "Are you looking to explore the beautiful destinations within your own country? Look no further! At Capstone Holidays, we specialize in organizing unforgettable domestic tours that allow you to discover the hidden gems and breathtaking landscapes right on your doorstep. Whether you’re seeking a relaxing beach getaway, an adventurous mountain expedition, or a cultural immersion in historic cities, we have the perfect tour package for you."
                      )
                    }
                    className="th-btn style4 th-icon"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
            {showModal && (
              <div
                className="modal fade show"
                tabIndex="-1"
                role="dialog"
                style={{
                  display: "block",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                }}
              >
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title">{modalContent.title}</h5>
                    </div>
                    <div className="modal-body">
                      <p>{modalContent.description}</p>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={handleCloseModal}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Add styles for visited state */}
            <style jsx>{`
              .line-btn {
                cursor: pointer;
                color: blue; /* Default color for the button */
                text-decoration: underline; /* Underline the button */
              }

              .line-btn:hover {
                color: #df1f2c; /* Change text color on hover */
              }

              .line-btn.visited {
                color: red; /* Change color when visited */
              }
            `}</style>
            {/* Add styles for visited state */}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
