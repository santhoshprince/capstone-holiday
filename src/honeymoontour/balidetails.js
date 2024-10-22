import React, { useRef } from "react";
import Sidebar from "../components/sidebardetailspage";
import Contentsection from "../components/contentbg";
import DetailSlider from "../components/detailslider";
import DetailsGallery from "../components/detailsgallery";
import Itinerary from "../components/itinerary";
import PopularTags from "../components/populartags";
import LocationMap from "../components/deatilsmap";
import TourDetails from "../components/tourdetails";
import galleryImage1 from "../img/tour/11021.jpg";
import galleryImage2 from "../img/tour/12.jpg";
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
import bg1 from "../img/bg/contact_bg_7.jpg";

import { Helmet } from "react-helmet";

const BaliDetails = () => {
  const detailsitinerary = useRef(null);
  const detailsGalleryRef = useRef(null);
  const tourDetailsRef = useRef(null);
  const locationMapRef = useRef(null);
  // Sample data - you can replace this with your actual content
  const tourDetails = {
    "bali-honeymoon-packages-from-chennai": {
      heading: "Bali HoneyMoon Tour Package",
      title1: "Bali HoneyMoon Tour Package",
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
        "Accommodation as per the above hotel.",
        "03 Breakfast.",
        "01 Double sharing.",
        "Sightseeing.",
        "All transfers.",
      ],
      Priceexclusions: [
        "Airfare.",
        "Visa on-arrival.",
        "GST 5% TAX.",
        "Any compulsory room supplement during the tour.",
        "Video and Camera permits at sights.",
        "Meals outside of the stated meal plan.",
        "Use of vehicle other than the specified above.",
        "Late check-out and Early check-in.",
        "Airport – Early Morning and Late-night pickup and Early Morning and Late-night surcharge.",
        "RTPCR.",
        "Bali tax.",
        "Insurance.",
        "Tips.",
      ],

      description1: [
        "Bali honeymoon packages from Chennai vary in price depending on the package you select and the length of your stay. With reasonably priced Bali honeymoon travel packages that are customized to your preferences and budget, Capstone Holidays guarantees a wonderful and exciting escape. Also, we provide a selection of Bali packages from Chennai based on your intended stay's length and price. Everything will be handled by us, including travel insurance, adventure activities, free breakfast and dinner, sightseeing, adventure activities, and visa and flight arrangements"
      ],
      // tourCode: ["CBT-22/04"],
      duration: ["5 Days 4 Nights (BALI)"],
      hotelDetails: [
        "Kuta: Ramada By Wyndham Bali Sunset Road Kuta (4 star) - 01 - 02",
        "Ubud: Dedary Resort Ubud (4 star) - 01 - 02 - One Bedroom Garden View Villa with Private Pool and Bathtub",
      ],
      tours: [
        "Uluwatu Temple Tour with Kecak Dance ** PVT Basis ** (Include: Entrance Fee Uluwatu Temple, Ticket Kecak Dance)",
        "West Nusa Penida Island Tour (min 2 Pax) ** PVT Basis ** (Inclusion: Return ticket fast boat on SIC, Entrance Ticket Visit: Kelingking Beach, Broken Beach, Angel Billabong, Crystal Bay, Indonesian Lunch & Driver Cum Guide. (NOTE: CHANGE LUNCH TO INDIAN RESTAURANT ADDITIONAL USD 10 / PAX))",
        "Watersport Tanjung Benoa A1 ** PVT Basis ** (Include: 1x Parasailing, 1x Banana Boat, 1x Jet Ski)",
        "Garuda Wisnu Kencana (GWK) ** PVT Basis **",
        "My Swing (Swing + Nest) ** PVT Basis ** (Included: 2 Single Swing, Fun Adrenaline Swing, Exciting Adrenaline Swing, Ultimate Swing, Couple Swing, Romantic Bed Swing, Family Bed Swing, Chicken Nest, Bird Nest, Sweet Love Nest, Glass Floor)",
        "Kintamani Volcano - Tegalalang Rice Field - Tegenungan Waterfall - Ubud Market ** PVT Basis ** (Include: Entrance Fees Kintamani Mount of Batur View, Tegalalang, Tegenungan Waterfall, Ubud Market)",
      ],
      note: [
        "Once the booking is reconfirmed, 100% cancellation will be charged if cancelled less than 21 days prior to arrival.\n" +
          "If booking is done less than 21 days from arrival or less, immediate reconfirmation will be required to secure the booking. Booking cannot be guaranteed until it is reconfirmed. Please note that if the booking is in the cancellation period (within 21 days from arrival), after confirmation if there are any cancellations, the penalties will be applied.\n" +
          "Maximum number of persons accommodation in a room would be 3 adults or 2 adults and 2 children.\n" +
          "Children above 12 years are considered as adults.\n" +
          "Children below 2 years will be free of charge (only one infant per couple).\n" +
          "If flight details are not received within 48 hours from arrival, airport transfers cannot be guaranteed.\n" +
          "Based on the flight timing, the final program may be subject to change. Kindly consider the confirmation voucher as the final.",
      ],
      itinerary: [
        {
          day: "Day 1",
          details:
            "Transfer Apt - Uluwatu Temple Tour with Kecak Dance - Transfer to Hotel",
        },
        {
          day: "Day 2",
          details: "West Nusa Penida Island Tour (min 2 Pax)",
        },
        {
          day: "Day 3",
          details:
            "Watersport Tanjung Benoa A1 - Garuda Wisnu Kencana (GWK) (along with Inter Hotel Transfer)",
        },
        {
          day: "Day 4",
          details:
            "My Swing (Swing + Nest) - Kintamani Volcano - Tegalalang Rice Field - Tegenungan Waterfall - Ubud Market",
        },
        {
          day: "Day 5",
          details: "Transfer Hotel - Apt",
        },
      ],
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1010291.3909974314!2d115.07157700000002!3d-8.455471!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd141d3e8100fa1%3A0x24910fb14b24e690!2sBali%2C%20Indonesia!5e0!3m2!1sen!2sin!4v1727415378982!5m2!1sen!2sin",

      iconSrc: [location1],
    },
  };

  // Get the path name to determine which tour details to show
  const path = window.location.pathname.split("/").pop(); // Gets the last part of the URL
  const tour = tourDetails[path];

  if (!tour) {
    return <div>Tour not found!</div>; // Fallback in case of no match
  }

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  const seoData = {
    title: "Bali Honeymoon Packages from Chennai | Capstone Holidays",
    keywords:
      "bali honeymoon packages from chennai, bali honeymoon packages, bali honeymoon packages trip, bali honeymoon plan, bali honeymoon packages from india",
    description:
      "Bali honeymoon packages from Chennai vary in price depending on the package you select and the length of your stay.",
    schema: {
      "@context": "https://schema.org/",
      "@type": "WebSite",
      name: "Capstone Holidays",
      url: "https://www.capstoneholidays.in/bali-honeymoon-packages-from-chennai/",
      potentialAction: {
        "@type": "SearchAction",
        target:
          "https://www.capstoneholidays.in/bali-honeymoon-packages-from-chennai/{search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
  };

  return (
    <div>
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
          heading={tour.heading}
          children={""}
          backgroundImage={bg1}
        />

        <nav className="tour-navigation">
          <ul>
            {/* <li onClick={() => scrollToSection(detailSliderRef)}>Detail Slider</li> */}
            <li onClick={() => scrollToSection(detailsGalleryRef)}>Gallery</li>
            <li onClick={() => scrollToSection(tourDetailsRef)}>
              Tour Details
            </li>
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
                    <DetailSlider images={tour.galleryImages} />
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
                  title1={tour.title1}
                  description1={tour.description1}
                  duration={tour.duration}
                  tourCode={tour.tourCode}
                  priceIncludes={tour.priceIncludes}
                  hotelDetails={tour.hotelDetails}
                  PackageInclusion={tour.PackageInclusion}
                  Priceexclusions={tour.Priceexclusions}
                  tours={tour.tours}
                  note={tour.note}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-12" ref={detailsitinerary}>
                <Itinerary title="Itinerary" itineraryData={tour.itinerary} />
              </div>
            </div>

            <div className="row">
              <div className="col-12" ref={detailsGalleryRef}>
                <DetailsGallery images={tour.gallerydata} />
              </div>
            </div>

            {/* Full-width map */}
            <div className="row">
              <div className="col-12" ref={locationMapRef}>
                <LocationMap
                  title="Location"
                  mapSrc={tour.mapSrc}
                  iconSrc={tour.iconSrc}
                />
              </div>
            </div>
          </div>
        </section>
      </>
    </div>
  );
};

export default BaliDetails;
