import React from "react";
import TourList from "../components/tourlist";
import Sidebar from "../components/sidebar";
import Contentsection from "../components/contentbg";
import BaliDescription from "../components/tourdescription";
import FAQ from "../components/Faq";
import Balidesc from "../img/tour/358.jpg";
import bg1 from "../img/bg/contact_bg_7.jpg";
import { Helmet } from 'react-helmet';


const TourPage = () => {
  const faqBali = [
    {
        question: 'When is Bali admired the most?',
        answer: "When it's pleasant and not too rainy, April through November is the ideal time of year to visit Bali. Busy seasons are June to August. Check out Bali Tours and Packages, Bali Tour Packages for Couples, and Bali Indonesia Package, and get drenched in the beauty of Bali in these seasons."
    },
    {
        question: 'What are the Bali sightseeing places included in Bali honeymoon packages?',
        answer: "Major tourist attractions included in Bali Honeymoon Packages and Bali Couple Packages are Jimbaran Beach, Bingin Beach, Suluban Beach, Padang-Padang Beach, Uluwatu, and Mount Batur."
    },
    {
        question: 'How many days are covered for the trip by the Bali Island Tour Package?',
        answer: "Our Bali Island Tour Package and Bali Indonesia Package cover prominent destinations in Bali within a week."
    },
    {
        question: 'How to land in Bali?',
        answer: "You can board any international flight from your location to land in Bali and be accommodated right away in Bali tour places. Check our Bali Tour Packages from Chennai to learn more about transport information to and from Bali in our Bali tour package from Chennai."
    },
    {
        question: 'Which resort is recommended to stay in Bali with friends?',
        answer: "Our Bali Group Tour Package and Bali Trip Package always recommend Six Senses Uluwatu resorts to have the best tourist experience with friends. It's located near the beach and you can very much enjoy the sea view with your group."
    },
    {
        question: 'How much does the Bali Trip Package cost?',
        answer: "The Bali trip package is completely customizable. You can choose your travel and trip length as per your budget and commitments. Contact our Bali tour planner at Capstone Holidays immediately to customize your Bali trip right now!"
    }
];

  return (
    <>
     <Helmet>
        <title>Book Your Bali Tour at Capstone Holidays</title>
        <meta name="keywords" content="bali tour, bali indonesia tour package, bali tour packages Chennai, bali tour from coimbatore" />
        <meta name="description" content="Capstone Holidays are fully equipped to give you a Bali tour from India with an excellent value for your money." />
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org/",
            "@type": "WebSite",
            "name": "Capstone Holidays",
            "url": "https://www.capstoneholidays.in/bali-tour/",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://www.capstoneholidays.in/bali-tour/{search_term_string}",
              "query-input": "required name=search_term_string"
            }
          }
          `}
        </script>
      </Helmet>
      <Contentsection heading={"Bali"} children={"Destination"} backgroundImage={bg1}/>

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
                  <BaliDescription
                    title="Explore Bali"
                    description="Bali tours from Chennai vary in price depending on the package you select and the length of your stay. With reasonably priced Bali Indonesia tour packages that are customized to your preferences and budget, Capstone Holidays guarantees a wonderful and exciting escape. Also, we provide a selection of Bali tour packages from Chennai, and Bali tour from Coimbatore based on your intended stay's length and price."
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
            <FAQ faqData={faqBali} />
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default TourPage;
