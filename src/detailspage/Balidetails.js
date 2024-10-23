import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../components/sidebardetailspage";
import Contentsection from "../components/contentbg";
import DetailSlider from "../components/detailslider";
import DetailsGallery from "../components/detailsgallery";
import Itinerary from "../components/itinerary";
import LocationMap from "../components/deatilsmap";
import TourDetails from "../components/tourdetails";
import { Helmet } from "react-helmet";
import galleryImage1 from "../img/tour/11021.jpg";
import galleryImage2 from "../img/tour/12.jpg";
import galleryImage3 from "../img/tour/835.jpg";
import galleryImage4 from "../img/tour/15793.jpg";
import galleryImage5 from "../img/tour/340.jpg";
import galleryImage6 from "../img/tour/365.jpg";
import galleryImage1_1 from "../img/gallery/gallery_8_5.jpg";
import galleryImage2_2 from "../img/gallery/343.jpg";
import galleryImage3_3 from "../img/gallery/gallery_3_6.jpg";
import galleryImage4_4 from "../img/gallery/963.jpg";
import galleryImage5_5 from "../img/gallery/11021.jpg";
import galleryImage6_6 from "../img/gallery/2151747443.jpg";
import location1 from "../img/icon/location-dot3.svg";
import bg1 from "../img/bg/contact_bg_7.jpg";

const BaliDetails = () => {
  const detailsitinerary = useRef(null);
  const detailsGalleryRef = useRef(null);
  const tourDetailsRef = useRef(null);
  const locationMapRef = useRef(null);
  // Sample data - you can replace this with your actual content
  const tourDetails = {
    "bali-tour-packages-from-chennai": {
      heading: "Bali Tour Packages from Chennai",
      title1: "Bali Tour Packages from Chennai",
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
        "Twin Sharing Accommodation with Breakfast",
        "Private air-conditioned vehicle for tour time & Airport Pick & Drop",
        "English Speaking Driver",
        "Entrance fee",
        "1 Jimbaran Bay Dinner",
        "4 Set Menu Dinner at Hotel",
        "3* - Legian Village Hotel or Legian Paradiso or Swiss-Belexpress Kuta Legian or Similar",
        "4* - J4 Hotel Legian or Bedrock Hotel Legian or Grand Ixora Hotel or Similar",
      ],
      description1: [
        "The Bali tour packages from Chennai are the solution for the ideal fusion of adventure and honeymoon. Surrounded by the most breathtaking beaches, and rolling hills all awaiting to celebrate your perfect honeymoon or holiday. Jimbaran Beach, Bingin Beach, Suluban Beach, Padang-Padang Beach, Uluwatu, and Mount Batur are the major tourist attractions included in Bali Honeymoon Packages and Bali Couple Package. Take advantage of our holiday packages to escape the fast-paced lifestyle and partake in all of these activities",
      ],
      tourCode: ["CBT-22/04"],
      duration: ["6 Days 5 Nights (BALI)"],
      hotelDetails: [
        "Twin Sharing Accommodation with Breakfast",
        "Private air-conditioned vehicle for tour time & Airport Pick & Drop",
        "English Speaking Driver",
        "Entrance fee",
        "1 Jimbaran Bay Dinner",
        "4 Set Menu Dinner at Hotel",
        "3* - Legian Village Hotel or Legian Paradiso or Swiss-Belexpress Kuta Legian or Similar",
        "4* - J4 Hotel Legian or Bedrock Hotel Legian or Grand Ixora Hotel or Similar, Panida Hotel - Samuh Ocean Sunset Hotel (4*)",
      ],
      itinerary: [
        {
          day: "Day 1",
          details: "After Arrive transfer Hotel. Dinner set menu at Hotel. (D)",
        },
        {
          day: "Day 2",
          details:
            "Full Day Visit NusaDua Water Sports, Padang Padang Beach, Uluwatu Temple & Jimbaran Dinner. (B/D)",
        },
        {
          day: "Day 3",
          details:
            "Full Day Visit Jatiluwih, Tanah Lot, Taman Ayun Temple, Chocolate Factory. Dinner set menu at Hotel. (B/D)",
        },
        {
          day: "Day 4",
          details:
            "Full Day Visit Nusa Penida West Tour (SIC) 6.30 AM Pickup at your hotel (depends on the area),,08.00 – 09.00 AM Go to Sanur Harbour – Until Harbour Nusa Penida , 10.00 AM Visit Angel Billabong,,11.00 AM Visit Broken Beach ,12.30 PM Lunch Time ,13.30 PM Visit Klingking Beach ,14.30 PM Visit Crystal Bay,,14.30 PM Back to Harbour ,16.30 PM Drop to Hotel. Dinner set menu at Hotel.(B/D)",
        },
        {
          day: "Day 5",
          details:
            "Full Day Visit Kintamani Volcano , Tirta empul temple Gunung kawi bali, Goa Gajah. Dinner set menu at Hotel. (B/D)",
        },
        { day: "Day 6", details: "Hotel to Bali Airport Transfer.(B)" },
      ],
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1010291.3909974314!2d115.07157700000002!3d-8.455471!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd141d3e8100fa1%3A0x24910fb14b24e690!2sBali%2C%20Indonesia!5e0!3m2!1sen!2sin!4v1727415378982!5m2!1sen!2sin",

      iconSrc: [location1],
      title: "Bali Tour Packages from Chennai | Capstone Holidays",
      keywords:
        "bali tour packages from chennai, capstone holidays, bali tour, Coimbatore, bali tour package",
      description:
        "The Bali tour packages from Chennai are the solution for the ideal fusion of adventure and honeymoon",
      schema: {
        "@context": "https://schema.org/",
        "@type": "WebSite",
        name: "Capstone Holidays",
        url: "https://www.capstoneholidays.in/tour/bali-tour-packages-from-chennai/",
        potentialAction: {
          "@type": "SearchAction",
          target:
            "https://www.capstoneholidays.in/tour/bali-tour-packages-from-chennai/{search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
    },
    "bali-tour-places": {
      heading: "Bali Tourist Places",
      title1: "Bali Tourist Places",
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
      description1: [
        "The prominent Bali tourist places are covered with our Bali Island Tour Package and Bali Indonesia Package within a week. Bali tour places are more fascinating that provide a wide range of experiences. Some most visited destinations in Bali include Nusa Dua, Nusa Penida, Kuta, Ubung, Ubud, Gates of Heaven, Mt Batur, Jimbaran Beach, Bingin Beach, Suluban Beach, Padang-Padang Beach, Uluwatu, and many more",
      ],
      tourCode: ["CBT-22/01"],
      duration: ["3 Days 2 Nights (BALI)"],
      hotelDetails: [
        "3* - Legian Village Hotel or Legian Paradiso or Swiss-Belexpress Kuta Legian or Similar",
        "4* - J4 Hotel Legian or Bedrock Hotel Legian or Grand Ixora Hotel or Similar",
      ],
      PackageInclusion: [
        "Twin Sharing Accommodation with Breakfast",
        "Private air-conditioned vehicle for tour time & Airport Pick & Drop",
        "English Speaking Driver",
        "Entrance fee",
        "1 Jimbaran Bay Dinner + 1 Set Menu Dinner",
      ],
      itinerary: [
        {
          day: "Day 1",
          details:
            "After Arrive transfer Hotel. Evening visit Uluwatu Temple & Jimbarn Dinner. (D)",
        },
        {
          day: "Day 2",
          details:
            "Full Day Visit kintamani volcano &Tanah Lot. Evening Dinner set menu at Hotel. (B/D)",
        },
        {
          day: "Day 3",
          details: "Hotel to Bali Airport Transfer.(B)",
        },
      ],
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1010291.3909974314!2d115.07157700000002!3d-8.455471!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd141d3e8100fa1%3A0x24910fb14b24e690!2sBali%2C%20Indonesia!5e0!3m2!1sen!2sin!4v1728100116204!5m2!1sen!2sin",

      iconSrc: [location1],
      title: "Bali Tourist Places | Capstone Holidays",
      keywords:
        "bali tourist places, bali sightseeing places, bali international packages, bali flight tickets",
      description:
        "The Bali tour packages from Chennai are the solution for the ideal fusion of adventure and honeymoon",
      schema: {
        "@context": "https://schema.org/",
        "@type": "WebSite",
        name: "Capstone Holidays",
        url: "https://www.capstoneholidays.in/tour/bali-tourist-places/",
        potentialAction: {
          "@type": "SearchAction",
          target:
            "https://www.capstoneholidays.in/tour/bali-tourist-places/{search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
    },
  };

  const { tourId } = useParams();

  // Get the path name to determine which tour details to show
  const path = window.location.pathname.split("/").pop(); // Gets the last part of the URL
  const tour = tourDetails[path] || [tourId];

  const metaDetails = tour
    ? {
        title: tour.title || "Default Title",
        description: tour.description || "Default Description",
        keywords: tour.keywords || "Default Keywords",
      }
    : {
        title: "Default Title",
        description: "Default Description",
        keywords: "Default Keywords",
      };

  if (!tour) {
    return <div>Tour not found!</div>; // Fallback in case of no match
  }

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };
  return (
    <div>
      <>
        <Helmet>
          <title>{metaDetails.title}</title>
          <meta name="description" content={metaDetails.description} />
          <meta name="keywords" content={metaDetails.keywords} />
          <script type="application/ld+json">
            {JSON.stringify(tour.schema)}
          </script>
        </Helmet>
        <Contentsection
          heading={tour.heading}
          children={""}
          backgroundImage={bg1}
        />

        <nav className="tour-navigation">
          <ul>
            {/* <li onClick={() => scrollToSection(detailSliderRef)}>Detail Slider</li> */}
            <li onClick={() => scrollToSection(detailsGalleryRef)}>Gallery</li>
            <li onClick={() => scrollToSection(tourDetailsRef)}>
              Tour Details
            </li>
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
                  title1={tour.title1}
                  description1={tour.description1}
                  duration={tour.duration}
                  tourCode={tour.tourCode}
                  priceIncludes={tour.priceIncludes}
                  hotelDetails={tour.hotelDetails}
                  PackageInclusion={tour.PackageInclusion}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-12" ref={detailsitinerary}>
                <Itinerary title="Itinerary" itineraryData={tour.itinerary} />
              </div>
            </div>

           
            <div className="row">
              <div className="col-12" ref={detailsGalleryRef}>
                <DetailsGallery images={tour.gallerydata} />
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
    </div>
  );
};

export default BaliDetails;
