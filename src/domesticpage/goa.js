import React from "react";
import TourList from "../components/card/goa";
import Sidebar from "../components/sidebar";
import Contentsection from "../components/contentbg";
import GoaDescription from "../components/tourdescription";
import Balidesc from "../img/tour/358.jpg";

const Andaman = () => {
  return (
    <>
      <Contentsection heading={"Goa Tour"} children={"Destination"} />

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
                  <GoaDescription
                    title="Explore Goa"
                    description="Discover the vibrant beauty of Goa, India’s premier beach destination. Known for its stunning coastlines, rich culture, and lively nightlife, Goa offers something for everyone. Relax on the golden sands of popular beaches like Baga and Calangute, or explore the tranquil shores of Palolem and Agonda.

Indulge in Goa's unique cuisine, featuring fresh seafood and local flavors. Visit historical sites such as the Basilica of Bom Jesus and the stunning forts overlooking the Arabian Sea. Experience the lively markets, vibrant nightlife, and the warm hospitality of the locals.

Engage in exciting water sports, including parasailing, jet skiing, and scuba diving, or unwind with a peaceful yoga session on the beach. Whether you're looking for adventure, relaxation, or cultural experiences, a tour of Goa promises unforgettable memories in this tropical paradise."
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

export default Andaman;
