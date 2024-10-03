import React,{useRef} from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../components/sidebar";
import Contentsection from "../components/contentbg";
import DetailSlider from "../components/detailslider";
import DetailsGallery from "../components/detailsgallery";
import Itinerary from "../components/itinerary";
import PopularTags from "../components/populartags";
import LocationMap from "../components/deatilsmap";
import TourDetails from "../components/tourdetails";
import galleryImage1 from "../img/tour/11021.jpg";
import galleryImage2 from "../img/tour/354.jpg";
import galleryImage3 from "../img/tour/835.jpg";
import galleryImage4 from "../img/tour/15793.jpg";
import galleryImage5 from "../img/tour/340.jpg";
import galleryImage6 from "../img/tour/365.jpg";

import galleryImage1_1 from "../img/gallery/358.jpg";
import galleryImage2_2 from "../img/gallery/343.jpg";
import galleryImage3_3 from "../img/gallery/369.jpg";
import galleryImage4_4 from "../img/gallery/963.jpg";
import galleryImage5_5 from "../img/gallery/11021.jpg";
import galleryImage6_6 from "../img/gallery/2151625212.jpg";

import location1 from "../img/icon/location-dot3.svg";

const TourPage = () => {
  const { id } = useParams();

  const detailsitinerary = useRef(null);
  const detailsGalleryRef = useRef(null);
  const tourDetailsRef = useRef(null);
  const locationMapRef = useRef(null);
  const toursData = {
    1: {
      heading:"Bali Tour Packages from Chennai",
      title: "Bali Tour Packages from Chennai",
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
        "Twin Sharing Accommodation with Breakfast",
        "Private air-conditioned vehicle for tour time & Airport Pick & Drop",
        "English Speaking Driver",
        "Entrance fee",
        "1 Jimbaran Bay Dinner",
        "4 Set Menu Dinner at Hotel",
        "3* - Legian Village Hotel or Legian Paradiso or Swiss-Belexpress Kuta Legian or Similar",
        "4* - J4 Hotel Legian or Bedrock Hotel Legian or Grand Ixora Hotel or Similar"
      ],
      description: [
        "Discover the Bali Island Tour Package – Your Ultimate Island Escape! Enjoy the adventurous and thrilling water activities such as scuba diving, snorkelling, parasailing, sea surfing, canyon tubing with our Bali Island Tour Packages. With our Bali trip package, escape the fast-paced way of life and engage in all these activities.",
      ],
      tourCode: ["CBT-22/04"],
      duration: ["6 Days 5 Nights (BALI)"],
      hotelDetails: [
        "Twin Sharing Accommodation with Breakfast",
        "Private air-conditioned vehicle for tour time & Airport Pick & Drop",
        "English Speaking Driver",
        "Entrance fee",
        "1 Jimbaran Bay Dinner",
        "4 Set Menu Dinner at Hotel",
        "3* - Legian Village Hotel or Legian Paradiso or Swiss-Belexpress Kuta Legian or Similar",
        "4* - J4 Hotel Legian or Bedrock Hotel Legian or Grand Ixora Hotel or Similar, Panida Hotel - Samuh Ocean Sunset Hotel (4*)",
      ],
      itinerary: [
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
            "Full Day Visit Nusa Penida West Tour (SIC) 6.30 AM Pickup at your hotel (depends on the area),,08.00 – 09.00 AM Go to Sanur Harbour – Until Harbour Nusa Penida , 10.00 AM Visit Angel Billabong,,11.00 AM Visit Broken Beach ,12.30 PM Lunch Time ,13.30 PM Visit Klingking Beach ,14.30 PM Visit Crystal Bay,,14.30 PM Back to Harbour ,16.30 PM Drop to Hotel. Dinner set menu at Hotel.(B/D)",
        },
        {
          day: "Day 5",
          details:
           "Full Day Visit Kintamani Volcano , Tirta empul temple Gunung kawi bali, Goa Gajah. Dinner set menu at Hotel. (B/D)"
        },
        { day: "Day 6", details: "Hotel to Bali Airport Transfer.(B)" },
      ],
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1010291.3909974314!2d115.07157700000002!3d-8.455471!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd141d3e8100fa1%3A0x24910fb14b24e690!2sBali%2C%20Indonesia!5e0!3m2!1sen!2sin!4v1727415378982!5m2!1sen!2sin",

        iconSrc:[location1]
    },
    2: {
      heading:"Bali Trip with Capstone Holidays",
      title: "Bali Trip with Capstone Holidays",
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
        "Luxury Beach Villas",
        "Private Transfers",
        "All-inclusive Meals",
        "Snorkeling Gear",
        "Guided Island Tours",
      ],
      description: [
        "Discover Bali Tour Package! Unveil the Beauty of the Island of Gods! Create an unforgettable Bali Trip experience with our Capstone Holidays Bali Tour Packages. Enjoy the crystal-clear waters at Bali’s blue beaches and its captivating landscape as well.",
      ],
      tourCode: ["CBT-22/05"],
      duration: ["6 Days 5 Nights (BALI)"],
      hotelDetails: [
        "Twin Sharing Accommodation with Breakfast",
        "Private air-conditioned vehicle for tour time & Airport Pick & Drop",
        "English Speaking Driver",
        "Entrance fee",
        "1 Jimbaran Bay Dinner",
        "4 Set Menu Dinner at Hotel",
        "3* - Legian Village Hotel or Legian Paradiso or Swiss-Belexpress Kuta Legian or Similar",
        "4* - J4 Hotel Legian or Bedrock Hotel Legian or Grand Ixora Hotel or Similar, Panida Hotel - Samuh Ocean Sunset Hotel (4*)",
      ],
      itinerary: [
        {
          day: "Day 1",
          details: "After Arrive transfer Hotel. Dinner set menu at Hotel.(B)",
        },
        {
          day: "Day 2",
          details: "Full Day Visit NusaDua Water Sports , Padang Padang Beach, Uluwatu Temple & Jimbarn Dinner.(B/D)",
        },
        {
          day: "Day 3",
          details: "Full Day Visit Nusa Penida West Tour (SIC) 6.30 AM Pickup at your hotel (depends on the area),,08.00 – 09.00 AM Go to Sanur Harbour – Until Harbour Nusa Penida , 10.00 AM Visit Angel Billabong,,11.00 AM Visit Broken Beach ,12.30 PM Lunch Time ,13.30 PM Visit Klingking Beach ,14.30 PM Visit Crystal Bay,,14.30 PM Back to Harbour ,16.30 PM Drop to Hotel. Dinner set menu at Hotel.(B/D)",
        },
        { day: "Day 4", details: "Full Day Visit Kintamani Volcano , Tirta empul temple Gunung kawi bali, Goa Gajah. Dinner set menu at Hotel. (B/D)" },
        { day: "Day 5", details: "Hotel to Bali Airport Transfer.(B)" },
      ],
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1010291.3909974314!2d115.07157700000002!3d-8.455471!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd141d3e8100fa1%3A0x24910fb14b24e690!2sMaldives!5e0!3m2!1sen!2sin!4v1727415378982!5m2!1sen!2sin",

        iconSrc:[location1]
    },
  };

  const selectedTour = toursData[id] || toursData[1];

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  };
  return (
    <>
      <Contentsection heading={selectedTour.heading} children={""} />

      <nav className="tour-navigation">
        <ul>
          {/* <li onClick={() => scrollToSection(detailSliderRef)}>Detail Slider</li> */}
          <li onClick={() => scrollToSection(detailsGalleryRef)}>Gallery</li>
          <li onClick={() => scrollToSection(tourDetailsRef)}>Tour Details</li>
          <li onClick={() => scrollToSection(detailsitinerary)}>Itinerary</li>
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
                  <DetailSlider images={selectedTour.galleryImages} />
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
            <div className="col-12" ref={tourDetailsRef}>
              <TourDetails
                title={selectedTour.title}
                description={selectedTour.description}
                duration={selectedTour.duration}
                tourCode={selectedTour.tourCode}
                priceIncludes={selectedTour.priceIncludes}
                hotelDetails={selectedTour.hotelDetails}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12" ref={detailsitinerary}>
              <Itinerary
                title="Itinerary"
                itineraryData={selectedTour.itinerary}
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

export default TourPage;
