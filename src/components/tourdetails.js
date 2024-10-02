import React from 'react';
import './TourDetails.css'; // Import your CSS styles

const TourDetails = ({
  title,
  description,
  tourCode,
  duration,
  priceIncludes,
  hotelDetails,
  allInclusion,
  complimentaryguestservices
}) => {
  return (
    <div className="tour-details">
      <h1>{title}</h1>
      <p>{description}</p>

      <div className="tour-info">
        {tourCode ? (<h4>Tour Code: {tourCode}</h4>):null}
        {duration ?(<h4>Tour Duration: {duration}</h4>):null}
      </div>
      <div className="tour-hotels">
        <h3>Hotel</h3>
        <ul>
          {hotelDetails?.map((hotel, index) => (
            <li key={index}>{hotel}</li>
          ))}
        </ul>
      </div>
      {priceIncludes && priceIncludes.length > 0 && (
  <div className="tour-includes">
    <h3>Price Includes</h3>
    <ul>
      {priceIncludes.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
)}
     
      {allInclusion ?(<div className="tour-includes">
        <h3>All Inclusion</h3>
        <ul>
          {allInclusion?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>): null}
      {complimentaryguestservices ? (<div className="tour-includes">
        <h3>Complimentary Guest Services</h3>
        <ul>
          {complimentaryguestservices?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>): null}
    </div>
  );
};

export default TourDetails;
