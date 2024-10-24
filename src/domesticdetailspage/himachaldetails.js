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
import galleryImage1 from "../img/Himachal/2.jpg";
import galleryImage2 from "../img/Himachal/3.jpg";
import galleryImage3 from "../img/Himachal/4.jpg";
import galleryImage4 from "../img/Himachal/5.jpg";
import galleryImage5 from "../img/Himachal/6.jpg";
import galleryImage6 from "../img/Himachal/9.jpg";

import galleryImage1_1 from "../img/Himachal/9.jpg";
import galleryImage2_2 from "../img/Himachal/10.jpg";
import galleryImage3_3 from "../img/Himachal/7.jpg";
import galleryImage4_4 from "../img/Himachal/12.jpg";
import galleryImage5_5 from "../img/Himachal/13.jpg";
import galleryImage6_6 from "../img/Himachal/14.jpg";

import location1 from "../img/icon/location-dot3.svg";
import bg1 from "../img/correctionimg/20.jpg";
import bg2 from "../img/correctionimg/21.jpg";
import { Helmet } from "react-helmet";

const TourPage = () => {
  const { id } = useParams();

  const detailsitinerary = useRef(null);
  const detailsGalleryRef = useRef(null);
  const tourDetailsRef = useRef(null);
  const locationMapRef = useRef(null);
  const tourDetails = {
    "shimla-manali-tour-package-from-chennai": {
      heading: "Himachal – Shimla Manali Tour Package from Chennai",
      title1: "Himachal – Shimla Manali Tour Package from Chennai",
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
        "Accommodation on twin share basis at hotel specified /Similar. (Triple share for extra person)",
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
        "Extra expenses for Early check-in / Late check-out",
        "Charge extra for Candle Light Dinner, Flower Bed Decoration, Cakes etc. in Honeymoon Packages",
        "Expenses for conditions beyond control",
        "Any service, Sightseeing which is not mentioned in inclusion",
        "GST 5% (On final bill amount)",
      ],

      description1: [
        "Our Shimla Manali Tour package from Chennai arranges a Shimla trip in the winter season, Since Winter is the most admired time to enjoy snowfall in Shimla. Should you feel the call of the mountains, Shimla and Manali are the best places to go. Some of the most popular tourist destinations in India welcome visitors with snow-capped mountains, outdoor pursuits, cascading waterfalls, and a romantic setting. All of Manali's radiant and powerful waterfalls, including the Rozy, Jogini, Rahala, Knoi, and Jana waterfalls, are included in our Manali vacation package. Manali's Solang Valley, Beas Kund, Gulaba, Van Vihar, Rohtang Pass, and Jogini waterfalls are a few of the places to visit on a honeymoon.",
      ],
      duration: ["6 Days,5 Nights"],
      hotelDetails: [
        "Peak View",
        "Tourist Nest",
        "Soland Holidays",
        "Asia Holiday",
        "Snow Peak Retreat",
        "Lifestyle",
        "Six Season",
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
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3471664.9927754677!2d77.301755!3d31.816881000000002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390453c367f901f7%3A0x7cfe04c5564b7725!2sHimachal%20Pradesh!5e0!3m2!1sen!2sin!4v1728190814872!5m2!1sen!2sin",

      iconSrc: [location1],
      title: "Shimla Manali Tour package from Chennai | Coimbatore",
      keywords:
        "shimla manali tour package from chennai, shimla tour package, manali tour package, shimla manali tour packages, shimla manali tour",
      description:
        "Our Shimla Manali Tour package from Chennai arranges a Shimla trip in the winter season, Since Winter is the most admired time to enjoy snowfall in Shimla",
      schema: {
        "@context": "https://schema.org/",
        "@type": "WebSite",
        name: "Capstone Holidays",
        url: "https://www.capstoneholidays.in/tour/shimla-manali-tour-package-from-chennai/",
        potentialAction: {
          "@type": "SearchAction",
          target:
            "https://www.capstoneholidays.in/tour/shimla-manali-tour-package-from-chennai/{search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
    },
    "himachal-tour-package": {
      heading: "Himachal Tour Package",
      title1: "Himachal Tour Package",
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
        "The greatest season for a reasonably priced Himachal Tour Package is during the monsoon, which runs from July to October. The most popular tourist destinations offered by our Himachal Pradesh Tour Package include Shimla, Manali, Dalhousie, Chamba, and Kasauli. The greatest time to observe snow and engage in winter activities is during the winter months of October through January. Our Himachal Pradesh tour package includes the best adventure sports, like white-water rafting, trekking, kayaking, and hot air ballooning",
      ],
      duration: ["06 Days / 05 Nights"],
      hotelDetails: [
        "Peak View",
        "Tourist Nest",
        "Soland Holidays",
        "Asia Holiday",
        "Snow Peak Retreat",
        "Lifestyle",
        "Six Season",
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
      PackageInclusion: [
        "Accommodation on twin share basis at hotel specified /Similar. (Triple share for extra person)",
        "Daily breakfast as per hotel menu",
        "All meals during houseboat stay",
        "All tours and transfers as stated in private Air-conditioned vehicle. (Swift / Etios / Innova etc.)",
        "English / Hindi speaking friendly driver cum guide throughout your trip",
        "Driver’s Bata, Toll, Parking, Road tax, Fuel charge, Interstate charges",
        "Volvo Ticket (Delhi-Manali-Delhi). Only in Volvo Packages",
      ],
      Priceexclusions: [
        "Airfare / Train Fare.",
        "Travel insurance",
        "Entry fees for Shows, Parks, Safaris, Rides, Monuments, Boats, Room Heater Charges etc.",
        "Tipping for driver, restaurant and guide",
        "Extra expenses for Early check-in / Late check-out",
        "Charge extra for Candle Light Dinner, Flower Bed Decoration, Cakes etc. in Honeymoon Packages",
        "Expenses for conditions beyond control",
        "Any service, Sightseeing which is not mentioned in inclusion",
        "GST 5% (On final bill amount)",
      ],
      itinerary: [
        {
          day: "Day 1",
          details:
            "Tour start from Delhi Bus Stop. In the evening board the Manali bound A/c Volvo Coach from Delhi Bus Stop. (580 Kms. / 12-13 Hrs. journey). Overnight on board.",
        },
        {
          day: "Day 2",
          details:
            "On arrival in Manali check into the hotel. Day is free to relax. In afternoon proceed for Manalilocal sightseeing. Visit to Hadimba Devi Temple , Club House, Vashist Bath and Tibetan Monastery. Overnight in the hotel.",
        },
        {
          day: "Day 3",
          details:
            "After breakfast visit to Solang Valley (15 Kms.), famous for its picturesque location and adventurous activities, enjoy lots of activities there i.e. River Crossing/ Rock Climbing/ Rappelling / Paragliding/ Mountain Bike/ Zorbing/ Hot Air Ballooning / Pony Riding/ Cable Car etc. (at your own cost). In the evening you can enjoy leisurely walks in pine forest along River Beas and enjoy picnic on riverside (at your own). Overnight in the hotel.",
        },
        {
          day: "Day 4",
          details:
            "Early morning depart for full day excursion to Rohtang Pass (51 Km, 3 Hrs one side) Rohtang Pass, at an altitude of more than 13000 feet, is the gateway to Lahaul, Spiti and Ladakh. Enjoy lots of adventurous activities there i.e. Skiing/ Snow Bike/ Pony Riding etc. (All at your own cost). If weather not permit to Rohtang Pass You can visit Kullu, Manikaran on your own cost.Overnight in the Manalihotel.",
        },
        {
          day: "Day 5",
          details:
            "After breakfast day is free to stroll on the mall or for shopping. Afternoon board the New Delhi bound A/c Volvo Coach. (580 Kms. / 12-13 Hrs.). Overnight on board.",
        },
        {
          day: "Day 6",
          details:
            "After reach at Delhi Bus Stop tour ends with sweet memorize by Capstone Holidays, Chennai",
        },
      ],

      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3471664.9927754677!2d77.301755!3d31.816881000000002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390453c367f901f7%3A0x7cfe04c5564b7725!2sHimachal%20Pradesh!5e0!3m2!1sen!2sin!4v1728191109370!5m2!1sen!2sin",
      iconSrc: [location1],
      title: "Himachal Tour Package | Himachal Tourist Attractions",
      keywords:
        "himachal tour package, himachal tourist attractions, himachal tour, himachal tourist places, himachal, himachal, himachal flight ticket",
      description:
        "The greatest season for a reasonably priced Himachal Tour Package is during the monsoon, which runs from July to October",
      schema: {
        "@context": "https://schema.org/",
        "@type": "WebSite",
        name: "Capstone Holidays",
        url: "https://www.capstoneholidays.in/tour/himachal-tour-package/",
        potentialAction: {
          "@type": "SearchAction",
          target:
            "https://www.capstoneholidays.in/tour/himachal-tour-package/{search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
    },
  };

  const { tourId } = useParams();

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
        backgroundImage={tour.backgroundImage}
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

          {/* Full-width gallery */}

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
