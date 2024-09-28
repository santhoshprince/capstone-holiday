import React from 'react';
import './TourDetails.css'; // Import your CSS styles

const TourDetails = ({
  title,
  description,
  tourCode,
  duration,
  priceIncludes,
  hotelDetails
}) => {
  return (
    <div className="tour-details">
      <h1>{title}</h1>
      <p>{description}</p>

      <div className="tour-info">
        <h4>Tour Code: {tourCode}</h4>
        <h4>Tour Duration: {duration}</h4>
      </div>

      <div className="tour-includes">
        <h3>Price Includes</h3>
        <ul>
          {priceIncludes.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="tour-hotels">
        <h3>Hotel</h3>
        <ul>
          {hotelDetails.map((hotel, index) => (
            <li key={index}>{hotel}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TourDetails;
