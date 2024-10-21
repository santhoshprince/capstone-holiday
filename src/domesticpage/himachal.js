import React from "react";
import TourList from "../components/card/himachal";
import Sidebar from "../components/sidebar";
import Contentsection from "../components/contentbg";
import HimachalDescription from "../components/tourdescription";
import Balidesc from "../img/Himachal/8.jpg";
import FAQ from "../components/Faq";
import bg1 from "../img/Himachal/11.jpg";
import { Helmet } from 'react-helmet';

const HimchalTour = () => {
  const faqShimlaManali = [
    {
        question: 'When is Shimla admired the most?',
        answer: "Winter is the most admired time of year to enjoy snowfall in Shimla. So, our Shimla Manali Tour package from Chennai arranges a Shimla trip in the winter season (April-June)."
    },
    {
        question: 'How to travel within Shimla?',
        answer: "Trekking is the most adventurous activity in this hill station. You can trek, or take public or private buses to travel within Shimla and Manali. Our Kullu Manali Travel Packages also arrange private cabs with trained drivers to travel within this hill station."
    },
    {
        question: 'Name the mighty waterfalls in Manali.',
        answer: "Our Manali Holiday Package covers all the beautiful and mighty waterfalls of Manali such as Rozy waterfalls, Jogini waterfalls, Rahala waterfalls, Knoi waterfalls, and Jana waterfalls."
    },
    {
        question: 'What are the most romantic spots included in Shimla Manali honeymoon packages?',
        answer: "Some honeymoon destinations in Manali are Solang Valley, Beas Kund, Gulaba, Van Vihar, Rohtang Pass, and Jogini waterfalls."
    },
    {
        question: 'How to land in Manali?',
        answer: "In general, Manali has an airport. You can land in Manali airport from your boarding place. Chandigarh and Ambala are the other closest train stations to Manali. Our Shimla Manali Group Tour packages and Shimla Manali Tour package from Chennai take care of all your transport facilities within and outside Shimla and Manali."
    },
    {
        question: 'What are the most admired tourist destinations in Himachal Pradesh that are offered in Group Tours To Himachal Pradesh?',
        answer: "Shimla, Manali, Dalhousie, Chamba, and Kasauli are the most admired tourist places that our Himachal Pradesh Tour Package offers to visit in Himachal Pradesh."
    },
    {
        question: 'When will the weather in Himachal Pradesh be gloomy and good?',
        answer: "Wintertime, from October to January, is the best time to see snow and enjoy winter activities. The greatest season for a reasonably priced Himachal Tour Package is during the monsoon, which runs from July to October."
    },
    {
        question: 'What are the adventure activities that are covered in the Himachal Pradesh Tour and Kullu Manali Travel Packages?',
        answer: "Kayaking, Trekking, White-water rafting, and Hot air balloon flying are the best adventure activities covered with our Himachal Pradesh Tour Package, and Shimla Manali Tour Package from Chennai and Kullu Manali Travel Packages."
    }
];

  return (
    <>
      <Helmet>
        <title>Plan a Himachal Tour with our Himachal Pradesh Tour Plan | Himachal Pradesh Tour Plan</title>
        <meta name="keywords" content="himachal tour, himachal pradesh tour plan, himachal tourist places, himachal tour itinerary" />
        <meta name="description" content="The greatest season for a reasonably priced Himachal Tour Package is during the monsoon, which runs from July to October." />
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org/",
            "@type": "WebSite",
            "name": "Capstone Holidays",
            "url": "https://www.capstoneholidays.in/himachal-tour/",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://www.capstoneholidays.in/himachal-tour/{search_term_string}",
              "query-input": "required name=search_term_string"
            }
          }
          `}
        </script>
      </Helmet>
      <Contentsection heading={"Himachal"} children={"Destination"} backgroundImage={bg1}/>

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
                  <HimachalDescription
                    title="Explore Himachal"
                    description="The greatest season for a reasonably priced Himachal Tour Package is during the monsoon, which runs from July to October. Shimla, Manali, Dalhousie, Chamba, and Kasauli are the most admired tourist places that our Himachal Pradesh Tour Plan offers to visit in the Himachal Tour itinerary. Wintertime, from October to January, is the best time to see snow and enjoy winter activities. Kayaking, Trekking, White-water rafting, and Hot air balloon flying are the best adventure activities in Himachal tourist places that are covered with our Himachal Pradesh Tour Package."
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
      </section>
      <div className="container">
          <div className="row">
            <div className="col-lg-12">
            <h1 className="text-center mt-5">Frequently Asked Questions</h1>
            <FAQ faqData={faqShimlaManali} />
            </div>
          </div>

        </div>
    </>
  );
};

export default HimchalTour;
