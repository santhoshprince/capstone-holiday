import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../components/sidebar";
import Contentsection from "../components/maldivesbg";
import DetailSlider from "../components/detailslider";
import DetailsGallery from "../components/detailsgallery";
import Itinerary from "../components/itinerary";
import PopularTags from "../components/populartags";
import LocationMap from "../components/deatilsmap";
import TourDetails from "../components/tourdetails";
import galleryImage1 from "../img/tour/2151682890.jpg";
import galleryImage2 from "../img/tour/2151682910.jpg";
import galleryImage3 from "../img/tour/2151682922.jpg";
import galleryImage4 from "../img/tour/2151682907.jpg";
import galleryImage5 from "../img/tour/2151682912.jpg";
import galleryImage6 from "../img/tour/2151682911.jpg";

import galleryImage1_1 from "../img/gallery/2151682890.jpg";
import galleryImage2_2 from "../img/gallery/4900.jpg";
import galleryImage3_3 from "../img/gallery/4911.jpg";
import galleryImage4_4 from "../img/gallery/4852.jpg";
import galleryImage5_5 from "../img/gallery/835.jpg";
import galleryImage6_6 from "../img/gallery/1110.jpg";

import location1 from "../img/icon/location-dot3.svg";

const TourSingapore = () => {
  const { id } = useParams();

  const detailSliderRef = useRef(null);
  const detailsGalleryRef = useRef(null);
  const tourDetailsRef = useRef(null);
  const locationMapRef = useRef(null);
  const InitiaryMapRef = useRef(null);

  const toursData = {
    1: {
      heading: "Singapore and Malaysia Tour Packages",
      title: "Singapore and Malaysia Tour Packages",
      galleryImages: [
        galleryImage1,
        galleryImage2,
        galleryImage3,
        galleryImage4,
        galleryImage5,
        galleryImage6,
      ],
      gallerydata: [
        galleryImage1_1,
        galleryImage2_2,
        galleryImage3_3,
        galleryImage4_4,
        galleryImage5_5,
        galleryImage6_6,
      ],

      priceIncludes: [
        "All transportation service for given itinerary from airport to airport (A/C Private vehicle)",
        "Accommodation with Breakfast only",
        "All sightseeing as per itinerary",
        "Vehicle for shopping",
        "All entry tickets"
      ],
      Priceexclusions:[
        "GST 5%",
        "Lunch & Dinner",
        "Laundry service",
        "Mineral Water",
        "Tips",
        "Other than inclusions",
        "Air Fare"
      ],

      description: [
        "Our Singapore-Malaysia trip packages provide tourists with visits to all the captivating and well-liked tourist attractions, including Universal Studios, Sentosa Island, and Marina Bay. With our Singapore-Malaysia vacation packages, you may discover the dynamic cultures of both amazing locations. Singapore and Malaysia both have rich cultural histories dating back many generations."
      ],
      // tourCode: ["CBT-22/04"],
      duration: ["4 Nights, 5 Days"],
      hotelDetails: [
       "Thomson Hotel",
"Metro star Hotel"
      ],

      itinerary: [
        {
          day: "Day 1",
          details:
            "Airport Transfers Garden by the Bay (Flower Dome + Cloud Forest – Avatar Experience) on PVT basis w Guide",
        },
        {
          day: "Day 2",
          details: "Universal Studio w/o guide + SEA Aquarium + Wings of Time w/guide",
        },
        {
          day: "Day 3",
          details: "City tour of Singapore on PVT basis with Guide Singapore hotel to Malaysia hotel transfer",
        },
        {
          day: "Day 4",
          details: "Twin Tower photo stop with Fountain show Genting Highlands with 02 way Cable car",
        },
        {
          day: "Day 5",
          details: "Batu cave Murugan Temple Putrajaya tour",
        },
      ],
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d510562.450102457!2d103.84425!3d1.314!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da11238a8b9375%3A0x887869cf52abf5c4!2sSingapore!5e0!3m2!1sen!2sin!4v1728114635529!5m2!1sen!2sin",
      iconSrc: [location1],
    },
  };

  const selectedTour = toursData[id] || toursData[1];

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };
  return (
    <>
      <Contentsection heading={selectedTour.heading} children={""} />
      {/* Navigation Links */}
      <nav className="tour-navigation">
        <ul>
          {/* <li onClick={() => scrollToSection(detailSliderRef)}>Detail Slider</li> */}
          <li onClick={() => scrollToSection(detailsGalleryRef)}>Gallery</li>
          <li onClick={() => scrollToSection(tourDetailsRef)}>Tour Details</li>
          <li onClick={() => scrollToSection(InitiaryMapRef)}>Itinerary</li>
          <li onClick={() => scrollToSection(locationMapRef)}>Location</li>
        </ul>
      </nav>

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
                  <div ref={detailSliderRef}>
                    <DetailSlider images={selectedTour.galleryImages} />
                  </div>

                  {/* <PopularTags /> */}
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
            <div className="col-12" ref={detailsGalleryRef}>
              <DetailsGallery images={selectedTour.gallerydata} />
            </div>
          </div>
          <div className="row">
            <div className="col-12" ref={InitiaryMapRef}>
              <Itinerary
                title="Itinerary"
                itineraryData={selectedTour.itinerary}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12" ref={tourDetailsRef}>
              <TourDetails
                title={selectedTour.title}
                description={selectedTour.description}
                duration={selectedTour.duration}
                // tourCode={selectedTour.tourCode}
                priceIncludes={selectedTour.priceIncludes}
                hotelDetails={selectedTour.hotelDetails}
                Priceexclusions={selectedTour.Priceexclusions}
              />
            </div>
          </div>

          {/* Full-width map */}
          <div className="row">
            <div className="col-12" ref={locationMapRef}>
              <LocationMap
                title="Location"
                mapSrc={selectedTour.mapSrc}
                iconSrc={selectedTour.iconSrc}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TourSingapore;
