import React from "react";
import TourList from "../components/card/mauritius";
import Sidebar from "../components/sidebar";
import Contentsection from "../components/contentbg";
import Mauritius from "../components/tourdescription";
import Balidesc from "../img/tour/358.jpg";

const mauritius = () => {
  return (
    <>
      <Contentsection heading={"Mauritius Tour"} children={"Destination"} />

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
                  <Mauritius
                    title="Explore Mauritius"
                    description="Experience the paradise of Mauritius with its pristine beaches, crystal-clear waters, and lush greenery. Relax on white sand shores, explore vibrant coral reefs, and enjoy thrilling water sports. Discover the island’s unique culture, visit botanical gardens, and hike through scenic mountains. A Mauritius tour promises a perfect mix of relaxation, adventure, and natural beauty."
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
