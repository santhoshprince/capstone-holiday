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
import galleryImage1 from "../img/sikkim/2.jpg";
import galleryImage2 from "../img/sikkim/11.jpg";
import galleryImage3 from "../img/sikkim/4.jpg";
import galleryImage4 from "../img/sikkim/5.jpg";
import galleryImage5 from "../img/sikkim/6.jpg";
import galleryImage6 from "../img/sikkim/7.jpg";

import galleryImage1_1 from "../img/sikkim/8.jpg";
import galleryImage2_2 from "../img/sikkim/9.jpg";
import galleryImage3_3 from "../img/sikkim/10.jpg";
import galleryImage4_4 from "../img/sikkim/12.jpg";
import galleryImage5_5 from "../img/sikkim/13.jpg";
import galleryImage6_6 from "../img/sikkim/14.jpg";

import location1 from "../img/icon/location-dot3.svg";
import bg1 from "../img/sikkim/11.jpg";

const TourPage = () => {
  const { id } = useParams();

  const detailsitinerary = useRef(null);
  const detailsGalleryRef = useRef(null);
  const tourDetailsRef = useRef(null);
  const locationMapRef = useRef(null);
  const toursData = {
    "darjeeling-gangtok-tour-packages": {
      heading: "Darjeeling Gangtok Tour Packages",
      title: "Darjeeling Gangtok Tour Packages",
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
        "Visit the beautiful state nestled in the northeastern part of India, Sikkim is known for its stunning landscapes, diverse flora and fauna, and vibrant culture with our Sikkim tour package. Sikkim tour places include Gangtok, Nathula Pass Tsomgo Lake, Lachen, and Lachung, Pelling, and Yuksom. Our Sikkim tour package offers a delightful mix of nature, spirituality, and adventure, making it a perfect destination for those seeking a unique and memorable experience.",
      ],
      duration: ["05 Days / 04 Nights"],
      tourCode: ["AH-NE-17"],
      // hotelDetails: [
      //   "Avlon/C Park/sim",
      //   "Le Roi/Ambatix",
      //   "Le Season",
      //   "Madhushree",
      //   "Pearl Blue",
      //   "Taj Vilas",
      //   "Crystel Sarovar",
      //   "Kanchandeep",
      //   "Milestone 251",
      //   "Paradise",
      //   "Royal Orchid",
      // ],
      PackageInclusion: [
        "Accommodation on twin share basis at hotel specified / Similar. (Triple share for extra person)",
    "Daily breakfast as per hotel menu",
    "All maintain sightseeing as per tour itinerary",
    "All tours and transfers as stated in private Air-conditioned vehicle. (Scorpio/Innova/Xylo for 4-7 person and Alto/WagonR/Similar for 1-3 person group.)",
    "English / Hindi speaking friendly driver cum guide throughout your trip.",
    "Driver’s Bata, Toll, Parking, Road tax, Fuel charge, Interstate charges.",
    "Local Assistance & 24x7 Helpline"
      ],
      Priceexclusions: [
        "Airfare / Train Fare. # Travel insurance",
        "Entry fees for Shows, Parks, Safaris, Rides, Monuments, Boats, Room Heater Charges etc.",
        "Nathula Pass Permit & Vehicle Charges",
        "Tipping for driver, restaurant and guide",
        "Extra expenses for Early check in / Late check out",
        "Charge extra for Candle Light Dinner, Flower Bed Decoration, Cakes etc. in Honeymoon Packages",
        "Expenses for condition beyond control",
        "Any service, Sightseeing which not mentioned in inclusion.",
        "@ GST 5% (On final bill amount)"
      ],
      itinerary: [
        {
          day: "Day 1",
          details:
            "Meet & Greet on arrival at NJP Railway Station / IXB Airport & transfer to Gangtok (5,480 ft.). On arrival Check-in to hotel & rest of the day at leisure. Overnight stay at Gangtok.",
        },
        {
          day: "Day 2",
          details:
            "After breakfast start for an excursion to Tsomgo Lake (12,400 ft.) & Baba Mandir (13,200 ft.) Which is 55 kms one way from Gangtok city. Overnight stay at Gangtok. (In case of Land slide or any other reason Tsomgo Lake is closed we will provided alternate sightseeing.) Baba Mandir & Nathula pass permit charge extra at actual.",
        },
        {
          day: "Day 3",
          details:
            "This morning start for a half day trip of Gangtok city covering Flower show, Cottage Industry and Handicraft Centre, Institute of Tibetology, Dro-dul Chorten, Enchey Monastery & Banjakhri Falls (maximum 3-4 hours). Afternoon drive to Darjeeling (6,710 ft.). On arrival check-in to your hotel. Overnight stay at Darjeeling.",
        },
        {
          day: "Day 4",
          details:
            "Early Morning (at 04:00 am) drive to Tiger hill to watch the spectacular sunrise over Mt. Khangchendzongha (28,208 ft. Worlds 3rd highest peak), on your way back visit Ghoom Monastery and Batasia Loop. After breakfast visit Himalayan Mountaineering Institute, P.N. Zoological Park (Thursday closed), Tenzing Rock, Tibetan Refugee self-help Centre (Sunday closed), Tea Garden (outer view), Ropeway and Japanese Temple. Evening free for shopping or leisure. Overnight stay at Darjeeling.",
        },
        {
          day: "Day 5",
          details:
            "After breakfast Check-out from hotel and take the departure transfer to NJP Railway Station / IXB Airport for your onward journey. Tours end with sweet memorize by Ashirwad Holidays, Pune.",
        },
      ],

      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d907105.3984781149!2d88.185276!3d27.363831!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e6886dd7a93aad%3A0x89f571f15943050d!2sWest%20Sikkim%2C%20Sikkim!5e0!3m2!1sen!2sin!4v1728202748525!5m2!1sen!2sin",
      iconSrc: [location1],
    },
   
    "sikkim-travel-packages": {
      heading: "Sikkim Travel Packages",
      title: "Sikkim Travel Packages",
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
        "Sikkim travel packages combine the cultural richness of Sikkim with the picturesque landscapes of Darjeeling and Kalimpong in West Bengal. Explore local attractions like Batasia Loop, Himalayan Mountaineering Institute, and Peace Pagoda with west Bengal tour packages. We offer a diverse experience of the Eastern Himalayas with our Sikkim travel packages. We with our Sikkim travel packages curate specific travel packages that suit your needs.",
      ],
      duration: ["04 Days / 03 Nights"],
      tourCode: ["AH-NE-16"],
      // hotelDetails: [
      //   "Kanchandeep",
      //   "Mantra Resort",
      //   "Milestone 251",
      //   "Lohana Village/Pushkar Heritage",
      //   "Paradise",
      //   "Pushkar Resort",
      //   "Royal Orchid",
      //   "Ananta Resort",
      // ],
      PackageInclusion: [
        "Accommodation on twin share basis at hotel specified / Similar. (Tipple share for extra person)",
        "Daily breakfast as per hotel menu",
        "All maintain sightseeing as per tour itinerary",
        "All tours and transfers as stated in private Air-conditioned vehicle. (Scarpio/Innova/Xylo for 4-7 person and Alto/WagonR/Similar for 1-3 person group.)",
        "English / Hindi speaking friendly driver cum guide throughout your trip.",
        "Driver’s Bata, Toll, Parking, Road tax, Fuel charge, Interstate charges.",
        "Local Assistance & 24x7 Helpline"
      ],
      Priceexclusions: [
        "Airfare / Train Fare.",
        "Travel insurance",
        "Entry fees for Shows, Parks, Safaris, Rides, Monuments, Boats, Room Heater Charges etc.",
        "Nathula Pass Permit & Vehicle Charges",
        "Tipping for driver, restaurant and guide",
        "Extra expenses for Early check in / Late check out",
        "Charge extra for Candle Light Dinner, Flower Bed Decoration, Cakes etc. in Honeymoon Packages",
        "Expenses for condition beyond control",
        "Any service, Sightseeing which not mentioned in inclusion.",
        "@ GST 5% (On final bill amount)"
      ],

      itinerary: [
        {
          day: "Day 1",
          details:
            "Meet & Greet on arrival at NJP Railway Station / IXB Airport & transfer to Gangtok (5,480 ft.). On arrival Check-in to hotel & rest of the day at leisure. Overnight stay at Gangtok.",
        },
        {
          day: "Day 2",
          details:
            "Start for a Full day city tour covering Tashi view point, Ganesh Tok, Hanuman Tok, Flower show, Cottage Industry and Handicraft Centre, Institute of Tibetology, Dro-dul Chorten, Enchey Monastery & Banjakhri Falls (maximum 6 hours). Overnight stay at Gangtok.",
        },
        {
          day: "Day 3",
          details:
            "After breakfast start for an excursion to Tsomgo Lake (12,400 ft.) & Baba Mandir (13,200 ft.) Which is 55 kms one way from Gangtok city. Overnight stay at Gangtok. (In case of Land slide or any other reason Tsomgo Lake is closed we will provided alternate sightseeing.)",
        },
        {
          day: "Day 4",
          details:
            "After breakfast Check-out from hotel and take the departures transfer to NJP Railway Station / IXB airport for your onward journey. Tours end with sweet memorize by Ashirwad Holidays, Pune.",
        },
      ],

      mapSrc:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d907105.3984781149!2d88.185276!3d27.363831!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e6886dd7a93aad%3A0x89f571f15943050d!2sWest%20Sikkim%2C%20Sikkim!5e0!3m2!1sen!2sin!4v1728202748525!5m2!1sen!2s",
      iconSrc: [location1],
    },
  };
  
  
  const path = window.location.pathname.split("/").pop(); // Gets the last part of the URL
  const selectedTour = toursData[path];

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
