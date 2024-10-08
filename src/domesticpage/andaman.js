import React from "react";
import TourList from "../components/card/andaman";
import Sidebar from "../components/sidebar";
import Contentsection from "../components/contentbg";
import AndamanDescription from "../components/tourdescription";
import Balidesc from "../img/tour/358.jpg";

const AndamanTour = () => {
  return (
    <>
      <Contentsection heading={"Andaman"} children={"Destination"} />

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
                  <AndamanDescription
                    title="Explore Andaman"
                    description="Discover the serene beauty of the Andaman Islands, a tropical paradise known for its crystal-clear waters, white sandy beaches, and lush greenery. Visit popular destinations like Havelock Island, famous for Radhanagar Beach, one of Asia’s best beaches. Explore the coral reefs and marine life with snorkeling and scuba diving adventures. Experience the history of Port Blair by visiting the Cellular Jail and enjoy breathtaking sunsets at Chidiya Tapu. The Andaman tour is perfect for those seeking relaxation, adventure, and unforgettable experiences in nature"
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

export default AndamanTour;
