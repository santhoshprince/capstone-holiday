import React from "react";
import TourList from "../components/card/mauritius";
import Sidebar from "../components/sidebar";
import Contentsection from "../components/contentbg";
import Mauritius from "../components/tourdescription";
import Balidesc from "../img/mauritius/2.jpg";
import FAQ from "../components/Faq";
import bg1 from "../img/mauritius/1343.jpg";
import { Helmet } from 'react-helmet';



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
     <Helmet>
        <title>Go on a Mauritius Tour with Friends and Family. | Group and Family Tour Package</title>
        <meta name="keywords" content="mauritius tour, mauritius tour cost, north island tour mauritius, south island tour mauritius, mauritius tour from coimbatore" />
        <meta name="description" content="The highly customized Mauritius Tour From Chennai serves a wide range of Capstone Holidays' customers." />
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org/",
            "@type": "WebSite",
            "name": "Capstone Holidays",
            "url": "https://www.capstoneholidays.in/mauritius-tour/",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://www.capstoneholidays.in/mauritius-tour/{search_term_string}",
              "query-input": "required name=search_term_string"
            }
          }
          `}
        </script>
      </Helmet>
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
                    description="The highly customized Mauritius Tour from Chennai serves a wide range of Capstone Holidays' customers. The Republic of Mauritius, which is the perfect honeymoon beach destination, is located in the Indian Ocean. A week is more than enough to thoroughly experience Mauritius's radiant beaches and resorts, which are accessible throughout the whole year. Book our Mauritius tour from Coimbatore to visit North island tour Mauritius, and South island tour Mauritius. Check our tour operator to know about the Mauritius tour cost"
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
