import React from 'react';
import { Card, Button } from 'antd';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../assets/card/Tourcard.css';

const TourCard = ({ title, subtitle, duration, description, price, imageUrl, id }) => {
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
          <Link to={`/international/bali/${id}`}> {/* Link to details page */}
            <Button type="primary">View Details</Button>
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default TourCard;
