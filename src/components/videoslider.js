import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import './videoslider.css';

const VideoSlider = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = (e) => {
    const iframe = e.currentTarget.previousSibling;
    iframe.src += "&autoplay=1";
    setIsPlaying(true);
  };

  return (
    <div className="video-slider-wrapper bullet-new">
      <Swiper
        spaceBetween={20} // Spacing between videos
        slidesPerView={3} // Display 3 videos at once
        centeredSlides={true}
        pagination={{ clickable: true }}
        loop={true}
        modules={[Pagination]}
        className="mySwiper"
      >
        {["BMB3boMwZwY", "pbEfYpU9IQA", "W52dYREUkC8","F2V2--JDFdY"].map((videoId, index) => (
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
                <div className="play-button" onClick={handlePlayClick}></div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default VideoSlider;
