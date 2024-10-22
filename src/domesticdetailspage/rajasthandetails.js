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
import galleryImage1 from "../img/Rajasthan/6.jpg";
import galleryImage2 from "../img/Rajasthan/1.jpg";
import galleryImage3 from "../img/Rajasthan/8.jpg";
import galleryImage4 from "../img/Rajasthan/9.jpg";
import galleryImage5 from "../img/Rajasthan/10.jpg";
import galleryImage6 from "../img/Rajasthan/2.jpg";

import galleryImage1_1 from "../img/Rajasthan/12.jpg";
import galleryImage2_2 from "../img/Rajasthan/11.jpg";
import galleryImage3_3 from "../img/Rajasthan/14.jpg";
import galleryImage4_4 from "../img/Rajasthan/15.jpg";
import galleryImage5_5 from "../img/Rajasthan/16.jpg";
import galleryImage6_6 from "../img/Rajasthan/17.jpg";

import location1 from "../img/icon/location-dot3.svg";
import bg1 from "../img/Rajasthan/6.jpg";

import { Helmet } from "react-helmet";

const TourPage = () => {
  const { id } = useParams();

  const detailsitinerary = useRef(null);
  const detailsGalleryRef = useRef(null);
  const tourDetailsRef = useRef(null);
  const locationMapRef = useRef(null);
  const tourDetails = {
    "delhi-agra-jaipur-tour-package": {
      heading: "Delhi Agra Jaipur Tour Package",
      title1: "Delhi Agra Jaipur Tour Package",
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
        "Check out Capstone Holidays Delhi Agra Jaipur Tour Package if you want to see more of the route and culture of the Golden Triangle.  Part of the Golden Triangle, the cities of Agra, Jaipur, and Delhi are well-liked travel destinations because of their exquisite historical, architectural, and cultural routes and landmarks. This is a 4 days and 3 nights trip package. You will be taken to Mathura, Taj Mahal, Hawa Mahal, Nahargarh Fort, Jantar Mantar, Qutub Minar, Jama Masjid, Red Fort and Rastrapathi Bhavan. When choosing this package, you can also schedule a group tour or your honeymoon. You will spend your night staycation at the best hotels of Delhi, Agra, and Jaipur. Contact our tour planner at Capstone Holidays for any additional clarity, and we will gladly address any concerns."
      ],
      duration: ["05 Days / 04 Nights"],
      tourCode: ["AH-RJ-17"],
      hotelDetails: [
        "Avlon/C Park/sim",
        "Le Roi/Ambatix",
        "Le Season",
        "Madhushree",
        "Pearl Blue",
        "Taj Vilas",
        "Crystel Sarovar",
        "Kanchandeep",
        "Milestone 251",
        "Paradise",
        "Royal Orchid",
      ],
      PackageInclusion: [
        "Accommodation on twin share basis at hotel specified / Similar. (Tipple share for extra person)",
        "Daily breakfast (As per hotel menu)",
        "All maintain sightseeing as per tour itinerary",
        "Dinner, Folk Dance, Camel ride at Jaisalmer camp",
        "All tours and transfers as stated in private Air-conditioned vehicle. (Swift / Etios / Innova/TT etc.,)",
        "English / Hindi speaking friendly driver cum guide throughout your trip",
        "Driver’s Bata, Driver Food/Meal, Toll, Parking, Road tax, Fuel charge, Interstate charges",
        "All applicable & Hotel Taxes (Except 5% GST)",
      ],
      Priceexclusions: [
        "Airfare / Train Fare",
        "Travel insurance",
        "Entry fees for Shows, Parks, Safaris, Monuments, Boats etc.",
        "Tipping for driver/restaurant and guide",
        "Extra expenses for Early check in / Late check out",
        "Charge extra for Candle Light Dinner, Flower Bed, Cake etc. in Honeymoon Packages",
        "Any service, which not mentioned in inclusion",
        "Expenses when/if condition beyond control",
        "GST 5% (On final bill amount)",
      ],
      itinerary: [
        {
          day: "Day 1",
          details:
            "Arrival in Jaipur, transfer to the hotel. Beautiful palaces, forts and colorful bazaars speak of the pink city’s glorious regal past. Modernity walks hand-in-hand with history in Jaipur. This largest city of Rajasthan, founded by Maharaja Sawai Jai Singh, is famous for its magnanimous hospitality. Evening visit City Palace and local market. Overnight in hotel.",
        },
        {
          day: "Day 2",
          details:
            "After breakfast enjoy full day sightseeing of Jaipur visiting Amer fort, Hawamahal, Jantar Mantar, Museum and local market. Overnights at Hotel.",
        },
        {
          day: "Day 3",
          details:
            "After breakfast proceed to Ranthambore and transferred to the Hotel. Day is free for leisure. After Lunch proceed for evening safari. Overnight at hotel.",
        },
        {
          day: "Day 4",
          details:
            "Early morning proceed for jungle Safari. Return back to the hotel for breakfast. After lunch visit Ranthambhore Fort & Lord Ganesh Temple inside the Fort. Overnight at Hotel.",
        },
        {
          day: "Day 5",
          details:
            "After breakfast you will be transferred to Jaipur for your onwards journey. After reach at Jaipur Airport/Railway station tour ends with sweet memorize by Ashirwad Holidays.",
        },
      ],

      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14608903.200457694!2d73.878347!3d26.628408!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396a3efaf7e30e37%3A0xb52b9b4506c088e5!2sRajasthan!5e0!3m2!1sen!2sin!4v1728201755880!5m2!1sen!2sin",
      iconSrc: [location1],
      title: "Delhi Agra Jaipur Tour Package | Golden Triangle Tour",
      keywords:
        "delhi agra jaipur tour package, golden triangle tour, delhi agra jaipur tour, delhi agra jaipur tour plan",
      description:
        "Check out Capstone Holidays Delhi Agra Jaipur Tour Package if you want to see more of the route and culture of the Golden Triangle",
      schema: {
        "@context": "https://schema.org/",
        "@type": "WebSite",
        name: "Capstone Holidays",
        url: "https://www.capstoneholidays.in/tour/delhi-agra-jaipur-tour-package/",
        potentialAction: {
          "@type": "SearchAction",
          target:
            "https://www.capstoneholidays.in/tour/delhi-agra-jaipur-tour-package/{search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
    },

    "rajasthan-trip-package": {
      heading: "Rajasthan Trip package",
      title1: "Rajasthan Trip package",
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
        "Our Rajasthan Trip Packages explore Rajasthan's contemporary infrastructure, calm city atmosphere and historical significant spots suitable for honeymoon too. Our Rajasthan Trip Package covers the main tourist destinations such as Jaipur, Udaipur, Jaisalmer, Jodhpur, Ranthambore National Park, Mount Abu, Ajmer, Bikaner, and Pushkar. Avoid going to Rajasthan from April to September. The temperature is extremely hot and makes your tour dull. This is generally the off-season in Rajasthan and the best time is from November to February. The weather will be pleasant outside and you can have a colorful yet memorable Rajasthan trip",
      ],
      duration: ["04 Days / 03 Nights"],
      tourCode: ["AH-RAJ-15"],
      hotelDetails: [
        "Kanchandeep",
        "Mantra Resort",
        "Milestone 251",
        "Lohana Village/Pushkar Heritage",
        "Paradise",
        "Pushkar Resort",
        "Royal Orchid",
        "Ananta Resort",
      ],
      PackageInclusion: [
        "Accommodation on twin share basis at hotel specified / Similar. (Triple share for extra person)",
        "Daily breakfast (As per hotel menu)",
        "All maintain sightseeing as per tour itinerary",
        "Dinner, Folk Dance, Camel ride at Jaisalmer camp",
        "All tours and transfers as stated in private Air-conditioned vehicle. (Swift / Etios / Innova / TT etc.)",
        "English / Hindi speaking friendly driver cum guide throughout your trip",
        "Driver’s Bata, Driver Food/Meal, Toll, Parking, Road tax, Fuel charge, Interstate charges",
        "All applicable & Hotel Taxes (Except 5% GST)",
      ],
      Priceexclusions: [
        "Airfare / Train Fare",
        "Travel insurance",
        "Entry fees for Shows, Parks, Safaris, Monuments, Boats etc.",
        "Tipping for driver/restaurant and guide",
        "Extra expenses for Early check in / Late check out",
        "Charge extra for Candle Light Dinner, Flower Bed, Cake etc. in Honeymoon Packages",
        "Any service, which not mentioned in inclusion",
        "Expenses when/if condition beyond control",
        "GST 5% (On final bill amount)",
      ],

      itinerary: [
        {
          day: "Day 1",
          details:
            "On arrival in Jaipur, meet our representative who will assist you while taking a transfer to the hotel. Check-in to the hotel and freshen up. Later, leave for sightseeing around the city. Begin with a visit to the City Palace which is known to be the formal residence of a royal family. After sightseeing around the palace, you can visit attractions like Chandra Mahal and Shri Govind Deo Temple. Don’t miss to visit the City Palace Museum which houses the private collection of Jaipur Maharajas. Visit Jantar Mantar which is a stone observatory and the largest observatory built by Maharaja Jai Singh. Overnight at hotel.",
        },
        {
          day: "Day 2",
          details:
            "After breakfast leave for a sightseeing tour around Jaipur. The first attraction which you visit today is the Amber Fort which is located 11 kilometers away from Jaipur. On your way, visit the Hawa Mahal. Explore the glorious past of Rajasthan with a visit to these historical attractions. Later, you can go for shopping in the colorful bazaars of Jaipur. In the evening drive through the city and also visit the famous Laxmi Narayan Mandir. Overnight at hotel.",
        },
        {
          day: "Day 3",
          details:
            "After breakfast leave for on arrival transfer to hotel. Pushkar is a holy town in Rajasthan which is known to house some legendary temples and century’s old lake. It is a famous pilgrimage site because it has the well-known Brahma temple where people visit from all over. Apart from this temple, Pushkar is known to have a number of other temples which are architecturally beautiful. On reaching Pushkar, check-in to the hotel and then leave for sightseeing. Visit the Pushkar Lake where you can take a holy dip. Also, visit the temples and Ghats of Pushkar which are known for their beautiful and unique architectural styles. In the evening, you can visit the Rose Garden and enjoy the beauty of the roses. Overnight at hotel.",
        },
        {
          day: "Day 4",
          details:
            "After breakfast leave for Jaipur Airport/Railway Station for your onward journey. Tour ends with sweet memorize by Ashirwad Holidays, Pune.",
        },
      ],

      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14608903.200457694!2d73.878347!3d26.628408!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396a3efaf7e30e37%3A0xb52b9b4506c088e5!2sRajasthan!5e0!3m2!1sen!2sin!4v1728201755880!5m2!1sen!2sin",
      iconSrc: [location1],
      title: "Rajasthan Trip Package | Rajasthan Tour Plan",
      keywords:
        "rajasthan trip package, rajasthan tour plan, rajasthan tour, rajasthan travel, rajasthan tourist places",
      description:
        "Our Rajasthan Trip Packages explore Rajasthan's contemporary infrastructure, calm city atmosphere, and historical significant spots suitable for honeymoon too.",
      schema: {
        "@context": "https://schema.org/",
        "@type": "WebSite",
        name: "Capstone Holidays",
        url: "https://www.capstoneholidays.in/tour/rajasthan-trip-package/",
        potentialAction: {
          "@type": "SearchAction",
          target:
            "https://www.capstoneholidays.in/tour/rajasthan-trip-package/{search_term_string}",
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
