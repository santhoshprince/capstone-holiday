import React from "react";
import TourList from "../components/card/kerala";
import Sidebar from "../components/sidebar";
import Contentsection from "../components/contentbg";
import HimachalDescription from "../components/tourdescription";
import Balidesc from "../img/kerala/13.jpg";
import FAQ from "../components/Faq";
import bg1 from "../img/kerala/17.jpg";
import { Helmet } from 'react-helmet';

const HimchalTour = () => {
  const faqKerala = [
    {
        question: 'Why do tourists from India celebrate Kerala the most?',
        answer: "Many families and senior citizens celebrate Kerala for its vibrant culture and tradition. It’s also the most favorite honeymoon destination in India because it's easily accessible by all modes of transport and for its budget-friendly resorts and accommodations. The Western Ghats gives a pleasant climate throughout the year and becomes a romantic escape. So, book Kerala honeymoon packages and Kerala Holiday Packages at the peak season time to get drenched in the beauty of its backwaters and blissful climate."
    },
    {
        question: 'How to reach Kerala?',
        answer: "Kerala has good transportation infrastructure in India. Additionally, the road network is well-laid to nearby states like Karnataka, Andhra Pradesh, and Tamil Nadu. Rail and flight transports are also the best means to reach Kerala. All of the locations included in our Kerala Group Tour Package, Kerala Family Tour Package, and Kerala tour packages from Chennai are easily accessible by road, rail, or aeroplane."
    },
    {
        question: 'Name some beaches in Kerala?',
        answer: "The best and clean beaches in Kerala include Kovalam beach, Varkala beach, Kappad beach, Cherai beach, Marari beach, Bekal beach, Alleppey beach, and Fort Kochi beach."
    },
    {
        question: 'Which Keralan hillsides are the most romantic for a honeymoon?',
        answer: "Munnar, Thekkady, Wayanad, and Kumarakom are the beautiful hill stations of Kerala. Check our Munnar Tour Package and Wayanad Trip Package to get more fascinating deals for accommodation and travel offers."
    },
    {
        question: 'What are the famous foods to try in Kerala?',
        answer: "The majority of people in the nation love Kerala's distinct non-vegetarian flavor and variety of vegetarian dishes. Meat, seafood, and vegetable dishes cooked in coconut oil are the famous dishes in Kerala. Check our Kerala tour packages for family and Kerala Group Tour Package to know more about Kerala lifestyle and cuisines."
    },
    {
        question: 'How many days are sufficient for a Kerala trip?',
        answer: "Our Kerala Tours and Packages cover a trip to the must-visit destinations in Kerala in a week."
    }
];

  return (
    <>
    <Helmet>
        <title>Book Your Munnar Trip Now with our Kerala Tour Packages | Book Your Munnar Trip Now</title>
        <meta name="keywords" content="kerala tour, book your munnar trip now, kerala and munnar tour, munnar tour, munnar tour package" />
        <meta name="description" content="Our Kerala tour from Chennai covers the Kerala honeymoon trip and the Kerala family trip to the must-visit beaches, hill stations, and backwaters in a week." />
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org/",
            "@type": "WebSite",
            "name": "Capstone Holidays",
            "url": "https://www.capstoneholidays.in/kerala-tour/",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://www.capstoneholidays.in/kerala-tour/{search_term_string}",
              "query-input": "required name=search_term_string"
            }
          }
          `}
        </script>
      </Helmet>
      <Contentsection heading={"Kerala"} children={"Destination"} backgroundImage={bg1} />

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
                    title="Explore Kerala"
                    description="Our Kerala tour from Chennai covers the Kerala honeymoon trip and the Kerala family trip to the must-visit beaches, hill stations, and backwaters in a week. Many families and senior citizens celebrate Kerala for its vibrant culture and tradition. The Western Ghats gives a pleasant climate throughout the year and becomes a romantic escape. So, book your Munnar trip now at the peak season time to get drenched in the beauty of its backwaters and blissful climate. We have selected the best Munnar tour package to add more particular touches to endless tea estates and slopes with delectable cuisines to your Munnar tour. Our Kerala and Munnar tour takes you to a gorgeous location with endless tea estates and immaculate slopes that are ideal for a romantic honeymoon.  "
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
            <FAQ faqData={faqKerala} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HimchalTour;
