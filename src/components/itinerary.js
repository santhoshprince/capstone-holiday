import React from 'react';
import './Itinerary.css';

const Itinerary = ({ title, itineraryData }) => {
  return (
    <div className="itinerary">
      <h2 className="itinerary-title">{title}</h2>
      <ul className="itinerary-list">
        {itineraryData.map((item, index) => (
          <li key={index} className="itinerary-day">
            <div className="itinerary-day-number">{item.day}</div>
            <div className="itinerary-details">{item.details}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Itinerary;
