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
import galleryImage1 from "../img/vietnam/5.jpg";
import galleryImage2 from "../img/vietnam/3.jpg";
import galleryImage3 from "../img/vietnam/9.jpg";
import galleryImage4 from "../img/vietnam/12.jpg";
import galleryImage5 from "../img/vietnam/7.jpg";
import galleryImage6 from "../img/vietnam/v1.jpg";
import { Helmet } from 'react-helmet';
import galleryImage1_1 from "../img/vietnam/v1.jpg";
import galleryImage2_2 from "../img/vietnam/v2.jpg";
import galleryImage3_3 from "../img/vietnam/3.jpg";
import galleryImage4_4 from "../img/vietnam/9.jpg";
import galleryImage5_5 from "../img/vietnam/4.jpg";
import galleryImage6_6 from "../img/vietnam/10.jpg";

import location1 from "../img/icon/location-dot3.svg";
import bg1 from "../img/vietnam/3.jpg";

const TourSingapore = () => {
  const { id } = useParams();

  const detailSliderRef = useRef(null);
  const detailsGalleryRef = useRef(null);
  const tourDetailsRef = useRef(null);
  const locationMapRef = useRef(null);
  const InitiaryMapRef = useRef(null);

  const toursData = {
    1: {
      heading: "Vietnam Group Tour Packages – 3N / 4D",
      title1: "Vietnam Group Tour Packages – 3N / 4D",
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
        "Accommodation at twin/double/triple room with daily breakfast",
    "All airport transfers as mentioned by private air conditioned vehicle",
    "English speaking tour guide",
    "Entrance fee",
    "Bottle of water on the bus"
      ],
      Priceexclusions:[
       "International & Domestic flight ticket",
    "Drinks, other than water on activity days",
    "E- Visa & Vietnam Visa stamp fee at 35USD for single entry",
    "Personal expenses (laundry, telephone, drinks, tip...)",
    "Travel insurance",
    "Bank Charges 40 USD per Invoice. (Mandatory)"
      ],

      description: [
        "Vietnam is a country in eastern Asia that has everything from seacoasts to hill stations. It is well known for its quiet, serenity, and its youthful vitality that penetrate the whole country. With holiday packages from India, you may see a country known for its breathtaking natural beauty, rich cultural traditions, and a number of vibrant hill-tribe settlements. Vietnam is captivating and just as intriguing! You’ll be speechless with awe at the beauty of the nation!"
      ],
      // tourCode: ["CBT-22/04"],
      duration: ["3 Nights, 4 Days"],
      hotelDetails: [
        "Hanoi - Anise Hotel, Moon View, Diamond Legend hotel",
        "Hanoi - Le Journey Cruise, Anam Junk",
        "Da Nang - Le Hoang beach hotel, Grand Sunrise hotel",
        "Ho Chi Minh - Queen Ann hotel, Prague Hotel",
        "Phu Quoc - Naami Resort, Mai Phuong Resort"
      ],

      itinerary: [
        {
          day: "Day 1",
          details:
            "Welcome to Hanoi – the capital of Vietnam! The driver will be welcoming you at Noi Bai airport; it takes us 35 minutes driving to the centre of Hanoi then check-in at hotel and relaxes. Please note: Standard check in time is 14:00. Early check in is subject to availability of the hotel.",
        },
        {
          day: "Day 2",
          details: "Enjoy Breakfast at hotel 8:30 We pick you up from your hotel and take you to visit the Ho Chi Minh Complex, which includes Ho Chi Minh’s Mausoleum – the final resting place of the beloved national hero, Uncle Ho – and President Ho Chi Minh’s stilt house where he lived off and on from 1958 to 1969. You’ll also the Ho Chi Minh Museum where you can learn about this remarkable man and what he did for Vietnam and the world 9.30: you’ll visit the One Pillar Pagoda, which is actually a group of structures that collectively make up a pagoda built over the water in the middle of a square lake.After that, you’ll have a chance to explore the Tran Quoc Pagoda on the shore of west lake. From there, it’s onto the Temple of literature, which was Viet nam’s first university and is dedicated to Confucius. Afterwards, you’ll visit Hoan Kiem Lake, the heart and soul of Hanoi.Finally, You’ ll stop in at MUSEUM OF ETHNOLOGY. This superb museum showcases the depth of Vietnamese cultural diversity with an astounding collection of 15,000 artifacts gathered from throughout Vietnam. Maps, displays and dioramas are labelled in Vietnamese, French and English. Displays portray a typical village market, the making of comical hats and a Tay shamanic ceremony; videos show the real thing. You can also check out a traditional Black Thai house reconstructed in the museum. There’s also a centre for research and conservation where scientists from all over the world study traditional Vietnamese cultures.",
        },
        {
          day: "Day 3",
          details: "Enjoy Breakfast at hotel 08:00 the driver pick up and head East for more than 3 hours to Halong Bay, the pride of the Gulf of Tonkin, a Natural World Heritage as designated by UNESCO in 1994. The road will pass by the Red River delta with green paddy fields and rural villages, where hard-work farmers are busy with their farming jobs, ploughing buffaloes or planting seedling. Upon arrival in Halong, we’ll take a big boat to cruise the Bay to discover the magnificent beauty of this “Descending-dragon” bay, created by thousands odd shaped limestone rocks and karst grottoes.After a lunch of fresh seafood on board, we can visit the Surprising Grotto, stop for swimming or kayaking, passing floating villages and approach islets to enjoy their beauty in close distance. Evening attend activities on the boat or relax at your own leisure.Overnight on the boat near Titov Beach",
        },
        {
          day: "Day 4",
          details: "After breakfast, visit by boat to Luon Cave, a ring-shaped pool inside an island in Halong with absolutely tranquil landscape and emerald water. Back to the Wharf of Halong passing the most densely area with many islands that have been named like the Cock-Fighting Rock, Sail Island, Incense burner rock or Sea Dog Rock. Arrive at Halong Wharf around 11.00. Return to Hanoi around 4PM Free until the driver pick up and take you to the airport for your flight to back home",
        },
      ],
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31450645.638070174!2d105.910259!3d15.793925!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31157a4d736a1e5f%3A0xb03bb0c9e2fe62be!2sVietnam!5e0!3m2!1sen!2sin!4v1728115754564!5m2!1sen!2sin",
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
    title: 'Vietnam Group Tour Packages | 3N/4D Vietnam Group Tour Plan',
    keywords: 'Vietnam Group Tour Packages, Vietnam Group Tour Packages from India, Vietnam Group Tour Packages from Chennai, Vietnam Group Tour, Vietnam',
    description: 'The Vietnam Group Tour Packages takes you to the main cities such as Da Nang, Hanoi, and Ho Chi Minh City (Saigon), Hue, Hoi An, Nha Trang, Da Lat, and Mui Ne.',
    schema: {
        "@context": "https://schema.org/",
        "@type": "WebSite",
        "name": "Capstone Holidays",
        "url": "https://www.capstoneholidays.in/tour/vietnam-group-tour-packages/",
        "potentialAction": {
            "@type": "SearchAction",
            "target": "https://www.capstoneholidays.in/tour/vietnam-group-tour-packages/{search_term_string}",
            "query-input": "required name=search_term_string"
        }
    }
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
      <Contentsection heading={selectedTour.heading} children={""} backgroundImage={bg1} />
      {/* Navigation Links */}
      <nav className="tour-navigation">
        <ul>
          {/* <li onClick={() => scrollToSection(detailSliderRef)}>Detail Slider</li> */}
          <li onClick={() => scrollToSection(detailsGalleryRef)}>Gallery</li>
          <li onClick={() => scrollToSection(tourDetailsRef)}>Tour Details</li>
          <li onClick={() => scrollToSection(InitiaryMapRef)}>Itinerary</li>
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
                  <div ref={detailSliderRef}>
                    <DetailSlider images={selectedTour.galleryImages} />
                  </div>

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
            <div className="col-12" ref={InitiaryMapRef}>
              <Itinerary
                title="Itinerary"
                itineraryData={selectedTour.itinerary}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12" ref={tourDetailsRef}>
              <TourDetails
                title1={selectedTour.title1}
                description={selectedTour.description}
                duration={selectedTour.duration}
                // tourCode={selectedTour.tourCode}
                priceIncludes={selectedTour.priceIncludes}
                hotelDetails={selectedTour.hotelDetails}
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

export default TourSingapore;
