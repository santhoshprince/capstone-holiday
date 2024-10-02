// BaliDescription.js
import React from 'react';
import './tourdescription.css'; // Import external CSS

const BaliDescription = ({ title, description, imageUrl }) => {
  return (
    <div className='container-css'>
      <h1 className="title">{title}</h1>
      <p className="description">{description}</p>
      {imageUrl && <img className="image" src={imageUrl} alt={title} />}
    </div>
  );
};

export default BaliDescription;
