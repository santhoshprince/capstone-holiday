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
    "goa-tour-package-from-chennai": {
      heading: "Goa Tour Package from Chennai",
      title: "Goa Tour Package from Chennai",
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
        "Welcome Drink (Non Alcoholic)",
        "Daily breakfast as per hotel menu",
        "Airport/Railway Station/Bus Stop Pickup-drop",
        "All tours and transfers as stated in private Air-Conditioned vehicle. (Swift / Etios / Innova etc.)",
        "English / Hindi speaking friendly driver cum guide throughout your trip",
        "Driver’s Bata, Toll, Tax, Parking, Fuel charge",
      ],
      Priceexclusions: [
        "Airfare / Train Fare.",
        "Travel insurance",
        "Entry fees for Shows, Parks, Safaris, Rides, Monuments, Boats, Sightseeing etc.",
        "Tipping for driver, restaurant and guide",
        "Extra use of swimming pool, game zone, pub etc.",
        "Extra for Early check-in/Late check-out",
        "Charge extra for Candle Light Dinner, Flower Bed, Cake etc., in Honeymoon Package",
        "Any service, which not mentioned in inclusion",
        "GST 5% (On final bill amount)",
      ],

      description: [
        "Welcome to Finest Goa Trip! Discover the tropical paradise of Goa, where golden sandy beaches, azure waters, and vibrant culture blend seamlessly to create a memorable vacation experience. At Finest Goa Trip, we specialize in crafting exceptional itineraries that cater to your every need, ensuring you have the finest holiday in this enchanting destination. Whether you’re a beach lover, an adventure seeker, or a culture enthusiast, Goa has something for everyone, and we’re here to make your trip extraordinary.",
      ],
      duration: ["4 Days,3 Nights"],
      hotelDetails: [
        "Rahi",
        "Renton Manor",
        "Sai Baga",
        "Perl",
        "Ginger",
        "Amani Vagator",
        "LA Flemmingo",
        "Riva Beach",
        "La Sunila",
        "River Palace",
        "Tera Parasio",
        "Sandalwood",
        "Regenta",
        "Royal Orchid",
        "Fern",
        "The Park",
      ],
      itinerary: [
        {
          day: "Day 1",
          details:
            "An arrival at Goa Airport/Railway Station welcome by our representative and transfer you to the hotel. Check in to hotel. Rest of the day is at leisure. You may explore the local area and beaches today evening and indulge in street shopping. Overnight stay in hotel.",
        },
        {
          day: "Day 2",
          details:
            "After breakfast proceed to North Goa Sightseeing. Goa is famous for its beautiful beaches across India. Beaches in North Goa covered for the day are Calangute Beach, Anjuna Beach, Vagator Beach, Ashvem & Morjim Beach etc. Beside beaches it’s also covers Fort Aguada. Evening return to the hotel for overnight stay.",
        },
        {
          day: "Day 3",
          details:
            "After breakfast proceed to North Goa Sightseeing. Goa is famous for its beautiful beaches across India. Beaches in North Goa covered for the day are Calangute Beach, Anjuna Beach, Vagator Beach, Ashvem & Morjim Beach etc. Beside beaches it’s also covers Fort Aguada. Evening return to the hotel for overnight stay.",
        },
        {
          day: "Day 4",
          details:
            "After breakfast proceed to South Goa Sightseeing. South Goa trip is very important one as it covers best of heritage places in Goa, few temples, Church, beautiful beaches, Jetty and Boat cruise etc. Places covered in South Goa Sightseeing are Miramar Beach, Bom Jejus of Basalica, St. Cathedral Church – Old Goa,, Dona Paula, Jetty and Boat cruise. Etc. Evening return to the hotel for overnight stay.",
        },
        {
          day: "Day 5",
          details:
            "After breakfast transfer you to Airport/Railway Station for your onward journey.Dolphin Trip in Senquerim, Snow Park in Baga, Crocodile sighting trip, Snorkeling, Scuba Diving at Grande Island or at Malvan, Water Sports, Parasailing, Jetlev Flyer Adventure, Fly boarding Adventure, Hot Air Balloon Safari, Adventure Boat Party Trip, Water Rafting, Butterfly & Honeymoon Island trip, Dudhsagar Waterfall, Spice Plantation tour, Boat Cruise, Casino etc",
        },
      
      ],
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d984958.3773877182!2d74.006694!3d15.349728000000002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfba106336b741%3A0xeaf887ff62f34092!2sGoa!5e0!3m2!1sen!2sin!4v1728186448972!5m2!1sen!2sin",

      iconSrc: [location1],
    },
    "goa-travel-packages": {
         heading: "Goa Travel packages",
      title: "Goa Travel packages",
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
        "Welcome Drink (Non Alcoholic)",
        "Daily breakfast as per hotel menu",
        "Airport/Railway Station/Bus Stop Pickup-drop",
        "All tours and transfers as stated in private Air-Conditioned vehicle. (Swift / Etios / Innova etc.)",
        "English / Hindi speaking friendly driver cum guide throughout your trip",
        "Driver’s Bata, Toll, Tax, Parking, Fuel charge",
      ],
      Priceexclusions: [
        "Airfare / Train Fare.",
        "Travel insurance",
        "Entry fees for Shows, Parks, Safaris, Rides, Monuments, Boats, Sightseeing etc.",
        "Tipping for driver, restaurant and guide",
        "Extra use of swimming pool, game zone, pub etc.",
        "Extra for Early check-in/Late check-out",
        "Charge extra for Candle Light Dinner, Flower Bed, Cake etc., in Honeymoon Package",
        "Any service, which not mentioned in inclusion",
        "GST 5% (On final bill amount)",
      ],

      description: [
        "Excited to explore which Goa tour places to visit? We got you! Our Goa travel packages give you an unforgettable experience of beaches, nightlife, water sports, historical sites, cuisine, and festivals. Our Goa travel packages are fun-filled ones where we provide few like parasailing, jet-skiing, windsurfing, and banana boat rides. This Goa travel packages is your best choice to revamp your holidays.",
      ],
      duration: ["4 Days,3 Nights"],
      tourCode:["AH-GOA-21"],
      hotelDetails: [
        "Rahi",
        "Renton Manor",
        "Sai Baga",
        "Perl",
        "Ginger",
        "Amani Vagator",
        "LA Flemmingo",
        "Riva Beach",
        "La Sunila",
        "River Palace",
        "Tera Parasio",
        "Sandalwood",
        "Regenta",
        "Royal Orchid",
        "Fern",
        "The Park",
      ],
      itinerary: [
        {
          day: "Day 1",
          details:
            "An arrival at Goa Airport/Railway Station welcome by our representative and transfer you to the hotel. Check in to hotel. Rest of the day is at leisure. You may explore the local area and beaches today evening and indulge in street shopping. Overnight stay in hotel.",
        },
        {
          day: "Day 2",
          details:
            "After breakfast proceed to North Goa Sightseeing. Goa is famous for its beautiful beaches across India. Beaches in North Goa covered for the day are Calangute Beach, Anjuna Beach, Vagator Beach, Ashvem & Morjim Beach etc. Beside beaches it’s also covers Fort Aguada. Evening return to the hotel for overnight stay.",
        },
        {
          day: "Day 3",
          details:
            "After breakfast transfer you to Airport/Railway Station for your onward journey.",
        },
        {
          day: "Day 4",
          details:
            "Dolphin Trip in Senquerim, Snow Park in Baga, Crocodile sighting trip, Snorkeling, Scuba Diving at Grande Island or at Malvan, Water Sports, Parasailing, Jetlev Flyer Adventure, Fly boarding. Adventure, Hot Air Balloon Safari, Adventure Boat Party Trip, Water Rafting, Butterfly & Honeymoon Island trip, Dudhsagar Waterfall, Spice Plantation tour, Boat Cruise, Casino etc.,",
        },
        {
          day: "Day 5",
          details:
            "After breakfast transfer you to Airport/Railway Station for your onward journey.Dolphin Trip in Senquerim, Snow Park in Baga, Crocodile sighting trip, Snorkeling, Scuba Diving at Grande Island or at Malvan, Water Sports, Parasailing, Jetlev Flyer Adventure, Fly boarding Adventure, Hot Air Balloon Safari, Adventure Boat Party Trip, Water Rafting, Butterfly & Honeymoon Island trip, Dudhsagar Waterfall, Spice Plantation tour, Boat Cruise, Casino etc",
        },
      
      ],
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d984958.3773877182!2d74.006694!3d15.349728000000002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfba106336b741%3A0xeaf887ff62f34092!2sGoa!5e0!3m2!1sen!2sin!4v1728186448972!5m2!1sen!2sin",

      iconSrc: [location1],
    }
  };


  const path = window.location.pathname.split('/').pop(); // Gets the last part of the URL
  const tour = tourDetails[path];

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };
  return (
    <>
      <Contentsection heading={tour.heading} children={""} />

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
              <DetailsGallery images={tour.gallerydata} />
            </div>
          </div>
          <div className="row">
            <div className="col-12" ref={detailsitinerary}>
              <Itinerary
                title="Itinerary"
                itineraryData={tour.itinerary}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-12" ref={tourDetailsRef}>
              <TourDetails
                title={tour.title}
                description={tour.description}
                duration={tour.duration}
                tourCode={tour.tourCode}
                priceIncludes={tour.priceIncludes}
                hotelDetails={tour.hotelDetails}
                PackageInclusion={tour.PackageInclusion}
                Priceexclusions={tour.Priceexclusions}
              />
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
