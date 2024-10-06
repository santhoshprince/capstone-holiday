import React from "react";
import TourList from "../components/card/rajasthan";
import Sidebar from "../components/sidebar";
import Contentsection from "../components/contentbg";
import RajasthanTour from "../components/tourdescription";
import Balidesc from "../img/tour/358.jpg";

const RajasthanTours = () => {
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
      </section>
    </>
  );
};

export default RajasthanTours;
