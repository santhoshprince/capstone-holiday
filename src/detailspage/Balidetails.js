import React from "react";
import Sidebar from "../components/sidebar";
import Contentsection from "../components/contentbg";
import DetailSlider from "../components/detailslider";
import DetailsGallery from "../components/detailsgallery";
import Itinerary from "../components/itinerary";
import LocationMap from "../components/deatilsmap";
import TourDetails from "../components/tourdetails";
import galleryImage1 from "../img/tour/tour_inner_1.jpg";
import galleryImage2 from "../img/tour/tour_inner_2.jpg";
import galleryImage3 from "../img/tour/tour_inner_3.jpg";
import galleryImage4 from "../img/tour/tour_inner_2_4.jpg";
import galleryImage5 from "../img/tour/tour_inner_1.jpg";
import galleryImage6 from "../img/tour/tour_inner_2_4.jpg";

import galleryImage1_1 from "../img/gallery/gallery_5_1.jpg";
import galleryImage2_2 from "../img/gallery/gallery_5_2.jpg";
import galleryImage3_3 from "../img/gallery/gallery_5_3.jpg";
import galleryImage4_4 from "../img/gallery/gallery_5_4.jpg";
import galleryImage5_5 from "../img/gallery/gallery_5_5.jpg";
import galleryImage6_6 from "../img/gallery/gallery_6_1.jpg";

import location1 from "../img/icon/location-dot3.svg";

const TourPage = () => {
  const galleryImages = [
    galleryImage1,
    galleryImage2,
    galleryImage3,
    galleryImage4,
    galleryImage5,
    galleryImage6,
  ];
  const gallerydata = [
    galleryImage1_1,
    galleryImage2_2,
    galleryImage3_3,
    galleryImage4_4,
    galleryImage5_5,
    galleryImage6_6,
  ];

  const mapSrc =
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1010291.3909974314!2d115.07157700000002!3d-8.455471!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd141d3e8100fa1%3A0x24910fb14b24e690!2sBali%2C%20Indonesia!5e0!3m2!1sen!2sin!4v1727415378982!5m2!1sen!2sin";
  const iconSrc = location1;

  const priceIncludes = [
    "Twin Sharing Accommodation with Breakfast",
    "Private air-conditioned vehicle for tour time & Airport Pick & Drop",
    "English Speaking Driver",
    "Entrance fee",
    "1 Jimbaran Bay Dinner",
    "4 Set Menu Dinner at Hotel",
  ];

  const hotelDetails = [
    "3* - Legian Village Hotel or Legian Paradiso or Swiss-Belexpress Kuta Legian or Similar",
    "4* - J4 Hotel Legian or Bedrock Hotel Legian or Grand Ixora Hotel or Similar, Panida Hotel - Samuh Ocean Sunset Hotel (4*)",
  ];

  const baliItinerary = [
    {
      day: "Day 1",
      details: "After Arrive transfer Hotel. Dinner set menu at Hotel. (D)",
    },
    {
      day: "Day 2",
      details:
        "Full Day Visit NusaDua Water Sports, Padang Padang Beach, Uluwatu Temple & Jimbaran Dinner. (B/D)",
    },
    {
      day: "Day 3",
      details:
        "Full Day Visit Jatiluwih, Tanah Lot, Taman Ayun Temple, Chocolate Factory. Dinner set menu at Hotel. (B/D)",
    },
    {
      day: "Day 4",
      details:
        "After Breakfast transfer check out Hotel & transfer to Panida. Full Day Visit Nusa Penida West Tour (SIC), Angel Billabong, Broken Beach, Klingking Beach, Crystal Bay. Dinner set menu at Hotel. (B/D)",
    },
    {
      day: "Day 5",
      details:
        "Check Out Nusa Panida Hotel Transfer to Harbour Then Back to Bali. Dinner set menu at Hotel. (B/D)",
    },
    {
      day: "Day 6",
      details: "Transfer to Bali Airport. (B)",
    },
  ];
  return (
    <>
      <Contentsection title={"Bali Tour Packages from Chennai"} children={""} />

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
                  <DetailSlider images={galleryImages} />
                  {/* Move DetailsGallery and DetailsMap outside of the sidebar column */}
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-lg-5">
              <Sidebar />
            </div>
          </div>
          {/* Full-width gallery */}
          <div className="row">
            <div className="col-12">
              <DetailsGallery images={gallerydata} />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <Itinerary
                title="Itinerary"
                itineraryData={baliItinerary}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <TourDetails
                title="Welcome to Bali!"
                description="Discover Bali Tour Package! Unveil the Beauty of the Island of Gods! Create an unforgettable Bali Trip experience with our Capstone Holidays Bali Tour Packages. Enjoy the crystal-clear waters at Bali’s blue beaches and its captivating landscape as well."
                tourCode="CBT-22/05"
                duration="6 Days 5 Nights (BALI)"
                priceIncludes={priceIncludes}
                hotelDetails={hotelDetails}
              />
            </div>
          </div>
          {/* Full-width map */}
          <div className="row">
            <div className="col-12">
              <LocationMap title="Location" mapSrc={mapSrc} iconSrc={iconSrc} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TourPage;
