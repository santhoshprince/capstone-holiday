import React from "react";
import TourList from "../components/card/vietnam";
import Sidebar from "../components/sidebar";
import Contentsection from "../components/contentbg";
import Vietnam from "../components/tourdescription";
import Balidesc from "../img/tour/358.jpg";

const mauritius = () => {
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
      </section>
    </>
  );
};

export default mauritius;
