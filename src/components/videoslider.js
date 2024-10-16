import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation'; // Import for navigation arrows
import 'swiper/css/autoplay'; // Import for autoplay
import { Navigation, Autoplay } from 'swiper/modules'; // Import required modules
import './videoslider.css';

const VideoSlider = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const swiperRef = useRef(null); // Create a reference for the Swiper

  const handlePlayClick = (e) => {
    const iframe = e.currentTarget.previousSibling;
    iframe.src += "&autoplay=1";
    setIsPlaying(true);
  };

  const slideNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext(); // Slide to the next video
    }
  };

  const slidePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev(); // Slide to the previous video
    }
  };

  return (
    <>
    <section class="youtube-section">
  <h2 class="youtube-heading">Explore the World Through Our Lens</h2>
  <p class="youtube-description">Join us on our adventures as we discover breathtaking destinations and share travel tips through our captivating videos!</p>
</section>
       <div className="video-slider-wrapper">
      <Swiper
        ref={swiperRef} // Attach the ref to Swiper
        spaceBetween={20} // Spacing between videos
        slidesPerView={3} // Display 3 videos at once
        centeredSlides={true}
        loop={true} // Enable looping
        navigation={false} // Disable default navigation
        autoplay={{ delay: 3000, disableOnInteraction: false }} // Enable autoplay
        modules={[Navigation, Autoplay]} // Include modules
        className="mySwiper"
      >
        {["BMB3boMwZwY", "pbEfYpU9IQA", "W52dYREUkC8", "F2V2--JDFdY"].map((videoId, index) => (
          <SwiperSlide key={index}>
            <div className="video-container">
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?mute=1&controls=0&loop=1&playlist=${videoId}&vq=hd1080`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="video-iframe"
              ></iframe>
              {!isPlaying && (
                <div className="" onClick={handlePlayClick}></div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Custom Navigation Buttons */}
      <button className="custom-button custom-button-left" onClick={slidePrev}>
        <span>&lt;</span> {/* Replace with your arrow icon */}
      </button>
      <button className="custom-button custom-button-right" onClick={slideNext}>
        <span>&gt;</span> {/* Replace with your arrow icon */}
      </button>
    </div>
    </>
 
  );
};

export default VideoSlider;
