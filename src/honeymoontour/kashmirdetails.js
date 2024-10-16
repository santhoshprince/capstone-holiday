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
import galleryImage1 from "../img/kashmir/16.jpg";
import galleryImage2 from "../img/kashmir/15.jpg";
import galleryImage3 from "../img/kashmir/2.jpg";
import galleryImage4 from "../img/kashmir/3.jpg";
import galleryImage5 from "../img/kashmir/12.jpg";
import galleryImage6 from "../img/kashmir/11.jpg";
import { Helmet } from "react-helmet";
import galleryImage1_1 from "../img/kashmir/10.jpg";
import galleryImage2_2 from "../img/kashmir/9.jpg";
import galleryImage3_3 from "../img/kashmir/8.jpg";
import galleryImage4_4 from "../img/kashmir/7.jpg";
import galleryImage5_5 from "../img/kashmir/6.jpg";
import galleryImage6_6 from "../img/kashmir/5.jpg";

import location1 from "../img/icon/location-dot3.svg";
import bg1 from "../img/kashmir/9.jpg";

const TourPage = () => {
  const { id } = useParams();

  const detailsitinerary = useRef(null);
  const detailsGalleryRef = useRef(null);
  const tourDetailsRef = useRef(null);
  const locationMapRef = useRef(null);
  const toursData = {
    1: {
      heading: "Kashmir Honeymoon Tour Package",
      title1: "Kashmir Honeymoon Tour Package",
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
        "Breakfast & Dinner",
        "All accommodation as per Double Sharing",
        "Shikara Ride over Dal Lake",
        "Pick up and drop from As per Itinerary",
        "Toll Taxes & Service charges",
        "All Transportation on private basis",
      ],
      Priceexclusions: [
        "Any meals other than those specified in ‘Inclusions’.",
        "Chained vehicle from Tangmarg to Gulmarg.",
        "Expenses of personal nature such as tips.",
        "Any additional expenses incurred due to any train delay or cancellation.",
        "Guide & Entrance fees during sightseeing.",
        "Transfer from Banganga to Vaishno Devi Temple Visit to Ganderbal and Thajiwas Glacier.",
        "Visit to Aru, Chandanwari, Baisaran, and Betab valleys. Expenses of watersports.",
        "Cable Car / Pony Ride in Gulmarg, Pahalgam, & Sonamarg.",
      ],

      description: [
        "Experience the tour of Srinagar, the summer capital of Jammu and Kashmir, with our Srinagar tour packages which offer a mix of cultural, natural, and romantic experiences. Jammu Kashmir travel and tourism includes all the unique experiences like the shikhara ride on Dal Lake, Lal Chowk, and Polo View Market, for traditional Kashmiri handicrafts, Pashmina shawls, and more. With Srinagar tour packages you explore local Kashmiri cuisine, including Wazwan dishes, Rogan Josh, and Yakhni.",
      ],
      duration: ["4 Nights, 5 Days"],
      hotelDetails: [
        "3 STAR	The victory / MILAN	MAP Deluxe Srinagar",
        "3 STAR	HOUSEBOAT	MAP Deluxe Srinagar",
      ],
      itinerary: [
        {
          day: "Day 1",
          details: "Arrive Srinagar",
        },
        {
          day: "Day 2",
          details: "Srinagar | Gulmarg (85 kms / approx. 2½ hour drive)",
        },
        {
          day: "Day 3",
          details: "Day Excursion to Sonamarg (90 kms / approx. 3 hour drive",
        },
        {
          day: "Day 4",
          details: "Srinagar / Pahalgam",
        },
        {
          day: "Day 5",
          details: "Return home with happy memories",
        },
      ],
      note: [
        "Our all drivers are well trained and work as a Drivers cum Guides.",
        "In Kashmir, as per rules below are the places we have to take Union Vehicles for sightseeing. We can book it for you on request or you can directly book and pay at the counter as well.",
      ],

      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3405659.0703622214!2d75.264724!3d33.531573!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e1092499ffa89d%3A0x6567a6d4697e7f1!2sJammu%20and%20Kashmir!5e0!3m2!1sen!2sin!4v1728194518249!5m2!1sen!2sin",

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
    title: "Kashmir Honeymoon Package for Couple | Capstone",
    keywords:
      "kashmir honeymoon package for couple, kashmir honeymoon packages from chennai, kashmir honeymoon packages, kashmir honeymoon plan, kashmir honeymoon trip",
    description:
      "Capstone Holidays provides customised Kashmir honeymoon package for couple that are made to guarantee an unforgettable experience with affordable costs.",
    schema: {
      "@context": "https://schema.org/",
      "@type": "WebSite",
      name: "Capstone Holidays",
      url: "https://www.capstoneholidays.in/kashmir-honeymoon-package-for-couple/",
      potentialAction: {
        "@type": "SearchAction",
        target:
          "https://www.capstoneholidays.in/kashmir-honeymoon-package-for-couple/{search_term_string}",
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
          {/* Full-width gallery */}
          <div className="row">
            <div className="col-12" ref={detailsGalleryRef}>
              <DetailsGallery images={selectedTour.gallerydata} />
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

          <div className="row">
            <div className="col-12" ref={tourDetailsRef}>
              <TourDetails
                title1={selectedTour.title1}
                description={selectedTour.description}
                duration={selectedTour.duration}
                tourCode={selectedTour.tourCode}
                priceIncludes={selectedTour.priceIncludes}
                hotelDetails={selectedTour.hotelDetails}
                PackageInclusion={selectedTour.PackageInclusion}
                Priceexclusions={selectedTour.Priceexclusions}
                note={selectedTour.note}
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
