import React from "react";
import TourList from "../components/card/sikkim";
import Sidebar from "../components/sidebar";
import Contentsection from "../components/contentbg";
import Sikkim from "../components/tourdescription";
import Balidesc from "../img/tour/358.jpg";

const SikkimTours = () => {
  return (
    <>
      <Contentsection heading={"Sikkim"} children={"Destination"} />

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
                  <Sikkim
                    title="Explore Sikkim"
                    description="Embark on a captivating journey through the enchanting landscapes of Sikkim, where the majestic Himalayas cradle lush valleys, vibrant flora, and rich culture. This tour offers a perfect blend of adventure, tranquility, and breathtaking scenery."
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

export default SikkimTours;
