import React, { useEffect, useState } from "react";
import "../css/bootstrap.min.css";
import "../css/fontawesome.min.css";
import "../css/magnific-popup.min.css";
import "../css/swiper-bundle.min.css";
import "../css/style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import AOS from "aos";
import "aos/dist/aos.css";

import "swiper/css";
import VideoSliders from "../components/videoslider";
import cata1 from "../img/category/international.jpg";
import cata2 from "../img/category/domestic.jpg";
import cata3 from "../img/category/europe.jpg";
import cata4 from "../img/category/honey.jpg";
import cata5 from "../img/category/group.jpg";
import cata6 from "../img/category/edu.jpg";
import cata7 from "../img/category/cruise.jpg";
import tour1 from "../img/tour/river-8105970_1920.jpg";
import tour2 from "../img/tour/thai.jpg";
import tour3 from "../img/tour/dubai.jpg";
import tour4 from "../img/tour/123.jpg";
import gallery1 from "../img/gallery/2151609230.jpg";
import gallery2 from "../img/gallery/—Pngtree—large bright boat traveling through_15295893.jpg";
import gallery3 from "../img/gallery/—Pngtree—thailand ayutthaya chedi of wat_15673580.png";
import gallery4 from "../img/gallery/1.jpg";
import gallery5 from "../img/gallery/2.jpg";
import gallery6 from "../img/gallery/5.jpg";
import gallery7 from "../img/gallery/—Pngtree—wat phra singh temple in_15578971.png";
import category1 from "../img/bg/category_bg_1.png";
import tourbg1 from "../img/bg/category_bg_1.cac7ae5ed9cfdb5eeacf.png";
import test1 from "../img/testimonial/testi_1_1.jpg";
import icont1 from "../img/icon/testi-quote.svg";
import test2 from "../img/testimonial/testi_1_2.jpg";
import blog1 from "../img/blog/pexels-streetwindy-2108831.jpg";
import blog2 from "../img/blog/—Pngtree—a group of people standing_15302237.jpg";
import blog3 from "../img/blog/—Pngtree—people are sitting and watching_13334566.jpg";

import normal1 from "../img/icon/choose_1_1.svg";
import normal2 from "../img/icon/choose_1_2.svg";
import normal3 from "../img/icon/choose_1_3.svg";

import normal4 from "../img/normal/721.jpg";
import normal5 from "../img/normal/6.jpg";
import normal6 from "../img/normal/3.jpg";
import normal7 from "../img/normal/4.jpg";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import SubscriptionModal from "../components/SubscriptionModal";

const HeroSlider = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration
      once: true, // Animation only once
    });
  }, []);
  const headings = [
    "Travelling is the healthiest addiction",
    "Safety protected Tour packages to promote wellness",
    "Explore every corner of the globe with our International Tour Packages",
  ];

  const descriptions = [
    "We serve you with an unlimited dosage of Tour packages from Chennai",
    "Discover and Explore fresh destinations with our tourism champion",
    "Connect with us in just a click to discover the best chances to experience adventure.",
  ];
  const [currentHeadingIndex, setCurrentHeadingIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeadingIndex((prevIndex) => (prevIndex + 1) % headings.length);
    }, 5000); // Change heading every 5 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);
  const navigate = useNavigate(); // Hook for navigation

  const tours = [
    {
      img: tour1,
      title: "Vietnam Group Tour",
      // rating: "4.8",
      price: "₹ 21,250",
      duration: "4 Days",
      slug: "vietnam-group-tour-packages", // Add a slug or identifier for navigation
    },
    {
      img: tour2,
      title: "Thailand Tour",
      rating: "4.8",
      price: "₹ 14,025",
      duration: "5 Days",
      slug: "thailand-group-tour-package",
    },
    {
      img: tour3,
      title: "Dubai Tour Package",
      rating: "4.8",
      price: "₹ 43,350",
      duration: "5 Days",
      slug: "dubai-tour-packages-from-chennai",
    },
    {
      img: tour4,
      title: "Shimla Manali Group Tour",
      rating: "4.8",
      price: "₹ 9,350",
      duration: "6 Days",
      slug: "shimla-manali-group-tour",
    },
  ];

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
  const seoData = {
    title: "Tour Packages from Chennai | Family Tour Packages",
    keywords:
      "Tour packages from Chennai, Tour packages, International tour packages, Domestic tour packages, Group tour packages, Family tour packages, Vacation packages, Holiday packages, Trip packages",
    description:
      "We offer a wide range of your favourite Tour Packages from Chennai and Family Tour Packages at exciting offer prices.",
    schema: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Capstone Holidays",
      url: "https://www.capstoneholidays.in/",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://www.capstoneholidays.in/{search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
  };
  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
        <script type="application/ld+json">
          {JSON.stringify(seoData.schema)}
        </script>

        <script>
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5GFM4HT');
          `}
        </script>
        <meta
          name="google-site-verification"
          content="oUT7Gpovx4L-MAH6IIIXm_b3z1NG83G-XdDeXIPyi2A"
        />
      </Helmet>
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-5GFM4HT"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
      <SubscriptionModal />
      <div className="th-hero-wrapper hero-1 new-swipper" id="hero">
        {/* Video Background */}
        <div className="video-background">
          <video
            className="background-video"
            autoPlay
            loop
            muted
            playsInline
            controls={false}
          >
            <source src="/video/video-banners.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="container">
          <div className="hero-style1">
            <h1
              className="hero-title"
              data-ani="slideinup"
              data-ani-delay="0.4s"
            >
              {headings[currentHeadingIndex]} {/* Display current heading */}
            </h1>
            <p
              className="hero-description"
              data-ani="slideinup"
              data-ani-delay="0.5s"
            >
              {descriptions[currentHeadingIndex]}{" "}
              {/* Display current description */}
            </p>
            <div
              className="btn-group"
              data-ani="slideinup"
              data-ani-delay="0.6s"
            >
              <a
                href="/international-tour-packages-from-chennai"
                className="th-btn th-icon"
              >
                Explore Tours
              </a>
              <a href="contact-us" className="th-btn style2 th-icon">
                Our Services
              </a>
            </div>
          </div>
        </div>
      </div>

      <section
        className="category-area bg-top-center"
        style={{ backgroundImage: `url(${category1})` }}
      >
        <div className="container th-container">
          <div className="title-area text-center">
            <span className="sub-title" data-aos="fade-down">
              Loop Delightful Tour Memories with our Tremendous Tour packages
              That Lasts a Lifetime
            </span>
            <h2 className="sec-title" data-aos="fade-down">
              Tremendous Tour packages
            </h2>
          </div>

          {/* Swiper carousel */}
          <Swiper
            modules={[Pagination, Navigation]}
            spaceBetween={10} // Reduce space between slides for better mobile experience
            slidesPerView={1} // Default to 1 slide per view
            navigation
            pagination={{ clickable: true }}
            className="categorySlider"
            id="categorySlide"
            data-aos="fade-down"
            breakpoints={{
              640: {
                slidesPerView: 1, // Show 1 slide on small screens (mobile)
                spaceBetween: 10,
                autoplay: true, // Enable autoplay for mobile view
                navigation: false, // Disable arrows for mobile
                pagination: false, // Disable dots for mobile
              },
              768: {
                slidesPerView: 2, // Show 2 slides on tablets
                spaceBetween: 20,
                autoplay: true, // Enable autoplay for tablets
                navigation: false, // Disable arrows for tablets
                pagination: false, // Disable dots for tablets
              },
              1024: {
                slidesPerView: 3, // Show 3 slides on larger screens
                spaceBetween: 30, // Default space between slides
              },
              1280: {
                slidesPerView: 4, // Show 4 slides on large screens
              },
              1536: {
                slidesPerView: 5, // Show 5 slides on extra large screens
              },
            }}
          >
            {/* First slide */}

            <SwiperSlide>
              <div className="category-card single">
                <div className="box-img global-img">
                  <img
                    src={cata6}
                    alt="Cruises"
                    style={{ width: "250px", height: "250px" }}
                  />
                </div>
                <h3 className="box-title boxnew">
                  <a href="/educational-tour-packages">Educational Tour</a>
                </h3>
                <a
                  className="line-btn"
                  onClick={() =>
                    handleShowModal(
                      "Educational Tour Package (Almaty, Paris Swiss)",
                      "We realize the significance of taking a vacation from a demanding and intense academic routine. As a result, we take great pride in setting up affordable research and educational tour packages for student groups."
                    )
                  }
                >
                  See more
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="category-card single">
                <div className="box-img global-img">
                  <img
                    src={cata7}
                    alt="Cruises"
                    style={{ width: "250px", height: "250px" }}
                  />
                </div>
                <h3 className="box-title boxnew">
                  <a href="/singapore-malaysia-tour-package-with-cruise">
                    Cruise
                  </a>
                </h3>
                <a
                  className="line-btn"
                  onClick={() =>
                    handleShowModal(
                      "Cruise Packages (SINGAPORE PENANG)",
                      "Capstone Holidays offers the best holiday packages, including Cruise packages. The packages are intended to give the best cruising experience with all the deluxe facilities at your favorite beach spots. "
                    )
                  }
                >
                  See more
                </a>
              </div>
            </SwiperSlide>
            {/* Repeat the slides for more categories */}
            <SwiperSlide>
              <div className="category-card single">
                <div className="box-img global-img">
                  <img
                    src={cata3}
                    alt="Cruises"
                    style={{ width: "250px", height: "250px" }}
                  />
                </div>
                <h3 className="box-title boxnew">
                  <a href="europe-tour-packages-from-chennai">Europe Tour</a>
                </h3>
                <a
                  className="line-btn"
                  onClick={() =>
                    handleShowModal(
                      "Europe Tour Package",
                      "Welcome to our Europe Tour Packages, designed with greater travel comfort by Capstone Holidays! Without a doubt, our trip operator has carefully planned every detail of the Europe itinerary, taking into account your important time. Contact our Europe tour operator to personalize your Europe holiday packages, including the length of the trip."
                    )
                  }
                >
                  See more
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="category-card single">
                <div className="box-img global-img">
                  <img
                    src={cata4}
                    alt="Cruises"
                    style={{ width: "250px", height: "250px" }}
                  />
                </div>
                <h3 className="box-title boxnew">
                  <a href="/honeymoon-packages-from-chennai">
                    Honeymoon Package
                  </a>
                </h3>
                <a
                  className="line-btn"
                  onClick={() =>
                    handleShowModal(
                      "Honeymoon tour package",
                      "Selecting an interesting location that fulfills your idealistic fantasies of the perfect holiday is the first step in organizing an unforgettable honeymoon. Check out our suggested Honeymoon tour package to see some of the most stunning locations for a romantic escape with your partner."
                    )
                  }
                >
                  See more
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="category-card single">
                <div className="box-img global-img">
                  <img
                    src={cata5}
                    alt="Cruises"
                    style={{ width: "250px", height: "250px" }}
                  />
                </div>
                <h3 className="box-title boxnew">
                  <a href="group-tour-packages">Group Tour</a>
                </h3>
                <a
                  className="line-btn"
                  onClick={() =>
                    handleShowModal(
                      "Group Tour packages",
                      "Planning a fun-filled and unforgettable group excursion alongside your colleagues and aiming to select a fascinating location that aligns with your perfect vision of the perfect retreat? View our top-rated group tour packages as well as our most stunning group destinations."
                    )
                  }
                >
                  See more
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="category-card single">
                <div className="box-img global-img">
                  <img
                    src={cata1}
                    alt="Cruises"
                    style={{ width: "250px", height: "250px" }}
                  />
                </div>
                <h3 className="box-title boxnew">
                  <a href="/international-tour-packages-from-chennai">
                    International Tour
                  </a>
                </h3>

                <a
                  className={`line-btn ${visited["International Tour"] ? "visited" : ""}`}
                  onClick={() =>
                    handleShowModal(
                      "International Tour Package",
                      "International Tours are unique because they offer experiences you will never have. We have a stellar record for keeping our word and organizing fantastic international trips and international tour packages at affordable prices"
                    )
                  }
                >
                  See more
                </a>
              </div>
            </SwiperSlide>

            {/* Second slide */}
            <SwiperSlide>
              <div className="category-card single">
                <div className="box-img global-img">
                  <img
                    src={cata2}
                    alt="Cruises"
                    style={{ width: "250px", height: "250px" }}
                  />
                </div>
                <h3 className="box-title boxnew">
                  <a href="/domestic-tour-packages-from-chennai">
                    Domestic Tour
                  </a>
                </h3>
                <a
                  className="line-btn"
                  onClick={() =>
                    handleShowModal(
                      "Domestic Tour Package",
                      "There is no denying that India is an incredible country. Is exploring our nation from all four angles your long-term goal? We offer customized domestic tour packages to suit your travel needs at one go."
                    )
                  }
                >
                  See more
                </a>
              </div>
            </SwiperSlide>

            {/* Add more slides as needed */}
            {/* The SwiperSlide component can be repeated for each category */}
          </Swiper>
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
      </section>

      <div
        className="bg-smoke overflow-hidden space"
        style={{ marginBottom: "30px" }}
      >
        <div className="container">
          <div className="row gy-4 align-items-center">
            <div className="col-lg-6" data-aos="fade-up">
              <div className="title-area">
                <span className="sub-title style1">Why Choose Us</span>
                <h2 className="sec-title">
                  Your thirst for adventurous travelling quenches here!
                </h2>
              </div>
              <div className="choose-about">
                <div className="choose-about_icon">
                  <img src={normal1} alt="Top-notch Security" />
                </div>
                <div className="media-body">
                  <h3 className="box-title">
                    Approaching 1000 delightful tour experiences
                  </h3>
                  <p className="choose-about_text">
                    Join hands with us. We promise you’ll not alone witness just
                    travelling but enjoy the destination’s adventure, culture,
                    colour and what not. Truly more!.
                  </p>
                </div>
              </div>
              <div
                className="choose-about"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="choose-about_icon">
                  <img src={normal2} alt="Budget Efficiency" />
                </div>
                <div className="media-body">
                  <h3 className="box-title">
                    A relaxing vacation planned by our certified consultants
                  </h3>
                  <p className="choose-about_text">
                    Our leading Travel Agency in Chennai, Velachery delivers you
                    a joyous and relaxed journey throughout the travel. Since we
                    took great care to construct our honeymoon tour packages and
                    group tour packages, our certified consultants took
                    responsibilities seriously and prioritized our customers’
                    comfort.
                  </p>
                </div>
              </div>
              <div
                className="choose-about"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="choose-about_icon">
                  <img src={normal3} alt="Global Pathway" />
                </div>
                <div className="media-body">
                  <h3 className="box-title">Reasonable Package Price</h3>
                  <p className="choose-about_text">
                    We make your travel budget comfortable too!. Check with us
                    to know our exciting honeymoon tour packages, group tour
                    packages, corporate tour packages and educational tour
                    packages at amazing offer prices with incredible easy EMI
                    options
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 choose-wrapp"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <div className="global-img">
                <img src={normal4} alt="Choose" />
              </div>
              <div className="global-img">
                <img src={normal5} alt="Choose" />
              </div>
              <div className="global-img">
                <img src={normal6} alt="Choose" />
              </div>
              <div className="global-img">
                <img src={normal7} alt="Choose" />
              </div>
            </div>
          </div>
        </div>
        {/* Shapes for styling */}
        <div
          className="shape-mockup d-none d-xxl-block"
          data-top="5%"
          data-right="0%"
        >
          <img src="assets/img/shape/shape_19.png" alt="" />
        </div>
        <div
          className="shape-mockup d-none d-xxl-block"
          data-bottom="0%"
          data-left="0%"
        >
          <img src="assets/img/shape/shape_20.png" alt="" />
        </div>
      </div>

      <VideoSliders />
      <div className="gallery-area">
        <div className="container th-container">
          <div className="title-area text-center">
            <span className="sub-title">
              Collection of everlasting memories in our gallery
            </span>
            <h2 className="sec-title" data-aos="slide-right">
              Recent from Gallery
            </h2>
          </div>
          <div
            className="row gy-10 gx-10 justify-content-center align-items-center"
            data-aos="slide-right"
          >
            <div className="col-md-6 col-lg-2">
              <div className="gallery-card">
                <div className="box-img global-img">
                  <a href={gallery1} className="popup-image">
                    <div className="icon-btn">
                      <i className="fal fa-magnifying-glass-plus"></i>
                    </div>
                    <img src={gallery1} alt="gallery image" loading="lazy" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-2">
              <div className="gallery-card">
                <div className="box-img global-img">
                  <a href={gallery2} className="popup-image">
                    <div className="icon-btn">
                      <i className="fal fa-magnifying-glass-plus"></i>
                    </div>
                    <img src={gallery2} alt="gallery image" loading="lazy" />
                  </a>
                </div>
              </div>
              <div className="gallery-card">
                <div className="box-img global-img">
                  <a href={gallery3} className="popup-image">
                    <div className="icon-btn">
                      <i className="fal fa-magnifying-glass-plus"></i>
                    </div>
                    <img src={gallery3} alt="gallery image" loading="lazy" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-2">
              <div className="gallery-card">
                <div className="box-img global-img">
                  <a href={gallery4} className="popup-image">
                    <div className="icon-btn">
                      <i className="fal fa-magnifying-glass-plus"></i>
                    </div>
                    <img src={gallery4} alt="gallery image" loading="lazy" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-2">
              <div className="gallery-card">
                <div className="box-img global-img">
                  <a href={gallery5} className="popup-image">
                    <div className="icon-btn">
                      <i className="fal fa-magnifying-glass-plus"></i>
                    </div>
                    <img src={gallery5} alt="gallery image" loading="lazy" />
                  </a>
                </div>
              </div>
              <div className="gallery-card">
                <div className="box-img global-img">
                  <a href={gallery6} className="popup-image">
                    <div className="icon-btn">
                      <i className="fal fa-magnifying-glass-plus"></i>
                    </div>
                    <img src={gallery6} alt="gallery image" loading="lazy" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-2">
              <div className="gallery-card">
                <div className="box-img global-img">
                  <a href={gallery7} className="popup-image">
                    <div className="icon-btn">
                      <i className="fal fa-magnifying-glass-plus"></i>
                    </div>
                    <img src={gallery7} alt="gallery image" loading="lazy" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section
        className="position-relative bg-top-center overflow-hidden space"
        id="service-sec"
        style={{
          backgroundImage: `url(${tourbg1})`,
          marginTop: "50px",
          marginBottom: "50px",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-area text-center">
                <span className="sub-title" data-aos="fade-down">
                  Plan a trip for a life-lasting experience
                </span>
                <h2 className="sec-title sec-new" data-aos="fade-down">
                  We execute vibrant tour packages for you.
                </h2>
                <p className="sec-text" data-aos="fade-up">
                  Our Best travel agency in Chennai, Velachery incorporates
                  Domestic Tour Packages, International Tour Packages, Honeymoon
                  tour packages, group tour packages with incredible hospitality
                  and exceptional customer service.
                </p>
              </div>
            </div>
          </div>
          <div className="slider-area tour-slider">
            <Swiper
              spaceBetween={30}
              data-aos="fade-down"
              data-aos-easing="ease-out"
              slidesPerView={3}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                576: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                992: {
                  slidesPerView: 2,
                },
                1200: {
                  slidesPerView: 3,
                },
                1300: {
                  slidesPerView: 4,
                },
              }}
            >
              {tours.map((tour, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="tour-box th-ani gsap-cursor new-title-card"
                    data-aos="fade-right"
                    data-aos-delay="100"
                    data-aos-easing="ease-in"
                  >
                    <div className="tour-box_img global-img">
                      <img
                        src={tour.img}
                        alt="image"
                        style={{
                          width: "100%",
                          height: "250px",
                          objectFit: "cover",
                        }}
                      />
                      <div className="image-overlay">
                        <h2 className="box-title">
                          <a href={`/tour/${tour.slug}`}>{tour.title}</a>
                        </h2>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      <section className="testi-area overflow-hidden" id="testi-sec">
        <div className="container-fluid p-0">
          <div className="title-area mb-20 text-center">
            <span className="sub-title" data-aos="flip-left">
              Testimonial
            </span>
            <h2 className="sec-title" data-aos="flip-left">
              Our Customer value us more, so we tend to serve more
            </h2>
          </div>
          <div className="slider-area">
            <Swiper
              className="th-slider testiSlider1 has-shadow swipper-new"
              modules={[Pagination]}
              spaceBetween={30}
              slidesPerView={2} // Set default to show 2 slides
              centeredSlides={false} // Disable centered slides for better layout with multiple slides
              pagination={{ clickable: true }}
              breakpoints={{
                // For smaller screens
                0: { slidesPerView: 1 }, // 1 slide for mobile
                767: { slidesPerView: 2 }, // 2 slides for tablet
                992: { slidesPerView: 2 }, // 2 slides for larger tablets
                1200: { slidesPerView: 2 }, // 2 slides for small desktops
                1400: { slidesPerView: 3 }, // 3 slides for larger desktops
              }}
            >
              {/* Testimonial Card 1 */}
              <SwiperSlide>
                <div
                  className="testi-card"
                  data-aos="fade-left"
                  data-aos-delay="100"
                  data-aos-easing="ease-in-out"
                >
                  <div className="testi-card_wrapper">
                    <div className="testi-card_profile">
                      <div className="testi-card_avater">
                        <img src={test1} alt="testimonial" />
                      </div>
                      <div className="media-body">
                        <h3 className="box-title">Debin Wit</h3>
                        <span className="testi-card_desig">Traveller</span>
                      </div>
                    </div>
                    <div className="testi-card_review">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                  </div>
                  <p className="testi-card_text">
                    We recently visited Singapore through Capstone holidays. All
                    the arrangements right from Pickup from the Singapore
                    Airport till Drop at airport was hassle free. We had amazing
                    4 days in Singapore. Capstone holidays coordinated well and
                    we recommend this travel agency as the customer friendly
                    one. The staff Priya was friendly and made all the
                    arrangements in advance. They tried their level best to make
                    the tour successful. We will definitely contact Capstone
                    holidays for our future travel plans. If anyone planning for
                    an international trip, I will recommend to go with Capstone
                    holidays as it is very economical.
                  </p>
                  <div className="testi-card-quote">
                    <img src={icont1} alt="img" />
                  </div>
                </div>
              </SwiperSlide>

              {/* Testimonial Card 2 */}
              <SwiperSlide>
                <div
                  className="testi-card"
                  data-aos="fade-left"
                  data-aos-delay="100"
                  data-aos-easing="ease-in-out"
                >
                  <div className="testi-card_wrapper">
                    <div className="testi-card_profile">
                      <div className="testi-card_avater">
                        <img src={test2} alt="testimonial" />
                      </div>
                      <div className="media-body">
                        <h3 className="box-title">Karthik Murugesan</h3>
                        <span className="testi-card_desig">Traveller</span>
                      </div>
                    </div>
                    <div className="testi-card_review">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                  </div>
                  <p className="testi-card_text">
                    Had a fantastic experience with Capstone holidays. I booked
                    golden triangle package, from the day of my booking till the
                    trip get completed, the coordination from the team was very
                    good. Highly Recommended. Looking forward to the next trip
                    with Capstone.
                  </p>
                  <div className="testi-card-quote">
                    <img src={icont1} alt="img" />
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div
                  className="testi-card"
                  data-aos="fade-left"
                  data-aos-delay="100"
                  data-aos-easing="ease-in-out"
                >
                  <div className="testi-card_wrapper">
                    <div className="testi-card_profile">
                      <div className="testi-card_avater">
                        <img src={test2} alt="testimonial" />
                      </div>
                      <div className="media-body">
                        <h3 className="box-title">Amirtharaj M A </h3>
                        <span className="testi-card_desig">Traveller</span>
                      </div>
                    </div>
                    <div className="testi-card_review">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                  </div>
                  <p className="testi-card_text">
                    I recently coordinated for a 4N5D Tour to Sri Lanka for my
                    BIL's family who had come in from the US. My primary contact
                    was with Mr. Prabhu, and he made sure all the details
                    (places to visit, hotel, type of hotel room, kind of
                    vehicle...) were meticulously taken care. And my BIL's
                    family had a wonderful time there. A big thanks to Capstone
                    Holidays. I will definitely consider them for any future
                    trips of our family.
                  </p>
                  <div className="testi-card-quote">
                    <img src={icont1} alt="img" />
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div
                  className="testi-card"
                  data-aos="fade-left"
                  data-aos-delay="100"
                  data-aos-easing="ease-in-out"
                >
                  <div className="testi-card_wrapper">
                    <div className="testi-card_profile">
                      <div className="testi-card_avater">
                        <img src={test2} alt="testimonial" />
                      </div>
                      <div className="media-body">
                        <h3 className="box-title">Balaji Kubendiran</h3>
                        <span className="testi-card_desig">Traveller</span>
                      </div>
                    </div>
                    <div className="testi-card_review">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                  </div>
                  <p className="testi-card_text">
                    Good convenience Great experience!!!! Enjoyed a lot All
                    facilities like Room - Car - Food - water sports - Dj cruise
                    at boat - Temple visit - City Tour - All Entry fee arranged
                    by them. 10 boys we njoyed a lot without any issues. They
                    treated very well, specially Local guide helped us a lot.
                    Worth for money If u r planned to Thailand for enjoyment u
                    may book capstone Tourism package without doubt
                  </p>
                  <div className="testi-card-quote">
                    <img src={icont1} alt="img" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="testi-card"
                  data-aos="fade-left"
                  data-aos-delay="100"
                  data-aos-easing="ease-in-out"
                >
                  <div className="testi-card_wrapper">
                    <div className="testi-card_profile">
                      <div className="testi-card_avater">
                        <img src={test2} alt="testimonial" />
                      </div>
                      <div className="media-body">
                        <h3 className="box-title">Andrew Joseph</h3>
                        <span className="testi-card_desig">Traveller</span>
                      </div>
                    </div>
                    <div className="testi-card_review">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                  </div>
                  <p className="testi-card_text">
                    Thank you Capstone for arranging a wonderful and memorable
                    trip to me. I would like to extend my thanks to Malini who
                    was the trip advisor and organiser for my trip to Singapore.
                    She was consistent in following up on each process
                    throughout. She ensured every day went as per the itinerary
                    without any inconveniences. The whole trip was well planned
                    and ensured punctuality in transportation. I would recommend
                    preferring Capstone for your next International trip. Thank
                    you team
                  </p>
                  <div className="testi-card-quote">
                    <img src={icont1} alt="img" />
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>

      <section className="overflow-hidden space">
        <div className="container">
          <div className="row justify-content-lg-between justify-content-center align-items-end">
            <div className="col-lg">
              <div className="title-area text-center text-lg-start">
                <span className="sub-title" data-aos="slide-left">
                  News & Blog
                </span>
                <h2 className="sec-title" data-aos="slide-left">
                  Tourism News and Insights
                </h2>
              </div>
            </div>
            <div className="col-lg-auto d-none d-lg-block">
              <div className="sec-btn" data-aos="slide-right">
                <a href="travel-blog" className="th-btn style4 th-icon new-but">
                  See More Articles
                </a>
              </div>
            </div>
          </div>
          <div className="row gx-24 gy-30">
            <div className="col-xl-8">
              <div className="blog-grid2 style2 th-ani">
                <div className="blog-img global-img">
                  <img src={blog1} alt="blog" loading="lazy" />
                </div>
                <div
                  className="blog-grid2_content"
                  data-aos="fade-left"
                  data-aos-delay="100"
                  data-aos-easing="ease-in"
                >
                  <div className="blog-meta">
                    <a className="author" href="travel-blog">
                      Sep 09, 2024
                    </a>
                    <a href="travel-blog">6 min read</a>
                  </div>
                  <h3 className="box-title">
                    <a href="travel-blog">Best Travel Agents in Chennai</a>
                  </h3>
                  <a href="travel-blog" className="th-btn style4 th-icon">
                    Read More
                  </a>
                </div>
              </div>

              <div
                className="blog-grid2 th-ani style2 mt-24"
                data-aos="fade-left"
                data-aos-delay="100"
                data-aos-easing="ease-in"
              >
                <div className="blog-img global-img">
                  <img src={blog2} alt="blog" loading="lazy" />
                </div>
                <div className="blog-grid2_content">
                  <div className="blog-meta">
                    <a className="author" href="travel-blog">
                      Sep 10, 2024
                    </a>
                    <a href="travel-blog">8 min read</a>
                  </div>
                  <h3 className="box-title">
                    <a href="travel-blog">Best Travel agency in Velachery</a>
                  </h3>
                  <a href="travel-blog" className="th-btn style4 th-icon">
                    Read More
                  </a>
                </div>
              </div>
            </div>

            <div className="col-xl-4">
              <div
                className="blog-grid2 th-ani"
                data-aos="fade-left"
                data-aos-delay="100"
                data-aos-easing="ease-in"
              >
                <div
                  className="blog-img global-img"
                  style={{ marginTop: "20px" }}
                >
                  <img src={blog3} alt="blog" loading="lazy" />
                </div>
                <div className="blog-grid2_content">
                  <div className="blog-meta">
                    <a className="author" href="travel-blog">
                      Sep 05, 2024
                    </a>
                    <a href="#">6 min read</a>
                  </div>
                  <h3 className="box-title">
                    <a href="travel-blog">Best Tour Operators in Chennai</a>
                  </h3>
                  <a href="travel-blog" className="th-btn style4 th-icon">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSlider;
