import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const TourItem = ({ imgSrc, title, rating, price, duration, detailPath,alt }) => { 
  return (
    <div className="col-md-12" style={{marginBottom:"20px"}}>
      <div className="tour-box th-ani new-card">
        <div className="tour-box_img global-img card-new img-card-total">
          <img src={imgSrc} alt={alt} title={alt} />
        </div>
        <div className="tour-content">
          <h3 className="box-title">
            <Link to={detailPath}>{title}</Link> {/* Use Link instead of a regular anchor tag */}
          </h3>
         
          {price ? (<h4 className="tour-box_price">
            <span className="currency">₹ {price}</span>/Person
          </h4>) : null}
          <div className="tour-action">
            <span><i className="fa-light fa-clock"></i>{duration} Days</span>
            <Link to={detailPath} className="th-btn style4">Detail View</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourItem;
