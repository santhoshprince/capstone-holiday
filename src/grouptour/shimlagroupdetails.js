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
import galleryImage1 from "../img/Manali/1.jpg";
import galleryImage2 from "../img/Manali/2.jpg";
import galleryImage3 from "../img/Manali/9.jpg";
import galleryImage4 from "../img/Manali/8.jpg";
import galleryImage5 from "../img/Manali/4.jpg";
import galleryImage6 from "../img/Manali/9.jpg";
import { Helmet } from "react-helmet";
import galleryImage1_1 from "../img/Manali/7.jpg";
import galleryImage2_2 from "../img/Manali/8.jpg";
import galleryImage3_3 from "../img/Manali/9.jpg";
import galleryImage4_4 from "../img/Manali/10.jpg";
import galleryImage5_5 from "../img/Manali/11.jpg";
import galleryImage6_6 from "../img/Manali/12.jpg";

import location1 from "../img/icon/location-dot3.svg";
import bg1 from "../img/Manali/4.jpg";

const TourPage = () => {
  const { id } = useParams();

  const detailsitinerary = useRef(null);
  const detailsGalleryRef = useRef(null);
  const tourDetailsRef = useRef(null);
  const locationMapRef = useRef(null);
  const toursData = {
    1: {
      heading: "Shimla Manali Group Tour",
      title1: "Shimla Manali Group Tour",
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
        "Accommodation on twin share basis at hotel specified /Similar. (Tipple share for extra person)",
        "Daily breakfast as per hotel menu",
        "All meals during houseboat stay",
        "All tours and transfers as stated in private Air-conditioned vehicle. (Swift / Etios / Innova etc.)",
        "English / Hindi speaking friendly driver cum guide throughout your trip",
        "Driver’s Bata, Toll, Parking, Road tax, Fuel charge, Interstate charges",
        "Local Assistance & 24x7 Helpline",
      ],
      Priceexclusions: [
        "Airfare / Train Fare.",
        "Travel insurance",
        "Entry fees for Shows, Parks, Safaris, Rides, Monuments, Boats, Room Heater Charges etc.",
        "Tipping for driver, restaurant and guide",
        "Extra expenses for Early check in / Late check out",
        "Charge extra for Candle Light Dinner, Flower Bed Decoration, Cakes etc. in Honeymoon Packages",
        "Expenses for condition beyond control",
        "Any service, Sightseeing which not mentioned in inclusion.",
        "GST 5% (On final bill amount)",
      ],
      description1: [
        "Shimla, Manali, Dalhousie, Chamba, and Kasauli are the most admired tourist places that our Shimla Manali Group Tour packages include. Wintertime, from October to January, is the best time to see snow and enjoy winter activities. Kayaking, Trekking, White-water rafting and Hot air balloon flying are the best adventure activities for group tours covered with our Himachal Pradesh Tour Package, and Shimla Manali Tour Package from Chennai.",
      ],
      // tourCode: ["CBT-22/01"],
      duration: ["6 Days 5 Nights"],
      hotelDetails: [
        "Peak View",
        "Tourist Nest",
        "Soland Holidays",
        "Asia Holiday",
        "Snow Peak Retreat",
        "Lifestyle",
        "Six season",
        "Natraj",
        "Sitara",
        "Neha",
        "Sun Park",
        "Royal Park",
        "AHR",
        "Fern",
        "Citrus",
        "Manali Grand",
        "White Meadows",
        "Orchard Green",
        "Corel",
        "Highland",
      ],
      itinerary: [
        {
          day: "Day 1",
          details:
            "Arrival at Delhi or Chandigarh airport/railway station, immediately we transfer you Chandigarh to Manali (250 Kms. / 8 Hrs) or Delhi to Manali (530 Kms. / 12 Hrs) Whenever reach at Manali check into your Hotel & get fresh. Take your dinner at Hotel. Overnight stay at Hotel in Manali.",
        },
        {
          day: "Day 2",
          details:
            "After breakfast proceed for full day local sightseeing of Manali like Hadimba Temple, Tibetan Monastery, Lord Buddha and Tankha paintings, Vashistha Temple for “Hot & Cold water Kund”, Club House. The evening is free leisure & you can move around to the Mall Road for shopping. When ever reach at Hotel take your dinner at hotel. Overnight stay at hotel in Manali.",
        },
        {
          day: "Day 3",
          details:
            "After breakfast proceed on a day excursion to the Rohtang Pass also called Snow Point of Himachal – enjoy the beauty of year round snow capped mountains. The rest of the day is free to explore this picturesque town on your own. If weather not permit to Rohtang Pass You can visit Naggar castle or Solangvally as a alternate sightseeing for Rohtang Pass Evening free for leisure & enjoy your dinner at Hotel. Overnight stay at hotel in Manali.",
        },
        {
          day: "Day 4",
          details:
            "Today after breakfast we checkout from hotel and proceed for Shimla by Road (250km/7Hrs). Enroute visit to famous Kullu Shawl factories or enjoy white water rafting in River Beas (at your own cost) Whenever reach at Shimla check into your hotel & get fresh. Evening free for leisure & take your dinner at hotel. Overnight stay at hotel in Shimla.",
        },
        {
          day: "Day 5",
          details:
            "After breakfast proceed for wonderful day excursion to Kufri. In Kufri enjoy a walk through thick ceder woods to Mahasu Pick for amazing view of mighty Himalayas. Enjoy Horse riding at your own cost. You can do wonderful photography also. Evening come back to the Resort & do some shopping at very famous Mall road of Shimla. Enjoy your dinner at Hotel. Overnight stay at hotel in Shimla.",
        },
        {
          day: "Day 6",
          details:
            "After breakfast we transfer you Shimla to Delhi (340 Kms / 7 Hrs) or Shimla to Chandigarh (110 Kms / 3.30 Hrs) Whenever reach at Delhi or Chandigarh airport/railway station proceed as per your further journey schedule towards to your home town. Tour ends with sweet memorize by Capstone Holidays. .",
        },
      ],
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3471664.9927754677!2d77.301755!3d31.816881000000002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390453c367f901f7%3A0x7cfe04c5564b7725!2sHimachal%20Pradesh!5e0!3m2!1sen!2sin!4v1728206339141!5m2!1sen!2sin",

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
    title: "Shimla Manali Group Tour | Group Tour from Chennai",
    keywords:
      "shimla manali group tour, group tour from chennai, shimla manali group, group tour, shimla manali, shimla manali group tour packages",
    description:
      "Shimla, Manali, Dalhousie, Chamba, and Kasauli are the most admired tourist places that our Shimla Manali Group Tour packages include.",
    schema: {
      "@context": "https://schema.org/",
      "@type": "WebSite",
      name: "Capstone Holidays",
      url: "https://www.capstoneholidays.in/tour/shimla-manali-group-tour/",
      potentialAction: {
        "@type": "SearchAction",
        target:
          "https://www.capstoneholidays.in/tour/shimla-manali-group-tour/{search_term_string}",
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
            <div className="col-12" ref={tourDetailsRef}>
              <TourDetails
                title1={selectedTour.title1}
                description1={selectedTour.description}
                duration={selectedTour.duration}
                tourCode={selectedTour.tourCode}
                priceIncludes={selectedTour.priceIncludes}
                hotelDetails={selectedTour.hotelDetails}
                PackageInclusion={selectedTour.PackageInclusion}
                Priceexclusions={selectedTour.Priceexclusions}
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
