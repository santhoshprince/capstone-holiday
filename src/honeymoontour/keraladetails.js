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

  const tourDetails = {
    "kerala-honeymoon-tour-packages": {
      heading: "Kerala Honeymoon Tour Packages",
      title: "Kerala Honeymoon Tour Packages",
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
        "Pickup & Drop Cochin Airport / Railway Station",
        "Welcome Drink, Breakfast, Dinner at houseboat",
        "Hotel at Breakfast only",
        "02 Night Munnar 3* Hotel",
        "01 Night Thekkady 3* Hotel",
        "01 Night Deluxe Houseboat All Meals",
        "Hotel Accommodation on Double Sharing",
        "Sightseeing in Pvt Car",
      ],
      Priceexclusions: [
        "Pickup & Drop Cochin Airport / Railway Station",
        "Welcome Drink, Breakfast, Dinner at houseboat",
        "Hotel at Breakfast only",
        "02 Night Munnar 3* Hotel",
        "01 Night Thekkady 3* Hotel",
        "01 Night Deluxe Houseboat All Meals",
        "Hotel Accommodation on Double Sharing",
        "Sightseeing in Pvt Car",
      ],

      description: [
        "Ready to visit the god’s own country with our Kerala honeymoon package? Our Kerala tour packages are a unique blend of natural beauty, cultural experiences, and serene backwaters. We make your travel more exciting and fun-filled where you can visit some of the most popular tourist attraction sites like Fort Kochi, Mattancherry Palace, Jew Town, and St. Francis Church. So why wait? It’s time to explore Kerala with our Kerala tour packages.",
      ],
      duration: ["05 Days,04 Nights"],
      hotelDetails: [
        "Munnar Misty Lake / Similar 3 Star / Munnar Queen / Similar 4 Start",
        "Thekkady Peppervine(Deluxe) 3 Star / Elephant Court / Similar 4 Start",
        "Allappey deluxe Houseboat 3 Star / Premium House boat 4 Start",
      ],
      itinerary: [
        {
          day: "Day 1",
          details:
            "Following your arrival at the Cochin International Airport, you will be greeted whole- heartedly by our tour guides and representatives. Post this, you will be driven to the scenic hill station of Munnar. Also known as the ‘Nature Lover’s Paradise’, your arrival in this hilly abode will be followed by your checking-in into a hotel or a resort. Spent the rest of the day at total leisure while enjoy the stunning beauty of Munnar; overnight stay in the hotel/resort.",
        },
        {
          day: "Day 2",
          details:
            "A treasure trove for the nature lovers, honeymooners, leisure seekers and all other classes of travellers, Munnar is an ideal sightseeing destination in Kerala! Today morning, after having breakfast, you can embark on a delightful sightseeing Tour and discover all the grandeurs of this gorgeous hill station town. On the list, there will be scenic landmarks like Echo Point, Gundala Lake, Elephant Arrival Point, Cinema Shooting Point, Jungle Honey Bee Nest and several other places. Mattuppetty, Tata Tea Museum, Eravikulam National Park, Blossom Hydel Park, spice plantation and Anaimudi Peak will also be visited during the day. By evening, you will be guided back to the hotel/resort for your overnight stay",
        },
        {
          day: "Day 3",
          details:
            "Following your lively Munnar excursion on the previous day, today you will be driven towards Thekkady. Home to the wildlife rich Periyar National Park, this tourist town is known for its candid and untouched beauty. Arriving in Thekkady, check-in into ahotel/resort and after relaxing for a while, you will be taken for a rustic tribal tour to a nearby village followed by a plantation tour. Come evening, you can avail a boat ride in the PeriyarLake and enjoy the wilderness of the Periyar National Park. Returning from the ride, you can indulge in local shopping before retiring into the hotel/resort for your overnight stay.",
        },
        {
          day: "Day 4",
          details:
            "After today’s breakfast, you will be checked-out from the hotel/resort and driven towards Alleppey; the backwater capital of Kerala. Arriving in Alleppey, check-in into a houseboat and get settle down. Also called the ‘Venice of the East’, Alleppey is known for its mesmerising beauty and charm. During your stay, you can enjoy and experience its meticulous grace along with its warm hospitality. Post this, you can take an exciting backwater cruise and discover the lush beauty of Alleppey’s amazing network of canals, evergreen paddy fields, coconut lagoons and coir villages. Overnight stay will be at the houseboat.",
        },
        {
          day: "Day 5",
          details:
            "Waking up today morning, pack your bags and check-out from the houseboat. Wish adieu to Alleppey and take your final drive to Cochin; with your arrival in Cochin, this exciting tour will come to an end!",
        },
      ],
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8033168.194719898!2d76.138367!3d10.544276!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0812ffd49cf55b%3A0x64bd90fbed387c99!2sKerala!5e0!3m2!1sen!2sin!4v1728191882805!5m2!1sen!2sin",
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
