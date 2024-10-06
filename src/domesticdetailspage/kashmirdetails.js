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
      heading: "Kashmir Tour Packages from Chennai",
      title: "Kashmir Tour Packages from Chennai",
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
        "We promise romantic and enchanting Kashmir honeymoon packages in which you can experience stunning landscapes, serene lakes, and charming houseboats with this Kashmir tour package. A romantic shikara ride on Dal Lake, beautiful Mughal Gardens, and Shah Hamdan’s shrine give you the best experience with our Kashmir tour package. A romantic candlelight dinner, a traditional Kashmiri music performance, or a private shikara ride for special moments will make your Kashmir tour package a fulfilled one",
      ],
      duration: [
        "07 Days,06 Nights  Patanitop 1N/Srinagar 2N/Pahalgam 1N/Gulmarg 1N/Jammu 1N (Tour Duration)",
      ],
      tourCode: ["AH-JK-16"],
      hotelDetails: [
        "Hotel Shefaf",
        "Tourist Palace",
        "Green Park",
        "Royal Arabia",
        "The Regency",
        "Alpie Ridge",
        "Asian Park",
        "Hotel Hilltop Pahalgam",
        "Pine Spring",
        "Hotel Mount Shivalik",
        "Chirag International",
        "Hotel Samson",
        "Dolphin",
        "Green Top",
      ],
      PackageInclusion: [
        "Accommodation on twin share basis at hotel specified /Similar. (Triple share for extra person)",
        "Daily breakfast as per hotel menu",
        "All meals during houseboat stay",
        "All tours and transfers as stated in private Air-conditioned vehicle. (Swift / Etios / Innova etc.)",
        "English / Hindi speaking friendly driver cum guide throughout your trip",
        "Driver’s Bata, Toll, Parking, Road tax, Fuel charge, Interstate charges",
        "Local Assistance & 24x7 Helpline",
      ],
      Priceexclusions: [
        "Airfare / Train Fare",
        "Travel insurance",
        "Entry fees for Shows, Parks, Safaris, Monuments, Boats etc.",
        "Tipping for driver/restaurant and guide",
        "Extra expenses for Early check in / Late check out",
        "Charge extra for Candle Light Dinner, Flower Bed, Cake etc. in Honeymoon Packages",
        "Zero Point/Sonmarg/Betab Valley/Chain Vehicle not included",
        "Any service which is not mentioned in inclusion. @ GST 5%",
      ],
      note: [
        "Rooms are subject to availability.",
        "AC will not operate in vehicle on Hills.",
        "Charges for AC / Heater will be extra and as per hotel policy.",
        "In some areas, if a local cab needs to be booked, it will be paid directly by the guest/tourist.",
        "Vehicles are on disposal from Station to Station or Airport to Airport.",
        "Child below 5 yrs is complimentary and between 5-11 is chargeable at 50% or as per hotel & area policy.",
        "Peak season in Ladakh from May to September. Rates may change or will be the same at that time (Peak Season Rates Apply).",
        "Cost incidental to any change in the itinerary/stay on account of flight cancellation, due to bad weather, extra stay or expenses.",
        "Read all terms & conditions carefully before booking any package which is maintained on the website.",
      ],
      itinerary: [
        {
          day: "Day 1",
          details:
            "Arrival Srinagar meeting and assistance by our representative then transfer to the Hotel.After fresh Start Local Sightseeing the famous Mughal gardens “NISHAT BAGH” “Cheshmashash” and “SHALIMAR BAGH” Afternoon free for personal activities like Shopping. in the Evening return back to the Hotel. Dinner and overnight stay in Srinagar.",
        },
        {
          day: "Day 2",
          details:
            "After breakfast depart for full day tour to Sonmarg. Full day to enjoy Sonmarg. In the evening return back to Srinagar. Dinner and overnight stay in Srinagar.",
        },
        {
          day: "Day 3",
          details:
            "After breakfast leave from Srinagar and Drive straight to Pahalgam. On the way visit famous Saffron Field, Full day Enjoyment in Pahalgam,Full Day enjoyment in Chandanwari/ Aru valley/ Bataab valley (at your own Cost). In the Evening Return Back to Hotel. Dinner and overnight stay in Pahalgam.",
        },
        {
          day: "Day 4",
          details:
            "After breakfast leave from Pahalgam and Drive straight to Gulmarg. Full day Enjoyment in Gulmarg, Full day Enjoyment in Gulmarg Well as Gondola Ride (Cable car) upto Gulmarg to Khalinmarg, at your (own cost) Dinner and overnight stay in Gulmarg",
        },
        {
          day: "Day 5",
          details:
            "After checkout hotel drive to Srinagar join hotel. Day free for leisure and shopping. In the evening enjoy shikara ride on dal lake. Then back to hotel. Dinner and overnight stay in Srinagar.",
        },
        {
          day: "Day 6",
          details:
            "After breakfast leave from Srinagar and transfer to Airport to connect Flight at your onward Destination. Tour ends with sweet memorize by Ashirwad Holidays, Pune.",
        },
      ],

      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3405659.0703622214!2d75.264724!3d33.531573!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e1092499ffa89d%3A0x6567a6d4697e7f1!2sJammu%20and%20Kashmir!5e0!3m2!1sen!2sin!4v1728194518249!5m2!1sen!2sin",
      iconSrc: [location1],
    },

    2: {
      heading: "Srinagar Gulmarg Pahalgam Tour Packages",
      title: "Srinagar Gulmarg Pahalgam Tour Packages",
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
        "Experience the tour of Srinagar, the summer capital of Jammu and Kashmir, with our Srinagar tour packages which offer a mix of cultural, natural, and romantic experiences. Jammu Kashmir travel and tourism includes all the unique experiences like the shikhara ride on Dal Lake, Lal Chowk, and Polo View Market, for traditional Kashmiri handicrafts, Pashmina shawls, and more. With Srinagar tour packages you explore local Kashmiri cuisine, including Wazwan dishes, Rogan Josh, and Yakhni.",
      ],
      duration: [
        "05 Days / 04 Nights - Srinagar (2N) – Gulmarg (1N) – Pahalgam (1N) (Tour Duration)",
      ],
      // tourCode: ["AH-KRL-15"],
      hotelDetails: [
        "Hotel Shefaf",
        "Tourist Palace",
        "Green Park",
        "Royal Arabia",
        "The Regency",
        "Alpie Ridge",
        "Asian Park",
        "Hotel Hilltop Pahalgam",
        "Pine Spring",
      ],
      PackageInclusion: [
        "Accommodation on twin share basis at hotel specified / Similar or as per booking",
        "Daily breakfast & Dinner",
        "Airport / Station / Bus stop - Pickup-Drop",
        "All tours and transfers as stated in private Non Air-conditioned vehicle. (Swift / Indigo / Indica / Innova / TT)",
        "English / Hindi speaking friendly driver cum guide throughout your trip",
        "Driver’s Bata, Toll, Parking, Road tax, Interstate charges",
        "All applicable hotel taxes",
      ],
      Priceexclusions: [
        "Airfare / Train Fare",
        "Travel insurance",
        "Entry fees for Shows, Parks, Safaris, Monuments, Boats etc.",
        "Tipping for driver/restaurant and guide",
        "Extra expenses for Early check in / Late check out",
        "Charge extra for Candle Light Dinner, Flower Bed, Cake etc. in Honeymoon Packages",
        "Zero Point/Sonmarg/Betab Valley/Chain Vehicle not included",
        "Any service which is not mentioned in inclusion. @ GST 5%",
      ],
      note: [
        "Rooms are subject to availability. AC will not operate in vehicle on Hills.",
        "Charges for AC/Heater will be extra and as per hotel policy.",
        "In some areas, if a local cab needs to be booked, it will be paid directly by the guest/tourist.",
        "Vehicles are on disposal from Station to Station or Airport to Airport.",
        "Child below 5 years is complimentary; children between 5-11 years are chargeable at 50% or as per hotel & area policy.",
        "Peak season in Ladakh is from May to September. Rates may change or remain the same during this time (Peak Season Rates Apply).",
        "Cost incidental to any change in the itinerary/stay on account of flight cancellation, bad weather, extra stay, or expenses.",
      ],
      itinerary: [
        {
          day: "Day 1",
          details:
            "Arrival Srinagar meeting and assistance by our representative then transfer to the Hotel. After fresh Start Local Sightseeing the famous Mughal gardens “NISHAT BAGH” “Cheshmashash” and “SHALIMAR BAGH” Afternoon free for personal activities like Shopping. in the Evening return back to the Hotel for dinner and overnight stay in Srinagar.",
        },
        {
          day: "Day 2",
          details:
            "After breakfast leave from Srinagar and Drive straight to Pahalgam. On the way visit famous Saffron Field, Full day Enjoyment in Pahalgam,Full Day enjoyment in Chandanwari/ Aru valley/ Bataab valley (at your own Cost). In the Evening Return Back to Hotel For dinner and overnight stay at Pahalgam.",
        },
        {
          day: "Day 3",
          details:
            "After breakfast leave from Pahalgam and Drive straight to Gulmarg. Full day Enjoyment in Gulmarg, Full day Enjoyment in Gulmarg Well as Gondola Ride (Cable car) upto Gulmarg to Khalinmarg, at your (own cost). Dinner and overnight stay at Gulmarg.",
        },
        {
          day: "Day 4",
          details:
            "After checkout hotel drive to Srinagar join hotel. Day free for leisure & shopping. In the evening enjoy shikara ride on dal lake. Dinner and overnight stay in Srinagar.",
        },
        {
          day: "Day 5",
          details:
            "After breakfast leave from Srinagar and transfer to Airport to connect Flight at your onward Destination. Tour ends with sweet memorize by Ashirwad Holidays, Pune.",
        },
      ],

      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3405659.0703622214!2d75.264724!3d33.531573!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e1092499ffa89d%3A0x6567a6d4697e7f1!2sJammu%20and%20Kashmir!5e0!3m2!1sen!2sin!4v1728194518249!5m2!1sen!2sin",
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
