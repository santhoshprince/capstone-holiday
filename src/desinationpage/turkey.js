import React from "react";
import TourList from "../components/card/turkey";
import Sidebar from "../components/sidebar";
import Contentsection from "../components/contentbg";
import Turkey from "../components/tourdescription";
import Balidesc from "../img/tour/358.jpg";
import FAQ from "../components/Faq";

const mauritius = () => {
  const faqTurkey = [
    {
        question: 'What are the famous Turkey Tourist Places?',
        answer: "Must-visit places in Turkey include Istanbul, Bursa, Kemaliye, Ahlat, Hatay, Vize, and many more."
    },
    {
        question: 'Why should I visit Turkey?',
        answer: "Istanbul's timeless appeal can be attributed in great part to its rich historical background. The city was formerly known as Constantinople. It served as the epicenter of several ancient empires. Numerous easily accessible architectural wonders that still stand as a testimony to previous civilizations are located in the city's core."
    },
    {
        question: 'When can I visit Turkey?',
        answer: "The best season to travel to Turkey is during the summer, which extends from April through October."
    },
    {
        question: 'How much are the Turkey Tour Packages From India?',
        answer: "The price of a Turkey tour package from India can change based on the routes, preferred mode of transportation, number of days to stay, and other factors. Turkey Tour Packages are also customizable; hence, call our travel partner to learn more about the fascinating prices for group tours and Turkey Tour Packages for family."
    },
    {
        question: 'What are the visa procedures to travel to Turkey?',
        answer: "A valid visa is required in order to enter Turkey. Obtain exit and entrance stamps. For domestic travel, you need a Turkish entrance stamp. And these visa procedures are taken care of by our Capstone Holidays travel agency for our customers."
    }
];

  return (
    <>
      <Contentsection heading={"Turkey Tour"} children={"Destination"} />

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
                  <Turkey
                    title="Explore Turkey"
                    description="Embark on an unforgettable journey through Turkey, where rich history, stunning landscapes, and vibrant culture await. This tour will take you from the bustling streets of Istanbul to the serene shores of the Mediterranean."
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
            <FAQ faqData={faqTurkey} />
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default mauritius;
