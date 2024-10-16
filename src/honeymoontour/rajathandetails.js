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
import galleryImage1 from "../img/Rajasthan/6.jpg";
import galleryImage2 from "../img/Rajasthan/1.jpg";
import galleryImage3 from "../img/Rajasthan/8.jpg";
import galleryImage4 from "../img/Rajasthan/9.jpg";
import galleryImage5 from "../img/Rajasthan/10.jpg";
import galleryImage6 from "../img/Rajasthan/2.jpg";

import galleryImage1_1 from "../img/Rajasthan/12.jpg";
import galleryImage2_2 from "../img/Rajasthan/11.jpg";
import galleryImage3_3 from "../img/Rajasthan/14.jpg";
import galleryImage4_4 from "../img/Rajasthan/15.jpg";
import galleryImage5_5 from "../img/Rajasthan/16.jpg";
import galleryImage6_6 from "../img/Rajasthan/17.jpg";

import location1 from "../img/icon/location-dot3.svg";
import bg1 from "../img/Rajasthan/6.jpg";

const TourPage = () => {
  const { id } = useParams();

  const detailsitinerary = useRef(null);
  const detailsGalleryRef = useRef(null);
  const tourDetailsRef = useRef(null);
  const locationMapRef = useRef(null);

  const tourDetails = {
    "rajasthan-honeymoon-tour-packages": {
      heading: "Rajasthan Honeymoon Tour Packages",
      title: "Rajasthan Honeymoon Tour Packages",
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
        "04 Nights’ Accommodation in Hotel",
  "Air fare",
  "Accommodation: Double Sharing Basis",
  "Meal Plan: MAPAI (04 Breakfast + 04 Dinner)",
  "With all transfer, driver allowances, parking, toll taxes, fuel and with all",
  "Airport/Railway Station pickup drop off and sightseeing as per the itinerary"
      ],
      // Priceexclusions: [
      //   "Pickup & Drop Cochin Airport / Railway Station",
      //   "Welcome Drink, Breakfast, Dinner at houseboat",
      //   "Hotel at Breakfast only",
      //   "02 Night Munnar 3* Hotel",
      //   "01 Night Thekkady 3* Hotel",
      //   "01 Night Deluxe Houseboat All Meals",
      //   "Hotel Accommodation on Double Sharing",
      //   "Sightseeing in Pvt Car",
      // ],

      description: [
       "Ready to explore the ‘Land of Kings’ with our Rajasthan tout package? Yes, our Rajasthan travel packages offer the exciting experience of a vibrant and culturally rich state in northern India. With our Rajasthan tour packages, you can explore majestic palaces, forts, colorful festivals, and desert landscapes. Some key spots in Rajasthan that our Rajasthan tour package covers are Jaipur: The Pink City, Udaipur: The City of Lakes, Jodhpur: The Blue City, and many more."
      ],
      duration: ["05 Days,04 Nights"],
      // hotelDetails: [
      //   "Munnar Misty Lake / Similar 3 Star / Munnar Queen / Similar 4 Start",
      //   "Thekkady Peppervine(Deluxe) 3 Star / Elephant Court / Similar 4 Start",
      //   "Allappey deluxe Houseboat 3 Star / Premium House boat 4 Start",
      // ],
      itinerary: [
        {
          day: "Day 1",
          details:
            "Morning after breakfast, check out from the hotel and we shall move on towards Agra – the love city of Uttar Pradesh. As we reach Agra we shall move to see Taj Mahal (one of the Seven Wonders of the World); Red Fort of Agra. After sightseeing in Agra, check in at the hotel and overnight stay at the hotel in Agra",
        },
        {
          day: "Day 2",
          details:
            "Morning after breakfast, check out from hotel and transfer to Jaipur on the way stop a while we shall see Fatehpur Sikri (Capital of Mughal Empire during the reign of Mughal Emperor Akbar), Buland Darwaza (Gate of Magnificence) and Shrine of Sheikh Salim Chishti (magnificent example of Mughal Architecture in India). We touch Jaipur in the evening. Relax and enjoy the evening at Jaipur",
        },
        {
          day: "Day 3",
          details:
            "Morning after breakfast, visit Amber Fort, Jal Mahal, Hawa Mahal, City Palace, Jantar Mantar and Albert Hall Museum. Evening we shall take you around the city shop for true ethnic Indian Rajasthani dresses and silver jewelry, blue pottery, miniature paintings and Mojaris (leather shoes). Transfer to delhi check in hotel night stay.",
        },
        {
          day: "Day 4",
          details:
            "Namaste and Welcome to Capital of India Upon arrival at Delhi Airport / Railway Stationyou will get a warm welcome and transfer to hotel after check-in process (if time permits) visit India Gate, Parliament House, President House, Indira Gandhi Museum, Red Fort, and Raj Ghat. After sightseeing, back to the hotel and overnight in Delhi Hotel",
        },
        {
          day: "Day 5",
          details:
            "Morning after breakfast, The visit Qutub Minar, Lotus Temple,Akshardham Temple After sightseeing, we shallescort you to Delhi Railway Station / Airport. Tour ends with sweet memories",
        },
      ],
      mapSrc:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14608903.200457694!2d73.878347!3d26.628408!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396a3efaf7e30e37%3A0xb52b9b4506c088e5!2sRajasthan!5e0!3m2!1sen!2sin!4v1728201755880!5m2!1sen!2sin",
      iconSrc: [location1],
    },
  };
  const path = window.location.pathname.split("/").pop(); // Gets the last part of the URL
  const selectedTour = tourDetails[path];
  // const tourDetails = toursData[id] || toursData[1];

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
