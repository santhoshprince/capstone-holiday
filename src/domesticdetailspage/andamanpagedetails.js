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
import galleryImage1 from "../img/andaman/8.jpg";
import galleryImage2 from "../img/andaman/7.jpg";
import galleryImage3 from "../img/andaman/4.jpg";
import galleryImage4 from "../img/andaman/13.jpg";
import galleryImage5 from "../img/andaman/6.jpg";
import galleryImage6 from "../img/andaman/7.jpg";

import galleryImage1_1 from "../img/andaman/8.jpg";
import galleryImage2_2 from "../img/andaman/9.jpg";
import galleryImage3_3 from "../img/andaman/10.jpg";
import galleryImage4_4 from "../img/andaman/11.jpg";
import galleryImage5_5 from "../img/andaman/12.jpg";
import galleryImage6_6 from "../img/andaman/13.jpg";

import location1 from "../img/icon/location-dot3.svg";
import bg1 from "../img/correctionimg/14.jpg";
import bg2 from "../img/correctionimg/15.jpg";

import { Helmet } from "react-helmet";

const TourPage = () => {
  const detailsitinerary = useRef(null);
  const detailsGalleryRef = useRef(null);
  const tourDetailsRef = useRef(null);
  const locationMapRef = useRef(null);
  const tourDetails = {
    "andaman-tour-package-from-chennai": {
      heading: "Andaman Tour Package from Chennai",
      title1: "Andaman Tour Package from Chennai",
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

      priceIncludes: [
        "All transportation service for given itinerary from airport to airport (A/C Private vehicle)",
        "Accommodation with Breakfast only",
        "All sightseeing as per itinerary",
        "Vehicle for shopping",
        "All entry tickets",
        "Boat tickets",
        "Private Ferry tickets to and fro for Havelock (M.V. Makruzz/M.V. Green Ocean/M.V. Nautika Private ferry)",
        "Parking & Driver beta",
      ],
      Priceexclusions: [
        "GST 5%",
        "Lunch & Dinner",
        "Laundry service",
        "Mineral Water",
        "Water sports",
        "Adventure activities",
        "Tips",
        "Other than inclusions",
        "Air Fare",
      ],

      description1: [
        "The Andaman tour package from Chennai will take you to Andaman after monsoon days. So, Capstone Holidays plans for a Andaman trip in October to April. The Andaman and Nicobar Islands are a wonderful choice for a romantic vacation with your partner that includes delicious food, a candle-lit dinner, exhilarating water activities, beautiful beaches, and a pleasant atmosphere for adoration and touring. The most beautiful and popular beaches in Andaman and Nicobar are Radhanagar Beach, Elephant Beach, Wandoor Beach, Rock Beach, and Vijaya Nagar Beach.",
      ],
      duration: ["4 Nights, 5 Days"],
      hotelDetails: [
        "Northern Lights/Hotel Karpagam Dreams/MK Residency",
        "Radhakrishna Hotel",
        "AT Villa/TGS Dine Inn",
        "Eldorado Beach Resort/Sunrise Beach Resort",
        "North Reef/J Hotel",
        "Havelock Country Home Resort/Havelock Exotic Beach Resort",
        "TSG Grand/TSG Emerald/Bell Elite/Hotel Kalki",
        "TSG Blue/Sands Marina Beach Resort/Aquay Resort",
        "Lemon Tree Hotel/Peerless Resort/Eastern Gate",
        "Symphony Palm Beach Resort",
      ],
      itinerary: [
        {
          day: "Day 1",
          details:
            " Welcome to the Andaman & Nicobar Islands! Upon arrival at Port Blair airport, our representative will meet and assist you with your transfer to the hotel check-in, take little relaxation.After lunch, visit the closest Carbyn’s cove beach, through a picturesque drive along the coastline, splashing waves of turquoise blue water. Later visit the National Memorial- Cellular Jail (inside) to witness the spectacular and Sound & Light Show -the heroic saga of Indian Freedom Fighters. Overnight at Port Blair.",
        },
        {
          day: "Day 2",
          details:
            "Early morning depart for Havelock Island 39 kms (2 hrs journey by cruise) and check-in Havelock Island resort, and after taking little relax and visit the famous for the amazing Radhanagar Beach (“Best Beach in Asia” by the ‘Time Magazine’ in the year 2004) on the basis of the quality of sand, sea, depth and other such parameters). Overnight stay at Havelock Island.",
        },
        {
          day: "Day 3",
          details:
            "After breakfastEmbark on the most memorable excursion to Elephant Beach by sharing boat. The journey time is 30-45 mins and you can also opt for some water sports activities like Snorkelling, Sea Walk, Jet Ski, Glass bottom Boat, BananaBoat Ride, Sofa boat ride, Parasailing, etc. on direct payment. Return after 3 hrs in the same sharing boat to the BeachNo 1. Our tour manager will meet and assist with car transfers to proceed to the hotel. Evening at leisure. Overnight stay at Havelock Island.",
        },
        {
          day: "Day 4",
          details:
            "After breakfast pack-up the luggage and check out from the resort and back to Port Blair.Evening visit to Chidiyatapu Beach with Sunset View. Overnight stay at Port Blair.",
        },
        {
          day: "Day 5",
          details:
            "After breakfast check out from the hotel and transfer to Veer Savarkar International Airport with wonderful memories of Andaman Islands to your home town",
        },
      ],
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d250116.67994327686!2d92.722464!3d11.618137!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3088946c176b5971%3A0x5bfa43a5e9a5ed30!2sSri%20Vijaya%20Puram%2C%20Andaman%20and%20Nicobar%20Islands!5e0!3m2!1sen!2sin!4v1728185002454!5m2!1sen!2sin",

      iconSrc: [location1],
      title: 'Andaman Tour Package from Chennai | Andaman Holiday Packages',
      keywords: 'andaman tour package from chennai, andaman holiday packages, andaman tour package, andaman tour, andaman',
      description: 'Andaman tour package from Chennai will take you to Andaman after monsoon days. So, Capstone Holidays plans for a Andaman trip in October to April',
      schema: {
          "@context": "https://schema.org/",
          "@type": "WebSite",
          "name": "Capstone Holidays",
          "url": "https://www.capstoneholidays.in/tour/andaman-tour-package-from-chennai/",
          "potentialAction": {
              "@type": "SearchAction",
              "target": "https://www.capstoneholidays.in/tour/andaman-tour-package-from-chennai/{search_term_string}",
              "query-input": "required name=search_term_string"
          }
      } 
    },
    "andaman-and-nicobar-islands-package": {
      heading: "Andaman and Nicobar Islands Package",
      title1: "Andaman and Nicobar Islands Package",
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
        "Explore the most magnificent spots with the Andaman and Nicobar Islands package from beaches to Islands that one may visit in the Andaman Islands. The Andaman and Nicobar Islands are the ideal holiday destination, with clear skies, golden beaches, turquoise waters, and clean surroundings. The Andaman Islands also have many historical sites, including the Cellular Jail, Mahatma Gandhi Marine National Park, Ross Island, Havelock Island, Laxmanpur Beach, Bharatpur Beach, Barren Island, North Bay Island, Chatham Saw Mill, Baratang Island, Corbyn's Cove Beach, Mount Harriet, and many others",
      ],
      duration: ["3 Nights, 4 Days"],
      hotelDetails: [
        "Northern Lights/Hotel Karpagam Dreams/MK Residency",
        "Radhakrishna Hotel",
        "AT Villa/TGS Dine Inn",
        "Eldorado Beach Resort/Sunrise Beach Resort/Radhakrishna Resort",
        "North Reef/J Hotel",
        "Havelock Country Home Resort/Havelock Exotic Beach Resort",
        "TSG Grand/TSG Emerald/Bell Elite/Hotel Kalki",
        "TSG Blue/Sands Marina Beach Resort/Aquay Resort",
        "Lemon Tree Hotel/Peerless Resort/Eastern Gate",
        "Symphony Palm Beach Resort",
      ],
      PackageInclusion: [
        "All transportation service for given itinerary from airport to airport (A/C Private vehicle)",
        "Accommodation with Breakfast only",
        "All sightseeing as per itinerary",
        "Vehicle for shopping",
        "All entry tickets",
        "Boat tickets",
        "Private Ferry tickets to and fro for Havelock (M.V. Makruzz/M.V. Green Ocean/M.V. Nautika Private ferry)",
        "Parking & Driver beta",
      ],
      Priceexclusions: [
        "GST 5%",
        "Lunch & Dinner",
        "Air Fare",
        "Laundry service",
        "Mineral Water",
        "Water sports",
        "Adventure activities",
        "Tips",
        "Other than inclusions.",
      ],
      itinerary: [
        {
          day: "Day 1",
          details:
            "Upon arrival at Port Blair airport, our representative will meet and assist you with your transfer to the hotel check-in, take little relaxation. After lunch, visit the closest Carbyn’s cove beach, through a picturesque drive along the coastline, splashing waves of turquoise blue water. Later visit the National Memorial- Cellular Jail (inside) to witness the spectacular and Sound & Light Show -the heroic saga of Indian Freedom Fighters. Overnight at Port Blair.",
        },
        {
          day: "Day 2",
          details:
            "Early morning depart for Havelock Island 39 kms (2 hrs journey by cruise) and check-in Havelock Island resort, and after taking little relax and visit the famous for the amazing Radhanagar Beach (“Best Beach in Asia” by the ‘Time Magazine’ in the year 2004) on the basis of the quality of sand, sea, depth and other such parameters). Overnight stay at Havelock Island.",
        },
        {
          day: "Day 3",
          details:
            "After breakfast pack-up the luggage and check out from the resort and visit to Elephant Beach and back to Port Blair. Overnight stay at Port Blair.",
        },
        {
          day: "Day 4",
          details:
            "After breakfast check out from the hotel and transfer to Veer Savarkar International Airport with wonderful memories of Andaman Islands to your home town.",
        },
      ],

      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d250116.67994327686!2d92.722464!3d11.618137!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3088946c176b5971%3A0x5bfa43a5e9a5ed30!2sSri%20Vijaya%20Puram%2C%20Andaman%20and%20Nicobar%20Islands!5e0!3m2!1sen!2sin!4v1728184776704!5m2!1sen!2sin",
      iconSrc: [location1],
      title: 'Andaman and Nicobar Islands Package | Andaman Island Package',
      keywords: 'andaman and nicobar islands package, andaman island package, andaman hotels, meals, andaman beach, andaman island, nicober island',
      description: 'Explore the most magnificent spots with the Andaman and Nicobar Islands package from beaches to Islands that one may visit in the Andaman Islands',
      schema: {
          "@context": "https://schema.org/",
          "@type": "WebSite",
          "name": "Capstone Holidays",
          "url": "https://www.capstoneholidays.in/tour/andaman-and-nicobar-islands-package/",
          "potentialAction": {
              "@type": "SearchAction",
              "target": "https://www.capstoneholidays.in/tour/andaman-and-nicobar-islands-package/{search_term_string}",
              "query-input": "required name=search_term_string"
          }
      }
      
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
      <Contentsection heading={tour.heading} children={""} backgroundImage={tour.backgroundImage}/>

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
              />
            </div>
          </div>
         
          <div className="row">
            <div className="col-12" ref={detailsitinerary}>
              <Itinerary
                title="Itinerary"
                itineraryData={tour.itinerary}
              />
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
