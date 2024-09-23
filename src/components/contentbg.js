import React from 'react';
import '../assets/contentbg.css';

const ContentSection = ({ title, children, backgroundImage }) => {
  return (
    <div className="content" >
      <h2>{title}</h2>
      <p>{children}</p>
    </div>
  );
};

export default ContentSection;
