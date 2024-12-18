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
import bg1 from "../img/correctionimg/16.jpg";
import { Helmet } from "react-helmet";

const TourPage = () => {
  const { id } = useParams();

  const detailsitinerary = useRef(null);
  const detailsGalleryRef = useRef(null);
  const tourDetailsRef = useRef(null);
  const locationMapRef = useRef(null);
  const toursData = {
    1: {
      heading: "Andaman Group Tour Packages",
      title1: "Andaman Group Tour Packages",
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
        "If you search for beach vacations in India  then the Andaman and Nicobar Islands will be listed for sure. Because the beaches are really nice. But this island is not only for sunburn, sandpit, and snorkelling. Exciting water activities for groups are awaiting for you in India's most stunning island attractions, Andaman. Discover the previously unknown aspect of the Andaman Group Tour Packages. Explore white sand beaches melting under sunsets, diverse undersea marine life, and ancient jungles and have fun filled Andaman group tours.",
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
    title: "Andaman Group Tour Packages | Coimbatore & Chennai",
    keywords:
      "andaman group tour packages, andaman group tour packages from chennai, andaman group tour package, andaman group tour, andaman group, andaman",
    description:
      "Exciting water activities are awaiting in Andaman Group Tour Packages for you in India's most stunning island attractions, Andaman.",
    schema: {
      "@context": "https://schema.org/",
      "@type": "WebSite",
      name: "Capstone Holidays",
      url: "https://www.capstoneholidays.in/tour/andaman-group-tour-packages/",
      potentialAction: {
        "@type": "SearchAction",
        target:
          "https://www.capstoneholidays.in/tour/andaman-group-tour-packages/{search_term_string}",
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
      <Contentsection heading={selectedTour.heading} children={""} backgroundImage={bg1}/>

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

export default TourPage;
