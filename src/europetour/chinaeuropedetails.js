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
import galleryImage1 from "../img/china/13.jpg";
import galleryImage2 from "../img/china/11.jpg";
import galleryImage3 from "../img/china/12.jpg";
import galleryImage4 from "../img/china/1.jpg";
import galleryImage5 from "../img/china/9.jpg";
import galleryImage6 from "../img/china/15.jpg";

import { Helmet } from "react-helmet";

import galleryImage1_1 from "../img/china/10.jpg";
import galleryImage2_2 from "../img/china/11.jpg";
import galleryImage3_3 from "../img/china/3.jpg";
import galleryImage4_4 from "../img/china/12.jpg";
import galleryImage5_5 from "../img/china/13.jpg";
import galleryImage6_6 from "../img/china/14.jpg";

import location1 from "../img/icon/location-dot3.svg";
import bg1 from "../img/china/12.jpg";

const TourPage = () => {
  const { id } = useParams();

  const detailsitinerary = useRef(null);
  const detailsGalleryRef = useRef(null);
  const tourDetailsRef = useRef(null);
  const locationMapRef = useRef(null);
  const toursData = {
    1: {
      heading: "China Tour Packages from Chennai",
      title1: "China Tour Packages from Chennai",
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
      //   "Accommodation in Baku, 3 nights.",
      // "Accommodation in Guba, 3 nights.",
      // "Accommodation in Gabala, 3 nights.",
      // "Breakfasts at the hotels.",
      // "Transfers from/to airport.",
      // "Transportation during program with comfortable car.",
      // "English speaking driver.",
      // "Water per each excursion day."
      //   ],
      //   Priceexclusions: [
      //     "Air tickets and insurance.",
      //     "Lunches and dinners.",
      //     "Entrance fees to museums/entertainment.",
      //     "Personal expenses.",
      //     "PCR test costs.",
      //     "Visa cost."
      //   ],
      description1: [
        "Our China tour package from Chennai is designed ideally so that our customers do not miss these legacies in China. China offers an intriguing blend of old history and innovation. With its dynamic cities, beautiful Mother Nature, and rich cultural heritage, China is a varied and remarkable destination for tourists seeking magical travel. International tourists' favorite destinations in China include the Great Wall of China, Forbidden City, The Bund, Summer Palace, Yu Garden, Temple of Heaven, Zhangjiajie National Park, Leshan Giant Buddha, Beijing, Shanghai, Lijiang, and many more. In China, spring and autumn are beautiful seasons. You can travel to China at any time between March and May and September and November with our tour packages",
      ],
      // tourCode: ["CBT-22/01"],
      duration: ["9 Days 8 Nights"],
      // hotelDetails: [
      //   "Baku – West Shine or Alba Hotel 4*.",
      //   "Gabala – White Boutique 4*.",
      //   "Guba – Gold Guba Hotel 3*.",
      // ],
      // note: [
      //   "Additionally, 3% will be added to the cost during the payment process; the company has the right to change the program in case of necessity. Package is not valid during the Eid period (26.06-01.07). Kindly check availability before quoting to the customers.",
      // ],
      itinerary: [
        {
          day: "Day 1",
          details:
          <div>
            <strong style={{paddingRight:"10px"}}>Morning Arrival in Beiijing</strong>
  Early morning arrival at the airport. Relaxed walk in evening at the  Wangfujing Streets
          </div>
          
        },
        {
          day: "Day 2",
          details:
          <div>
             <strong style={{paddingRight:"10px"}}>Explore the Historical Sites in Beijing</strong>
 Explore the Historical Sites in Beijing like Tiananmen Square & Forbidden City, Visit the Temple of Heaven and evening at the Kung Fu Show with Peking Duck Dinner
          </div>
           
        },
        {
          day: "Day 3",
          details:
          <div>
          <strong style={{paddingRight:"10px"}}> Great Wall of China</strong>
          Wander all along the Great Wall of China and enjoy a night out in Beijing
       </div>
        },
        {
          day: "Day 4",
          details:
          <div>
          <strong style={{paddingRight:"10px"}}>Xi'an High-Speed Train</strong>
          Reach Xi'an by high-speed rail or airplane from Beijing
       </div>
        },
        {
          day: "Day 5",
          details:
           
            <div>
          <strong style={{paddingRight:"10px"}}>Xi'an Terracotta Warriors</strong>
          Explore the Xi'an Terracotta Warriors site followed by Xi’an City Wall. End the day with Tang Dynasty Performance.
       </div>
        },
        {
          day: "Day 6",
          details:
          <div>
          <strong style={{paddingRight:"10px"}}>Xi'an Guilin Flight</strong>
          See the Big Wild Goose Pagoda, stunning Karst mountains, and wander along the Ronghu and Shanhu Lakes.
       </div>
           
        },
        {
          day: "Day 7",
          details:
          <div>
          <strong style={{paddingRight:"10px"}}>Li River Cruise</strong>
          Take a Li River Cruise (4-5 hours). Explore the scenery when you get to Yangshuo, or go rock climbing, cycling, or bamboo rafting on the Yulong River.Check into the Liu Sanjie light show and end up for the day
       </div>
           
        },
        {
          day: "Day 8",
          details:
            <div>
            <strong style={{paddingRight:"10px"}}>Shanghai</strong>
            Visit the lively Old Town, Yu Garden, visit People's Square and the Shanghai Museum. Evenings will be enlightened up by the Huangpu River Cruise
         </div>
        },


        {
          day: "Day 9",
          details:
          <div>
          <strong style={{paddingRight:"10px"}}>Jade Buddha Temple </strong>
          See the Jade Buddha statue in the Temple's tranquil ambiance
       </div>
        },
        {
          day: "Day 10",
          details:
          <div>
          <strong style={{paddingRight:"10px"}}>Departure</strong>
          Take advantage of some free time for last-minute shopping and leave with wonderful memories created by Capstone Holidays China tour packages
       </div>
        },
      ],
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26515866.254280455!2d104.13743495!3d35.780286950000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31508e64e5c642c1%3A0x951daa7c349f366f!2sChina!5e0!3m2!1sen!2sin!4v1728306201377!5m2!1sen!2sin",
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
    title: "China Tour Package from Chennai | Velachery",
    keywords:
      "china tour package from chennai, china tour package, china tour, china, china tour from india",
    description:
      "Our China tour package from Chennai is designed ideally so that our customers do not miss these legacies in China.",
    schema: {
      "@context": "https://schema.org/",
      "@type": "WebSite",
      name: "Capstone Holidays",
      url: "https://www.capstoneholidays.in/china-tour-package-from-chennai/",
      potentialAction: {
        "@type": "SearchAction",
        target:
          "https://www.capstoneholidays.in/china-tour-package-from-chennai/{search_term_string}",
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
          {/* <li onClick={() => scrollToSection(tourDetailsRef)}>Tour Details</li> */}
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
                note={selectedTour.note}
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
