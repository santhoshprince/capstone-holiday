import React from 'react';
// import '../assets/contentbg.css';
import bg1 from "../img/bg/2151682890.jpg";
import '../components/contentbg.css'; // Import the CSS file


const ContentSection = ({ heading, children, backgroundImage }) => {
  const sectionStyle = {
    backgroundImage: `url(${bg1})`,
    backgroundSize: 'cover', // Ensures the image covers the entire div
    backgroundPosition: 'center', // Centers the image
  };

  return (
    <div className="breadcumb-wrapper" style={sectionStyle}>
      <div className="container">
        <div className="breadcumb-content">
          <p>{children}</p>
          <h1 className="breadcumb-title">{heading}</h1>
        </div>
      </div>
    </div>
  );
};

export default ContentSection;
