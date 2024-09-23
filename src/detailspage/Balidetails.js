import React from 'react';
import { useParams } from 'react-router-dom';
import { Tabs, Row, Col } from 'antd';
 import "../detailspage/Detailspage.css";

const { TabPane } = Tabs;

const BaliDetails = () => {
  const { id } = useParams(); // Get the ID from the URL
 
  const tourDetails = {
    0: {
      title: "Bali Adventure",
      overview: "Bali is known for its beautiful beaches, vibrant culture, and scenic landscapes...",
      highlights: ["Explore the stunning beaches", "Visit historical temples", "Experience local Balinese culture"],
      itinerary: "Day 1: Arrival and beach relaxation...",
    },
    1: {
        title: "Bali Adventure",
        overview: "Bali is known for its beautiful beaches, vibrant culture, and scenic landscapes...",
        highlights: ["Explore the stunning beaches", "Visit historical temples", "Experience local Balinese culture"],
        itinerary: "Day 1: Arrival and beach relaxation...",
      },
      2: {
        title: "Bali Adventure",
        overview: "Bali is known for its beautiful beaches, vibrant culture, and scenic landscapes...",
        highlights: ["Explore the stunning beaches", "Visit historical temples", "Experience local Balinese culture"],
        itinerary: "Day 1: Arrival and beach relaxation...",
      },
      3: {
        title: "Bali Adventure",
        overview: "Bali is known for its beautiful beaches, vibrant culture, and scenic landscapes...",
        highlights: ["Explore the stunning beaches", "Visit historical temples", "Experience local Balinese culture"],
        itinerary: "Day 1: Arrival and beach relaxation...",
      },
  };

  const tour = tourDetails[id]; // Get the relevant tour details

  if (!tour) {
    return <div style={{textAlign:"center"}}>TourDetails not found!</div>; // Handle case where tour doesn't exist
  }
  return (
    <div className="bali-details-page">
      <Tabs defaultActiveKey="1">
        <TabPane tab="Details" key="1">
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
        </TabPane>
        {/* Add more tabs as needed */}
      </Tabs>
    </div>
  );
};

export default BaliDetails;
