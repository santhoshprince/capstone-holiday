import React from "react";
import TourList from "../components/card/vietnam";
import Sidebar from "../components/sidebar";
import Contentsection from "../components/contentbg";
import Vietnam from "../components/tourdescription";
import Balidesc from "../img/tour/358.jpg";
import FAQ from "../components/Faq";

const mauritius = () => {
  const faqVietnamCambodia = [
    {
        question: 'How do you clear the visa procedures for traveling to Vietnam?',
        answer: "It would be best if you had an Indian passport for the visa application procedure, and further actions will be taken by our Capstone Holidays tours and travels agency for your Vietnam trip. Our Vietnam and Cambodia tour package in Capstone Holidays tours and travel agency assists you throughout this procedure."
    },
    {
        question: 'Why should I visit Vietnam?',
        answer: "Visit Vietnam to explore the astonishing natural scenery, stunning beaches and highlands, blue waters in the south, rice terraces, and the breathtaking waterfalls in the north. Our Vietnam Cambodia tour package covers these natural wonders during the Vietnam Cambodia trip."
    },
    {
        question: 'What are the places that are covered in Vietnam group tour packages?',
        answer: "There are countless chances to be astounded everywhere you go, from the far North to the deep South. In addition to the enchanting Ha Long Bay, the imposing Hue, the magical Ho Chi Minh City, and the romantic Hoi An, there are many more must-see locations considered when organizing your journey for Vietnam group tour packages and the Vietnam and Cambodia tour package."
    },
    {
        question: 'When is the best season to visit Vietnam with the Vietnam Cambodia tour package?',
        answer: "November through April is the ideal time of year to travel to Vietnam. There are regional differences in Vietnam's weather; May through October is hot and humid with lots of rain in Hanoi and the north, while November through April is colder and drier. December and January can be especially cold in northern Vietnam."
    },
    {
        question: 'What is the most yummy food in Vietnam?',
        answer: "Pho is the most desired and delicious food in Vietnamese cuisine."
    },
    {
        question: 'How to travel within Vietnam?',
        answer: "The main cities of Vietnam, such as Da Nang, Hanoi, and Ho Chi Minh City (Saigon), have well-connected airports domestically and globally. Local buses also run through all places like Hanoi, Hue, Hoi An, Nha Trang, Da Lat, Mui Ne, and Ho Chi Minh City."
    }
];

  return (
    <>
      <Contentsection heading={"Vietnam Tour"} children={"Destination"} />

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
                  <Vietnam
                    title="Vietnam and Cambodia"
                    description="Embark on an unforgettable journey through the stunning landscapes, rich cultures, and historical treasures of Vietnam and Cambodia. This tour offers a perfect blend of natural beauty and ancient heritage, showcasing the best each country has to offer"
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
            <FAQ faqData={faqVietnamCambodia} />
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default mauritius;
