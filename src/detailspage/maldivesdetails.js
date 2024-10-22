import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../components/sidebardetailspage";
import Contentsection from "../components/contentbg";
import DetailSlider from "../components/detailslider";
import DetailsGallery from "../components/detailsgallery";
import LocationMap from "../components/deatilsmap";
import TourDetails from "../components/tourdetails";
import galleryImage1 from "../img/tour/g1.jpg";
import galleryImage2 from "../img/tour/g9.jpg";
import galleryImage3 from "../img/tour/g4.jpg";
import galleryImage4 from "../img/tour/g5.jpg";
import galleryImage5 from "../img/tour/g6.jpg";
import galleryImage6 from "../img/tour/g10.jpg";

import galleryImage1_1 from "../img/gallery/2151682890.jpg";
import galleryImage2_2 from "../img/gallery/4900.jpg";
import galleryImage3_3 from "../img/gallery/4911.jpg";
import galleryImage4_4 from "../img/gallery/4852.jpg";
import galleryImage5_5 from "../img/gallery/835.jpg";
import galleryImage6_6 from "../img/gallery/1110.jpg";
import { Helmet } from "react-helmet";
import location1 from "../img/icon/location-dot3.svg";
import bg1 from "../img/bg/5.jpg";

const TourMaldives = () => {
  const { id } = useParams();

  const detailSliderRef = useRef(null);
  const detailsGalleryRef = useRef(null);
  const tourDetailsRef = useRef(null);
  const locationMapRef = useRef(null);

  const toursData = {
    1: {
      heading: "Maldives Tour Package from Chennai",
      title1: "Maldives Tour Package from Chennai",
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
        "Buffet style meals as per the selected meal plan",
        "Meet/greet services on arrival and departure",
        "Complimentary access to the AAA lounge at the Velana International Airport",
        "Complimentary Wi-Fi access at the resort",
        "Bottled Drinks and water served by the glass( including soft drinks, beer, house wine and pouring spirits)",
        "Beverages to be served between 1000hrs and 0000hrs only. After midnight all consumed drinks will be charged at the normal price. (--Pouring spirits include: Gin, Vodka, Whiskey, Brandy, Tequila, Rum, Arrack and Martini)",
        "Selected cocktails & mocktails",
        "Mini bar soft drinks and Water (replenished once daily)",
        "20% discount on A la carte restaurant if bill exceeds US$50",
        "20% discount on special dinners",
        "10% discount on spa treatments",
        "01 Free Dolphin watching tour per person per stay (minimum 3 nights stay is required)",
      ],
      allInclusion: [
        "Bottled Drinks and water served by the glass( including soft drinks, beer, house wine and pouring spirits)",
        "Beverages to be served between 1000hrs and 0000hrs only. After midnight all consumed drinks will be charged at the normal price. (--Pouring spirits include: Gin, Vodka, Whiskey, Brandy, Tequila, Rum, Arrack and Martini)",
        "Selected cocktails & mocktails",
        "Mini bar soft drinks and Water (replenished once daily)",
        "20% discount on A la carte restaurant if bill exceeds US$50",
        "20% discount on special dinners",
        "10% discount on spa treatments",
        "01 Free Dolphin watching tour per person per stay (minimum 3 nights stay is required)",
      ],
      complimentaryguestservices: [
        "Honeymooners will receive a bottle of wine and a cake on arrival",
        "If a guest celebrates a birthday on the island during the stay a birthday cake will be provided per stay",
        "If a guest celebrates their wedding anniversary on the island during their stay a cake will be provided per stay",
      ],
      description1: [
        "Our Maldives Tour Package From Chennai takes you to the most blissful places to enjoy with the family or as a couple. The Maldives is an island nation that should go on everyone's bucket list; it is a small group of islands in the Indian Ocean with perfect beaches, the purest turquoise waters, magnificent marine life, over-the-water bungalows, and much more! Male, Addu Atoll, The Muraka Conrad, Vaadhoo Island, Grand Friday Mosque, Artificial Beach, National Museum, Fulhadhoo Island, and Maafushi Island are a few of the Maldives' locations with a good feel",
      ],
      // tourCode: ["CBT-22/04"],
      duration: ["4 Nights,5 Days"],
      hotelDetails: ["Medhufushi Island Resort (Beach Villa, Water Villa)"],
      itinerary: [
        {
          day: "Day 1",
          details: "After Arrive transfer Hotel. Dinner set menu at Hotel. (D)",
        },
        {
          day: "Day 2",
          details:
            "Full Day Visit NusaDua Water Sports, Padang Padang Beach, Uluwatu Temple & Jimbaran Dinner. (B/D)",
        },
        {
          day: "Day 3",
          details:
            "Full Day Visit Jatiluwih, Tanah Lot, Taman Ayun Temple, Chocolate Factory. Dinner set menu at Hotel. (B/D)",
        },
        {
          day: "Day 4",
          details:
            "Full Day Visit Nusa Penida West Tour (SIC) 6.30 AM Pickup at your hotel (depends on the area),,08.00 – 09.00 AM Go to Sanur Harbour – Until Harbour Nusa Penida , 10.00 AM Visit Angel Billabong,,11.00 AM Visit Broken Beach ,12.30 PM Lunch Time ,13.30 PM Visit Klingking Beach ,14.30 PM Visit Crystal Bay,,14.30 PM Back to Harbour ,16.30 PM Drop to Hotel. Dinner set menu at Hotel.(B/D)",
        },
        {
          day: "Day 5",
          details:
            "Full Day Visit Kintamani Volcano , Tirta empul temple Gunung kawi bali, Goa Gajah. Dinner set menu at Hotel. (B/D)",
        },
        { day: "Day 6", details: "Hotel to Bali Airport Transfer.(B)" },
      ],
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d16318194.701524321!2d73.240356!3d3.112098!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x24b599bfaafb7bbd%3A0x414509e181956289!2sMaldives!5e0!3m2!1sen!2sin!4v1727849070874!5m2!1sen!2sin",
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
      <Helmet>
        <title>Maldives Tour Package from Chennai | Coimbatore</title>
        <meta
          name="description"
          content="Our Maldives Tour Package From Chennai takes you to the most blissful places to enjoy with the family or as a couple"
        />
        <meta
          name="keywords"
          content="maldives tour package from chennai, maldives tour, hotel, maldives flight, Maldives tour package"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "WebSite",
            name: "Capstone Holidays",
            url: "https://www.capstoneholidays.in/tour/maldivestour-package-from-chennai/",
            potentialAction: {
              "@type": "SearchAction",
              target:
                "https://www.capstoneholidays.in/tour/maldivestour-package-from-chennai/{search_term_string}",
              "query-input": "required name=search_term_string",
            },
          })}
        </script>
      </Helmet>
      <Contentsection
        heading={selectedTour.heading}
        children={""}
        backgroundImage={bg1}
      />

      {/* Navigation Links */}
      <nav className="tour-navigation">
        <ul>
          {/* <li onClick={() => scrollToSection(detailSliderRef)}>Detail Slider</li> */}
          <li onClick={() => scrollToSection(detailsGalleryRef)}>Gallery</li>
          <li onClick={() => scrollToSection(tourDetailsRef)}>Tour Details</li>
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
                // tourCode={selectedTour.tourCode}
                priceIncludes={selectedTour.priceIncludes}
                hotelDetails={selectedTour.hotelDetails}
                allInclusion={selectedTour.allInclusion}
                complimentaryguestservices={
                  selectedTour.complimentaryguestservices
                }
              />
            </div>
          </div>
          {/* <div className="row">
            <div className="col-12">
              <Itinerary
                title="Itinerary"
                itineraryData={selectedTour.itinerary}
              />
            </div>
          </div> */}
          {/* Full-width map */}
          <div className="row">
            <div className="col-12" ref={detailsGalleryRef}>
              <DetailsGallery images={selectedTour.gallerydata} />
            </div>
          </div>
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

export default TourMaldives;
