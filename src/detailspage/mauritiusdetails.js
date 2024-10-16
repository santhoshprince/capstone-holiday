import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../components/sidebar";
import Contentsection from "../components/contentbg";
import DetailSlider from "../components/detailslider";
import DetailsGallery from "../components/detailsgallery";
import Itinerary from "../components/itinerary";
import PopularTags from "../components/populartags";
import LocationMap from "../components/deatilsmap";
import TourDetails from "../components/tourdetails";
import galleryImage1 from "../img/mauritius/2.jpg";
import galleryImage2 from "../img/mauritius/1343.jpg";
import galleryImage3 from "../img/mauritius/1356.jpg";
import galleryImage4 from "../img/mauritius/1821.jpg";
import galleryImage5 from "../img/mauritius/2684.jpg";
import galleryImage6 from "../img/mauritius/4224.jpg";
import { Helmet } from "react-helmet";

import galleryImage1_1 from "../img/mauritius/2.jpg";
import galleryImage2_2 from "../img/mauritius/47014.jpg";
import galleryImage3_3 from "../img/mauritius/44076.jpg";
import galleryImage4_4 from "../img/mauritius/12862.jpg";
import galleryImage5_5 from "../img/mauritius/4224.jpg";
import galleryImage6_6 from "../img/mauritius/7768.jpg";

import location1 from "../img/icon/location-dot3.svg";
import bg1 from "../img/mauritius/1343.jpg";

const TourMauritius = () => {
  const { id } = useParams();

  const detailSliderRef = useRef(null);
  const detailsGalleryRef = useRef(null);
  const tourDetailsRef = useRef(null);
  const locationMapRef = useRef(null);
  const InitiaryMapRef = useRef(null);

  const toursData = {
    1: {
      heading: "Mauritius Tour Package from Chennai",
      title1: "Mauritius Tour Package from Chennai",
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
        "04 Nights Accommodation",
        "Daily Breakfast and Dinner at Hotel",
        "South Tour [with 23 Colored Earth entry ticket]",
        "North Tour [Pamplemousses Garden visit not included]",
        "Ile Aux Cerfs Island Tour with sharing Speedboat Transfers",
        "Visa on Arrival and free for Indians",
        "Airport - Hotel - Airport Transfers for Air Mauritius and Air Seychelles from India",
        "All Tours and transfers on SIC",
        "All Tax",
      ],

      description: [
        "Mauritius Honeymoon Package are the best option if you’re searching for an amazing Mauritius Package and trip. With the most customisable Mauritius tour options, Capstone Holidays caters to all types of travellers from Chennai. Choose a lot more from Mauritius travel packages with incredible offers and savings.",
      ],
      // tourCode: ["CBT-22/04"],
      duration: ["4 Nights, 5 Days"],
      hotelDetails: [
        "Anelia Resort - Superior Room",
        "Casuarina Resort - Privilege Garden View Room",
        "Le Meridien Ile Maurice - Deluxe Ocean View Room",
        "InterContinental Resort - Deluxe Ocean Room",
      ],

      // itinerary: [
      //   {
      //     day: "Day 1",
      //     details:
      //       "Bangkok (BKK) Airport to Pattaya Hotel (Private Transfer) Pattaya – Alcazar Show (Standard) (Show with Private Transfer)",
      //   },
      //   {
      //     day: "Day 2",
      //     details: "Pattaya – Coral Island Tour with Lunch (Shared Transfer)",
      //   },
      //   {
      //     day: "Day 3",
      //     details:
      //       "Pattaya – Floating Market with Breakfast + Rowing Boat 20 Min (Entry with Private Transfer) Enroute Pattaya Hotel to Bangkok Hotel (Private Transfer)",
      //   },
      //   {
      //     day: "Day 4",
      //     details:
      //       "Bangkok – Dinner Cruise – Chao Phraya Princes (Entry with Shared Transfer)",
      //   },
      //   {
      //     day: "Day 5",
      //     details:
      //       "Bangkok – City Tour (Wat Traimit + Wat Mahapruttaram with Gems Gallery) (Entry with Shared Transfer) Bangkok Hotel to Bangkok (BKK) Airport (Private Transfer)",
      //   },
      // ],
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15753576.983535636!2d59.019111!3d-15.425794000000002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x217c504df94474c9%3A0x4203d9c2116bd031!2sMauritius!5e0!3m2!1sen!2sin!4v1728109136948!5m2!1sen!2sin",
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
      <Helmet>
        <title>Mauritius Tour Package from Chennai | Velachery</title>
        <meta
          name="description"
          content="The highly customized Mauritius Tour Package From Chennai serve a wide range of Capstone Holidays' customers"
        />
        <meta
          name="keywords"
          content="mauritius tour package from chennai, mauritius tour, mauritius flight tickets, chennai, Coimbatore, Mauritius tour package"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "WebSite",
            name: "Capstone Holidays",
            url: "https://www.capstoneholidays.in/tour/mauritius-tour-package-from-chennai/",
            potentialAction: {
              "@type": "SearchAction",
              target:
                "https://www.capstoneholidays.in/tour/mauritius-tour-package-from-chennai/{search_term_string}",
              "query-input": "required name=search_term_string",
            },
          })}
        </script>
      </Helmet>
      <Contentsection
        heading={selectedTour.heading}
        children={""}
        backgroundImage={bg1}
      />
      {/* Navigation Links */}
      <nav className="tour-navigation">
        <ul>
          {/* <li onClick={() => scrollToSection(detailSliderRef)}>Detail Slider</li> */}
          <li onClick={() => scrollToSection(detailsGalleryRef)}>Gallery</li>
          <li onClick={() => scrollToSection(tourDetailsRef)}>Tour Details</li>
          {/* <li onClick={() => scrollToSection(InitiaryMapRef)}>Itinerary</li> */}
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
          <div className="row">
            <div className="col-12" ref={tourDetailsRef}>
              <TourDetails
                title1={selectedTour.title1}
                description={selectedTour.description}
                duration={selectedTour.duration}
                // tourCode={selectedTour.tourCode}
                priceIncludes={selectedTour.priceIncludes}
                hotelDetails={selectedTour.hotelDetails}
                Priceexclusions={selectedTour.Priceexclusions}
                hotelDetailsv2={[
                  {
                    name: "Anelia Resort – Superior Room",
                  },
                  {
                    name: "Honeymoon Freebies:",
                    honeymoonFreebies: [
                      "Fruit platter in room",
                      "Sparkling wine",
                      "Floral decoration in room",
                      "One candlelight dinner (excluding drinks)",
                    ],
                  },
                  {
                    name: "Casuarina Resort – Privilege Garden View Room",
                  },
                  {
                    name: "Le Meridien Ile Maurice – Deluxe Ocean View Room",
                  },
                  {
                    name: "Honeymoon Freebies:",
                    honeymoonFreebies: [
                      "bottle of Sparkling Wine, 1 Fruit basket, 20% discount on Spa treatments during the stay",
                    ],
                  },
                  {
                    name: "InterContinental Resort – Deluxe Ocean Room",
                    honeymoonFreebies: [
                      "Private check in with a tropical welcome Mocktail, Personalized escort to the room, Romantic Room Set up with amenities, 1 bottle of Sparkling Wine in the room upon arrival, 1 Romantic 3 course candle lit dinner on the beach, Free use of Sauna, Steam Room and whirlpool at Yug Spa",
                    ],
                  },
                ]}
                sightseeingDetails={[
                  {
                    name: "Ile Aux Cerf Island",
                    description: `After breakfast, Drive to Belle Mare to enjoy aquatic activities like parasailing*, undersea walk*, waterfall visit * or banana tube ride*. Drive to Trou d’Eau douce for the speedboat transfer to Ile aux Cerfs, the islet with the most beautiful beach and the clearest turquoise water. Free on island up to 15h30. Return back to the mainland by speedboat. Drive back to the hotel. *Optional activities are extra chargeable,`,
                    note: "CARRY BEACH TOWEL FROM THE HOTEL (RETURNABLE BASIS), EXTRA CLOTHES, SWIMWEAR, SUNSCREEN, CAP/HAT.",
                  },
                  {
                    name: "North Tour",
                    description: `Port Louis City-After breakfast, Drive to Port Louis for a visit of the capital via the Citadel & its surrounding area. View the Champ de Mars race course, inaugurated in 1812 it the oldest horse-racing club in the Southern Hemisphere, and one of the oldest in the world. Afterwards drive to Le Caudan/Port Louis Waterfront, with some 170 shops it is a must shopping stop. Drive back to hotel.`,
                  },
                  {
                    name: "Scenic South Tour",
                    description: `After breakfast, Drive to Curepipe. Visit the ship making factory. Shopping at the duty free shops in Floreal. View the scenic town of Curepipe & its surroundings from the extinct crater of Trou aux Cerfs. Stop at Grand Bassin (Ganga Talao) sacred lake & view the stunning 108 feet statue of “Mangal Mahadev”. Visit 23 colored earth created by volcanic eruption, the earth forms beautiful patterns of colour in the exposed hillsides. Enjoy various activities and lateron drive back to the hotel.`,
                  },
                ]}
              />
            </div>
          </div>
          {/* Full-width gallery */}

          {/* <div className="row">
            <div className="col-12" ref={InitiaryMapRef}>
              <Itinerary
                title="Itinerary"
                itineraryData={selectedTour.itinerary}
              />
            </div>
          </div> */}
          <div className="row">
            <div className="col-12" ref={detailsGalleryRef}>
              <DetailsGallery images={selectedTour.gallerydata} />
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

export default TourMauritius;
