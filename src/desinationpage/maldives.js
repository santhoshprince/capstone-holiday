import React from "react";
import TourList from "../components/maledivescard";
import Sidebar from "../components/sidebar";
import Contentsection from "../components/maldivesbg";
import Maldives from "../components/tourdescription";
import Balidesc from "../img/tour/2151682922.jpg";

const TourPage = () => {
  return (
    <>
      <Contentsection heading={"Maldives Tour"} children={"Destination"} />

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
                  <Maldives
                    title="Explore Maldives"
                    description="Escape to the breathtaking paradise of the Maldives, where crystal-clear waters meet pristine white-sand beaches. Our Maldives Tour Packages are designed for travelers seeking luxury, relaxation, and adventure in one of the world's most beautiful destinations."
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

export default TourPage;
