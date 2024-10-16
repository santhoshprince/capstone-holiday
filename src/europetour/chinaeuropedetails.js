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
import galleryImage1 from "../img/china/13.jpg";
import galleryImage2 from "../img/china/11.jpg";
import galleryImage3 from "../img/china/12.jpg";
import galleryImage4 from "../img/china/1.jpg";
import galleryImage5 from "../img/china/9.jpg";
import galleryImage6 from "../img/china/15.jpg";

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
      heading: "China Europe Tour",
      title: "China Europe Tour",
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
      description: [
        "Embark on an unforgettable journey through the diverse landscapes and rich history of China, a country that seamlessly blends ancient traditions with modern marvels. Your adventure begins in Beijing, the vibrant capital, where you will explore iconic landmarks such as the Great Wall, Forbidden City, and Temple of Heaven. Experience the vibrant culture and culinary delights as you stroll through local markets and savor authentic Peking duck.",
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
            "Upon arrival, welcome by the Tour Manager/local tour guide and transfer from the airport to the hotel for check in. (Standard check in time 1400-1500 hrs).Dinner at Indian Restaurant.",
        },
        {
          day: "Day 2",
          details:
            "After breakfast, we visit Ushiku Great Buddha which is one of the tallest statues in the world and at 120m is the tallest Buddhist statue in Japan. We then proceed to Mount Tsukuba and take a cable car and ropeway to enjoy scenic view of Mount Tsukuba. Later, we visit Kairakuen Garden which is considered one of the Three Great Gardens of Japan.",
        },
        {
          day: "Day 3",
          details:
            "After breakfast, we proceed to Hitachi Seaside Park, which is renowned for its diverse flora, including millions of flowers that bloom throughout the year. Later we visit Ryujin Suspension Bridge, one of the longest pedestrian suspension bridges in Japan. We then proceed to visit Fukuroda Falls which is one of the most renowned waterfalls in Japan.",
        },
        {
          day: "Day 4",
          details:
            "After breakfast, we proceed to Tokyo and visit Tokyo Skytree which has magnificent observation decks, but first and foremost, it is Tokyo's radio tower. We then visit Asakusa Kannon which is one of Tokyo's most colorful and popular temples and Nakamise Dori street which is one of Japan's oldest shopping streets.Later, we proceed to Team Labs, which is a popular, immersive museum known for its colorful, futuristic digital art installations & photo ops Dinner at Indian Restaurant with Sushi Tasting.",
        },
        {
          day: "Day 5",
          details:
            "After breakfast, we proceed to Hakone region where we visit Mt. Fuji 5th station, where you can see the highest mountain in Japan, listed as the World Heritage Site. We then take the Owakudani ropeway and visit the Owakudani Valley. Later, we take Lake Ashi cruise where you can enjoy the views of the surrounding mountains and Lake Ashinoko.Dinner at Indian Restaurant.",
        },
        {
          day: "Day 6",
          details:
            "After breakfast, we visit Nara & Deer Park which is home to hundreds of freely roaming deer also known as “Messengers of God” and the Todaiji temple where you can see the temple’s best known relic “Daibutsu”. In the evening, we visit Shinsaibashi - one of the most famous shopping streets in Osaka and Japan.Dinner at Indian Restaurant.",
        },
        {
          day: "Day 7",
          details:
            "Collect Packed Breakfast and proceed for a Day Trip to Hirsohima.Today, we take a bullet train ride from Osaka to Hiroshima. Upon arrival in Hirsohima, we proceed to the pier to take the ferry to the Miyajima Island and visit the Itsukushima Shrine, the centuries-old Itsukushima Shrine on Miyajima, the shrine is known worldwide for its iconic “Floating Tori (Gate)”. Later, we visit the Hiroshima Peace Park, Museum and the Atomic Bomb Dome (Genbaku Dome) which is a part of the Hiroshima Peace Memorial Park and a designated UNESCO World Heritage. We return to Osaka via a bullet train from Hiroshima.",
        },
        {
          day: "Day 8",
          details:
            "After breakfast, we visit the Arashiyama Bamboo Forest where the thick green bamboo stalks seem to continue endlessly in every direction and Visitors can stroll paths lined with endless rows of towering bamboo. We then visit the Kinkaku-ji Temple - a pagoda made to house the sacred relics of the Buddha which has given this temple the popular name of Kinkaku-ji (“Temple of the Golden Pavilion”). Later, visit Kiyomizu Dera, a UNESCO World Heritage site and one of the most famous temples in all of Japan.Dinner at Indian Restaurant with Ramen Noodles Tasting.",
        },
        {
          day: "Day 9",
          details:
            "Today, we check out and proceed to the airport for your flight back home. It’s time to say goodbye to all the new friends you have made. We hope you take back many happy memories of your holiday. We would like you to spare a few minutes of your time to write and tell us how you enjoyed your holiday and any suggestions you may have for the future.",
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
  return (
    <>
      <Contentsection heading={selectedTour.heading} children={""} backgroundImage={bg1} />

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
                note={selectedTour.note}
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
