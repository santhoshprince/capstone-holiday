import React from "react";
import TourList from "../components/card/kashmir";
import Sidebar from "../components/sidebar";
import Contentsection from "../components/contentbg";
import KashmirDescription from "../components/tourdescription";
import Balidesc from "../img/kashmir/4.jpg";
import FAQ from "../components/Faq";
import bg1 from "../img/kashmir/9.jpg";
import { Helmet } from "react-helmet";

const KashmirTour = () => {
  const faqKashmir = [
    {
      question: "When is Kashmir most celebrated by tourists?",
      answer:
        "Most of the tourists celebrate Kashmir throughout the year, yet spring and winter are the best times to go. Kashmir starts springing in March and ends May. It's the most loved time for tourists. Actual Kashmir climate is from November through January and is the perfect time to visit Kashmir. Our Jammu Kashmir Tour Package and Kashmir tour packages from Chennai are well designed for you to witness this natural snow wonder on an affordable budget.",
    },
    {
      question: "What are the places that are most loved in Kashmir?",
      answer:
        "Our Kashmir family tour package takes you to famous tourist spots like Gulmarg, Sonmarg, Pahalgam, and Srinagar.",
    },
    {
      question: "How will you land in Kashmir?",
      answer:
        "There are good road, rail, and aviation connections in Kashmir. You can arrive at Srinagar's International Airport from anywhere in India. The most recognized Jammu Tawi express train carries thousands of tourists to Kashmir each year from the southernmost point of India. Road access to Kashmir is also good, with several private and public buses traveling there and back regularly. Our Kashmir tour packages from Chennai and Kashmir Trip Package take care of your trip completely right from arrival till the end of the tour.",
    },
    {
      question: "How to travel within Kashmir?",
      answer:
        "Since there is only road connectivity to locations outside of Srinagar, Jammu Kashmir Travel and Tourism provides public buses or private taxis if you want to travel within Kashmir. To guarantee that you travel in comfort and elegance, Capstone Holidays offers all-inclusive Kashmir honeymoon packages and Srinagar Tour Packages that include transport and transfer arrangements.",
    },
    {
      question: "What are the mouthwatering local foods in Jammu Kashmir?",
      answer:
        "This nature’s paradise, local foods are very interesting and mouthwatering. Both of its vegetarian and non-vegetarian cuisines are truly lip-smacking. Some of its popular foods are Goshtaba, Mutton Roghan Josh, Kahwa, Kashmiri Wazwan, Dum Aloo, Khambir, Modur Pulav, and Lyodur Tschaman. Book our Kashmir family tour packages and enjoy the memorable and tastiest retreat of Kashmir.",
    },
    {
      question: "How much do the Kashmir family tour packages cost?",
      answer:
        "Our Kashmir family tour packages begin at around Rs. 27,000 (for 6 nights and 7 days) and can be customised to your specific needs.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Book Kashmir Tour at Capstone Holidays | Chennai</title>
        <meta
          name="keywords"
          content="kashmir tour, cheapest tour packages for kashmir, kashmir family tour, kashmir trip, kashmir tour plan"
        />
        <meta
          name="description"
          content="We provide a Kashmir tour from Chennai so you may enjoy some regions like Gulmarg, Sri Nagar, Pahalgam, and Sonmarg in the springtime."
        />
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org/",
            "@type": "WebSite",
            "name": "Capstone Holidays",
            "url": "https://www.capstoneholidays.in/kashmir-tour/",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://www.capstoneholidays.in/kashmir-tour/{search_term_string}",
              "query-input": "required name=search_term_string"
            }
          }
          `}
        </script>
      </Helmet>
      <Contentsection
        heading={"Kashmir"}
        children={"Destination"}
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
                  <KashmirDescription
                    title="Explore Kashmir"
                    description="We provide a Kashmir tour from Chennai so you may enjoy some regions like Gulmarg, Sri Nagar, Pahalgam, and Sonmarg in the springtime. Although a Kashmir trip is worth seeing throughout the year, spring and winter are the best times to go. Every area of Kashmir appears as though it were captured from a painting because of the snow-capped mountain peaks, verdant meadows, nice weather, cascading streams, lakes, and blossoming meadows and landscapes. Our Kashmir tour plan enables you to taste the local cuisine that is very interesting and mouthwatering. To book the cheapest tour packages for Kashmir and Kashmir family tours, contact our tour operator at Capstone Holidays"
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
              <FAQ faqData={faqKashmir} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default KashmirTour;
