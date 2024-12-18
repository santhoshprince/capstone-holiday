import React from "react";
import TourList from "../components/card/srilanka";
import Sidebar from "../components/sidebar";
import Contentsection from "../components/contentbg";
import Singapore from "../components/tourdescription";
import Balidesc from "../img/srilanka/water-fall-4579771_1920.jpg";
import FAQ from "../components/Faq";
import bg1 from "../img/srilanka/sunrise-4823732_1920.jpg";
import { Helmet } from 'react-helmet';

const Srilanka = () => {
  const faqSriLanka = [
    {
        question: 'Why Is Sri Lanka a dreamy destination for a Honeymoon?',
        answer: "Sri Lanka is naturally created as a honeymoon destination for couples, offering a romantic atmosphere with its beaches and evergreen scenic places. You definitely have to check out this renowned historical nation for its amazing culinary style. Our budget-friendly Sri Lanka Tour Package from Chennai is loaded with amenities for guests' comfort and entertainment."
    },
    {
        question: 'Tell us something about the Ramayana Tour Package?',
        answer: "The Ramayana Tour Package, carefully crafted by Capstone Holidays, is great for families and spiritual tourists who like exploring temples and other places of worship. Sri Lanka is a spiritual and historical country that will certainly soothe your hunger for spiritualism."
    },
    {
        question: 'Is the Sri Lanka group tour package customizable?',
        answer: "Generally, Sri Lanka is one of the most reasonably priced and budget-friendly holiday spots in Asia. Our Capstone Holidays trustworthy Sri Lanka group tour packages are customized with complete transparency, prioritizing customer comfort first."
    },
    {
        question: 'Does the Sri Lanka Tour Package from Chennai cover all the honeymoon destinations?',
        answer: "Yes. Our Sri Lanka Honeymoon Package and Sri Lanka Tour Package from Chennai cover well-liked romantic destinations like Nuwara Eliya, Bentota Beach, Colombo, Dambulla, and Kandy."
    },
    {
        question: 'When is the season time in Sri Lanka?',
        answer: "The season time to visit Sri Lanka for a honeymoon is typically from December to April, when you can witness clear days. If you are a lover of rain, Capstone Holidays can also tailor a Sri Lanka Tour Package from Chennai and a Sri Lanka Honeymoon Package to enjoy the monsoon rains beginning in May. Depending on the season and your convenience, you can select a package."
    },
    {
        question: 'How to land in Sri Lanka from Chennai?',
        answer: "You can land in Sri Lanka by taking a flight from Chennai International Terminal. You can choose our Sri Lanka Tour Package from Chennai for a hassle-free and economical trip."
    },
    {
        question: 'How to travel within Sri Lanka?',
        answer: "We offer air-conditioned cars to let you travel within Sri Lanka to various destinations included in your Sri Lanka honeymoon package and provide assured 24/7 support at any stage of your vacation. Everything will be handled by us, including tours and airport transportation."
    }
];

  return (
    <>
    <Helmet>
        <title>Enjoy our Sri Lanka Tour and visit blissful Sri Lanka Tourism | Sri Lanka Tourism</title>
        <meta name="keywords" content="sri lanka tour, sri lanka tourism, srilanka tour, srilanka tour plan, sri lanka itinerary" />
        <meta name="description" content="With our valuable Srilanka Tour from Chennai, experience the historic yet trendy Sri Lanka tourist spots." />
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org/",
            "@type": "WebSite",
            "name": "Capstone Holidays",
            "url": "https://www.capstoneholidays.in/sri-lanka-tour/",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://www.capstoneholidays.in/sri-lanka-tour/{search_term_string}",
              "query-input": "required name=search_term_string"
            }
          }
          `}
        </script>
      </Helmet>
      <Contentsection heading={"Sri Lanka Tour"} children={""} backgroundImage={bg1}/>

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
                    title="Explore Srilanka"
                    description="With our valuable Srilanka Tour from Chennai, experience the historic yet trendy Sri Lanka tourist spots. Sri Lanka Tourism depicts it as a small yet modest country because it boasts eight UNESCO World Heritage Sites, religious sites, many national parks, lush tea estates, and beaches, of course. Sri Lanka tour includes enjoying its nightlife, which is thrilling and colorful where you can enjoy a quick game of chance in a casino or take a gorgeous train journey that passes by plantations and hills. Plan a Sri Lanka tour plan, and Sri Lanka itinerary that has all its top tourist destinations to have a leisure journey"
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
            <FAQ faqData={faqSriLanka} />
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Srilanka;
