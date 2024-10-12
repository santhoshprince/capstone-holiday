import React from "react";
import TourList from "../components/card/rajasthan";
import Sidebar from "../components/sidebar";
import Contentsection from "../components/contentbg";
import RajasthanTour from "../components/tourdescription";
import Balidesc from "../img/tour/358.jpg";
import FAQ from "../components/Faq";

const RajasthanTours = () => {
  const faqRajasthan = [
    {
        question: 'Are Rajasthan Honeymoon Packages Eligible for Desert Safari?',
        answer: "Our Rajasthan Honeymoon Packages and Rajasthan Holiday Packages are customizable. So, if you are looking for a desert safari in Rajasthan, it will be arranged with corresponding officials and permissions."
    },
    {
        question: 'Which are Rajasthan\'s principal culturally significant cities?',
        answer: "Our Rajasthan Tour Packages cover the main tourist destinations such as Jaipur, Udaipur, Jaisalmer, Jodhpur, Ranthambore National Park, Mount Abu, Ajmer, Bikaner, and Pushkar."
    },
    {
        question: 'Is it a clever decision to choose Rajasthan Honeymoon Packages?',
        answer: "Indeed. You can definitely decide to spend your honeymoon in Rajasthan. Rajasthan's contemporary infrastructure and calm atmosphere astonish the senses in addition to its historical significance. Book our Rajasthan Honeymoon Packages and Delhi Agra Jaipur Tour Packages now to make your honeymoon colorful and memorable."
    },
    {
        question: 'When should one avoid visiting Rajasthan?',
        answer: "Avoid going to Rajasthan from April to September. The temperature is extremely hot and makes your tour dull. This is generally the off-season in Rajasthan, and the best time is from November to February. The weather will be pleasant outside, and you can have a colorful yet memorable Rajasthan trip."
    },
    {
        question: 'How will I travel to Rajasthan?',
        answer: "All modes of transport are supported by Rajasthan infrastructure. Hence Rajasthan and its cities are easily accessible by trains, buses, cars, and flights."
    },
    {
        question: 'Is the Rajasthan trip costly?',
        answer: "Rajasthan trip is quite affordable. Our Delhi Agra Jaipur Tour Package and Rajasthan Holiday Package make your trip budget-friendly and customizable. Hence your tour is stress-free and memorable."
    }
];

  return (
    <>
      <Contentsection heading={"Rajasthan"} children={"Destination"} />

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
                  <RajasthanTour
                    title="Explore Rajasthan"
                    description="Embark on a captivating journey through Rajasthan, the land of kings and vibrant traditions. This tour takes you through some of the most iconic cities and breathtaking landscapes, showcasing majestic forts, palaces, and colorful markets that reflect the rich history and culture of the region."
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
            <FAQ faqData={faqRajasthan} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RajasthanTours;
