import React from "react";
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
import "swiper/css";
// import './index.css';
// Import required modules

import heroBg1 from "../img/hero/hero_bg_1_1.jpg";
import heroBg2 from "../img/hero/hero_bg_1_2.jpg";
import heroBg3 from "../img/hero/hero_bg_1_3.jpg";
import leftArrow from "../img/icon/left-arrow.svg";
import rightArrow from "../img/icon/right-arrow.svg";
import cata1 from "../img/category/category_1_1.jpg";
import cata2 from "../img/category/category_1_2.jpg";
import cata3 from "../img/category/category_1_3.jpg";
import cata4 from "../img/category/category_1_4.jpg";
import cata5 from "../img/category/category_1_5.jpg";
import cata6 from "../img/category/category_3_2.jpg";
import cata7 from "../img/category/category_3_1.jpg";
import normal1 from "../img/normal/about_1_1.jpg";
import normal2 from "../img/normal/about_1_2.jpg";
import normal3 from "../img/normal/about_1_3.jpg";
import icon1 from "../img/icon/map3.svg";
import icon2 from "../img/icon/guide.svg";
import tour1 from "../img/tour/tour-1_1.jpg";
import tour2 from "../img/tour/tour_3_6.jpg";
import tour3 from "../img/tour/tour_3_1.jpg";
import tour4 from "../img/tour/tour_3_2.jpg";
import gallery1 from "../img/gallery/gallery_1_1.jpg";
import gallery2 from "../img/gallery/gallery_1_2.jpg";
import gallery3 from "../img/gallery/gallery_1_3.jpg";
import gallery4 from "../img/gallery/gallery_1_4.jpg";
import gallery5 from "../img/gallery/gallery_1_5.jpg";
import gallery6 from "../img/gallery/gallery_1_6.jpg";
import gallery7 from "../img/gallery/gallery_1_7.jpg";
import category1 from "../img/bg/category_bg_1.png";
import tourbg1 from "../img/bg/tour_bg_1.jpg";
import test1 from "../img/testimonial/testi_1_1.jpg";
import icont1 from "../img/icon/testi-quote.svg";
import test2 from "../img/testimonial/testi_1_2.jpg";
import blog1 from "../img/blog/blog_1_1.jpg";
import blog2 from "../img/blog/blog_1_2.jpg";
import blog3 from "../img/blog/blog_1_3.jpg";
import blog4 from "../img/blog/blog_2_1.jpg";

const HeroSlider = () => {
  return (
    <>
      <div className="th-hero-wrapper hero-1" id="hero">
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
                    Be Ready Explore New Things
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
                    Let’s make your best trip with us
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
                    Explore beauty of the whole world
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
            <span className="sub-title">Wonderful Place For You</span>
            <h2 className="sec-title">Tour Categories</h2>
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
                  <a href="destination.html">Vietnam Group Tour</a>
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
                  <a href="destination.html">Thailand Tour</a>
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
                  <a href="destination.html">Goa Tour</a>
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
                  <a href="destination.html">Bali Tour</a>
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
                  <a href="destination.html">Andaman Tour</a>
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
                  <a href="destination.html">Maldives Tour</a>
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
                  <a href="destination.html">Vietnam Tour</a>
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

      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="img-box1">
              <div className="img1">
                <img src={normal1} alt="About" />
              </div>
              <div className="img2">
                <img src={normal2} alt="About" />
              </div>
              <div className="img3">
                <img src={normal3} alt="About" />
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="ps-xl-4 ms-xl-2">
              <div className="title-area mb-20 pe-xl-5 me-xl-5">
                <span className="sub-title style1">
                  TOP 4 DECISIONS TO CHOOSE US
                </span>
                <h2 className="sec-title mb-20 pe-xl-5 me-xl-5 heading heading-new">
                  Your thirst for adventurous travelling quenches here!
                </h2>
                <p className="sec-text mb-30">
                  Certified Consultants: Capstone loves Communication!. Our
                  certified consultants are known for acknowledgement. All your
                  queries will be responded back with an answer within an hour
                  from our Travel Agency in Chennai, Velachery.
                </p>
              </div>
              <div className="about-item-wrap">
                <div className="about-item">
                  <div className="about-item_img">
                    <img src={icon1} alt="Icon 1" />
                  </div>
                  <div className="about-item_centent">
                    <h5 className="box-title">Exclusive Trip</h5>
                    <p className="about-item_text">
                      There are many variations of passages of available but the
                      majority.
                    </p>
                  </div>
                </div>
                <div className="about-item">
                  <div className="about-item_img">
                    <img src={icon2} alt="Icon 2" />
                  </div>
                  <div className="about-item_centent">
                    <h5 className="box-title">Professional Guide</h5>
                    <p className="about-item_text">
                      There are many variations of passages of available but the
                      majority.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-35">
                <a href="about.html" className="th-btn style3 th-icon">
                  Learn More
                </a>
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
            <div className="col-lg-6 offset-lg-3">
              <div className="title-area text-center">
                <span className="sub-title">Best Place For You</span>
                <h2 className="sec-title sec-new">Most Popular Tour</h2>
                <p className="sec-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
          <div className="slider-area tour-slider">
            <Swiper
              spaceBetween={30}
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
                  <div className="tour-box th-ani gsap-cursor">
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
      <div className="gallery-area">
        <div className="container th-container">
          <div className="title-area text-center">
            <span className="sub-title">Make Your Tour More Pleasure</span>
            <h2 className="sec-title">Recent Gallery</h2>
          </div>
          <div className="row gy-10 gx-10 justify-content-center align-items-center">
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

      <section className="testi-area overflow-hidden space" id="testi-sec">
        <div className="container-fluid p-0">
          <div className="title-area mb-20 text-center">
            <span className="sub-title">Testimonial</span>
            <h2 className="sec-title">What Client Say About us</h2>
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
                <div className="testi-card">
                  <div className="testi-card_wrapper">
                    <div className="testi-card_profile">
                      <div className="testi-card_avater">
                        <img src={test1} alt="testimonial" />
                      </div>
                      <div className="media-body">
                        <h3 className="box-title">Maria Doe</h3>
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
                <div className="testi-card">
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
                <div className="testi-card">
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
                <div className="testi-card">
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
                <div className="testi-card">
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

      <section
        className="bg-smoke overflow-hidden space section-four"
        id="blog-sec"
      >
        <div className="container">
          <div className="mb-30 text-center text-md-start">
            <div className="row align-items-center justify-content-between">
              <div className="col-md-7">
                <div className="title-area mb-md-0">
                  <span className="sub-title">About Us Restaurant</span>
                  <h2 className="sec-title">News & Package Details</h2>
                </div>
              </div>
              <div className="col-md-auto">
                <a href="blog.html" className="th-btn style4 th-icon">
                  See More Articles
                </a>
              </div>
            </div>
          </div>
          <div className="slider-area">
            <Swiper
              spaceBetween={30}
              slidesPerView={3}
              pagination={{ clickable: true }}
              navigation={true} // Enable navigation
              modules={[Navigation, Pagination]} // Include Navigation and Pagination modules
              breakpoints={{
                576: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                992: { slidesPerView: 2 },
                1200: { slidesPerView: 3 },
              }}
              className="swiper has-shadow"
            >
              <SwiperSlide>
                <div className="blog-box th-ani">
                  <div className="blog-img global-img">
                    <img src={blog1} alt="blog image" />
                  </div>
                  <div className="blog-box_content">
                    <div className="blog-meta">
                      <a className="author" href="blog.html">
                        4 Nights
                      </a>
                      <a href="blog.html">5 Days</a>
                    </div>
                    <h4 style={{ marginBottom: "15px" }}>
                      From <span className="prince">₹ 9,350</span>
                    </h4>
                    <h3 className="box-title boxnew">
                      <a href="blog-details.html">
                        Thailand Group Tour Package – 4N / 5D
                      </a>
                    </h3>
                    <a
                      href="blog-details.html"
                      className="th-btn style4 th-icon"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="blog-box th-ani">
                  <div className="blog-img global-img">
                    <img src={blog2} alt="blog image" />
                  </div>
                  <div className="blog-box_content">
                    <div className="blog-meta">
                      <a className="author" href="blog.html">
                        4 Nights
                      </a>
                      <a href="blog.html">5 Days</a>
                    </div>
                    <h4 style={{ marginBottom: "15px" }}>
                      From <span className="prince">₹ 21,250</span>
                    </h4>
                    <h3 className="box-title boxnew">
                      <a href="blog-details.html">
                        Sri Lanka Group Tour Package – 4N/5D
                      </a>
                    </h3>
                    <a
                      href="blog-details.html"
                      className="th-btn style4 th-icon"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="blog-box th-ani">
                  <div className="blog-img global-img">
                    <img src={blog3} alt="blog image" />
                  </div>
                  <div className="blog-box_content">
                    <div className="blog-meta">
                      <a className="author" href="blog.html">
                        4 Nights
                      </a>
                      <a href="blog.html">5 Days</a>
                    </div>
                    <h4 style={{ marginBottom: "15px" }}>
                      From <span className="prince">₹ 34,000</span>
                    </h4>
                    <h3 className="box-title boxnew">
                      <a href="blog-details.html">
                        Singapore Malaysia Group Tour – 4N / 5D
                      </a>
                    </h3>
                    <a
                      href="blog-details.html"
                      className="th-btn style4 th-icon"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="blog-box th-ani">
                  <div className="blog-img global-img">
                    <img src={blog4} alt="blog image" />
                  </div>
                  <div className="blog-box_content">
                    <div className="blog-meta">
                      <a className="author" href="blog.html">
                        July 07 2024
                      </a>
                      <a href="blog.html">8 min read</a>
                    </div>
                    <h3 className="box-title">
                      <a href="blog-details.html">
                        10 Reason why you should visit New Jersy
                      </a>
                    </h3>
                    <a
                      href="blog-details.html"
                      className="th-btn style4 th-icon"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="blog-box th-ani">
                  <div className="blog-img global-img">
                    <img src={blog4} alt="blog image" />
                  </div>
                  <div className="blog-box_content">
                    <div className="blog-meta">
                      <a className="author" href="blog.html">
                        July 07 2024
                      </a>
                      <a href="blog.html">8 min read</a>
                    </div>
                    <h3 className="box-title">
                      <a href="blog-details.html">
                        10 Reason why you should visit New Jersy
                      </a>
                    </h3>
                    <a
                      href="blog-details.html"
                      className="th-btn style4 th-icon"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="blog-box th-ani">
                  <div className="blog-img global-img">
                    <img src={blog4} alt="blog image" />
                  </div>
                  <div className="blog-box_content">
                    <div className="blog-meta">
                      <a className="author" href="blog.html">
                        July 07 2024
                      </a>
                      <a href="blog.html">8 min read</a>
                    </div>
                    <h3 className="box-title">
                      <a href="blog-details.html">
                        10 Reason why you should visit New Jersy
                      </a>
                    </h3>
                    <a
                      href="blog-details.html"
                      className="th-btn style4 th-icon"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </SwiperSlide>

              {/* Repeat SwiperSlides for other blog entries */}
            </Swiper>
          </div>
        </div>
        {/* Shape elements */}
      </section>
    </>
  );
};

export default HeroSlider;
