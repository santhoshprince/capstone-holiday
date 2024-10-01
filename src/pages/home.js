import React,{useEffect}from "react";
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

import AOS from 'aos';
import 'aos/dist/aos.css';

import "swiper/css";
// import './index.css';
// Import required modules

import heroBg1 from "../img/hero/2149153257.jpg";
import heroBg2 from "../img/hero/3372.jpg";
import heroBg3 from "../img/hero/2149153258.jpg";
import leftArrow from "../img/icon/left-arrow.svg";
import rightArrow from "../img/icon/right-arrow.svg";
import cata1 from "../img/category/2151851404.jpg";
import cata2 from "../img/category/2151383048.jpg";
import cata3 from "../img/category/2151793553.jpg";
import cata4 from "../img/category/2151794920.jpg";
import cata5 from "../img/category/2151694019.jpg";
import cata6 from "../img/category/2151683003.jpg";
import cata7 from "../img/category/32967.jpg";
import tour1 from "../img/tour/2151794920.jpg";
import tour2 from "../img/tour/2151694019.jpg";
import tour3 from "../img/tour/2151793553.jpg";
import tour4 from "../img/tour/2151383048.jpg";
import gallery1 from "../img/gallery/2151609230.jpg";
import gallery2 from "../img/gallery/—Pngtree—large bright boat traveling through_15295893.jpg";
import gallery3 from "../img/gallery/—Pngtree—thailand ayutthaya chedi of wat_15673580.png";
import gallery4 from "../img/gallery/2151851404.jpg";
import gallery5 from "../img/gallery/—Pngtree—3d rendering of an exotic_13292831.jpg";
import gallery6 from "../img/gallery/—Pngtree—travel travel maldives island resort_15181168.png";
import gallery7 from "../img/gallery/—Pngtree—wat phra singh temple in_15578971.png";
import category1 from "../img/bg/category_bg_1.png";
import tourbg1 from "../img/bg/category_bg_1.cac7ae5ed9cfdb5eeacf.png";
import test1 from "../img/testimonial/testi_1_1.jpg";
import icont1 from "../img/icon/testi-quote.svg";
import test2 from "../img/testimonial/testi_1_2.jpg";
import blog1 from "../img/blog/—Pngtree—guangzhou guangzhou airport waiting room_15189769.jpg";
import blog2 from "../img/blog/—Pngtree—a group of people standing_15302237.jpg";
import blog3 from "../img/blog/—Pngtree—people are sitting and watching_13334566.jpg";


import normal1 from "../img/icon/choose_1_1.svg";
import normal2 from "../img/icon/choose_1_2.svg";
import normal3 from "../img/icon/choose_1_3.svg";

import normal4 from "../img/normal/—Pngtree—forest with waterfalls image hd_15483124.png"
import normal5 from "../img/normal/—Pngtree—a waterfall with tropical forest_15491363.jpeg"
import normal6 from "../img/normal/—Pngtree—serenity in the wilderness forest_15758516 (1).jpeg"
import normal7 from "../img/normal/—Pngtree—a waterfall with tropical forest_15493322.jpeg"

const HeroSlider = () => {

  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration
      once: true, // Animation only once
    });
  }, []);

  return (
    <>
      <div className="th-hero-wrapper hero-1 new-swipper" id="hero">
        <Swiper
          modules={[Pagination, Navigation, EffectFade,Autoplay]}
          effect="fade"
          pagination={{ clickable: true, el: ".slider-pagination" }}
          autoplay={{
            delay: 3000, // Automatically transition every 5 seconds
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: ".slider-prev",
            nextEl: ".slider-next",
          }}
          className="swiper hero-slider-1"
          id="heroSlide1"
        >
          {/* First Slide */}
          <SwiperSlide>
            <div className="hero-inner">
              <div
                className="th-hero-bg"
                style={{ backgroundImage: `url(${heroBg1})` }}
              ></div>
              <div className="container">
                <div className="hero-style1">
                  <span
                    className="sub-title style1"
                    data-ani="slideinup"
                    data-ani-delay="0.2s"
                  >
                    Capstone Holidays
                  </span>
                  <h1
                    className="hero-title"
                    data-ani="slideinup"
                    data-ani-delay="0.4s"
                  >
                   Travelling is the healthiest addiction. We serve you with an unlimited dosage.
                  </h1>
                  <div
                    className="btn-group"
                    data-ani="slideinup"
                    data-ani-delay="0.6s"
                  >
                    <a href="tour.html" className="th-btn th-icon">
                      Explore Tours
                    </a>
                    <a href="service.html" className="th-btn style2 th-icon">
                      Our Services
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Second Slide */}
          <SwiperSlide>
            <div className="hero-inner">
              <div
                className="th-hero-bg"
                style={{ backgroundImage: `url(${heroBg2})` }}
              ></div>
              <div className="container">
                <div className="hero-style1">
                  <span
                    className="sub-title style1"
                    data-ani="slideinup"
                    data-ani-delay="0.2s"
                  >
                    Get unforgettable pleasure with us
                  </span>
                  <h1
                    className="hero-title"
                    data-ani="slideinup"
                    data-ani-delay="0.4s"
                  >
                  Discover and Explore fresh destinations with our tourism champion. 
                  </h1>
                  <div
                    className="btn-group"
                    data-ani="slideinup"
                    data-ani-delay="0.6s"
                  >
                    <a href="tour.html" className="th-btn th-icon">
                      Explore Tours
                    </a>
                    <a href="service.html" className="th-btn style2 th-icon">
                      Our Services
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Third Slide */}
          <SwiperSlide>
            <div className="hero-inner">
              <div
                className="th-hero-bg"
                style={{ backgroundImage: `url(${heroBg3})` }}
              ></div>
              <div className="container">
                <div className="hero-style1">
                  <span
                    className="sub-title style1"
                    data-ani="slideinup"
                    data-ani-delay="0.2s"
                  >
                    Get unforgettable pleasure with us
                  </span>
                  <h1
                    className="hero-title"
                    data-ani="slideinup"
                    data-ani-delay="0.4s"
                  >
                    Connect with us in just a click to discover the best chances to experience adventure.
                  </h1>
                  <div
                    className="btn-group"
                    data-ani="slideinup"
                    data-ani-delay="0.6s"
                  >
                    <a href="tour.html" className="th-btn th-icon">
                      Explore Tours
                    </a>
                    <a href="service.html" className="th-btn style2 th-icon">
                      Our Services
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        {/* Swiper navigation */}
        <div className="th-swiper-custom">
          <button className="slider-arrow slider-prev">
            <img src={leftArrow} alt="Previous" />
          </button>
          <div className="slider-pagination"></div>
          <button className="slider-arrow slider-next">
            <img src={rightArrow} alt="next" />
          </button>
        </div>
      </div>
      <section
        className="category-area bg-top-center"
        style={{ backgroundImage: `url(${category1})` }}
      >
        <div className="container th-container">
          <div className="title-area text-center">
            <span className="sub-title" data-aos="fade-down">
Loop Delightful Tour Memories That Last a Lifetime
</span>
            <h2 className="sec-title"  data-aos="fade-down">Tremendous Tour packages</h2>
          </div>

          {/* Swiper carousel */}
          <Swiper
            modules={[Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={5}
            navigation
            pagination={{ clickable: true }}
            className="categorySlider"
            id="categorySlide"
            data-aos="fade-down"
          >
            {/* First slide */}
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
                  <a href="destination.html">International Tour</a>
                </h3>
                <a className="line-btn" href="destination.html">
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
                  <a href="destination.html">Domestic Tour</a>
                </h3>
                <a className="line-btn" href="destination.html">
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
                  <a href="destination.html">Europe Tour</a>
                </h3>
                <a className="line-btn" href="destination.html">
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
                  <a href="destination.html">Honeymoon Package</a>
                </h3>
                <a className="line-btn" href="destination.html">
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
                  <a href="destination.html">Group Tour</a>
                </h3>
                <a className="line-btn" href="destination.html">
                  See more
                </a>
              </div>
            </SwiperSlide>
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
                  <a href="destination.html">Educational Tour</a>
                </h3>
                <a className="line-btn" href="destination.html">
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
                  <a href="destination.html">Cruise</a>
                </h3>
                <a className="line-btn" href="destination.html">
                  See more
                </a>
              </div>
            </SwiperSlide>

            {/* Add more slides as needed */}
            {/* The SwiperSlide component can be repeated for each category */}
          </Swiper>
        </div>
      </section>

      <div className="bg-smoke overflow-hidden space">
      <div className="container">
        <div className="row gy-4 align-items-center">
          <div className="col-lg-6" data-aos="fade-up">
            <div className="title-area">
              <span className="sub-title style1">Why Choose Us</span>
              <h2 className="sec-title">Your thirst for adventurous travelling quenches here!</h2>
            </div>
            <div className="choose-about">
              <div className="choose-about_icon">
                <img src={normal1} alt="Top-notch Security" />
              </div>
              <div className="media-body">
                <h3 className="box-title">Approaching 1000 delightful tour experiences</h3>
                <p className="choose-about_text">Join hands with us. We promise you’ll not alone witness just travelling but enjoy the destination’s adventure, culture, colour and what not. Truly more!.</p>
              </div>
            </div>
            <div className="choose-about" data-aos="fade-up" data-aos-delay="200">
              <div className="choose-about_icon">
                <img src={normal2} alt="Budget Efficiency" />
              </div>
              <div className="media-body">
                <h3 className="box-title">A relaxing vacation planned by our certified consultants</h3>
                <p className="choose-about_text">Our leading Travel Agency in Chennai, Velachery delivers you a joyous and relaxed journey throughout the travel. Since we took great care to construct our honeymoon tour packages and group tour packages, our certified consultants took responsibilities seriously and prioritized our customers’ comfort.</p>
              </div>
            </div>
            <div className="choose-about" data-aos="fade-up" data-aos-delay="400">
              <div className="choose-about_icon">
                <img src={normal3} alt="Global Pathway" />
              </div>
              <div className="media-body">
                <h3 className="box-title">Reasonable Package Price</h3>
                <p className="choose-about_text">We make your travel budget comfortable too!. Check with us to know our exciting honeymoon tour packages, group tour packages, corporate tour packages and educational tour packages at amazing offer prices with incredible easy EMI options</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 choose-wrapp" data-aos="fade-up" data-aos-delay="600">
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
      <div className="shape-mockup d-none d-xxl-block" data-top="5%" data-right="0%">
        <img src="assets/img/shape/shape_19.png" alt="" />
      </div>
      <div className="shape-mockup d-none d-xxl-block" data-bottom="0%" data-left="0%">
        <img src="assets/img/shape/shape_20.png" alt="" />
      </div>
    </div>
  
      
      <div className="gallery-area">
        <div className="container th-container">
          <div className="title-area text-center">
            <span className="sub-title" data-aos="slide-left">
Capturing Eternal Reminiscences, Not Just Pictures 
</span>
            <h2 className="sec-title" data-aos="slide-right">Recent from Gallery</h2>
          </div>
          <div className="row gy-10 gx-10 justify-content-center align-items-center" data-aos="slide-right">
            <div className="col-md-6 col-lg-2">
              <div className="gallery-card">
                <div className="box-img global-img">
                  <a href={gallery1} className="popup-image">
                    <div className="icon-btn">
                      <i className="fal fa-magnifying-glass-plus"></i>
                    </div>
                    <img src={gallery1} alt="gallery image" />
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
                    <img src={gallery2} alt="gallery image" />
                  </a>
                </div>
              </div>
              <div className="gallery-card">
                <div className="box-img global-img">
                  <a href={gallery3} className="popup-image">
                    <div className="icon-btn">
                      <i className="fal fa-magnifying-glass-plus"></i>
                    </div>
                    <img src={gallery3} alt="gallery image" />
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
                    <img src={gallery4} alt="gallery image" />
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
                    <img src={gallery5} alt="gallery image" />
                  </a>
                </div>
              </div>
              <div className="gallery-card">
                <div className="box-img global-img">
                  <a href={gallery6} className="popup-image">
                    <div className="icon-btn">
                      <i className="fal fa-magnifying-glass-plus"></i>
                    </div>
                    <img src={gallery6} alt="gallery image" />
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
                    <img src={gallery7} alt="gallery image" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="shape-mockup d-none d-xl-block" data-top="-25%" data-left="0%">
        <img src={""} alt="shape" />
      </div>
      <div className="shape-mockup movingX d-none d-xl-block" data-top="30%" data-left="3%">
        <img className="gmovingX" src={""} alt="shape" />
      </div> */}
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
            <div className="col-lg-6 offset-lg-3">
              <div className="title-area text-center">
                <span className="sub-title"   data-aos="fade-down">Plan a trip for a life-lasting experience</span>
                <h2 className="sec-title sec-new"   data-aos="fade-down">We execute it for you</h2>
                <p className="sec-text" data-aos="fade-up">
                The Best travel agency in Chennai, Velachery incorporates Domestic, International, Honeymoon tour packages group tour packages with incredible hospitality and exceptional customer service. 
                </p>
              </div>
            </div>
          </div>
          <div className="slider-area tour-slider">
            <Swiper
              spaceBetween={30}
  data-aos="fade-down"
                data-aos-easing="ease-out"
              slidesPerView={3} // You can adjust this according to your responsive needs
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
              {[
                {
                  img: tour1,
                  title: "Vietnam Group Tour",
                  rating: "4.8",
                  price: "$980.00",
                  duration: "7 Days",
                },
                {
                  img: tour2,
                  title: "Thailand Tour",
                  rating: "4.8",
                  price: "$980.00",
                  duration: "7 Days",
                },
                {
                  img: tour3,
                  title: "Dubai Tour Package",
                  rating: "4.8",
                  price: "$980.00",
                  duration: "7 Days",
                },
                {
                  img: tour4,
                  title: "Switzerland",
                  rating: "4.8",
                  price: "$980.00",
                  duration: "7 Days",
                },
              ].map((tour, index) => (
                <SwiperSlide key={index}>
                  <div className="tour-box th-ani gsap-cursor" data-aos="fade-right" data-aos-delay="100" data-aos-easing="ease-in">
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
                    </div>
                    <div className="tour-content tournew">
                      <h3 className="box-title">
                        <a href="tour-details.html">{tour.title}</a>
                      </h3>
                      <div className="tour-rating">
                        <div
                          className="star-rating"
                          role="img"
                          aria-label={`Rated ${tour.rating} out of 5`}
                        >
                          <span style={{ width: "100%" }}>
                            Rated{" "}
                            <strong className="rating">{tour.rating}</strong>{" "}
                            out of 5
                          </span>
                        </div>
                        <a
                          href="tour-details.html"
                          className="woocommerce-review-link"
                        >
                          (<span className="count">{tour.rating}</span> Rating)
                        </a>
                      </div>
                      <h4 className="tour-box_price">
                        <span className="currency">{tour.price}</span>/Person
                      </h4>
                      <div className="tour-action">
                        <span>
                          <i className="fa-light fa-clock"></i>
                          {tour.duration}
                        </span>
                        <a
                          href="contact.html"
                          className="th-btn style4 th-icon"
                        >
                          Book Now
                        </a>
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
            <span className="sub-title" data-aos="flip-left">Testimonial</span>
            <h2 className="sec-title" data-aos="flip-left">Our Customer value us more, so we tend to serve more</h2>
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
                <div className="testi-card" data-aos="fade-left" data-aos-delay="100" data-aos-easing="ease-in-out">
                  <div className="testi-card_wrapper">
                    <div className="testi-card_profile">
                      <div className="testi-card_avater">
                        <img src={test1} alt="testimonial" />
                      </div>
                      <div className="media-body">
                        <h3 className="box-title" >Maria Doe</h3>
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
                    “A home that perfectly blends sustainability with luxury...”
                  </p>
                  <div className="testi-card-quote">
                    <img src={icont1} alt="img" />
                  </div>
                </div>
              </SwiperSlide>

              {/* Testimonial Card 2 */}
              <SwiperSlide>
                <div className="testi-card" data-aos="fade-left" data-aos-delay="100" data-aos-easing="ease-in-out">
                  <div className="testi-card_wrapper">
                    <div className="testi-card_profile">
                      <div className="testi-card_avater">
                        <img src={test2} alt="testimonial" />
                      </div>
                      <div className="media-body">
                        <h3 className="box-title">Andrew Simon</h3>
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
                    “The home boasts sleek, contemporary architecture...”
                  </p>
                  <div className="testi-card-quote">
                    <img src={icont1} alt="img" />
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="testi-card" data-aos="fade-left" data-aos-delay="100" data-aos-easing="ease-in-out">
                  <div className="testi-card_wrapper">
                    <div className="testi-card_profile">
                      <div className="testi-card_avater">
                        <img src={test2} alt="testimonial" />
                      </div>
                      <div className="media-body">
                        <h3 className="box-title">Andrew Simon</h3>
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
                    “The home boasts sleek, contemporary architecture...”
                  </p>
                  <div className="testi-card-quote">
                    <img src={icont1} alt="img" />
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="testi-card" data-aos="fade-left" data-aos-delay="100" data-aos-easing="ease-in-out">
                  <div className="testi-card_wrapper">
                    <div className="testi-card_profile">
                      <div className="testi-card_avater">
                        <img src={test2} alt="testimonial" />
                      </div>
                      <div className="media-body">
                        <h3 className="box-title">Andrew Simon</h3>
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
                    “The home boasts sleek, contemporary architecture...”
                  </p>
                  <div className="testi-card-quote">
                    <img src={icont1} alt="img" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testi-card" data-aos="fade-left" data-aos-delay="100" data-aos-easing="ease-in-out">
                  <div className="testi-card_wrapper">
                    <div className="testi-card_profile">
                      <div className="testi-card_avater">
                        <img src={test2} alt="testimonial" />
                      </div>
                      <div className="media-body">
                        <h3 className="box-title">Andrew Simon</h3>
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
                    “The home boasts sleek, contemporary architecture...”
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
              <span className="sub-title"data-aos="slide-left" >News & Blog</span>
              <h2 className="sec-title" data-aos="slide-left">Tourism News and Insights</h2>
            </div>
          </div>
          <div className="col-lg-auto d-none d-lg-block">
            <div className="sec-btn" data-aos="slide-right">
              <a href="blog.html" className="th-btn style4 th-icon">
                See More Articles
              </a>
            </div>
          </div>
        </div>
        <div className="row gx-24 gy-30">
          <div className="col-xl-8">
            <div className="blog-grid2 style2 th-ani">
              <div className="blog-img global-img">
                <img src={blog1} alt="blog" />
              </div>
              <div className="blog-grid2_content" data-aos="fade-left" data-aos-delay="100" data-aos-easing="ease-in">
                <div className="blog-meta">
                  <a className="author" href="blog.html">Sep 09, 2024</a>
                  <a href="blog.html">6 min read</a>
                </div>
                <h3 className="box-title">
                  <a href="blog-details.html">
                    Tourm Reveals New Eco-Friendly Resort in Maldives
                  </a>
                </h3>
                <a href="blog-details.html" className="th-btn style4 th-icon">
                  Read More
                </a>
              </div>
            </div>

            <div className="blog-grid2 th-ani style2 mt-24" data-aos="fade-left" data-aos-delay="100" data-aos-easing="ease-in">
              <div className="blog-img global-img">
                <img src={blog2} alt="blog" />
              </div>
              <div className="blog-grid2_content">
                <div className="blog-meta">
                  <a className="author" href="blog.html">Sep 10, 2024</a>
                  <a href="blog.html">8 min read</a>
                </div>
                <h3 className="box-title">
                  <a href="blog-details.html">
                    Essential Packing List for Your Next Beach Vacation
                  </a>
                </h3>
                <a href="blog-details.html" className="th-btn style4 th-icon">
                  Read More
                </a>
              </div>
            </div>
          </div>

          <div className="col-xl-4">
            <div className="blog-grid2 th-ani" data-aos="fade-right" data-aos-delay="100" data-aos-easing="ease-in">
              <div className="blog-img global-img">
                <img src={blog3} alt="blog" />
              </div>
              <div className="blog-grid2_content">
                <div className="blog-meta">
                  <a className="author" href="blog.html">Sep 05, 2024</a>
                  <a href="blog.html">6 min read</a>
                </div>
                <h3 className="box-title">
                  <a href="blog-details.html">
                    Tourm Commits to Carbon-Neutral Beach Holidays
                  </a>
                </h3>
                <a href="blog-details.html" className="th-btn style4 th-icon">
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
