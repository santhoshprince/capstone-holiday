import React from "react";
import TourList from "../components/card/turkey";
import Sidebar from "../components/sidebar";
import Contentsection from "../components/contentbg";
import Turkey from "../components/tourdescription";
import Balidesc from "../img/tour/358.jpg";

const mauritius = () => {
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
      </section>
    </>
  );
};

export default mauritius;
