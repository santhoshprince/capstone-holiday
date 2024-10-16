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
import galleryImage6_6 from "../img/gallery/2151625212.jpg";

import location1 from "../img/icon/location-dot3.svg";

const GroupTour = () => {
  const { id } = useParams();

  const detailsitinerary = useRef(null);
  const detailsGalleryRef = useRef(null);
  const tourDetailsRef = useRef(null);
  const locationMapRef = useRef(null);
  const toursData = {
    1: {
      heading: "Kerala Group Tour package",
      title1: "Kerala Group Tour package",
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
        "Accommodation on twin share basis at hotel specified / Similar. (Tipple share for extra person)",
        "Train Fare",
        "All Meals as per hotel menu",
        "All meals during houseboat stay",
        "All tours and transfers as stated in private Vehicle",
        "English / Hindi speaking friendly driver cum Guide throughout your trip",
        "Driver’s Bata, Toll, Parking, Road tax, Fuel charge, Interstate charges",
        "Local Assistance & 24x7 Helpline",
      ],
      Priceexclusions: [
        "Travel insurance",
        "Entry fees for Shows, Parks, Safaris, Rides, Monuments, Boats, Room Heater Charges etc.",
        "Tipping for driver, restaurant and guide",
        "Extra expenses for Early check in / Late check out",
        "Charge extra for Candle Light Dinner, Flower Bed, Decoration, Cakes etc. in Honeymoon Packages.",
        "Expenses for condition beyond control",
        "Any service, Sightseeing which not mentioned.",
        "GST 5% (On final bill amount)",
      ],

      description: [
        "Get ready to have a delightful experience of cultural exploration, natural beauty, and relaxing moments with our Kerala group tour package. The specially curated Kerala family tour package all the important places in Kerala like Kochi, Thiruvananthapuram, and Alappuzha. With our family and group-friendly accommodations, we provide amenities suitable for all age groups. Create a memorable experience with our Kerala group tour package.",
      ],
      duration: ["05 Days,04 Nights"],
      // tourCode: ["AH-KRL-17"],
      hotelDetails: [
        "Ayur Green",
        "Amuse Vista",
        "Munnar Queen",
        "T & U",
        "Periyar Meadows",
        "Grand Thakkady",
        "Peppervine",
        "Crown Valley",
        "Deluxe Houseboat",
      ],
      itinerary: [
        {
          day: "Day 1",
          details:
            "Arrive Cochin Airport and Transfer to hotel in Munnar by road on the way visit Spice Plantations. Arrival at a place which is called ‘nature’s lovers paradise’. On arrival at Munnar, check in at Hotel. If time permits you can visit some place of day two. Overnight stay in Munnar",
        },
        {
          day: "Day 2",
          details:
            "Early morning After breakfast proceed to Munnar sightseeing. Visit Eravikulam National Park, Madupetty Dam, Echo Point, Kundala Lake, Photo Point, Indo-Swiss Project, Elephant Arrival Spot, Tea museum, etc. overnight stay at hotel. (You can visit some places on day one as per time availability)",
        },
        {
          day: "Day 3",
          details:
            "After breakfast, drive to Thekkady/Periyar. The Periyar wildlife sanctuary is one of the India’s majorwild life sanctuary. On arrival Thekkady check in hotel and get fresh. Afternoon proceed for localsightseeing. Visit Spice Plantation, Periyar Lake, Periyar wild life sanctuary etc. Evening boating at Periyar lake (optional). Overnight stay in Thekkady.",
        },
        {
          day: "Day 4",
          details:
            "After breakfast transfer to Alleppey/Kumarakom. After reach check in to the Hotel and later proceedfor visit Alleppey beach, sunset and othe activities or enjoy shopping. Overnight stay in Alleppy.Or Thekkady- Kumarakom – After breakfast transfer to Kumarakom by road. Check in to hotel andlater proceed for Bird Sanctuary visit. Overnight at the hotel. Overnight stay in Kumarakom.",
        },
        {
          day: "Day 5",
          details:
            "After breakfast check out from Houseboat and you will be driven back to CochinAirport/Railway station for your onward journey. Tour ends with wonderful memorize of Kerala by Capstone Holidays",
        },
      ],
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8033168.194719898!2d76.138367!3d10.544276!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0812ffd49cf55b%3A0x64bd90fbed387c99!2sKerala!5e0!3m2!1sen!2sin!4v1728191882805!5m2!1sen!2sin",
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
    title: "Kerala Group Tour Package | Kerala Munnar Group Tour",
    keywords:
      "kerala group tour package, kerala munnar group tour, kerala group tour, kerala group, kerala munnar group tour packages, kerala munnar group tour",
    description:
      "We offer the greatest Kerala Group Tour package that is affordable for an exciting holiday with a group of people.",
    schema: {
      "@context": "https://schema.org/",
      "@type": "WebSite",
      name: "Capstone Holidays",
      url: "https://www.capstoneholidays.in/tour/kerala-group-tour-package/",
      potentialAction: {
        "@type": "SearchAction",
        target:
          "https://www.capstoneholidays.in/tour/kerala-group-tour-package/{search_term_string}",
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
                tourCode={selectedTour.tourCode}
                priceIncludes={selectedTour.priceIncludes}
                hotelDetails={selectedTour.hotelDetails}
                PackageInclusion={selectedTour.PackageInclusion}
                Priceexclusions={selectedTour.Priceexclusions}
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

export default GroupTour;
