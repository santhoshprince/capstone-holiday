import React from "react";
import TourList from "../components/dubaicard";
import Sidebar from "../components/sidebar";
import Contentsection from "../components/contentbg";
import Dubai from "../components/tourdescription";
import Balidesc from "../img/bg/d1.jpg";
import FAQ from "../components/Faq";
import bg1 from "../img/bg/d3.jpg";
import { Helmet } from 'react-helmet';

const DubaiPage = () => {
  const faqDubai = [
    {
        question: 'Which is the busiest month to visit Dubai?',
        answer: "January, February, and November till April are the best months to visit Dubai."
    },
    {
        question: 'How much is the initial charge of a Dubai Holiday Package from Chennai?',
        answer: "Dubai Holiday Package from Chennai starts from around INR 32,000 and can vary based on the trip length."
    },
    {
        question: 'Can customers customize the Dubai Holiday Package at Capstone Holidays?',
        answer: "Yes. We design the Dubai tour packages with utmost care, putting the customer's comfort and taste first, and hence our holiday packages are customizable."
    },
    {
        question: 'Are the prominent tourist places covered in our Dubai trip?',
        answer: "Our Dubai Holiday Package from Chennai covers almost all the major tourist attractions in the city like Burj Khalifa, Underwater Zoo, The Dubai Aquarium, Burj Al Arab, Global Village, The Dubai Miracle Garden, and many more."
    },
    {
        question: 'How to clear the visa procedures for a Dubai trip?',
        answer: "Please get in contact with Capstone Holidays, our Dubai trip planner, for a thorough explanation of the visa application process. Obtaining the necessary visas for your international travel is entirely our team's responsibility."
    }
];

  return (
    <>
     <Helmet>
        <title>Best places to visit on your Dubai Tour | Best Places to Visit in Dubai</title>
        <meta name="keywords" content="dubai tour, best places to visit in dubai, dubai international tour, dubai tour package in coimbatore" />
        <meta name="description" content="Take a Dubai tour from Chennai to make the most of your visit to the city's tourist attractions and sightseeing spots." />
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org/",
            "@type": "WebSite",
            "name": "Capstone Holidays",
            "url": "https://www.capstoneholidays.in/dubai-tour/",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://www.capstoneholidays.in/dubai-tour/{search_term_string}",
              "query-input": "required name=search_term_string"
            }
          }
          `}
        </script>
      </Helmet>
      <Contentsection heading={"Dubai Tour"} children={"Destination"} backgroundImage={bg1} />

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
                  <Dubai
                    title="Explore Dubai"
                    description="Take a Dubai tour from Chennai to make the most of your visit to the city's tourist attractions and sightseeing spots. The best places to visit in Dubai are its majestic skyscrapers, rich historical legacy, enormous desert dunes, radiant white sand beaches, thrilling adventure sports, thrilling theme parks, wealthy retail complexes, and more. Dubai international tour is for thrill-seekers seeking an exciting vacation. Often referred to as the Venice of the Gulf, Dubai serves as the primary port and commercial centre of the United Arab Emirates. The best time to maximise the value of your dubai tour package in coimbatore is from November to March"
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
            <FAQ faqData={faqDubai} />
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default DubaiPage;
