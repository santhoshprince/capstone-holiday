import React from "react";
import TourList from "../components/card/kashmir";
import Sidebar from "../components/sidebar";
import Contentsection from "../components/contentbg";
import KashmirDescription from "../components/tourdescription";
import Balidesc from "../img/tour/358.jpg";

const KashmirTour = () => {
  return (
    <>
      <Contentsection heading={"Kashmir"} children={"Destination"} />

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
                  <KashmirDescription
                    title="Explore Kashmir"
                    description="Discover the breathtaking beauty of Kashmir, often referred to as 'Paradise on Earth.' This tour takes you through lush valleys, pristine lakes, and majestic snow-capped mountains. Wander through the vibrant Mughal gardens, take in the serene Dal Lake on a Shikara ride, and explore the charming towns of Gulmarg, Pahalgam, and Sonmarg. Enjoy scenic views, adventure activities, and immerse yourself in the rich culture and history of this beautiful region. Whether it’s the Gondola ride in Gulmarg, exploring the valleys in Pahalgam, or witnessing the magnificent Thajiwas Glacier in Sonmarg, Kashmir offers a perfect mix of tranquility, adventure, and unforgettable moments."
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

export default KashmirTour;
