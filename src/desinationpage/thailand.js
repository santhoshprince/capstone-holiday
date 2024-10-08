import React from "react";
import TourList from "../components/thailandcard";
import Sidebar from "../components/sidebar";
import Contentsection from "../components/maldivesbg";
import Dubai from "../components/tourdescription";
import Balidesc from "../img/tour/2151682922.jpg";

const ThailandPage = () => {
  return (
    <>
      <Contentsection heading={"Thailand Tour"} children={"Destination"} />

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
                    title="Explore Thailand"
                    description="Discover the beauty of Thailand, from the vibrant streets of Bangkok to the serene beaches of Phuket. Visit ancient temples, explore bustling markets, and enjoy delicious Thai cuisine. Relax on tropical islands, visit cultural landmarks, and experience the rich history and traditions of the country. A Thailand tour offers the perfect blend of adventure, relaxation, and cultural immersion"
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

export default ThailandPage;
