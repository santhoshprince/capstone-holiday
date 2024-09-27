import React from 'react';
import PropTypes from 'prop-types';

const LocationMap = ({ title, mapSrc, iconSrc }) => {
    return (
        <div className="location-map">
            <h3 className="page-title mt-45 mb-30">{title}</h3>
            <div className="contact-map style3">
                <iframe
                    src={mapSrc}
                    allowFullScreen
                    loading="lazy"
                    style={{ width: '100%', height: '400px', border: '0' }} // Customize height as needed
                ></iframe>
                <div className="contact-icon">
                    <img src={iconSrc} alt="Location Icon" />
                </div>
            </div>
        </div>
    );
};

// Prop Types for validation
LocationMap.propTypes = {
    title: PropTypes.string.isRequired,
    mapSrc: PropTypes.string.isRequired,
    iconSrc: PropTypes.string.isRequired,
};

export default LocationMap;
