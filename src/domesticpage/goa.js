import React from "react";
import TourList from "../components/card/goa";
import Sidebar from "../components/sidebar";
import Contentsection from "../components/contentbg";
import GoaDescription from "../components/tourdescription";
import Balidesc from "../img/goa/2.jpg";
import FAQ from "../components/Faq";
import bg1 from "../img/goa/9.jpg";

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
      <Contentsection
        heading={"Goa Tour"}
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
                  <GoaDescription
                    title="Explore Goa"
                    description="Discover the vibrant beauty of Goa, India’s premier beach destination. Known for its stunning coastlines, rich culture, and lively nightlife, Goa offers something for everyone. Relax on the golden sands of popular beaches like Baga and Calangute, or explore the tranquil shores of Palolem and Agonda.

Indulge in Goa's unique cuisine, featuring fresh seafood and local flavors. Visit historical sites such as the Basilica of Bom Jesus and the stunning forts overlooking the Arabian Sea. Experience the lively markets, vibrant nightlife, and the warm hospitality of the locals.

Engage in exciting water sports, including parasailing, jet skiing, and scuba diving, or unwind with a peaceful yoga session on the beach. Whether you're looking for adventure, relaxation, or cultural experiences, a tour of Goa promises unforgettable memories in this tropical paradise."
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
