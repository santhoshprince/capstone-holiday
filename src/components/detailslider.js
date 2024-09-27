import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectFade, Autoplay,Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css";
import icon from "../img/icon/hero-arrow-left.svg";
import icon2 from "../img/icon/hero-arrow-right.svg";

const TourSlider = ({ images }) => {
    let thumbsSwiper;

    return (
        <div className="tour-page-single">
            <Swiper
                modules={[Navigation, Thumbs, Autoplay]}
                thumbs={{ swiper: thumbsSwiper }}
                loop={true}
                autoplay={{ delay: 3000 }}
                className="th-slider mb-4"
                id="tourSlider4"
            >
                {images.map((src, index) => (
                    <SwiperSlide key={index}>
                        <div className="tour-slider-img">
                            <img src={src} alt="Tour Slide" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <Swiper
                onSwiper={(swiper) => (thumbsSwiper = swiper)}
                spaceBetween={10}
                slidesPerView={3}
                className="tour-thumb-slider"
            >
                {images.map((src, index) => (
                    <SwiperSlide key={index}>
                        <div className="tour-slider-img">
                            <img src={src} alt="Tour Slide" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <button
                className="slider-arrow style3 slider-prev"
                onClick={() => thumbsSwiper.slidePrev()}
            >
                <img src={icon} alt="Previous" />
            </button>
            <button
                className="slider-arrow style3 slider-next"
                onClick={() => thumbsSwiper.slideNext()}
            >
                <img src={icon2} alt="Next" />
            </button>
        </div>
    );
};

// Prop Types for validation
TourSlider.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TourSlider;
