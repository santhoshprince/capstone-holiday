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
import galleryImage1 from "../img/tour/11021.jpg";
import galleryImage2 from "../img/tour/354.jpg";
import galleryImage3 from "../img/tour/835.jpg";
import galleryImage4 from "../img/tour/15793.jpg";
import galleryImage5 from "../img/tour/340.jpg";
import galleryImage6 from "../img/tour/365.jpg";
import { Helmet } from "react-helmet";
import galleryImage1_1 from "../img/gallery/358.jpg";
import galleryImage2_2 from "../img/gallery/343.jpg";
import galleryImage3_3 from "../img/gallery/369.jpg";
import galleryImage4_4 from "../img/gallery/963.jpg";
import galleryImage5_5 from "../img/gallery/11021.jpg";
import galleryImage6_6 from "../img/tour/365.jpg";

import location1 from "../img/icon/location-dot3.svg";
import bg1 from "../img/correctionimg/36.jpg";

const TourPage = () => {
  const { id } = useParams();

  const detailsitinerary = useRef(null);
  const detailsGalleryRef = useRef(null);
  const tourDetailsRef = useRef(null);
  const locationMapRef = useRef(null);
  const toursData = {
    1: {
      heading: "Bali Group Tour Package",
      title1: "Bali Group Tour Package",
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
      ],
      description1: [
        "Practically all Bali trip packages include Mt. Batur on their list of attractions. Take a Bali group trip to maximize your time on the volcanic expedition. The best time to hike is early in the morning and the views are breathtaking. Invest in a Bali group tour package and engage on a spiritual journey to Tanah Lot, Ulun Danu Beratan Temple, and Uluwatu Temple. It also has the accompanying traditional Kecak dance. Find your way through the beautiful fields of the Tegallalang rice terraces. For adventure, add White water rafting to your Bali group trip and you will be amazed with the enjoyment it offers.",
      ],
      tourCode: ["CBT-22/01"],
      duration: ["3 Days 2 Nights (BALI)"],
      hotelDetails: [
        "Twin Sharing Accommodation with Breakfast",
        "Private air-conditioned vehicle for tour time & Airport Pick & Drop",
        "English Speaking Driver",
        "Entrance fee",
        "1 Jimbaran Bay Dinner",
        "4 Set Menu Dinner at Hotel",
        "3* - Legian Village Hotel or Legian Paradiso or Swiss-Belexpress Kuta Legian or Similar",
        "4* - J4 Hotel Legian or Bedrock Hotel Legian or Grand Ixora Hotel or Similar",
      ],
      itinerary: [
        {
          day: "Day 1",
          details:
            "After Arrive transfer Hotel. Evening visit Uluwatu Temple & Jimbarn Dinner. (D)",
        },
        {
          day: "Day 2",
          details:
            "Full Day Visit kintamani volcano &Tanah Lot. Evening Dinner set menu at Hotel. (B/D)",
        },
        {
          day: "Day 3",
          details: "Hotel to Bali Airport Transfer.(B)",
        },
      ],
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1010291.3909974314!2d115.07157700000002!3d-8.455471!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd141d3e8100fa1%3A0x24910fb14b24e690!2sBali%2C%20Indonesia!5e0!3m2!1sen!2sin!4v1727415378982!5m2!1sen!2sin",

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

  const seoData = {
    title: "Bali Group Tour Package | Bali Family Tour Packages",
    keywords:
      "bali group tour package, bali family tour packages, bali group tour, bali family tour, bali group tour from Chennai, bali",
    description:
      "Invest in a Bali group tour package and engage on a spiritual journey to Tanah Lot, Ulun Danu Beratan Temple, and Uluwatu Temple.",
    schema: {
      "@context": "https://schema.org/",
      "@type": "WebSite",
      name: "Capstone Holidays",
      url: "https://www.capstoneholidays.in/tour/bali-group-tour-package/",
      potentialAction: {
        "@type": "SearchAction",
        target:
          "https://www.capstoneholidays.in/tour/bali-group-tour-package/{search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
  };
  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
        <script type="application/ld+json">
          {JSON.stringify(seoData.schema)}
        </script>
      </Helmet>
      <Contentsection
        heading={selectedTour.heading}
        children={""}
        backgroundImage={bg1}
      />

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
                description1={selectedTour.description1}
                duration={selectedTour.duration}
                tourCode={selectedTour.tourCode}
                priceIncludes={selectedTour.priceIncludes}
                hotelDetails={selectedTour.hotelDetails}
                PackageInclusion={selectedTour.PackageInclusion}
              />
            </div>
          </div>
          {/* Full-width gallery */}

          <div className="row">
            <div className="col-12" ref={detailsitinerary}>
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

export default TourPage;
