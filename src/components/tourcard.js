import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const TourItem = ({ imgSrc, title, rating, price, duration, id }) => { // Add id to props
  const detailLink = `/tour/bali-tour-packages-from-chennai/${id}`;// Generate the detail link using id

  return (
    <div className="col-md-6">
      <div className="tour-box th-ani">
        <div className="tour-box_img global-img">
          <img src={imgSrc} alt="image" />
        </div>
        <div className="tour-content">
          <h3 className="box-title">
            <Link to={detailLink}>{title}</Link> {/* Use Link instead of a regular anchor tag */}
          </h3>
          <div className="tour-rating">
            <div className="star-rating" role="img" aria-label={`Rated ${rating} out of 5`}>
              <span style={{ width: '100%' }}>
                Rated <strong className="rating">{rating}</strong> out of 5 based on <span className="rating">{rating}</span> Rating
              </span>
            </div>
            <Link to={detailLink} className="woocommerce-review-link">
              (<span className="count">{rating}</span> Rating)
            </Link>
          </div>
          <h4 className="tour-box_price">
            <span className="currency">₹ {price}</span>/Person
          </h4>
          <div className="tour-action">
            <span><i className="fa-light fa-clock"></i>{duration} Days</span>
            <Link to={detailLink} className="th-btn style4">Detail View</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourItem;
