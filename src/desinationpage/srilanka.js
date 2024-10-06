import React from "react";
import TourList from "../components/card/srilanka";
import Sidebar from "../components/sidebar";
import Contentsection from "../components/contentbg";
import Singapore from "../components/tourdescription";
import Balidesc from "../img/tour/358.jpg";

const Srilanka = () => {
  return (
    <>
      <Contentsection heading={"Sri Lanka Tour"} children={"Destination"} />

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
                    title="Explore Srilanka"
                    description="Explore the natural beauty and rich culture of Sri Lanka. From ancient temples and lush tea plantations to stunning beaches and wildlife safaris, this island offers an unforgettable experience. Visit iconic landmarks like Sigiriya Rock Fortress, enjoy a scenic train ride through the hills of Ella, relax on the golden beaches of Mirissa, and embark on a safari at Yala National Park to see elephants and leopards. Sri Lanka is a perfect blend of adventure, relaxation, and history"
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

export default Srilanka;
