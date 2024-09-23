import React from 'react';
import { Row, Col } from 'antd'; // Import Ant Design's grid components
import Header from '../components/header';
import Footer from '../components/footer';
import TourCard from '../components/tourcard';
import ContentSection from '../components/contentbg';
import '../assets/card/Tourcard.css'; // For styling the page

// Array of tour details
const tourPackages = [
  {
    id:0,
    title: "Bali Tour Packages from Chennai | Best Travel Agency in Chennai",
    subtitle: "Bali Tour Packages from Chennai",
    duration: "6 Days 5 Nights",
    description: "Enjoy your holidays, take a relaxing vacation to Bali! Book now and experience the beautiful island of Bali.",
    price: "20,825",
    imageUrl: "https://example.com/bali-tour.jpg"
  },
  {
    id:1,
    title: "Bali Trip with Capstone Holidays",
    subtitle: "Explore Bali with Capstone",
    duration: "6 Days 5 Nights",
    description: "Welcome to Swiss-Belexpress Kuta Legian, your ultimate destination for a relaxing holiday in Bali.",
    price: "19,635",
    imageUrl: "https://example.com/capstone-bali-tour.jpg"
  },
  {
    id:2,
    title: "Bali Adventure Tour",
    subtitle: "Exciting Adventure Activities",
    duration: "5 Days 4 Nights",
    description: "Experience adventure in Bali with thrilling activities including trekking, snorkeling, and more!",
    price: "18,300",
    imageUrl: "https://example.com/adventure-tour.jpg"
  },
  {
    id:3,
    title: "Bali Family Tour",
    subtitle: "Family Fun in Bali",
    duration: "7 Days 6 Nights",
    description: "Bring the whole family for a fun-filled holiday in Bali with activities for all ages.",
    price: "22,000",
    imageUrl: "https://example.com/family-tour.jpg"
  },
  {
    id:4,
    title: "Bali Luxury Tour",
    subtitle: "Luxurious Vacation in Bali",
    duration: "8 Days 7 Nights",
    description: "Enjoy Bali in style with our luxury tour package, featuring exclusive stays and premium services.",
    price: "40,000",
    imageUrl: "https://example.com/luxury-tour.jpg"
  }
];

const Bali = () => {
  return (
    <div>
      <ContentSection
        title="Content Area"
        backgroundImage="path/to/your/content-background.jpg"
      >
        This is some content below the header.
      </ContentSection>
      <section className="destination-page">
        <Row gutter={[32, 32]} justify="center">
          {/* Left column for Tour Cards */}
          <Col xs={16} sm={16} md={16} lg={16}>
          
            <Row gutter={[16, 24]}>
              {tourPackages.map((tour, index) => (
                <Col
                  key={index}
                  xs={24} // Full width on mobile
                  sm={24} // Full width on small devices
                  md={12} // Two cards per row on medium devices
                  lg={24} // Two cards per row on large devices
                  xl={24}  // Three cards per row on extra large devices
                >
                 <TourCard
            key={tour.id}
            title={tour.title}
            subtitle={tour.subtitle}
            duration={tour.duration}
            description={tour.description}
            price={tour.price}
            imageUrl={tour.imageUrl}
            id={tour.id} // Pass the id here
          />
                </Col>
              ))}
            </Row>
          </Col>

          {/* Right column for "Why Book With Us?" */}
          <Col xs={24} sm={8} md={8} lg={8}>
            <div className="why-book-with-us">
              <h2>Why Book With Us?</h2>
              <ul>
                <li>No-hassle best price guarantee</li>
                <li>Customer care available 24/7</li>
                <li>Hand-picked Tours & Activities</li>
                <li>Free Travel Insurance</li>
              </ul>
              <div className="contact-info">
              
                <h3>Have Questions?</h3>
                <p>Contact us at:</p>
                <p><strong>Phone:</strong> +123 456 7890</p>
                <p><strong>Email:</strong> info@bali-tours.com</p>
              </div>
            </div>
          </Col>
        </Row>
      </section>
    </div>
  );
};

export default Bali;
