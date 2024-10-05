import React from "react";
import TourList from "../components/card/singapore";
import Sidebar from "../components/sidebar";
import Contentsection from "../components/contentbg";
import Singapore from "../components/tourdescription";
import Balidesc from "../img/tour/358.jpg";

const mauritius = () => {
  return (
    <>
      <Contentsection heading={"Singapore & Malaysia Tour"} children={"Destination"} />

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
                  <Singapore
                    title="Explore Singapore and Malaysia"
                    description="Embark on a thrilling adventure as you explore two of Southeast Asia's most vibrant destinations: Singapore and Malaysia. This tour combines the modern marvels of Singapore with the rich cultural heritage of Malaysia, ensuring an unforgettable experience."
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
