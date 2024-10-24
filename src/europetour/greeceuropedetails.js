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
import galleryImage1 from "../img/greece/13.jpg";
import galleryImage2 from "../img/greece/14.jpg";
import galleryImage3 from "../img/greece/3.jpg";
import galleryImage4 from "../img/greece/4.jpg";
import galleryImage5 from "../img/greece/5.jpg";
import galleryImage6 from "../img/greece/6.jpg";

import { Helmet } from "react-helmet";
import galleryImage1_1 from "../img/greece/7.jpg";
import galleryImage2_2 from "../img/greece/8.jpg";
import galleryImage3_3 from "../img/greece/9.jpg";
import galleryImage4_4 from "../img/greece/10.jpg";
import galleryImage5_5 from "../img/greece/11.jpg";
import galleryImage6_6 from "../img/greece/12.jpg";

import location1 from "../img/icon/location-dot3.svg";
import bg1 from "../img/greece/8.jpg";

const TourPage = () => {
  const { id } = useParams();

  const detailsitinerary = useRef(null);
  const detailsGalleryRef = useRef(null);
  const tourDetailsRef = useRef(null);
  const locationMapRef = useRef(null);
  const toursData = {
    1: {
      heading: "Greece Tour Packages from India",
      title1: "Greece Tour Packages from India",
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

      //   priceIncludes: [
      //   "Accommodation in Baku, 3 nights.",
      // "Accommodation in Guba, 3 nights.",
      // "Accommodation in Gabala, 3 nights.",
      // "Breakfasts at the hotels.",
      // "Transfers from/to airport.",
      // "Transportation during program with comfortable car.",
      // "English speaking driver.",
      // "Water per each excursion day."
      //   ],
      //   Priceexclusions: [
      //     "Air tickets and insurance.",
      //     "Lunches and dinners.",
      //     "Entrance fees to museums/entertainment.",
      //     "Personal expenses.",
      //     "PCR test costs.",
      //     "Visa cost."
      //   ],
      description1: [
        "Our Greece Tour Packages from India helps to witness the Greek mythology's well-known love tales have fascinated audiences for years. Greece now is equally romantic, evoking lovely feelings with its radiant landscapes, vibrant culture, and exhilarating underwater adventures for couples. Nothing may evoke adoration like the wealth of antique items, white-painted buildings, cobblestone streets, delectable cuisine, and charming outdoor cafes. Greece is a really lovely and welcoming nation to visit. International tourists adore Athens, the Parthenon, Meteora, the Acropolis Museum, Santorini, Elafonissi Beach, Mykonos, Knossos Palace, the Temple of Olympian Zeus, and many more"
      ],
      // tourCode: ["CBT-22/01"],
      duration: ["9 Days 8 Nights"],
      // hotelDetails: [
      //   "Baku – West Shine or Alba Hotel 4*.",
      //   "Gabala – White Boutique 4*.",
      //   "Guba – Gold Guba Hotel 3*.",
      // ],
      // note: [
      //   "Additionally, 3% will be added to the cost during the payment process; the company has the right to change the program in case of necessity. Package is not valid during the Eid period (26.06-01.07). Kindly check availability before quoting to the customers.",
      // ],
      itinerary: [
        {
          day: "Day 1",
          details:
            "Arrival at Athens International Airport, meet and transfer to your hotel for check in. Rest of the day is at leisure for you to explore Athens. Athens boasts ancient history that includes the iconic Acropolis, the vibrant Plaka street, mouthwatering Greek cuisine, lively street art, and a warm Mediterranean embrace. The day is yours to relax or take an optional Athens by Night Tour (at an additional cost) a captivating exploriation of the city’s nightlif, illlumintaed historic sites and a Greek cuisine. Overnight stay in Athens.",
        },
        {
          day: "Day 2",
          details:
            "After breakfast, proceed for your half day sightseeing tour of Athens, see the Panathenic Stadium, the historic stadium, host of the first Olympics in 1896. Derive past the temple of Olympian Zeus, Hadria’s Arch, Parliment Building, Unknown soldiers memorial, Academy, University, National Library and Constitution Square. You will visit the Acropolis to explore the Parthenon, Erechtheion, and the Temple of Hephaestusatop of this iconic hill. Visit Acropolis Museum to view the ancient statues and artifacts and learn more about Athen’s rich history. Overnight stay in Athens. (B)",
        },
        {
          day: "Day 3",
          details:
            "After your early morning breakfast, transfer to Athens port (Piraeus or Rafina) for your fast ferry to Mykonos. Upon arrival on Mykonos Island transfer to your hotel for check in. Rest of the day is at leisure to discover the cosmopolitan Island of Mykonos or you can take an optional tour to Delos island (at an additional cost) the birthplace of Apollo and Artemis, a UNESCO World Heritage Sitewith ancient ruins, a significant island in Greece. Overnight stay in Mykonos. (B)",
        },
        {
          day: "Day 4",
          details:
            "After breakfast today, proceed for your Mykonos city and island tour [operates: Tue/ Wed/ Sat/ Sun]. Walk around the old town visiting Little Venice, the windmill area, the Paraportiani church, and the charming harborfront. Discover the stunning bay and beaches Agios Ioannis, Platiyalos, San Stefanos, and Kalafatis, then explore the traditional village of Ano Mera with its village square and 16th Century monastery, all while gainning cultural and histrical insights. Overnight stay in Mykonos. (B)",
        },
        {
          day: "Day 5",
          details:
            "After breakfast you will be transferred to Mykonos port for a high speed ferry from Mykonos to Naxos. Upon arrival at Naxos Port you will be greated and transferred to your hotel. Naxos is home to stunning beaches, ancient ruins, and vibarant local culture. Explore the iconic Portara, reelax on endless sandy beaches, and wander amoung charming villages with rich history and diverse landsacapes. Overnight in Naxos (B)",
        },
        {
          day: "Day 6",
          details:
            "After breakfast, embark on the Naxos Bus Tour with Swimming in Apollanas village explore the islands rich history, exploring ancient monuments like the marble temple of the Godess Demeter. Admire stunning views and immerse yourself in Naxian traditions at Damalas village and Chalki’s Venetian architecture. Enjoy a tranquil experience in Apiranthos village, followed by a visit to Apollonas for seaside relaxation or a delightful lunch. End the tour with the iconic “Kouros” statue, offering breathtaking views of the Aegean Sea along the enchanting west coast. Overnight in Naxos. (B)",
        },
        {
          day: "Day 7",
          details:
            "After your early morning breakfast,transfer to Naxos port for your fast ferry to Santorini. Upon arrival on the Island of Santorini, transfer to your hotel for check in. Rest of your day is leisure or you could take an optional tour of Volcanic Isands Sunset Dinner Cruise. Overnight in Santorini. (B)",
        },
        {
          day: "Day 8",
          details:
            "After breakfast, depart for Volcano Hot Springs and Oia Sunset Tour, Set a sail on a traditional Greek boat, explore Nea Kameni’s volcano crater, relax in the Hot Springs at Palea Kameni, and unwind on Thirassia island. The day ends with Oia’s iconic sunset. Overnight in Santorini. (B)",
        },
        {
          day: "Day 9",
          details:
            "After breakfast, transfer to the airport for your departure flight",
        },
      ],
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6426066.23783166!2d24.324433900000002!3d38.14652525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135b4ac711716c63%3A0x363a1775dc9a2d1d!2sGreece!5e0!3m2!1sen!2sin!4v1728306893878!5m2!1sen!2sin",
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

  const seoData = {
    title: "Greece Tour Packages from India | Chennai & Coimbatore",
    keywords:
      "greece tour packages from india, greece tour packages from chennai, greece tour packages, greece tour, greece",
    description:
      "Our Greece Tour Packages from India helps to witness the Greek mythology's well-known love tales that have fascinated audiences for years.",
    schema: {
      "@context": "https://schema.org/",
      "@type": "WebSite",
      name: "Capstone Holidays",
      url: "https://www.capstoneholidays.in/greece-tour-packages-from-india/",
      potentialAction: {
        "@type": "SearchAction",
        target:
          "https://www.capstoneholidays.in/greece-tour-packages-from-india/{search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
  };
  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
        <script type="application/ld+json">
          {JSON.stringify(seoData.schema)}
        </script>
      </Helmet>
      <Contentsection
        heading={selectedTour.heading}
        children={""}
        backgroundImage={bg1}
      />

      <nav className="tour-navigation">
        <ul>
          {/* <li onClick={() => scrollToSection(detailSliderRef)}>Detail Slider</li> */}
          <li onClick={() => scrollToSection(detailsGalleryRef)}>Gallery</li>
          {/* <li onClick={() => scrollToSection(tourDetailsRef)}>Tour Details</li> */}
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
            <div className="col-12" ref={tourDetailsRef}>
              <TourDetails
                title1={selectedTour.title1}
                description1={selectedTour.description1}
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
          
          <div className="row">
            <div className="col-12" ref={detailsitinerary}>
              <Itinerary
                title="Itinerary"
                itineraryData={selectedTour.itinerary}
              />
            </div>
          </div>

          
          <div className="row">
            <div className="col-12" ref={detailsGalleryRef}>
              <DetailsGallery images={selectedTour.gallerydata} />
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
