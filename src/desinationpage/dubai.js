import React from "react";
import TourList from "../components/dubaicard";
import Sidebar from "../components/sidebar";
import Contentsection from "../components/maldivesbg";
import Dubai from "../components/tourdescription";
import Balidesc from "../img/tour/2151682922.jpg";

const DubaiPage = () => {
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
      </section>
    </>
  );
};

export default DubaiPage;
