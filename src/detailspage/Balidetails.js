import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Tabs, Row, Col } from 'antd';
import "../detailspage/Detailspage.css";

const { TabPane } = Tabs;

const BaliDetails = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('1'); // State to track the active tab for animation

  const tourDetails = {
    0: {
      title: "Bali Adventure",
      overview: "Bali is known for its beautiful beaches, vibrant culture, and scenic landscapes...",
      highlights: ["Explore the stunning beaches", "Visit historical temples", "Experience local Balinese culture"],
      itinerary: "Day 1: Arrival and beach relaxation...",
      map: "https://example.com/map.jpg",
      photos: ["https://example.com/photo1.jpg", "https://example.com/photo2.jpg"],
      reviews: [
        { user: "John Doe", comment: "Amazing experience!", rating: 5 },
        { user: "Jane Smith", comment: "Had a great time!", rating: 4 },
      ],
    },
  };

  const tour = tourDetails[id];

  if (!tour) {
    return <div style={{ textAlign: "center" }}>Tour Details not found!</div>;
  }

  // Inline styles for CSS animations
  const fadeInAnimation = {
    animation: 'fadeIn 0.8s ease-in-out',
    opacity: '0',
    animationFillMode: 'forwards',
  };

  return (
    <div className="bali-details-page">
      <h1 style={{ textAlign: 'center', animation: 'fadeIn 1s forwards', fontSize: '2.5rem', color: '#333' }}>
        {tour.title}
      </h1>
      <Tabs
        defaultActiveKey="1"
        centered
        onChange={(key) => setActiveTab(key)} // Update activeTab on change
      >
        <TabPane tab="Details" key="1">
          <div style={activeTab === '1' ? fadeInAnimation : null}>
            <Row gutter={16}>
              <Col span={12}>
                <h2>Tour Overview</h2>
                <p>{tour.overview}</p>
              </Col>
              <Col span={12}>
                <h2>Highlights</h2>
                <ul>
                  {tour.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              </Col>
            </Row>
          </div>
        </TabPane>

        <TabPane tab="Itinerary" key="2">
          <div style={activeTab === '2' ? fadeInAnimation : null}>
            <h2>Itinerary</h2>
            <p>{tour.itinerary}</p>
          </div>
        </TabPane>

        <TabPane tab="Map" key="3">
          <div style={activeTab === '3' ? fadeInAnimation : null}>
            <h2>Map</h2>
            <img src={tour.map} alt="Tour Map" className="tour-map" style={{ width: '100%', borderRadius: '8px' }} />
          </div>
        </TabPane>

        <TabPane tab="Photos" key="4">
          <div style={activeTab === '4' ? fadeInAnimation : null}>
            <h2>Photos</h2>
            <Row gutter={[16, 16]}>
              {tour.photos.map((photo, index) => (
                <Col key={index} span={12}>
                  <img
                    src={photo}
                    alt={`Tour Photo ${index + 1}`}
                    className="tour-photo"
                    style={{
                      width: '100%',
                      borderRadius: '8px',
                      transition: 'transform 0.3s ease',
                    }}
                    onMouseOver={(e) => (e.target.style.transform = 'scale(1.05)')}
                    onMouseOut={(e) => (e.target.style.transform = 'scale(1)')}
                  />
                </Col>
              ))}
            </Row>
          </div>
        </TabPane>

        <TabPane tab="Reviews" key="5">
          <div style={activeTab === '5' ? fadeInAnimation : null}>
            <h2>Reviews</h2>
            {tour.reviews.map((review, index) => (
              <div key={index} className="review">
                <strong>{review.user}</strong>
                <p>{review.comment}</p>
                <p>Rating: {review.rating} / 5</p>
              </div>
            ))}
          </div>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default BaliDetails;
