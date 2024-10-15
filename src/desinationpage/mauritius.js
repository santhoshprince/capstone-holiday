import React from "react";
import TourList from "../components/card/mauritius";
import Sidebar from "../components/sidebar";
import Contentsection from "../components/contentbg";
import Mauritius from "../components/tourdescription";
import Balidesc from "../img/mauritius/2.jpg";
import FAQ from "../components/Faq";
import bg1 from "../img/mauritius/1343.jpg";


const mauritius = () => {
  const faqMauritius = [
    {
        question: 'When can I visit Mauritius?',
        answer: "The best time to visit Mauritius is throughout the year truly. Blissful weather and a colorful environment make Mauritius entertaining throughout the year. Escape to this romantic trap for a honeymoon with our Mauritius tour for couples package."
    },
    {
        question: 'How many days of the trip are included in the Mauritius Tour Package from Chennai?',
        answer: "To fully explore Mauritius's gorgeous beaches and resorts, a week is more than plenty."
    },
    {
        question: 'How will I land in Mauritius?',
        answer: "Take a Mauritius flight from Chennai and land at Mauritius International Airport. Opting for a vacation cruise is also another best way to reach Mauritius. Our Mauritius Tour Packages from Chennai are carefully planned with all flight travels for a safe trip."
    },
    {
        question: 'Is Surfing included in a Mauritius tour for couples package?',
        answer: "There are many thrilling water activities included in the Mauritius tour for couples package. And, Yes. Surfing is included in our package."
    },
    {
        question: 'How much do you charge for the Mauritius Tour Package From Chennai?',
        answer: "Capstone Holidays' Mauritius Tour Packages and Mauritius Tour Packages From Chennai often start from INR 15,000. Also, contact our tour planner at Capstone Holidays for further customized planning."
    }
];

  return (
    <>
      <Contentsection heading={"Mauritius Tour"} children={"Destination"} backgroundImage={bg1} />

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
                  <Mauritius
                    title="Explore Mauritius"
                    description="Experience the paradise of Mauritius with its pristine beaches, crystal-clear waters, and lush greenery. Relax on white sand shores, explore vibrant coral reefs, and enjoy thrilling water sports. Discover the island’s unique culture, visit botanical gardens, and hike through scenic mountains. A Mauritius tour promises a perfect mix of relaxation, adventure, and natural beauty."
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
            <FAQ faqData={faqMauritius} />
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default mauritius;
