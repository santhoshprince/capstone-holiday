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
      heading: "Delhi Agra Jaipur Tour Package",
      title: "Delhi Agra Jaipur Tour Package",
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
        "Ready to explore the ‘Land of Kings’ with our Rajasthan tout package? Yes, our Rajasthan travel packages offer the exciting experience of a vibrant and culturally rich state in northern India. With our Rajasthan tour packages, you can explore majestic palaces, forts, colorful festivals, and desert landscapes. Some key spots in Rajasthan that our Rajasthan tour package covers are Jaipur: The Pink City, Udaipur: The City of Lakes, Jodhpur: The Blue City, and many more.",
      ],
      duration: ["05 Days / 04 Nights"],
      tourCode: ["AH-RJ-17"],
      hotelDetails: [
        "Avlon/C Park/sim",
        "Le Roi/Ambatix",
        "Le Season",
        "Madhushree",
        "Pearl Blue",
        "Taj Vilas",
        "Crystel Sarovar",
        "Kanchandeep",
        "Milestone 251",
        "Paradise",
        "Royal Orchid",
      ],
      PackageInclusion: [
        "Accommodation on twin share basis at hotel specified / Similar. (Tipple share for extra person)",
        "Daily breakfast (As per hotel menu)",
        "All maintain sightseeing as per tour itinerary",
        "Dinner, Folk Dance, Camel ride at Jaisalmer camp",
        "All tours and transfers as stated in private Air-conditioned vehicle. (Swift / Etios / Innova/TT etc.,)",
        "English / Hindi speaking friendly driver cum guide throughout your trip",
        "Driver’s Bata, Driver Food/Meal, Toll, Parking, Road tax, Fuel charge, Interstate charges",
        "All applicable & Hotel Taxes (Except 5% GST)",
      ],
      Priceexclusions: [
        "Airfare / Train Fare",
        "Travel insurance",
        "Entry fees for Shows, Parks, Safaris, Monuments, Boats etc.",
        "Tipping for driver/restaurant and guide",
        "Extra expenses for Early check in / Late check out",
        "Charge extra for Candle Light Dinner, Flower Bed, Cake etc. in Honeymoon Packages",
        "Any service, which not mentioned in inclusion",
        "Expenses when/if condition beyond control",
        "GST 5% (On final bill amount)",
      ],
      itinerary: [
        {
          day: "Day 1",
          details:
            "Arrival in Jaipur, transfer to the hotel. Beautiful palaces, forts and colorful bazaars speak of the pink city’s glorious regal past. Modernity walks hand-in-hand with history in Jaipur. This largest city of Rajasthan, founded by Maharaja Sawai Jai Singh, is famous for its magnanimous hospitality. Evening visit City Palace and local market. Overnight in hotel.",
        },
        {
          day: "Day 2",
          details:
            "After breakfast enjoy full day sightseeing of Jaipur visiting Amer fort, Hawamahal, Jantar Mantar, Museum and local market. Overnights at Hotel.",
        },
        {
          day: "Day 3",
          details:
            "After breakfast proceed to Ranthambore and transferred to the Hotel. Day is free for leisure. After Lunch proceed for evening safari. Overnight at hotel.",
        },
        {
          day: "Day 4",
          details:
            "Early morning proceed for jungle Safari. Return back to the hotel for breakfast. After lunch visit Ranthambhore Fort & Lord Ganesh Temple inside the Fort. Overnight at Hotel.",
        },
        {
          day: "Day 5",
          details:
            "After breakfast you will be transferred to Jaipur for your onwards journey. After reach at Jaipur Airport/Railway station tour ends with sweet memorize by Ashirwad Holidays.",
        },
      ],

      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14608903.200457694!2d73.878347!3d26.628408!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396a3efaf7e30e37%3A0xb52b9b4506c088e5!2sRajasthan!5e0!3m2!1sen!2sin!4v1728201755880!5m2!1sen!2sin",
      iconSrc: [location1],
    },

    2: {
      heading: "Rajasthan Trip package",
      title: "Rajasthan Trip package",
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
        "Explore the popular destination of Rajasthan with our Rajasthan trip package. Our Rajasthan holiday package is a combination of numerous palaces, forts, temples, and havelis that showcase the opulence and grandeur of Rajasthan’s history. You can also explore Rajasthan’s architecture which is often a blend of Mughal, Rajput, and medieval styles in our Rajasthan trip package. Popular ones include Amber Fort in Jaipur, Mehrangarh Fort in Jodhpur, City Palace in Udaipur, and Hawa Mahal in Jaipur.",
      ],
      duration: ["04 Days / 03 Nights"],
      tourCode: ["AH-RAJ-15"],
      hotelDetails: [
        "Kanchandeep",
        "Mantra Resort",
        "Milestone 251",
        "Lohana Village/Pushkar Heritage",
        "Paradise",
        "Pushkar Resort",
        "Royal Orchid",
        "Ananta Resort",
      ],
      PackageInclusion: [
        "Accommodation on twin share basis at hotel specified / Similar. (Triple share for extra person)",
        "Daily breakfast (As per hotel menu)",
        "All maintain sightseeing as per tour itinerary",
        "Dinner, Folk Dance, Camel ride at Jaisalmer camp",
        "All tours and transfers as stated in private Air-conditioned vehicle. (Swift / Etios / Innova / TT etc.)",
        "English / Hindi speaking friendly driver cum guide throughout your trip",
        "Driver’s Bata, Driver Food/Meal, Toll, Parking, Road tax, Fuel charge, Interstate charges",
        "All applicable & Hotel Taxes (Except 5% GST)",
      ],
      Priceexclusions: [
        "Airfare / Train Fare",
        "Travel insurance",
        "Entry fees for Shows, Parks, Safaris, Monuments, Boats etc.",
        "Tipping for driver/restaurant and guide",
        "Extra expenses for Early check in / Late check out",
        "Charge extra for Candle Light Dinner, Flower Bed, Cake etc. in Honeymoon Packages",
        "Any service, which not mentioned in inclusion",
        "Expenses when/if condition beyond control",
        "GST 5% (On final bill amount)",
      ],

      itinerary: [
        {
          day: "Day 1",
          details:
            "On arrival in Jaipur, meet our representative who will assist you while taking a transfer to the hotel. Check-in to the hotel and freshen up. Later, leave for sightseeing around the city. Begin with a visit to the City Palace which is known to be the formal residence of a royal family. After sightseeing around the palace, you can visit attractions like Chandra Mahal and Shri Govind Deo Temple. Don’t miss to visit the City Palace Museum which houses the private collection of Jaipur Maharajas. Visit Jantar Mantar which is a stone observatory and the largest observatory built by Maharaja Jai Singh. Overnight at hotel.",
        },
        {
          day: "Day 2",
          details:
            "After breakfast leave for a sightseeing tour around Jaipur. The first attraction which you visit today is the Amber Fort which is located 11 kilometers away from Jaipur. On your way, visit the Hawa Mahal. Explore the glorious past of Rajasthan with a visit to these historical attractions. Later, you can go for shopping in the colorful bazaars of Jaipur. In the evening drive through the city and also visit the famous Laxmi Narayan Mandir. Overnight at hotel.",
        },
        {
          day: "Day 3",
          details:
            "After breakfast leave for on arrival transfer to hotel. Pushkar is a holy town in Rajasthan which is known to house some legendary temples and century’s old lake. It is a famous pilgrimage site because it has the well-known Brahma temple where people visit from all over. Apart from this temple, Pushkar is known to have a number of other temples which are architecturally beautiful. On reaching Pushkar, check-in to the hotel and then leave for sightseeing. Visit the Pushkar Lake where you can take a holy dip. Also, visit the temples and Ghats of Pushkar which are known for their beautiful and unique architectural styles. In the evening, you can visit the Rose Garden and enjoy the beauty of the roses. Overnight at hotel.",
        },
        {
          day: "Day 4",
          details:
            "After breakfast leave for Jaipur Airport/Railway Station for your onward journey. Tour ends with sweet memorize by Ashirwad Holidays, Pune.",
        },
      ],

      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14608903.200457694!2d73.878347!3d26.628408!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396a3efaf7e30e37%3A0xb52b9b4506c088e5!2sRajasthan!5e0!3m2!1sen!2sin!4v1728201755880!5m2!1sen!2sin",
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
