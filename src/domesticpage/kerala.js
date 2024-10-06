import React from "react";
import TourList from "../components/card/kerala";
import Sidebar from "../components/sidebar";
import Contentsection from "../components/contentbg";
import HimachalDescription from "../components/tourdescription";
import Balidesc from "../img/tour/358.jpg";

const HimchalTour = () => {
  return (
    <>
      <Contentsection heading={"Kerala"} children={"Destination"} />

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
                    description="Discover the natural beauty and cultural heritage of Kerala, the God's Own Country. This tour takes you through Kerala's scenic landscapes, backwaters, beaches, and hill stations, offering an authentic experience of its rich culture and traditions.
                    Start your journey in Kochi, a vibrant port city known for its colonial architecture and lively markets. Then, move on to Munnar, the charming hill station covered with lush tea plantations and misty mountains. Enjoy a houseboat cruise in the serene backwaters of Alleppey, where you’ll witness life along the narrow canals and paddy fields. End your trip by relaxing on the golden beaches of Kovalam, basking in the beauty of the Arabian Sea."
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
      </section>
    </>
  );
};

export default HimchalTour;
