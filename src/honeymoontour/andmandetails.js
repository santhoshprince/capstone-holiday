import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../components/sidebar";
import Contentsection from "../components/contentbg";
import DetailSlider from "../components/detailslider";
import DetailsGallery from "../components/detailsgallery";
import Itinerary from "../components/itinerary";
import LocationMap from "../components/deatilsmap";
import TourDetails from "../components/tourdetails";
import galleryImage1 from "../assets/honeymoonimg/anadman/thailand-4470985_1920.jpg";
import galleryImage2 from "../assets/honeymoonimg/anadman/jail-6810893_1920.jpg";
import galleryImage3 from "../assets/honeymoonimg/anadman/phuket-4092829_1920.jpg";
import galleryImage4 from "../assets/honeymoonimg/anadman/phuket-4092829_1920.jpg";
import galleryImage5 from "../assets/honeymoonimg/anadman/beach-3492416_1920.jpg";
import galleryImage6 from "../img/tour/365.jpg";

import galleryImage1_1 from "../img/gallery/358.jpg";
import galleryImage2_2 from "../img/gallery/343.jpg";
import galleryImage3_3 from "../img/gallery/369.jpg";
import galleryImage4_4 from "../img/gallery/963.jpg";
import galleryImage5_5 from "../img/gallery/11021.jpg";
import galleryImage6_6 from "../img/gallery/2151625212.jpg";

import anadamanbg from "../assets/honeymoonimg/anadman/phi-phi-island-5076128_1920.jpg";

import location1 from "../img/icon/location-dot3.svg";

const TourPage = () => {
  const { id } = useParams();

  const detailsitinerary = useRef(null);
  const detailsGalleryRef = useRef(null);
  const tourDetailsRef = useRef(null);
  const locationMapRef = useRef(null);
  const toursData = {
    1: {
      heading: "Andaman Honeymoon Tour Package",
      title: "Andaman Honeymoon Tour Package",
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
       "Meet and greet our representatives on arrival at Port Blair Airport.",
  "Airport Pick up & Drop.",
  "Transportation using a Private AC Car as per the itinerary above.",
  "01 Double Rooms.",
  "Breakfast at Mentioned above Hotel during the stay.",
  "All sightseeing as per the itinerary.",
  "All entry tickets & ferry tickets as per the itinerary.",
  "Havelock Island transfers by PRIVATE CRUISE.",
  "Photoshoot @ Radhanagar beach.",
  "Cake on arrival.",
  "24-hour on-call assistance during your stay."
      ],
      Priceexclusions: [
        "Air fare.",
        "Any meals other than those specified in ‘Cost Includes’.",
        "Expenses of personal nature such as tips, telephone calls, laundry, liquor etc.",
        "Any other item not specified in ‘cost includes’.",
        "5.00 % Government service tax.",
        "Guide & Any Sports Activities Charges during sightseeing.",
        "5% GST."
      ],

      description: [
        "Welcome to Andaman Tour! Discover the breathtaking beauty and mesmerizing charm of the Andaman Islands, nestled in the azure waters of the Bay of Bengal. With pristine beaches, lush forests, and abundant marine life, this tropical paradise is a haven for nature lovers and adventure enthusiasts alike. At Andaman Tour, we offer you a chance to explore this idyllic destination and create unforgettable memories.",
      ],
      duration: ["4 Nights, 5 Days"],
      hotelDetails: [
       "3 STAR STD",	
       "TSG Emerald/Similar",	
      "TSG blue/Similar",	
       "TSG Aura/Similar"
      ],
      itinerary: [
        {
          day: "Day 1",
          details:
            <>
            <p>You arrive to Port Blair, our escorts in the airport pick receive you there and then after a short introduction will take you to your first booked hotel, after check-in and once you are done with you lunch & refreshment, we will take a tour to the historic cellular jail which will be followed by the light and sound show. (the history & migration to these archipelago revolves around this monumental architecture, once you finish taking the tour
just after a gap of half an hour, you will witness the light & sound show, like any other light & sound it’s a narration of the story of the jail through light & sound) day end here back to the hotel
</p>
<h4>Cellular Jail</h4>
<p>
mute witness to the most brutal and barbaric atrocities meted out to national freedom fighters, who were incarcerated in this jail. The jail, completed in the year 1906 acquired the name ‘Cellular' because it was entirely made up of individual cells for solitary confinement. It originally was a seven-block structure with three stories and a central tower acting as its fulcrum consisting of honeycomb-like corridors. This jail, now a place of pilgrimage for all freedom-loving people draws everyone down memory lane to the years of freedom struggle. The Jail Museum is open from 9:00 am to 12:00 noon and from 1:30 pm to 4:45 pm.
</p>
<h4>Light & Sound Show</h4>
<p>The Sound and Light show in the Cellular Jail narrates the saga of the Indian freedom struggle, brought alive through the sound and light effect of the brutal and barbaric atrocities piled on the freedom fighters deported to these islands and incarcerated in the small cells of this jail. This show is very popular among the tourists visiting these islands.</p>
            </>
        },
        {
          day: "Day 2",
          details:
            <>
            <p>We start the day a bit early today as we need to embark for Havelock Island the cruise depart (6:45 am to 01:30 pm any time in between). So we have to report an hour early. Take a quick breakfast and head to Havelock Island the total journey time is around 1 and 1/2 hour by sea. Again once to reach in the Island meet our escorts who will be standing outside the harbor restricted area with a name tag. Along with them proceed to your respective hotel and then plan you day, probably post lunch for Radhanagar beach. You can enjoy the beach as well as the sun set, which i guess is the best you can see. (Boat Transfers are subjected to change as per the availability of tickets and weather conditions).</p>
            <h4>Radhanagar Beach</h4>
            <p>
            The Island (often just called Havelock) is one of the most beautiful and largest islands of Ritchie's Archipelago and is a placid heaven like no other. Situated 57 km northeast of South Andaman with an area of 92 Sq.Kms she offers a breathtaking trail of nature expeditions. The island is primarily populated by Bengali settlers. This picturesque Island with beautiful sandy beaches and lush green forest is also rated as the seventh most beautiful island in the world. The Island also has the biggest concentration of breath-taking diving and snorkeling sites, thus acting as a paradise to marine world explorers.
            </p>
            </>
        },
        {
          day: "Day 3",
          details:
            <>
            <p>At morning have your breakfast in the hotel after that our representative will help you to board the Boat which will sail to the Shaheed Dweep (Neil Island Island). On arrival at Neil Island, our representative will receive and escort you to check-in to the resort/hotel. After that start a trip for sightseeing Laxmanpur, Bharatpur & Howrah Bridge. Overnight stay at Neil Island.</p>
            <h4>BHARATPUR BEACH</h4>
            <p>
            The Bharatpur Beach is a beach of a low tide located just half a kilometer from the jetty, considered to be the best beach in the Neil Island. The calm, tranquil and perchance the picturesque beach is also popular with various water activities like swimming, snorkeling and scuba diving.
            </p>
            <h4>
            LAXMANPUR BEACH 
            </h4>
            <p>
            Laxmanpur Beach is a picturesque waterfront, covering a long stretch of area of Laxmanpur village of Neil Island. The sea is shallow and calm, making it perfect for swimming and snorkeling. The serene beach offers a stunning panorama, especially the sun sets in the horizon.
            </p>
            <h4>
            NATURAL BRIDGE 
            </h4>
            <p>Neil Island is famous for its naturally shaped- like rock also known as the Howrah Bridge. It has two living natural corals formed just like a bridge. The rock formation was called by the Bengalis who settled in the island in the early days and they refer it as the Rabindra Setu and later called it the Howrah Bridge. It is best seen during low tide</p>
            </>
        },
        {
          day: "Day 4",
          details:
            "After breakfast pack-up the luggage and check out from the resort and back to Port Blair.Evening visit to Chidiyatapu Beach with Sunset View. Overnight stay at Port Blair.",
        },
        {
          day: "Day 5",
          details:
            <>
            <p>After breakfast, board Green Ocean Cruise / Makruzz and return to Port Blair. Evening free for local marketing. Overnight stay at Port Blair.</p>
            </>,
        },
        {
          day: "Day 6",
          details:
            <>
            <p>Morning free for packing & personal activities, on time 08:00am check out from the hotel & on time transfer to
Airport. Tour Ends.
</p>
            </>,
        },
      ],
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d250116.67994327686!2d92.722464!3d11.618137!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3088946c176b5971%3A0x5bfa43a5e9a5ed30!2sSri%20Vijaya%20Puram%2C%20Andaman%20and%20Nicobar%20Islands!5e0!3m2!1sen!2sin!4v1728185002454!5m2!1sen!2sin",

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
      <Contentsection heading={selectedTour.heading} children={""} backgroundImage={anadamanbg} />

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
