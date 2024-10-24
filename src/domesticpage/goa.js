import React from "react";
import TourList from "../components/card/goa";
import Sidebar from "../components/sidebar";
import Contentsection from "../components/contentbg";
import GoaDescription from "../components/tourdescription";
import Balidesc from "../img/goa/2.jpg";
import FAQ from "../components/Faq";
import bg1 from "../img/goa/9.jpg";
import { Helmet } from 'react-helmet';

const Andaman = () => {
  const faqGoa = [
    {
      question: "Which season in Goa is usually the busiest?",
      answer:
        "The last and early months of the year are when the majority of people want to travel to Goa.",
    },
    {
      question: "Why does positive energy constantly seem to flow through Goa?",
      answer:
        "This region is renowned for its churches, party culture, and beaches. Here, you might find vibrant churches and stunning beaches. Goa is the ideal merge of Indian and Portuguese cultures. People come here to enjoy the world-class parties, cuisines, and sunsets.",
    },
    {
      question: "What are the most admired Goa Tour Places to Visit?",
      answer:
        "The popular Goa Tour Places to Visit are Palolem Beach, Panaji, Vagator, Agonda, Calangute, Candolim, Anjuna, North Goa, and South Goa.",
    },
    {
      question:
        "How much is the approximate price for the Goa Tour Package From Chennai?",
      answer:
        "The price of the Goa Tour Package From Chennai can start from ₹9,500 to ₹29,500, based upon the itinerary's duration and package style.",
    },
    {
      question: "Can you customize Goa Tour Packages For Couples for us?",
      answer:
        "Yes, definitely! All of our tour packages are customizable based on the customer’s choice and trip style.",
    },
    {
      question: "How to choose the best Goa Tours and Packages?",
      answer:
        "The best Goa Tours and Packages will provide you with the greatest lodging and a wide range of sites to see. The best Goa tours and packages will leave you with amazing memories and be reasonably priced.",
    },
    {
      question: "How many beaches are covered in Goa Travel Packages?",
      answer:
        "Almost all the popular beaches are covered in our Goa Travel Packages. Some of them are Candolim Beach, Sinquerim Beach, Arambol Beach, Morjim Beach, Miramar Beach, Ashwem Beach, Mandrem Beach, Kalacha Beach, Dona Paula Beach, Vagator Beach, and Anjuna Beach.",
    },
  ];

  return (
    <>
     <Helmet>
        <title>Book your Goa Tour at Capstone Holidays | Book Your Goa Tour @ Capstone</title>
        <meta name="keywords" content="goa tour, goa tour packages for 4 person, dolphin tour goa, goa tour packages for couple, goa tour guide" />
        <meta name="description" content="The greatest time to look for discounts on Goa Tour From Chennai rates is during the summer when you can explore its greatest beaches." />
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org/",
            "@type": "WebSite",
            "name": "Capstone Holidays",
            "url": "https://www.capstoneholidays.in/goa-tour/",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://www.capstoneholidays.in/goa-tour/{search_term_string}",
              "query-input": "required name=search_term_string"
            }
          }
          `}
        </script>
      </Helmet>
      <Contentsection
        heading={"Goa Tour"}
        children={""}
        backgroundImage={bg1}
      />

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
                  <GoaDescription
                    title="Explore Goa"
                    description="The greatest time to look for discounts on Goa Tour From Chennai rates is during the summer when you can explore its greatest beaches. Our Goa tour packages for 4 person show Goa's exciting nightlife and lively parties have made it the ideal location for travelers who want to party. We advise scheduling your dolphin tour Goa vacation between November and February if you're seeking the best time to go. Goa tour packages for couple is endowed with some of India's greatest shorelines, from Calangute to Palolem and Candolim. If you are a party lover and you are in North Goa, Anjuna and Baga are great. However, South Goa has the most isolated beaches that provide couples seeking a peaceful stroll on a romantic evening with a calm and soothing ambiance. Contact our Goa tour guide to get more details about Goa honeymoon packages. "
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
              <FAQ faqData={faqGoa} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Andaman;
