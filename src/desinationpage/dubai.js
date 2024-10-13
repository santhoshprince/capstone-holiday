import React from "react";
import TourList from "../components/dubaicard";
import Sidebar from "../components/sidebar";
import Contentsection from "../components/maldivesbg";
import Dubai from "../components/tourdescription";
import Balidesc from "../img/tour/2151682922.jpg";
import FAQ from "../components/Faq";

const DubaiPage = () => {
  const faqDubai = [
    {
        question: 'Which is the busiest month to visit Dubai?',
        answer: "January, February, and November till April are the best months to visit Dubai."
    },
    {
        question: 'How much is the initial charge of a Dubai Holiday Package from Chennai?',
        answer: "Dubai Holiday Package from Chennai starts from around INR 32,000 and can vary based on the trip length."
    },
    {
        question: 'Can customers customize the Dubai Holiday Package at Capstone Holidays?',
        answer: "Yes. We design the Dubai tour packages with utmost care, putting the customer's comfort and taste first, and hence our holiday packages are customizable."
    },
    {
        question: 'Are the prominent tourist places covered in our Dubai trip?',
        answer: "Our Dubai Holiday Package from Chennai covers almost all the major tourist attractions in the city like Burj Khalifa, Underwater Zoo, The Dubai Aquarium, Burj Al Arab, Global Village, The Dubai Miracle Garden, and many more."
    },
    {
        question: 'How to clear the visa procedures for a Dubai trip?',
        answer: "Please get in contact with Capstone Holidays, our Dubai trip planner, for a thorough explanation of the visa application process. Obtaining the necessary visas for your international travel is entirely our team's responsibility."
    }
];

  return (
    <>
      <Contentsection heading={"Dubai Tour"} children={"Destination"} />

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
                  <Dubai
                    title="Explore Dubai"
                    description="Discover the best of Dubai, a city that blends modern luxury with rich heritage. Visit iconic landmarks like the Burj Khalifa, enjoy a thrilling desert safari, relax at the luxurious Palm Jumeirah, and shop at the world-famous Dubai Mall. Immerse yourself in culture at Dubai Creek, explore the traditional souks, and marvel at the stunning architecture of Jumeirah Mosque and Dubai Frame. Dubai offers an unforgettable experience with its mix of adventure, culture, and luxury."
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
            <FAQ faqData={faqDubai} />
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default DubaiPage;
