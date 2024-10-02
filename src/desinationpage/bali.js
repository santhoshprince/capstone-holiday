import React from "react";
import TourList from "../components/tourlist";
import Sidebar from "../components/sidebar";
import Contentsection from "../components/contentbg";
import BaliDescription from "../components/tourdescription";
import Balidesc from "../img/tour/tour_inner_3.jpg"

const TourPage = () => {
  return (
    <>
      <Contentsection title={"Bali"} children={"Destination"} />

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
                  <BaliDescription
        title="Explore Bali"
        description="A Bali tour offers an unforgettable journey through one of Indonesia's most enchanting islands. Explore Bali's breathtaking beaches, such as Kuta, Seminyak, and Nusa Dua, where you can relax on golden sands, surf world-class waves, or indulge in luxurious resorts. Venture inland to the cultural heart of Ubud, where terraced rice paddies, art markets, and ancient temples like the iconic Uluwatu Temple await. Experience Bali's rich traditions through captivating dance performances, temple ceremonies, and local crafts."
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
