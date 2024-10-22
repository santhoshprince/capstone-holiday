import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../components/sidebardetailspage";
import Contentsection from "../components/contentbg";
import DetailSlider from "../components/detailslider";
import DetailsGallery from "../components/detailsgallery";
import Itinerary from "../components/itinerary";
import PopularTags from "../components/populartags";
import LocationMap from "../components/deatilsmap";
import TourDetails from "../components/tourdetails";
import galleryImage1 from "../img/Thailand/568.jpg";
import galleryImage2 from "../img/Thailand/970.jpg";
import galleryImage3 from "../img/Thailand/1025.jpg";
import galleryImage4 from "../img/Thailand/1358.jpg";
import galleryImage5 from "../img/Thailand/568.jpg";
import galleryImage6 from "../img/Thailand/771.jpg";

import galleryImage1_1 from "../img/Thailand/434.jpg";
import galleryImage2_2 from "../img/Thailand/895.jpg";
import galleryImage3_3 from "../img/Thailand/570.jpg";
import galleryImage4_4 from "../img/Thailand/607.jpg";
import galleryImage5_5 from "../img/Thailand/779.jpg";
import galleryImage6_6 from "../img/Thailand/786.jpg";

import location1 from "../img/icon/location-dot3.svg";
import bg1 from "../img/Thailand/2150668931.jpg";
import { Helmet } from "react-helmet";

const TourThailand = () => {
  const { id } = useParams();

  const detailSliderRef = useRef(null);
  const detailsGalleryRef = useRef(null);
  const tourDetailsRef = useRef(null);
  const locationMapRef = useRef(null);
  const InitiaryMapRef = useRef(null);

  const toursData = {
    1: {
      heading: "Thailand Tour Package from Chennai – 4N / 5D",
      title1: "Thailand Tour Package from Chennai – 4N / 5D",
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

      Priceexclusions: ["GST 5%", "Air Fare"],

      description1: [
        "Our Thailand Tour Package from Chennai takes you to the best tourist destinations such as The Sweet Tamarind Fair, Mae Hong Son Winter Feast, Alcazar show in Pattaya, Phi Phi Island tour, and Nakhon Sawan Chinese New Year, The Loi Krathong and the Chiang Mai Flower Festival. Thailand is geographically located in the midst of Southeast Asia. Thailand is known for its numerous islands with beautiful beaches and a mild climate. Thailand truly stands true to its nickname, “the origin of happiness,” since its citizens are incredibly warm and inviting."
      ],
      // tourCode: ["CBT-22/04"],
      duration: ["4 Nights, 5 Days"],
      hotelDetails: [
        "Anya Nana @ Sukhumvit (Superior),Bella Express (Standard)",
      ],
      itinerary: [
        {
          day: "Day 1",
          details:
            "Bangkok (BKK) Airport to Pattaya Hotel (Private Transfer) Pattaya – Alcazar Show (Standard) (Show with Private Transfer)",
        },
        {
          day: "Day 2",
          details: "Pattaya – Coral Island Tour with Lunch (Shared Transfer)",
        },
        {
          day: "Day 3",
          details:
            "Pattaya – Floating Market with Breakfast + Rowing Boat 20 Min (Entry with Private Transfer) Enroute Pattaya Hotel to Bangkok Hotel (Private Transfer)",
        },
        {
          day: "Day 4",
          details:
            "Bangkok – Dinner Cruise – Chao Phraya Princes (Entry with Shared Transfer)",
        },
        {
          day: "Day 5",
          details:
            "Bangkok – City Tour (Wat Traimit + Wat Mahapruttaram with Gems Gallery) (Entry with Shared Transfer) Bangkok Hotel to Bangkok (BKK) Airport (Private Transfer)",
        },
      ],
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15920938.03956205!2d101.490104!3d13.038997!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304d8df747424db1%3A0x9ed72c880757e802!2sThailand!5e0!3m2!1sen!2sin!4v1728104089716!5m2!1sen!2sin",
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
        <title>Thailand Tour Package from Chennai | Coimbatore</title>
        <meta
          name="description"
          content="Our Thailand Tour Package from Chennai takes you to the finest tourist destinations to explore the Thai cultural identity and cuisines."
        />
        <meta
          name="keywords"
          content="Thailand tour package from chennai, thailand tour, alcazar show, coral island, bangkok, pattaya, phuket, krabi, thai airways"
        />

        {/* Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "WebSite",
            name: "Capstone Holidays",
            url: "https://www.capstoneholidays.in/tour/thailand-tour-package-from-chennai/",
            potentialAction: {
              "@type": "SearchAction",
              target:
                "https://www.capstoneholidays.in/tour/thailand-tour-package-from-chennai/{search_term_string}",
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
            <div className="col-12" ref={tourDetailsRef}>
              <TourDetails
                title1={selectedTour.title1}
                description1={selectedTour.description1}
                duration={selectedTour.duration}
                // tourCode={selectedTour.tourCode}
                priceIncludes={selectedTour.priceIncludes}
                hotelDetails={selectedTour.hotelDetails}
                Priceexclusions={selectedTour.Priceexclusions}
              />
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

export default TourThailand;
