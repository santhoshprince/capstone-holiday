import React from 'react';
// import '../assets/contentbg.css';

import '../components/contentbg.css'; // Import the CSS file


const ContentSection = ({ heading, children, backgroundImage ,backgroundPosition}) => {
  const sectionStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover', // Ensures the image covers the entire div
    backgroundPosition: 'center', // Centers the image
    backgroundPosition: backgroundPosition || 'center',
  };

  return (
    <div className="breadcumb-wrapper" style={sectionStyle}>
      <div className="container">
        <div className="breadcumb-content">
        <h1 className="breadcumb-title">{heading}</h1>
          {/* <p>{children}</p> */}
        </div>
      </div>
    </div>
  );
};

export default ContentSection;
