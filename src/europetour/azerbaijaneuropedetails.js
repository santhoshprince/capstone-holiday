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
      heading: "Azerbaijan Europe Tour",
      title: "Azerbaijan Europe Tour",
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
      "Accommodation in Baku, 3 nights.",
    "Accommodation in Guba, 3 nights.",
    "Accommodation in Gabala, 3 nights.",
    "Breakfasts at the hotels.",
    "Transfers from/to airport.",
    "Transportation during program with comfortable car.",
    "English speaking driver.",
    "Water per each excursion day." 
      ],
      Priceexclusions: [
        "Air tickets and insurance.",
        "Lunches and dinners.",
        "Entrance fees to museums/entertainment.",
        "Personal expenses.",
        "PCR test costs.",
        "Visa cost."
      ],
      description: [
       "Explore the enchanting beauty and rich cultural heritage of Azerbaijan, a country where the East meets the West. Your journey begins in the vibrant capital, Baku, known for its stunning architecture, including the modern Flame Towers and the historic Old City, a UNESCO World Heritage site. Enjoy leisurely walks along the picturesque Baku Boulevard and indulge in local cuisine at charming restaurants."
      ],
      // tourCode: ["CBT-22/01"],
      duration: ["10 Days 9 Nights"],
      hotelDetails: [
        "Baku – West Shine or Alba Hotel 4*.",
    "Gabala – White Boutique 4*.",
    "Guba – Gold Guba Hotel 3*."
      ],
      note:[
"Additionally, 3% will be added to the cost during the payment process; the company has the right to change the program in case of necessity. Package is not valid during the Eid period (26.06-01.07). Kindly check availability before quoting to the customers."
      ],
      itinerary: [
        {
          day: "Day 1",
          details:
            "Arrive at the Azerbaijan International Airport. You will be welcomed and then transferred to your hotel. Check-in at the hotel. The rest of the day is free for you to explore this windy capital. Overnight in Baku.",
        },
        {
          day: "Day 2",
          details:
            "Breakfast at the hotel in Baku. Excursion program (pick-up time 10:00): Highland Park and Flame Towers Complex. Ferris Wheel. International Mugham and 'Baku Venice.' Azerbaijan Carpet Museum. Baku Boulevard. Old city tour (Maiden Tower, Shirvanshah Palace, etc). Fountain Square. The Heydar Aliyev Center. Transfer to Hotel. Overnight in Baku."

        },
        {
          day: "Day 3",
          details:
            "Breakfast at the hotel. Transfer to Gabala (pick-up time 12:00). On the way guests will pass: Shamakhi Juma Mosque. Reaching Gabala. Check-in to the hotel. Free time. Overnight in Gabala.",
        },
        {
          day: "Day 4",
          details:
            "Breakfast at the hotel. Excursion program (pick-up time 10:00). 7 Gozal Waterfall (7 Beauties). Nohur Lake. Lunch break 13.00-14.00. Tufandagh Tourism Complex. Gabala Shooting Club. Return to the hotel. Free time. Overnight in Gabala.",
        },
        {
          day: "Day 5",
          details:
           "Breakfast at the hotel. Excursion program (pick-up time 10:00). 7 Gozal Waterfall (7 Beauties). Nohur Lake. Lunch break 13.00-14.00. Tufandagh Tourism Complex. Gabala Shooting Club. Return to the hotel. Free time. Overnight in Gabala."
        },
        {
          day: "Day 6",
          details:
         "Breakfast at the hotel in Baku. Transfer to Guba (pick-up time 10:00). Arrival to Guba hotel. Check-in to the hotel. Free time for rest. Overnight in Guba."
        },
        {
          day: "Day 7",
          details:
         "Breakfast at the hotel in Baku. Transfer to Guba (pick-up time 09:00). Excursion program: Besh Barmag Shrine, Red settlement, Carpet weaving factory, Gachrash Forests, Mastdargah. Lunch break. Check-in to the hotel. Overnight in Guba."

        },
        {
          day: "Day 8",
          details:
         "Breakfast at the hotel in Baku. Transfer to Shahdag Mountain Resort (pick-up time 10:00). Excursion program: Visiting Shahdag Mountain Resort, Using activities which are available at that moment, Going to Laza village. Lunch break. Return to the hotel. Overnight in Guba."
        },
        {
          day: "Day 9",
          details:
         "Breakfast at the hotel. Check-out from the hotel by 12:00. Way to Baku (around 3 hours). Check-in to the hotel. Shopping time in local bazaars (Sharg Bazaar, Yashil Bazaar) and shopping malls (Daniz Mall, 28 Mall, Ganjlik Mall). Overnight in Baku."

        },
        {
          day: "Day 10",
          details:
         "Breakfast at the hotel. Check-out. Transfer to the Azerbaijan International Airport (3 hours before the flight timing). Departure."
        },
      ],
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3121649.7397364983!2d47.75466659999999!3d40.17599485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307cd91aa21ddf%3A0xe6c9526b3e83cd08!2sAzerbaijan!5e0!3m2!1sen!2sin!4v1728305759113!5m2!1sen!2sin",
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
