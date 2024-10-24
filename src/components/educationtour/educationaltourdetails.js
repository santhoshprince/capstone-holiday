import React, { useRef } from "react";
import Sidebar from "../../components/sidebardetailspage";
import { useParams } from "react-router-dom";

import Contentsection from "../../components/contentbg";
import DetailSlider from "../../components/detailslider";
import DetailsGallery from "../../components/detailsgallery";
import Itinerary from "../../components/itinerary";
import PopularTags from "../../components/populartags";
import LocationMap from "../../components/deatilsmap";
import TourDetails from "../../components/tourdetails";
import galleryImage1 from "../../img/almaty/s11.jpg";
import galleryImage2 from "../../img/almaty/visitalmaty-3457149_1920.jpg";
import galleryImage3 from "../../img/almaty/s9.jpg";
import galleryImage4 from "../../img/almaty/s8.jpg";
import galleryImage5 from "../../img/almaty/sunset-2459531_1920.jpg";
import galleryImage6 from "../../img/almaty/s6.jpg";

import galleryImage1_1 from "../../img/almaty/21.jpg";
import galleryImage2_2 from "../../img/almaty/s12.jpg";
import galleryImage3_3 from "../../img/almaty/s5.jpg";
import galleryImage4_4 from "../../img/almaty/s4.jpg";
import galleryImage5_5 from "../../img/almaty/s2.jpg";
import galleryImage6_6 from "../../img/almaty/nauryz-707701_1920.jpg";
import location1 from "../../img/icon/location-dot3.svg";
import bg1 from "../../img/correctionimg/35.jpg";

import { Helmet } from "react-helmet";

const BaliDetails = () => {
  const detailsitinerary = useRef(null);
  const detailsGalleryRef = useRef(null);
  const tourDetailsRef = useRef(null);
  const locationMapRef = useRef(null);
  // Sample data - you can replace this with your actual content
  const tourDetails = {
    "almaty-tour-package-from-india": {
      heading: "Almaty Tour Package from India",
      title1: "Almaty Tour Package from India",
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

      //   priceIncludes: [
      //     "Twin Sharing Accommodation with Breakfast",
      //     "Private air-conditioned vehicle for tour time & Airport Pick & Drop",
      //     "English Speaking Driver",
      //     "Entrance fee",
      //     "1 Jimbaran Bay Dinner",
      //     "4 Set Menu Dinner at Hotel",
      //     "3* - Legian Village Hotel or Legian Paradiso or Swiss-Belexpress Kuta Legian or Similar",
      //     "4* - J4 Hotel Legian or Bedrock Hotel Legian or Grand Ixora Hotel or Similar",
      //   ],
      description1: [
        "Choose our Almaty tour package from India to witness the epic wonder of The Kolsai Lakes, Charyn Canyon, and Altyn-Emel National Park. These are Almaty's three main natural attractions, earning it the moniker Golden Triangle  of Kazakhstan. This national park is the best illustration of Almaty's famed natural beauty. The park, which stretches from the George Turgen to the Chimlogan River, is the heart and spirit of the city. Lake Kaindy, First Presidents Park, Green Bazaar, Arasan Baths, Panfilov parks, Central State Museum, Shymbulak Ski Resort, Kok Tobe Hill, Ascension Cathedral, and Medeu are the places most loved by tourists every year. July to September (Summer) and November to January (Winter) are the best times to witness this natural wonder. Contact our Almaty tour operators at Capstone Holidays for more details",
      ],
      //   tourCode: ["CBT-22/04"],
      //   duration: ["6 Days 5 Nights"],
      //   hotelDetails: [
      //     "Twin Sharing Accommodation with Breakfast",
      //     "Private air-conditioned vehicle for tour time & Airport Pick & Drop",
      //     "English Speaking Driver",
      //     "Entrance fee",
      //     "1 Jimbaran Bay Dinner",
      //     "4 Set Menu Dinner at Hotel",
      //     "3* - Legian Village Hotel or Legian Paradiso or Swiss-Belexpress Kuta Legian or Similar",
      //     "4* - J4 Hotel Legian or Bedrock Hotel Legian or Grand Ixora Hotel or Similar, Panida Hotel - Samuh Ocean Sunset Hotel (4*)",
      //   ],
      itinerary: [
        {
          day: "Day 1",
          details:
            "Choose our Almaty tour package from India to witness the epic wonder of The Kolsai Lakes, Charyn Canyon, and Altyn-Emel National Park. These are Almaty's three main natural attractions, earning it the moniker Golden Triangle of Kazakhstan. This national park is the best illustration of Almaty's famed natural beauty. The park, which stretches from the George Turgen to the Chimlogan River, is the heart and spirit of the city. Lake Kaindy, First Presidents Park, Green Bazaar, Arasan Baths, Panfilov parks, Central State Museum, Shymbulak Ski Resort, Kok Tobe Hill, Ascension Cathedral, and Medeu are the places most loved by tourists every year. July to September (Summer) and November to January (Winter) are the best times to witness this natural wonder. Contact our Almaty tour operators at Capstone Holidays for more details",
        },
        {
          day: "Day 2",
          details: (
            <>
              <p>
                Today after buffet breakfast, proceed on a guided tour to know
                more about history and development of the southern capital of
                Kazakhstan and see it's main attractions; First, visit the
                Zenkov Cathedral at Panfilov Park. Built in 1907, this
                century-old Russian Cathedral is the second-tallest wooden
                building in the world which is made without using any nails!
                Next, explore the historic Panfilov Park, named after the 28
                soldiers of an Almaty infantry and marvel at the spectacular
                Eternal Flame monument.{" "}
              </p>
              <p>
                The Central State Museum of the Republic of Kazakhstan, the
                Presidential Residence, the Republic Square and the Independence
                Monument, the Theater of Opera and Ballet named after Abai,
                Astana Square, Abai Square and the Palace of the Republic.Later
                make your way to the First President's Park and admire the
                beautiful gardens with flowers, the wonderfully layered fountain
                and spectacular views of majestic peaks.. After lunch visit
                Kok-Tobe, the highest TV tower in the world. A special viewing
                platform located on the mountain will allow you to admire the
                magnificent panorama of the city, as well as you can stroll
                along the winding paths of Kok-Tobe Park and visit souvenir
                shops. Return to hotel.
              </p>
            </>
          ),
        },
        {
          day: "Day 3",
          details:
            "Day Excursion to Shyumbulak Ski Resort –  Free time for shopping.",
        },
        {
          day: "Day 4",
          details: (
            <>
              <p>
                Today after buffet breakfast, proceed on an exciting drive to
                the Shymbulak Ski Resort. Located in the majestic Zailiyskiy
                Alatau mountain ranges, the resort was once a training base for
                Soviet skiers. Embark on a fun cable car ride and admire the
                panoramic views of the mountains as you make your way up to
                Level 3 of the ski resort.{" "}
              </p>
              <p>
                Dotted with beautiful cafes, restaurants, plush hotels, perfect
                slopes and a playground, the resort is sure to provide a magical
                experience like no other.! Your tour ends with a drop-off to
                your hotel in Almaty. Note: The best time to avail this activity
                is during the winter season when Shymbulak Ski Resort is
                operational. After lunch you will have an oppurtunity to shop
                for some local sweets, dry fruits ,chocolates and some souvenirs
                from Green Bazar
              </p>
            </>
          ),
        },
        {
          day: "Day 5",
          details: (
            <>
              <p>
                Today after buffet breakfast, proceed to Lake Issyk, a
                picturesque mountain lake surrounded by beautiful nature. The
                lake is located at an altitude of 1760 meters above sea level,
                in the Issyk gorge of the Trans-Ili Alatau, approximately 70 km
                east of Almaty. Admire the turquoise waters of the lake and the
                beauty of the Issyk gorge.{" "}
              </p>
            </>
          ),
        },
        {
          day: "Day 6",
          details: (
            <>
              <p>
                Today after breakfast at your hotel, proceed to the airport as
                this fantastic tour comes to an end. Return home with wonderful
                memories of your tour
              </p>
            </>
          ),
        },
      ],
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d186085.0994370431!2d76.9525157!3d43.2183046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38836e7d16c5cbab%3A0x3d44668fad986d76!2sAlmaty%2C%20Kazakhstan!5e0!3m2!1sen!2sin!4v1728873560658!5m2!1sen!2sin",

      iconSrc: [location1],
      title: "Almaty Tour Package from India | Chennai & Coimbatore",
      keywords:
        "almaty tour package from india, almaty tour package, almaty tour, almaty, almaty tour package from chennai, velachery",
      description:
        "Choose our Almaty tour package from India to witness the epic wonder of The Kolsai Lakes, Charyn Canyon, and Altyn-Emel National Park.",
      schema: {
        "@context": "https://schema.org/",
        "@type": "WebSite",
        name: "Capstone Holidays",
        url: "https://www.capstoneholidays.in/almaty-tour-package-from-india/",
        potentialAction: {
          "@type": "SearchAction",
          target:
            "https://www.capstoneholidays.in/almaty-tour-package-from-india/{search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
    },
    "paris-switzerland-tour-package-from-india": {
      heading: "Paris Switzerland tour package from India",
      title1: "Paris Switzerland tour package from India",
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
        "Check our Paris Switzerland tour package from India to have a gorgeous honeymoon to celebrate your love at snow-capped Alps and the majestic Eiffel Tower. The three most romantic locations you can add and customize in your Switzerland tour package for couples are Mount Rigi, the Lauterbrunnen Valley, and Lake Geneva. Our Switzerland tour package for couples and Switzerland tour packages for family covers the trip to the most beautiful places like Basel, Zermatt, Saint Moritz, Chillon Castle, Matterhorn, Geneva, Interlaken, Bern, Rhine Falls, Zurich, Lucerne, Chapel Bridge, and so on. Paris is lovely throughout the year, be it the brilliant sunny days or the crisp fall air. Springtime in the city is bright and cheery, while summers are warmer. With vibrant leaves scattered across cobblestone streets, fall in Paris is just as picturesque",
      ],
      //   tourCode: ["CBT-22/01"],
      duration: ["9 Days 8 Nights"],
      hotelDetails: [
        "4* - Hampton By Hilton or Similar",
        "4* - Crowne Plaza or Similar",
      ],
      PackageInclusion: [
        "08 nights’ accommodation at above hotel options with breakfast",
        "Return Airport transfers on Pvt Basis",
        "Air Fare & Visa",
        "Paris city tour, Seine river cruise with Dinner + Eiffel tower – Summit floor - seat in coach basis",
        "Audio Guided tour of Louvre Museum & Small Group Versailles Tour by Train",
        "Private Departure transfer from Paris hotel to Station - One way",
        "Train Ticket from Paris to Basil - one way - 2nd class",
        "Swiss Pass - 04 consecutive days - second class",
        "Excursion to Mt Titlis with Swiss pass - Tickets Only",
        "Excursion to Jungfrau with Swiss pass - Tickets Only",
        "Visit Rhine falls by using Swiss pass (boat ride optional)",
        "Private Departure transfer from hotel to Zurich Airport - one way",
      ],
      Priceexclusions: [
        "Any Covid Test Charges",
        "Supplement Charges at hotels on Christmas and New Year’s Eve.",
        "Other food",
        "Other personal expenses",
        "Permits for cameras and videos at sights.",
        "Tips, beverages, mineral water, laundry & any personal expenses, etc.",
        "Any item not shown in the package includes.",
      ],
      itinerary: [
        {
          day: "Day 1",
          details: "Private transfer in Paris (Airport- Hotel)",
        },
        {
          day: "Day 2",
          details:
            "Morning 11:00am Orsay Museum with Entrance & Evening 3pm Half day city tour with30 spots",
        },
        {
          day: "Day 3",
          details:
            "Audio guided visit of Louvre Museum with with Hop on Hop off & Cruise 1 Hour",
        },
        {
          day: "Day 4",
          details:
            "Morning Versailles Small Group Tour from Paris City Centre by Air Conditioned Coach Hop on Hop off with Eiffel Tower Summit Floor & Prestige Seine River Cruise with Dinner",
        },
        {
          day: "Day 5",
          details:
            "Train from Paris to Zurich- 2nd class & Direct Train to Zurich 4 days consecutive Swiss pass - 2nd class",
        },
        {
          day: "Day 6",
          details:
            "Excursion to Mount Titlis from Zurich using Swiss pass & Ice Flyer with Entrance",
        },
        {
          day: "Day 7",
          details: "Excursion to Jungfraujoch with Swiss pass with Entrance",
        },
        {
          day: "Day 8",
          details:
            "Rhine Falls and Steim Am Rhine from Zurich using Swiss Pass with Entrance",
        },
        {
          day: "Day 9",
          details: "Private transfer in Zurich (Hotel - Airport)",
        },
      ],
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.9185124463!2d2.347035!3d48.85885484999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis%2C%20France!5e0!3m2!1sen!2sin!4v1728873398440!5m2!1sen!2sin",

      iconSrc: [location1],

      title: "Paris Switzerland Tour Package from India | Capstone Holidays",
      keywords:
        "paris switzerland tour package from india, paris switzerland tour package, paris switzerland tour package from chennai, paris switzerland tour, paris switzerland",
      description:
        "Check our Paris Switzerland tour package from India to have a gorgeous honeymoon to celebrate your love at snow-capped Alps and the majestic Eiffel Tower.",
      schema: {
        "@context": "https://schema.org/",
        "@type": "WebSite",
        name: "Capstone Holidays",
        url: "https://www.capstoneholidays.in/paris-switzerland-tour-package-from-india/",
        potentialAction: {
          "@type": "SearchAction",
          target:
            "https://www.capstoneholidays.in/paris-switzerland-tour-package-from-india/{search_term_string}",
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
    <div>
      <>
        <Helmet>
          <title>{metaDetails.title}</title>
          <meta name="description" content={metaDetails.description} />
          <meta name="keywords" content={metaDetails.keywords} />
          <script type="application/ld+json">
            {JSON.stringify(tour.schema)}
          </script>
        </Helmet>
        <Contentsection heading={tour.heading} children={""} backgroundImage={bg1} />

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
