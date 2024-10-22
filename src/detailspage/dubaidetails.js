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
import galleryImage1 from "../img/Dubai/d7.jpg";
import { Helmet } from "react-helmet";
import galleryImage2 from "../img/Dubai/d8.jpg";
import galleryImage3 from "../img/Dubai/d9.jpg";
import galleryImage4 from "../img/Dubai/d10.jpg";
import galleryImage5 from "../img/Dubai/d11.jpg";
import galleryImage6 from "../img/Dubai/d12.jpg";

import galleryImage1_1 from "../img/Dubai/d1.jpg";
import galleryImage2_2 from "../img/Dubai/d2.jpg";
import galleryImage3_3 from "../img/Dubai/d3.png";
import galleryImage4_4 from "../img/Dubai/d4.jpg";
import galleryImage5_5 from "../img/Dubai/d5.jpg";
import galleryImage6_6 from "../img/Dubai/d6.jpg";
import bg1 from "../img/bg/d3.jpg";

import location1 from "../img/icon/location-dot3.svg";

const TourDubai = () => {
  const { id } = useParams();

  const detailSliderRef = useRef(null);
  const detailsGalleryRef = useRef(null);
  const tourDetailsRef = useRef(null);
  const locationMapRef = useRef(null);

  const toursData = {
    1: {
      heading: "Dubai Tour Packages from Chennai",
      title1: "Dubai Tour Packages from Chennai",
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
        "All entry tickets",
      ],
      Priceexclusions: [
        "GST 5%",
        "Lunch & Dinner",
        "Laundry service",
        "Mineral Water",
        "Tips",
        "Other than inclusions",
        "Air Fare",
      ],

      description1: [
        "Take a look at our Dubai tour packages from Chennai to make the most of your visit to the city's tourist attractions and sightseeing spots. With its majestic skyscrapers, rich historical legacy, enormous desert dunes, stunning white sand beaches, thrilling adventure sports, thrilling theme parks, wealthy retail complexes, and more, Dubai is a destination for thrill-seekers seeking an exciting vacation. Often referred to as the Venice of the Gulf, Dubai serves as the primary port and commercial center of the United Arab Emirates. The best time to maximize the value of your Dubai package is from November to March",
      ],
      // tourCode: ["CBT-22/04"],
      duration: ["4 Nights, 5 Days"],
      hotelDetails: ["Fortune Karama Hotel,Smana Al Raffa Hotel"],
      itinerary: [
        {
          day: "Day 1",
          details: "Arrival + Dhow Cruise Dinner Creek",
        },
        {
          day: "Day 2",
          details: "Dubai Half Day City Tour,Desert Safari – Private Jeep",
        },
        {
          day: "Day 3",
          details:
            "Dubai Frame + Burj Khalifa At the Top – 124th and 125th Floor Non Peak Hours",
        },
        {
          day: "Day 4",
          details: "Miracle Garden + Global Village",
        },
        {
          day: "Day 5",
          details: "Leasure Day Departure",
        },
      ],
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d925123.3183073788!2d55.227488!3d25.076022!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1728102863933!5m2!1sen!2sin",
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
      <Contentsection
        heading={selectedTour.heading}
        children={""}
        backgroundImage={bg1}
      />
      <Helmet>
        <title>Dubai Tour Packages from Chennai | Coimbatore | Capstone</title>
        <meta
          name="description"
          content="Take a look at our Dubai tour packages from Chennai to make the most of your visit to the city's tourist attractions and sightseeing spots"
        />
        <meta
          name="keywords"
          content="Dubai tour packages from chennai, dubai tour, dubai tourist places, dubai flight, dubai tour package"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "WebSite",
            name: "Capstone Holidays",
            url: "https://www.capstoneholidays.in/tour/dubai-tour-packages-from-chennai/",
            potentialAction: {
              "@type": "SearchAction",
              target:
                "https://www.capstoneholidays.in/tour/dubai-tour-packages-from-chennai/{search_term_string}",
              "query-input": "required name=search_term_string",
            },
          })}
        </script>
      </Helmet>
      {/* Navigation Links */}
      <nav className="tour-navigation">
        <ul>
          {/* <li onClick={() => scrollToSection(detailSliderRef)}>Detail Slider</li> */}
          <li onClick={() => scrollToSection(detailsGalleryRef)}>Gallery</li>
          <li onClick={() => scrollToSection(tourDetailsRef)}>Tour Details</li>
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
            <div className="col-12">
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

export default TourDubai;
