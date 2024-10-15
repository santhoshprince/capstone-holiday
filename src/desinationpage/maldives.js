import React from "react";
import TourList from "../components/maledivescard";
import Sidebar from "../components/sidebar";
import Contentsection from "../components/contentbg";
import Maldives from "../components/tourdescription";
import Balidesc from "../img/tour/99.jpg";
import FAQ from "../components/Faq";
import bg1 from "../img/bg/6.jpg";


const TourPage = () => {
  const faqMaldives = [
    {
        question: 'Tell us about the perfect season for a Maldives honeymoon trip.',
        answer: "If you are a summer lover, immediately book a flight to Maldives, since tropical summer is the perfect time to visit and enjoy all that the island possesses to offer."
    },
    {
        question: 'How many days is the Maldives honeymoon trip scheduled?',
        answer: "Although you can easily stay longer to enjoy the sunlight, a week should be more than enough to see the stunning island."
    },
    {
        question: 'How to land in Maldives?',
        answer: "Our Maldives Tour Package from Chennai takes you to the Maldives by either flight or a cruise. From the port, certain modes of transportation are accessible to you to get to your destination safely, like domestic airplanes and seaplanes."
    },
    {
        question: 'How to clear the visa procedures for the Maldives Tour Package from Chennai?',
        answer: "You will need to have acceptable travel documentation, such as a passport, hotel bookings, and confirmed return tickets. A 30-day tourist visa is available for application at Male Airport and can also be extended for up to 90 days."
    },
    {
        question: 'How to travel within the Maldives?',
        answer: "We customize your Maldives Honeymoon Trip and Maldives Tour Package from Chennai as a budget-friendly trip. Since everything in the Maldives is accessible by foot, you may wander down the white sand beach and become fascinated with its splendour."
    }
];

  return (
    <>
      <Contentsection heading={"Maldives Tour"} children={"Destination"} backgroundImage={bg1} />

      <section className="space">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-lg-7">
              <div className="tab-content" id="nav-tabContent">
                <div
                  className="tab-pane fade active show"
                  id="tab-grid"
                  role="tabpanel"
                >
                  <TourList />
                  <Maldives
                    title="Explore Maldives"
                    description="Escape to the breathtaking paradise of the Maldives, where crystal-clear waters meet pristine white-sand beaches. Our Maldives Tour Packages are designed for travelers seeking luxury, relaxation, and adventure in one of the world's most beautiful destinations."
                    imageUrl={Balidesc}
                  />
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-lg-5">
              <Sidebar />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
            <h1 className="text-center mt-5">Frequently Asked Questions</h1>
            <FAQ faqData={faqMaldives} />
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default TourPage;
