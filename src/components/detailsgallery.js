import React from 'react';
import PropTypes from 'prop-types';
import './DetailsGallery.css'; // Import the CSS file

const DetailsGallery = ({ images }) => {
    return (
        <div className="details-gallery-wrapper" style={{ width: '100%', margin: '0 auto' }}>
            <h3 className="gallery-title">From our gallery</h3>
            <div className="row gy-4 gallery-row filter-active">
                {images.map((src, index) => (
                    <div className="col-12 col-md-6 col-xl-4 filter-item" key={index}>
                        <div className="tour-gallery-card">
                            <div className="gallery-img global-img">
                                <img src={src} alt={`Gallery image ${index + 1}`} className="gallery-image" />
                                <a href={src} className="icon-btn popup-image">
                                    <i className="fal fa-magnifying-glass-plus"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Prop Types for validation
DetailsGallery.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default DetailsGallery;
