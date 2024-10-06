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

const TourSrilanka = () => {
  const { id } = useParams();

  const detailSliderRef = useRef(null);
  const detailsGalleryRef = useRef(null);
  const tourDetailsRef = useRef(null);
  const locationMapRef = useRef(null);
  const InitiaryMapRef = useRef(null);

  const toursData = {
    1: {
      heading: "Sri Lanka Tour Package from Chennai – 4N/5D",
      title: "Sri Lanka Tour Package from Chennai – 4N/5D",
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
        "Accommodation on Bed & Breakfast basis at hotels specified or at hotels in similar standard",
        "Complementary dinner at the local outside restaurant from Day 01 to day 04",
        "Service of an English-Speaking Driver",
        "Transportation by Luxury an Air – Conditioned Car",
        "All the transfers on private basis only",
        "Sightseeing – As per the attached day wise tour itinerary – not the sight entrance tickets",
        "Road/interstate taxes, fuel surcharges",
        "The price includes petrol, tolls, road taxes, a driver bata and his accommodation and meals/ National Guide fees, accommodation & meals",
        "First Aid On-board",
        "Value added tax",
        "Assistance at the airport",
      ],
      Priceexclusions: [
        "VISA",
        "Lunch of the tour",
        "Early check-in & late check-out",
        "Usage of vehicle beyond the given route (As per the day wise tour itinerary) drives after 07.00 PM, (DEPEND ON THE SIGHTSEEING & OUTSIDE DINNER IN RESTAURANT OR ANY HOTEL) usage of guide beyond the mentioned timings or anything beyond the itinerary is chargeable",
        "Expenses of personal nature such as laundry, mini bar charges, beverages, liquor, telephone charges, etc",
        "Any other services not specified in above itinerary",
        "Video and camera permit at sites",
        "Tips & portage",
        "Any compulsory room / Peak period supplements during the tour",
        "All Entrance Fees cost at sightseeing",
      ],

      description: [
        "Welcome to Sri Lanka Tour! Nestled in the Indian Ocean, Sri Lanka is a jewel waiting to be explored. From pristine beaches to ancient temples, lush tea plantations to wildlife sanctuaries, this island nation offers a diverse and captivating travel experience.",
      ],
      // tourCode: ["CBT-22/04"],
      duration: ["4 Nights, 5 Days"],
      hotelDetails: [
        "The Swiss Residence, Kandy",
        "Club Bentota Hotel, Bentota",
        "Ocean Edge Suites & Hotel, Colombo",
      ],

      itinerary: [
        {
          day: "Day 1",
          details:
            "Arrival Transfer / Pinnawala [Elephant Orphanage en-route] / Kandy [Check-in to the hotel / City tour / Kandy Temple of the Tooth / Cultural Dance Show]",
        },
        {
          day: "Day 2",
          details:
            "Kandy / Bentota [Check-in to the hotel / Visit Bentota Beach in the evening]",
        },
        {
          day: "Day 3",
          details:
            "Bentota [Madhu River boat ride / Turtle Hatchery / Water Sports activities]",
        },
        {
          day: "Day 4",
          details:
            "Bentota / Colombo [Check-in to the hotel / City tour / Shopping tour / Ganagaramaya Temple]",
        },
        {
          day: "Day 5",
          details: "Colombo / Departure Transfer",
        },
      ],
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8094426.567882021!2d80.70625!3d7.857684999999999!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2593cf65a1e9d%3A0xe13da4b400e2d38c!2sSri%20Lanka!5e0!3m2!1sen!2sin!4v1728182841425!5m2!1sen!2sin",
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

                  <PopularTags />
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

export default TourSrilanka;
