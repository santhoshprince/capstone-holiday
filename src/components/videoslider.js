// src/components/VideoSlider.js
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules'; // Only import Pagination since Navigation is not needed
import './videoslider.css'; // Ensure this path is correct

const VideoSlider = () => {
  // State to manage visibility of the play button
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = (e) => {
    // Get the iframe and set autoplay
    const iframe = e.currentTarget.previousSibling; // Get the iframe that is before the button
    iframe.src += "&autoplay=1"; // Start autoplay when clicked
    setIsPlaying(true); // Hide the play button
  };

  return (
    <div className="video-slider-wrapper">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        loop={true}
        modules={[Pagination]} // Only using Pagination
        className="mySwiper"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="video-container">
            <iframe
              src="https://www.youtube.com/embed/pbEfYpU9IQA?mute=1&controls=0&loop=1&playlist=pbEfYpU9IQA&vq=hd1080"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="video-iframe"
            ></iframe>
            {!isPlaying && (
              <div className="play-button" onClick={handlePlayClick}></div>
            )}
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="video-container">
            <iframe
              src="https://www.youtube.com/embed/pbEfYpU9IQA?mute=1&controls=0&loop=1&playlist=pbEfYpU9IQA&vq=hd1080"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="video-iframe"
            ></iframe>
            {!isPlaying && (
              <div className="play-button" onClick={handlePlayClick}></div>
            )}
          </div>
        </SwiperSlide>


          {/* Slide 3 */}
          <SwiperSlide>
          <div className="video-container">
            <iframe
              src="https://www.youtube.com/embed/pbEfYpU9IQA?mute=1&controls=0&loop=1&playlist=pbEfYpU9IQA&vq=hd1080"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="video-iframe"
            ></iframe>
            {!isPlaying && (
              <div className="play-button" onClick={handlePlayClick}></div>
            )}
          </div>
        </SwiperSlide>


        {/* Only Swiper Pagination */}
        <div className="swiper-pagination"></div>
      </Swiper>
    </div>
  );
};

export default VideoSlider;
