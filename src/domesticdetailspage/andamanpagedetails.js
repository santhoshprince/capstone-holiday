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

import galleryImage1_1 from "../img/gallery/358.jpg";
import galleryImage2_2 from "../img/gallery/343.jpg";
import galleryImage3_3 from "../img/gallery/369.jpg";
import galleryImage4_4 from "../img/gallery/963.jpg";
import galleryImage5_5 from "../img/gallery/11021.jpg";
import galleryImage6_6 from "../img/gallery/2151625212.jpg";

import location1 from "../img/icon/location-dot3.svg";

const TourPage = () => {
  const { id } = useParams();

  const detailsitinerary = useRef(null);
  const detailsGalleryRef = useRef(null);
  const tourDetailsRef = useRef(null);
  const locationMapRef = useRef(null);
  const toursData = {
    1: {
      heading: "Andaman Tour Package from Chennai",
      title: "Andaman Tour Package from Chennai",
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

      description: [
        "Delve into an Andaman tour package with curated destinations that explore the versatile geography. It is one of Andaman best tour packages which covers most of the must-visit places. This Andaman tour package gives you the experience of a wide range of flora and fauna. The rich biodiversity of Andaman islands will be explored with this Andaman tour package which gives you once in a lifetime kind of experience",
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
    },
    2: {
      heading: "Andaman and Nicobar Islands Package",
      title: "Andaman and Nicobar Islands Package",
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
      description: [
        "The Andaman and Nicobar islands package explores the strategical location of these islands as a whole which plays a crucial role in Indian security. With this Andaman and Nicobar islands package, you can witness the Indian navy’s significant presence in this region without disturbing the biodiversity. Andaman and Nicobar islands package consists of both airways and waterways transport where you can enjoy the collaborative experience",
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
                  <PopularTags />
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
                title={selectedTour.title}
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
