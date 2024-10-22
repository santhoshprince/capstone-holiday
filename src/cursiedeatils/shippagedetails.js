import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../components/sidebardetailspage";
import Contentsection from "../components/contentbg";
import DetailSlider from "../components/detailslider";
import DetailsGallery from "../components/detailsgallery";
import Itinerary from "../components/itinerary";
import PopularTags from "../components/populartags";
import TourDetails from "../components/tourdetails";
import galleryImage1 from "../img/cruise/c8.jpg";
import galleryImage2 from "../img/cruise/c2.jpg";
import galleryImage3 from "../img/cruise/c7.jpg";
import galleryImage4 from "../img/cruise/12.jpg";
import galleryImage5 from "../img/cruise/11.jpg";
import galleryImage6 from "../img/cruise/c4.jpg";

import { Helmet } from "react-helmet";

import galleryImage1_1 from "../img/cruise/c9.jpg";
import galleryImage2_2 from "../img/cruise/c7.jpg";
import galleryImage3_3 from "../img/cruise/c6.jpg";
import galleryImage4_4 from "../img/cruise/c5.jpg";
import galleryImage5_5 from "../img/cruise/c3.jpg";
import galleryImage6_6 from "../img/cruise/c2.jpg";

import bg1 from "../img/cruise/c1.jpg";

const TourPage = () => {
  const { id } = useParams();

  const detailsitinerary = useRef(null);
  const detailsGalleryRef = useRef(null);
  const tourDetailsRef = useRef(null);
  const locationMapRef = useRef(null);
  const toursData = {
    1: {
      heading: "SINGAPORE PENANG & PHUKET CRUISE",
      title1: "SINGAPORE PENANG & PHUKET CRUISE",
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

      description1: [
        "Choose our Singapore Malaysia tour package with cruise on to experience the ultimate adventurous and fun trip. Singapore is an all-around romantic escape for couples due to its tropical atmosphere. Singapore is a traveler's paradise, especially during the January New Year, the big shopping festival from June to August, and the mid-autumn festival in October. Sentosa Island, Gardens by the Bay, Marina Bay, Henderson Bridge, Jurong Bird Park, and Universal Studios are the most visited and crowded tourist destinations in Singapore. Kuala Lumpur, Batu Caves, Mount Kinabalu, Sipadan Island, Pantai Cenang beach, Desaru beach, are the most admired tourist destinations in Malaysia. November to May is when Malaysia is most admired. During this month, which is favorable for tourism, our Singapore and Malaysia Tour Packages organise trips to both Singapore and Malaysia. Singapore can be visited and enjoyed throughout the year",
      ],
      duration: ["4 Nights, 5 Days"],
      shiphighlights: [
        "Soak up the relaxation and discover a different type of hot spot at Whirpools.",
        "Grab your board and get ready for 30,000 gallons of rushing awesome headed your way at FlowRider.",
        "Welcome to Chef’s Table, the most exclusive and elevated dining experience on the fleet.",
        "Make your circus dreams come true on The Flying Trapeze.",
        "Rush hour gets a thrilling spin at the largest indoor activity space ever to set sail at SeaPlex.",
        "Scope out the surrounding sights from the North Star.",
        "Power up vacation playtime with the whole family at SeaPlex.",
        "Fill your days with non-stop thrills onboard the adventure-packed Anthem of the Seas. Check off your bucket list for good onboard the award-winning, Anthem of the Seas®. From 360-degree views in the North Star observation capsule to simulated skydiving on RipCord® by iFLY and the only bumper cars at sea, this memory-maxing ship is your ticket to next-level experiences and once-in-a-lifetime adventure.",
      ],
      itinerary: [
        {
          day: "Day 1",
          details: "SINGAPORE, SINGAPORE",
        },
        {
          day: "Day 2",
          details: "PENANG, MALAYSIA",
        },
        {
          day: "Day 3",
          details: "PHUKET, THAILAND",
        },
        {
          day: "Day 4",
          details: "SINGAPORE, SINGAPORE",
        },
      ],
      // mapSrc:
      //   "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d250116.67994327686!2d92.722464!3d11.618137!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3088946c176b5971%3A0x5bfa43a5e9a5ed30!2sSri%20Vijaya%20Puram%2C%20Andaman%20and%20Nicobar%20Islands!5e0!3m2!1sen!2sin!4v1728185002454!5m2!1sen!2sin",

      // iconSrc: [location1],
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
    title: "Singapore Malaysia Tour Package with Cruise",
    keywords:
      "singapore malaysia tour package with cruise, cruise tour packages, cruise packages, cruise tour, cruise ship tour plan",
    description:
      "Choose our Singapore Malaysia tour package with cruise on these months to experience the ultimate adventurous and fun trip.",
    schema: {
      "@context": "https://schema.org/",
      "@type": "WebSite",
      name: "Capstone Holidays",
      url: "https://www.capstoneholidays.in/singapore-malaysia-tour-package-with-cruise/",
      potentialAction: {
        "@type": "SearchAction",
        target:
          "https://www.capstoneholidays.in/singapore-malaysia-tour-package-with-cruise/{search_term_string}",
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
      <Contentsection heading={selectedTour.heading} children={""} backgroundImage={bg1} />

      <nav className="tour-navigation">
        <ul>
          {/* <li onClick={() => scrollToSection(detailSliderRef)}>Detail Slider</li> */}
          <li onClick={() => scrollToSection(detailsGalleryRef)}>Gallery</li>
          <li onClick={() => scrollToSection(tourDetailsRef)}>Tour Details</li>
          <li onClick={() => scrollToSection(detailsitinerary)}>Itinerary</li>
          {/* <li onClick={() => scrollToSection(locationMapRef)}>Location</li> */}
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
            <div className="col-12" ref={tourDetailsRef}>
              <TourDetails
                title1={selectedTour.title1}
                description1={selectedTour.description1}
                duration={selectedTour.duration}
                tourCode={selectedTour.tourCode}
                priceIncludes={selectedTour.priceIncludes}
                hotelDetails={selectedTour.hotelDetails}
                PackageInclusion={selectedTour.PackageInclusion}
                Priceexclusions={selectedTour.Priceexclusions}
                shiphighlights={selectedTour.shiphighlights}
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

          <div className="row">
            <div className="col-12" ref={detailsGalleryRef}>
              <DetailsGallery images={selectedTour.gallerydata} />
            </div>
          </div>

          {/* Full-width map */}
          {/* <div className="row">
            <div className="col-12" ref={locationMapRef}>
              <LocationMap
                title="Location"
                mapSrc={selectedTour.mapSrc}
                iconSrc={selectedTour.iconSrc}
              />
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default TourPage;
