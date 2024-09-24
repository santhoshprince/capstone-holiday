// src/components/ImageSlider.js
import React, { useState, useEffect } from 'react';
import '../pages/herocarousal.css'; // Import your CSS file for styling

const Home = () => {
  const slides = [
    {
      bgImage: require('../assets/img/hero/hero1.jpg'), // Adjust the path if necessary
      title: "Natural Wonder of the World",
    },
    {
      bgImage: require('../assets/img/hero/hero2.jpg'),
      title: "Let’s Make Your Best Trip with Us",
    },
    {
      bgImage: require('../assets/img/hero/hero3.jpg'),
      title: "Explore the Beauty of the Whole World",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // Automatically go to the next slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 3000); // Change the time here for different slide durations

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [currentIndex]);

  return (
    <div className="slider-container">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${currentIndex === index ? 'active' : ''}`} // Add active class to the current slide
          style={{
            backgroundImage: `url(${slide.bgImage})`,
          }}
        >
          <div className={`slide-content ${currentIndex === index ? 'active' : ''}`}>
            <h1>{slide.title}</h1>
            <div className="btn-group">
              <a href="tour.html" className="btn th-icon">Explore Tours</a>
              <a href="service.html" className="btn style2 th-icon">Our Services</a>
            </div>
          </div>
        </div>
      ))}
      <button className="slider-button left" onClick={goToPrevious}>
        &#10094; {/* Left arrow */}
      </button>
      <button className="slider-button right" onClick={goToNext}>
        &#10095; {/* Right arrow */}
      </button>
    </div>
  );
};

export default Home;
