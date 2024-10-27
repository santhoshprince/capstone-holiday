import React from "react";
import TourList from "../components/card/singapore";
import Sidebar from "../components/sidebar";
import Contentsection from "../components/contentbg";
import Singapore from "../components/tourdescription";
import Balidesc from "../img/singapore/s3.jpg";
import FAQ from "../components/Faq";
import bg1 from "../img/singapore/s2.jpg";
import { Helmet } from 'react-helmet';

const mauritius = () => {
  const faqSingaporeMalaysia = [
    {
        question: 'Why is Singapore the most visited foreign tourist destination?',
        answer: "Singapore is an all-around romantic escape for couples due to its tropical atmosphere. Singapore is a traveler's paradise, especially during the January New Year, the big shopping festival from June to August, and the mid-autumn festival in October. Whatever the season, we guarantee an affordable, unforgettable vacation experience with our Singapore and Malaysia Tour Packages."
    },
    {
        question: 'What are the most crowded tourist places in Singapore?',
        answer: "Sentosa Island, Gardens by the Bay, Marina Bay, Henderson Bridge, Jurong Bird Park, and Universal Studios are the most visited and crowded tourist destinations in Singapore. Check our Singapore Malaysia Tour Packages from Chennai to learn fascinating details about Singapore and Malaysia."
    },
    {
        question: 'Which tourist destination in Malaysia attracts more tourists?',
        answer: "Kuala Lumpur, Batu Caves, Mount Kinabalu, Sipadan Island, Pantai Cenang beach, and Desaru beach are the most admired tourist destinations in Malaysia. Check our Singapore Malaysia Tour Packages from Chennai to get to know fascinating details about Singapore and Malaysia."
    },
    {
        question: 'When are Singapore and Malaysia admired the most?',
        answer: "November to May is when Malaysia is most admired. During this month, which is favorable for tourism, our Singapore and Malaysia Tour Packages organise trips to both Singapore and Malaysia. Singapore can be visited and enjoyed throughout the year. Hence, plan a Singapore Malaysia group tour during these months to experience the ultimate adventurous and fun trip."
    },
    {
        question: 'What is the price of Singapore Malaysia Tour Packages from Chennai?',
        answer: "The Singapore and Malaysia Tour Packages are completely customizable. You can choose your travel and trip length as per your budget and commitments. Contact our Singapore and Malaysia tour planner at Capstone Holidays immediately to customize your Singapore and Malaysia Tour Packages and Singapore Malaysia Tour Packages from Chennai right now!"
    }
];

  return (
    <>
     <Helmet>
     <title>Book Singapore Malaysia Tour from Capstone Holidays | Book Your Trip Now</title>
        <meta name="keywords" content="singapore malaysia tour, singapore and malaysia tour, singapore tour, malaysia tour" />
        <meta name="description" content="Explore the beauty of Singapore Malaysia Tour from India and enjoy the major destinations of Singapore and Malaysia. Let’s travel to make life easier!" />
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org/",
            "@type": "WebSite",
            "name": "Capstone Holidays",
            "url": "https://www.capstoneholidays.in/singapore-malaysia-tour/",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://www.capstoneholidays.in/singapore-malaysia-tour/{search_term_string}",
              "query-input": "required name=search_term_string"
            }
          }
          `}
        </script>
      </Helmet>
      <Contentsection heading={"Singapore & Malaysia Tour"} children={""} backgroundImage={bg1} />

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
                  <Singapore
                    title="Explore Singapore and Malaysia"
                    description="Singapore and Malaysia Tour is the best example for all-around romantic and entertaining escape for couples. Take a Singapore and Malaysia tour and visit Singapore tour places like Sentosa Island, Gardens by the Bay, Marina Bay, Henderson Bridge, Jurong Bird Park, and Universal Studios. The Malaysia tour includes visits to Kuala Lumpur, Batu Caves, Mount Kinabalu, Sipadan Island, Pantai Cenang beach, and Desaru beach."
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
            <FAQ faqData={faqSingaporeMalaysia} />
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default mauritius;
