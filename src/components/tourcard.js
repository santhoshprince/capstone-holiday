import React from 'react';
import { Card, Button } from 'antd';
import '../assets/card/Tourcard.css';

const TourCard = ({ title, subtitle, duration, description, price, imageUrl }) => {
  return (
    <Card className="tour-card" hoverable>
      <div className="tour-content">
        {/* Column 1: Image */}
        <div className="tour-image">
          <img src={imageUrl} alt={title} />
        </div>

        {/* Column 2: Tour Details */}
        <div className="tour-details">
          <h3>{title}</h3>
          <h4>{subtitle}</h4>
          <p>{duration}</p>
          <p>{description}</p>
        </div>

        {/* Column 3: Price */}
        <div className="tour-price">
          <h4>From</h4>
          <h3 className="price">₹ {price}</h3>
          <Button type="primary">View Details</Button>
        </div>
      </div>
    </Card>
  );
};

export default TourCard;
