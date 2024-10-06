import React from "react";
import TourList from "../components/card/himachal";
import Sidebar from "../components/sidebar";
import Contentsection from "../components/contentbg";
import HimachalDescription from "../components/tourdescription";
import Balidesc from "../img/tour/358.jpg";

const HimchalTour = () => {
  return (
    <>
      <Contentsection heading={"Himachal"} children={"Destination"} />

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
                    title="Explore Himachal"
                    description="Embark on a breathtaking journey to Himachal Pradesh, a paradise nestled in the lap of the Himalayas. Known for its scenic beauty, serene landscapes, and adventure activities, Himachal offers an unforgettable experience for nature lovers and adventure enthusiasts alike.

Explore the charming hill stations of Shimla, Manali, and Dharamshala, each offering its own unique blend of colonial charm, lush valleys, and snow-capped peaks. Stroll through the Mall Road in Shimla, visit the famous Hadimba Temple in Manali, and experience Tibetan culture in Dharamshala."
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
