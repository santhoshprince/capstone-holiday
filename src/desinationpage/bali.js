import React from "react";
import TourList from "../components/tourlist";
import Sidebar from "../components/sidebar";
import Contentsection from "../components/contentbg";
import BaliDescription from "../components/tourdescription";
import FAQ from "../components/Faq";
import Balidesc from "../img/tour/358.jpg";
import bg1 from "../img/bg/contact_bg_7.jpg";

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
                    description="A Bali tour offers an unforgettable journey through one of Indonesia's most enchanting islands. Explore Bali's breathtaking beaches, such as Kuta, Seminyak, and Nusa Dua, where you can relax on golden sands, surf world-class waves, or indulge in luxurious resorts. Venture inland to the cultural heart of Ubud, where terraced rice paddies, art markets, and ancient temples like the iconic Uluwatu Temple await. Experience Bali's rich traditions through captivating dance performances, temple ceremonies, and local crafts."
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
