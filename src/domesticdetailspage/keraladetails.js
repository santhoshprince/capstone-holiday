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
      heading: "Kerala Tour Packages from Chennai",
      title: "Kerala Tour Packages from Chennai",
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
        "Airfare / Train Fare",
        "Travel insurance",
        "Entry fees for Shows, Parks, Safaris, Rides, Monuments, Boats, Room Heater Charges etc.",
        "Tipping for driver, restaurant and guide",
        "Extra expenses for Early check-in / Late check-out",
        "Charge extra for Candle Light Dinner, Flower Bed Decoration, Cakes etc. in Honeymoon Packages",
        "Expenses for conditions beyond control",
        "Any service, Sightseeing which is not mentioned in inclusion",
        "GST 5% (On final bill amount)",
      ],

      description: [
        "Ready to visit the god’s own country with our Kerala honeymoon package? Our Kerala tour packages are a unique blend of natural beauty, cultural experiences, and serene backwaters. We make your travel more exciting and fun-filled where you can visit some of the most popular tourist attraction sites like Fort Kochi, Mattancherry Palace, Jew Town, and St. Francis Church. So why wait? It’s time to explore Kerala with our Kerala tour packages.",
      ],
      duration: ["04 Days,03 Nights"],
      tourCode: ["AH-KRL-17"],
      hotelDetails: [
        "Munnar Heaven",
        "Green Ridge",
        "Clouds Valley",
        "Panoromic",
      ],
      itinerary: [
        {
          day: "Day 1",
          details:
            "Arrive Cochin Airport and Transfer to hotel in Munnar by road on the way visit Spice Plantations. Arrival at a place which is called ‘nature’s lovers paradise’. On arrival at Munnar, check in at Hotel. If time permits you can visit some place of day two. Overnight stay in Munnar",
        },
        {
          day: "Day 2",
          details:
            "Early morning After breakfast proceed to Munnar sightseeing. Visit Eravikulam National Park, Madupetty Dam, Echo Point, Kundala Lake, Photo Point, Indo-Swiss Project, Elephant Arrival Spot, Tea museum, etc. overnight stay at hotel. (You can visit some places on day one as per time availability)",
        },
        {
          day: "Day 3",
          details:
            "After breakfast transfer to Alleppey/Kumarakom Houseboat. After reach check in to the Houseboat to take unique experience. Take a lunch in Houseboat. Staying in the moving palace is breathtakingly stimulating experience. While sailing down a maze of canals one can sees memorizing views from the village, paddy fields, coconut palms, fisherman and local life of Kerala. Dinner and overnight stay in houseboat.",
        },
        {
          day: "Day 4",
          details:
            "After breakfast check out from Houseboat and you will be driven back to Cochin Airport/Railway station for your onward journey. Tour ends with wonderful memorize of Kerala by Capstone Holidays.",
        },
      ],
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8033168.194719898!2d76.138367!3d10.544276!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0812ffd49cf55b%3A0x64bd90fbed387c99!2sKerala!5e0!3m2!1sen!2sin!4v1728191882805!5m2!1sen!2sin",
      iconSrc: [location1],
    },
    2: {
      heading: "Cochin Munnar Tour Package",
      title: "Cochin Munnar Tour Package",
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
        "Want to explore the lush tea plantations and learn about the tea-making process in Munnar? Then our Munnar tour package is the right choice. In this Munnar tour package, you can visit many tourist attractions like Eravikulam National Park which is home to the endangered Nilgiri Tahr, Mattupetty Dam where you can enjoy boat rides, and the picturesque Attukal Waterfalls. So why wait? Explore the Munnar and Wayanad trip packages we made",
      ],
      duration: ["06 Days / 05 Nights - 1N Cochin + 2N Munnar (Tour Duration)"],
      tourCode: ["AH-KRL-15"],
      hotelDetails: [
        "Heaven Garden",
        "Munnar Heaven",
        "Abad",
        "Green Ridge",
        "Abaam",
        "Clouds Valley",
        "Airlink",
        "Panoromic",
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
        "Entry fees for Shows, Parks, Safaris, Rides, Monuments, Boats, Room Heater Charges etc.",
        "Tipping for driver, restaurant and guide",
        "Extra expenses for Early check in / Late check out",
        "Charge extra for Candle Light Dinner, Flower Bed Decoration, Cakes etc. in Honeymoon Packages",
        "Expenses for condition beyond control",
        "Any service, Sightseeing which is not mentioned in inclusion",
        "GST 5% (On final bill amount)",
      ],
      itinerary: [
        {
          day: "Day 1",
          details:
            "Arrive Cochin Airport/railway station and Transfer to hotel in Cochin. Check in to hotel, proceed for sightseeing. Cochin is the commercial and industrial capital of Kerala and it is also called as Kochi. Queen of the Arabian Sea. Informally, Cochin is also referred to as the Gateway to Kerala late fresh up and proceed for a local tour of Cochin visit Bolghatty Island, Chinese Fishing Nets , Fort Kochi Fort Kochi Beach , Jewish Synagogue, Santa Cruz Baslica , Willington Island , etc.,",
        },
        {
          day: "Day 2",
          details:
            "Arrive Cochin Airport and Transfer to hotel in Munnar by road on the way visit Spice Plantations. Arrival at a place which is called ‘nature’s lovers paradise’. On arrival at Munnar, check in at Hotel. If time permits you can visit some place of day two. Overnight stay in Munnar.",
        },
        {
          day: "Day 3",
          details:
            "Early morning After breakfast proceed to Munnar sightseeing. Visit Eravikulam National Park, Madupetty Dam, Echo Point, Kundala Lake, Photo Point, Indo-Swiss Project, Elephant Arrival Spot, Tea museum, etc. overnight stay at hotel. (You can visit some places on day one as per time availability)",
        },
        {
          day: "Day 4",
          details:
            "Check out from the Hotel and you will be driven back to Cochin Airport / Railway Station for your onward journey. Tour ends with sweet memorize by Capstone Holidays, Pune.",
        },
      ],

      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8033168.194719898!2d76.138367!3d10.544276!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0812ffd49cf55b%3A0x64bd90fbed387c99!2sKerala!5e0!3m2!1sen!2sin!4v1728191882805!5m2!1sen!2sin",
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
