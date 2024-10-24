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
import bg1 from "../img/correctionimg/27.jpg";
import bg2 from "../img/correctionimg/28.jpg";

import location1 from "../img/icon/location-dot3.svg";

const TourPage = () => {
  const { id } = useParams();

  const detailsitinerary = useRef(null);
  const detailsGalleryRef = useRef(null);
  const tourDetailsRef = useRef(null);
  const locationMapRef = useRef(null);
  const tourDetails = {
    "kashmir-tour-packages-from-chennai": {
      heading: "Kashmir Tour Packages from Chennai",
      title1: "Kashmir Tour Packages from Chennai",
      backgroundImage:bg1,
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
        "We provide Kashmir tour packages from Chennai so you may enjoy some regions like Gulmarg, Sri Nagar, Pahalgam, and Sonmarg in the springtime. Kashmir is worth visiting all year round, however the finest seasons to visit are spring and winter. Because of the snow-capped mountain peaks, lush meadows, pleasant weather, tumbling streams, lakes, and blooming meadows and landscapes, every part of Kashmir looks as if it were taken from a picture. The cuisine of this natural paradise is delicious and fascinating",
      ],
      duration: [
        "07 Days,06 Nights  Patanitop 1N/Srinagar 2N/Pahalgam 1N/Gulmarg 1N/Jammu 1N (Tour Duration)",
      ],
      tourCode: ["AH-JK-16"],
      hotelDetails: [
        "Hotel Shefaf",
        "Tourist Palace",
        "Green Park",
        "Royal Arabia",
        "The Regency",
        "Alpie Ridge",
        "Asian Park",
        "Hotel Hilltop Pahalgam",
        "Pine Spring",
        "Hotel Mount Shivalik",
        "Chirag International",
        "Hotel Samson",
        "Dolphin",
        "Green Top",
      ],
      PackageInclusion: [
        "Accommodation on twin share basis at hotel specified /Similar. (Triple share for extra person)",
        "Daily breakfast as per hotel menu",
        "All meals during houseboat stay",
        "All tours and transfers as stated in private Air-conditioned vehicle. (Swift / Etios / Innova etc.)",
        "English / Hindi speaking friendly driver cum guide throughout your trip",
        "Driver’s Bata, Toll, Parking, Road tax, Fuel charge, Interstate charges",
        "Local Assistance & 24x7 Helpline",
      ],
      Priceexclusions: [
        "Airfare / Train Fare",
        "Travel insurance",
        "Entry fees for Shows, Parks, Safaris, Monuments, Boats etc.",
        "Tipping for driver/restaurant and guide",
        "Extra expenses for Early check in / Late check out",
        "Charge extra for Candle Light Dinner, Flower Bed, Cake etc. in Honeymoon Packages",
        "Zero Point/Sonmarg/Betab Valley/Chain Vehicle not included",
        "Any service which is not mentioned in inclusion. @ GST 5%",
      ],
      note: [
        "Rooms are subject to availability.",
        "AC will not operate in vehicle on Hills.",
        "Charges for AC / Heater will be extra and as per hotel policy.",
        "In some areas, if a local cab needs to be booked, it will be paid directly by the guest/tourist.",
        "Vehicles are on disposal from Station to Station or Airport to Airport.",
        "Child below 5 yrs is complimentary and between 5-11 is chargeable at 50% or as per hotel & area policy.",
        "Peak season in Ladakh from May to September. Rates may change or will be the same at that time (Peak Season Rates Apply).",
        "Cost incidental to any change in the itinerary/stay on account of flight cancellation, due to bad weather, extra stay or expenses.",
        "Read all terms & conditions carefully before booking any package which is maintained on the website.",
      ],
      itinerary: [
        {
          day: "Day 1",
          details:
            "Arrival Srinagar meeting and assistance by our representative then transfer to the Hotel.After fresh Start Local Sightseeing the famous Mughal gardens “NISHAT BAGH” “Cheshmashash” and “SHALIMAR BAGH” Afternoon free for personal activities like Shopping. in the Evening return back to the Hotel. Dinner and overnight stay in Srinagar.",
        },
        {
          day: "Day 2",
          details:
            "After breakfast depart for full day tour to Sonmarg. Full day to enjoy Sonmarg. In the evening return back to Srinagar. Dinner and overnight stay in Srinagar.",
        },
        {
          day: "Day 3",
          details:
            "After breakfast leave from Srinagar and Drive straight to Pahalgam. On the way visit famous Saffron Field, Full day Enjoyment in Pahalgam,Full Day enjoyment in Chandanwari/ Aru valley/ Bataab valley (at your own Cost). In the Evening Return Back to Hotel. Dinner and overnight stay in Pahalgam.",
        },
        {
          day: "Day 4",
          details:
            "After breakfast leave from Pahalgam and Drive straight to Gulmarg. Full day Enjoyment in Gulmarg, Full day Enjoyment in Gulmarg Well as Gondola Ride (Cable car) upto Gulmarg to Khalinmarg, at your (own cost) Dinner and overnight stay in Gulmarg",
        },
        {
          day: "Day 5",
          details:
            "After checkout hotel drive to Srinagar join hotel. Day free for leisure and shopping. In the evening enjoy shikara ride on dal lake. Then back to hotel. Dinner and overnight stay in Srinagar.",
        },
        {
          day: "Day 6",
          details:
            "After breakfast leave from Srinagar and transfer to Airport to connect Flight at your onward Destination to Tour ends with sweet memories by Capstone Holidays",
        },
      ],

      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3405659.0703622214!2d75.264724!3d33.531573!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e1092499ffa89d%3A0x6567a6d4697e7f1!2sJammu%20and%20Kashmir!5e0!3m2!1sen!2sin!4v1728194518249!5m2!1sen!2sin",
      iconSrc: [location1],
      title: "Kashmir Tour Packages from Chennai | Coimbatore",
      keywords:
        "kashmir tour packages from Chennai, Kashmir tour package, Kashmir tour, kashmir",
      description:
        "We provide Kashmir tour packages from Chennai so you may enjoy some regions like Gulmarg, Sri Nagar, Pahalgam, and Sonmarg in the springtime",
      schema: {
        "@context": "https://schema.org/",
        "@type": "WebSite",
        name: "Capstone Holidays",
        url: "https://www.capstoneholidays.in/tour/kashmir-tour-packages-from-chennai/",
        potentialAction: {
          "@type": "SearchAction",
          target:
            "https://www.capstoneholidays.in/tour/kashmir-tour-packages-from-chennai/{search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
    },

    "srinagar-tour-packages": {
      heading: "Srinagar Gulmarg Pahalgam Tour Packages",
      title1: "Srinagar Gulmarg Pahalgam Tour Packages",
      backgroundImage:bg2,
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
        "Book our Srinagar Tour Packages and enjoy the memorable Dal Lake Shikara ride, Mughal Gardens visit, and relish the tastiest retreat of Kashmir. Srinagar is home to a number of magnificent and well-known Mughal gardens, such as Shalimar Bagh, Nishat Bagh, and Cheshma Shahi. If you wish to travel within Kashmir, Jammu Kashmir Tourism offers private taxis or public buses, as there is only road connectivity to places outside of Srinagar. Goshtaba, Mutton Roghan Josh, Kahwa, Kashmiri Wazwan, Dum Aloo, Khambir, Modur Pulav, and Lyodur Tschaman are a few of the delicacies that are popular in Kashmir.",
      ],
      duration: [
        "05 Days / 04 Nights - Srinagar (2N) – Gulmarg (1N) – Pahalgam (1N) (Tour Duration)",
      ],
      // tourCode: ["AH-KRL-15"],
      hotelDetails: [
        "Hotel Shefaf",
        "Tourist Palace",
        "Green Park",
        "Royal Arabia",
        "The Regency",
        "Alpie Ridge",
        "Asian Park",
        "Hotel Hilltop Pahalgam",
        "Pine Spring",
      ],
      PackageInclusion: [
        "Accommodation on twin share basis at hotel specified / Similar or as per booking",
        "Daily breakfast & Dinner",
        "Airport / Station / Bus stop - Pickup-Drop",
        "All tours and transfers as stated in private Non Air-conditioned vehicle. (Swift / Indigo / Indica / Innova / TT)",
        "English / Hindi speaking friendly driver cum guide throughout your trip",
        "Driver’s Bata, Toll, Parking, Road tax, Interstate charges",
        "All applicable hotel taxes",
      ],
      Priceexclusions: [
        "Airfare / Train Fare",
        "Travel insurance",
        "Entry fees for Shows, Parks, Safaris, Monuments, Boats etc.",
        "Tipping for driver/restaurant and guide",
        "Extra expenses for Early check in / Late check out",
        "Charge extra for Candle Light Dinner, Flower Bed, Cake etc. in Honeymoon Packages",
        "Zero Point/Sonmarg/Betab Valley/Chain Vehicle not included",
        "Any service which is not mentioned in inclusion. @ GST 5%",
      ],
      note: [
        "Rooms are subject to availability. AC will not operate in vehicle on Hills.",
        "Charges for AC/Heater will be extra and as per hotel policy.",
        "In some areas, if a local cab needs to be booked, it will be paid directly by the guest/tourist.",
        "Vehicles are on disposal from Station to Station or Airport to Airport.",
        "Child below 5 years is complimentary; children between 5-11 years are chargeable at 50% or as per hotel & area policy.",
        "Peak season in Ladakh is from May to September. Rates may change or remain the same during this time (Peak Season Rates Apply).",
        "Cost incidental to any change in the itinerary/stay on account of flight cancellation, bad weather, extra stay, or expenses.",
      ],
      itinerary: [
        {
          day: "Day 1",
          details:
            "Arrival Srinagar meeting and assistance by our representative then transfer to the Hotel. After fresh Start Local Sightseeing the famous Mughal gardens “NISHAT BAGH” “Cheshmashash” and “SHALIMAR BAGH” Afternoon free for personal activities like Shopping. in the Evening return back to the Hotel for dinner and overnight stay in Srinagar.",
        },
        {
          day: "Day 2",
          details:
            "After breakfast leave from Srinagar and Drive straight to Pahalgam. On the way visit famous Saffron Field, Full day Enjoyment in Pahalgam,Full Day enjoyment in Chandanwari/ Aru valley/ Bataab valley (at your own Cost). In the Evening Return Back to Hotel For dinner and overnight stay at Pahalgam.",
        },
        {
          day: "Day 3",
          details:
            "After breakfast leave from Pahalgam and Drive straight to Gulmarg. Full day Enjoyment in Gulmarg, Full day Enjoyment in Gulmarg Well as Gondola Ride (Cable car) upto Gulmarg to Khalinmarg, at your (own cost). Dinner and overnight stay at Gulmarg.",
        },
        {
          day: "Day 4",
          details:
            "After checkout hotel drive to Srinagar join hotel. Day free for leisure & shopping. In the evening enjoy shikara ride on dal lake. Dinner and overnight stay in Srinagar.",
        },
        {
          day: "Day 5",
          details:
            "After breakfast leave from Srinagar and transfer to Airport to connect Flight at your onward Destination.Tour ends with sweet memories by Capstone Holidays.",
        },
      ],

      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3405659.0703622214!2d75.264724!3d33.531573!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e1092499ffa89d%3A0x6567a6d4697e7f1!2sJammu%20and%20Kashmir!5e0!3m2!1sen!2sin!4v1728194518249!5m2!1sen!2sin",
      iconSrc: [location1],
      title: "Srinagar Tour Packages | Capstone Holidays Coimbatore",
      keywords:
        "srinagar tour packages, srinagar tour, kashmir flight tickets, kashmir hotels",
      description:
        "Book our Srinagar Tour Packages and enjoy the memorable Dal Lake Shikara ride, Mughal Gardens visit, and relish the tastiest retreat of Kashmir",
      schema: {
        "@context": "https://schema.org/",
        "@type": "WebSite",
        name: "Capstone Holidays",
        url: "https://www.capstoneholidays.in/tour/srinagar-tour-packages/",
        potentialAction: {
          "@type": "SearchAction",
          target:
            "https://www.capstoneholidays.in/tour/srinagar-tour-packages/{search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
    },
  };

  const { tourId } = useParams();

  // Get the path name to determine which tour details to show
  const path = window.location.pathname.split("/").pop(); // Gets the last part of the URL
  const tour = tourDetails[path] || [tourId];

  const metaDetails = tour
    ? {
        title: tour.title || "Default Title",
        description: tour.description || "Default Description",
        keywords: tour.keywords || "Default Keywords",
      }
    : {
        title: "Default Title",
        description: "Default Description",
        keywords: "Default Keywords",
      };

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
  return (
    <>
      <Helmet>
        <title>{metaDetails.title}</title>
        <meta name="description" content={metaDetails.description} />
        <meta name="keywords" content={metaDetails.keywords} />
        <script type="application/ld+json">
          {JSON.stringify(tour.schema)}
        </script>
      </Helmet>
      <Contentsection
        heading={tour.heading}
        children={""}
        backgroundImage={tour.backgroundImage}
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
  );
};

export default TourPage;
