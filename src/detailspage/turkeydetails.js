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
import galleryImage1 from "../img/Turkey/20938.jpg";
import galleryImage2 from "../img/Turkey/313.jpg";
import galleryImage3 from "../img/Turkey/575.jpg";
import galleryImage4 from "../img/Turkey/2220.jpg";
import galleryImage5 from "../img/Turkey/3728.jpg";
import galleryImage6 from "../img/Turkey/2149275774.jpg";

import galleryImage1_1 from "../img/Turkey/313.jpg";
import galleryImage2_2 from "../img/Turkey/575.jpg";
import galleryImage3_3 from "../img/Turkey/20938.jpg";
import galleryImage4_4 from "../img/Turkey/42289.jpg";
import galleryImage5_5 from "../img/Turkey/61059.jpg";
import galleryImage6_6 from "../img/Turkey/2149275774.jpg";
import location1 from "../img/icon/location-dot3.svg";
import bg1 from "../img/Turkey/176.jpg";
import { Helmet } from 'react-helmet';

const TourTurkey = () => {
  const { id } = useParams();

  const detailSliderRef = useRef(null);
  const detailsGalleryRef = useRef(null);
  const tourDetailsRef = useRef(null);
  const locationMapRef = useRef(null);
  const InitiaryMapRef = useRef(null);

  const toursData = {
    1: {
      heading: "Turkey Tour Packages from India",
      title1: "Turkey Tour Packages from India",
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
       "All airport transfer services mentioned inside the itinerary",
  "2 nights hotel in Istanbul",
  "2 nights hotel in Cappadocia",
  "4 open buffet breakfasts",
  "3 Lunches and 2 Dinners",
  "Guided Istanbul City Tour",
  "Guided Istanbul Bosphorus Cruise Tour",
  "Guided Cappadocia Tour with Underground City and Goreme Open Air Museum",
  "All entrance fees mentioned in the itinerary",
  "Transportation in a fully air-conditioned, non-smoking coach",
  "Professional English-speaking tour guides",
  "Return airport transfer",
  "Local taxes"
      ],
      Priceexclusions:[
        "International flights",
        "Optional Tours",
        "Insurance: All types",
        "Turkey entry VISA",
        "Items of a personal nature such as alcoholic drinks, cold drinks, laundry",
        "Any other expenses which are not mentioned in the included section",
        "Domestic flight from Istanbul to Cappadocia",
        "Domestic flight from Kayseri Airport to Istanbul"
      ],

      description1: [
        "Turkey Tour Packages From India takes you to the must-visit places including Istanbul, Bursa, Kemaliye, Ahlat, Hatay, Vize, and many more. Istanbul's timeless appeal can be attributed in great part to its rich historical background. The city was formerly known as Constantinople. It served as the epicenter of several ancient empires. Numerous easily accessible architectural wonders that still stand as a testimony to previous civilizations are located in the city's core. The best season to travel to Turkey is during the summer, which extends from April through October"
      ],
      // tourCode: ["CBT-22/04"],
      duration: ["4 Nights, 5 Days"],
      hotelDetails: [
        "Istanbul - 5* La Quinta by Wyndham Istanbul",
"Cappadocia - El Puente Cave Hotel"
      ],

      itinerary: [
        {
          day: "Day 1",
          details:
            "Upon our arrival at Istanbul International Airport, your guide will meet, assist and transfer you to the hotel. Istanbul was the capital city of Byzantium & Roman Empires and Ottoman State. It is a most fascinating city, which actually crosses two continents Europe and Asia. It is a city of amalgamation of museums, bazaars, minarets, mosques, churches, palaces, and restaurants catering to every one’s taste, customs and fifteen million people. Overnight in Istanbul.",
        },
        {
          day: "Day 2",
          details: "(Breakfast and Lunch included)Aft After breakfast, we have Istanbul City Tour. Our first visit will be HIPPODROME. Ancient Hippodrome was the scene of chariot races, with the three monuments; the Obelisk of Theodosius, the bronze Serpentine Column and the Column of Constantine. Than we will visit SULTANAHMET IMPERIAL MOSQUE. Across from Hagia Sophia Grand Mosque, it was built in the 16th century by the architect Mehmet, is known as the BLUE MOSQUE because of its magnificent interior decoration of blue Iznik tiles.Our next visit will be HAGIA SOPHIA GRAND MOSQUE. The Hagia Sophia Grand Mosque, previously known as the Church of Divine Wisdom, is simply the best of its kind! Hagia Sophia Grand Mosque is the greatest surviving example of Byzantine Architecture. For 1000 years, it was once the largest church in the world, decorated with stunning 6th century golden mosaics. Today it is a mosque. Lunch break at 13:00 pm. After the lunch, TravelShop Group will take you to the ASIL EFENDI which is a unique atmosphere with reasonable prices for your shopping. Here you will find; Exotic Spices and Herbs, Turkish Baklava, Turkish Delights, Turkish Coffee, nuts and fruits, small souvenirs such as Ceramic Handicrafts, Evil Eyes totems, all naturel olive oil, soaps and many other goods in Souvenir Shops and stores. After the tour, transfer back to your hotel. OPTIONAL DINNER CRUISE ON THE BOSPHORUS TOUR: Tonight Between 19:30 to 23:30 we have an optional Entertaining Dinner Cruise program on the Bosphorus, where Europe and Asia are connected. You will spend an unforgettable night on the Bosphorus with dinner, unlimited local alcoholic and non-alcoholic & soft drinks, belly dance show, Turkish Folklore show, DJ Performance and great entertainment on Bosphorus Dinner Cruise. End of the entertainment at about midnight 00:00 am, transfer to your hotel. Overnight in Istanbul.",
        },
        {
          day: "Day 3",
          details:"(Breakfast, Lunch and Dinner included)After breakfast enjoy BOSPORUS BY BOAT; a traditional excursion by boat along the waterway separating Europe and Asia. The shore lined with old wooden villas, palaces of marble, fortresses, and small fishing villages. During the excursion, you will see the magnificent sights of the following attractions from your boat. See Dolmabahce Palace, and further along, the parks and imperial pavilions of Yildiz Palace. On the coastal edge of this park, is Ciragan Palace, 300 meters of its marble facade faces the shore. At Ortakoy a great variety of artists, gather every sunday to display their work along the street. Ortakoy is a symbol of tolerance with a church, a mosque and a synagogue existing side by side for centuries.RUMELI FORTRESS (view from boat), Built by Mehmet the Conqueror in 1452 prior to the conquest of Istanbul was completed in only four months to control and protect the infamous Bosporus passage. It is one of the most beautiful works of military architecture anywhere in the world. BEYLERBEYI PALACE (view from boat), is the summer residence of Ottoman sultans exists in its original renovated glory featuring original antique furniture and magnificent gardens with the Harem on the Asian side of Istanbul. Lunch break at the Turkish restaurant. After the lunch we will then take you to the GRAND SPICE BAZAAR, which is a unique atmosphere with reasonable prices for your shopping. Here you will find; Exotic Spices and Herbs, Turkish Baklava, Turkish Delights, Turkish Coffee, nuts and fruits, small souvenirs such as Ceramic Handicrafts, Evil Eyes totems, all naturel olive oil, soaps and many other goods in Souvenir Shops and stores. After the tour transfer to Istanbul Airport for domestic flight to Cappadocia. Transfer from airport and check in to your hotel in Cappadocia. Dinner and overnight in Cappadocia.OPTIONAL CAPPADOCIA TURKISH NIGHT SHOW: During the evening at 19:30 PM., we have an Optional Tour to enjoy our Turkish Night Shows, which are traditions that have survived from the Ottoman Empire to the present day. You may have great fun in the real caves, with the rich Anatolian food menu, unlimited local alcoholic and non-alcoholic drinks, belly dance show, Turkish Folklore show, DJ Performance and warm service of Anatolian Hospitality. Overnight in Cappadocia."
            
        },
        {
          day: "Day 4",
          details:
            "(Breakfast, Lunch and Dinner included)For our guests who will experience the Hot Air Balloon Tour, we will pick you up from your hotel in the most beautiful and unique area of the world at 05:30 am. in the morning before the sunrise. And we will go to the area where hundreds of Hot Air Balloon will take off through the air. We will watch the sunrise over those splendid fairy chimneys and valleys that impress people with their exquisiteness. After making our flight in about 1 hour, we will celebrate our experience with champagne when we land and collect our flight certificate. Then we will return to our hotel and have our delicious breakfast.After breakfast at 09:30 depart for Cappadocia Tour.We will drive you to Ozkonak Underground City, one of the best preserved Underground cities in Cappadocia. After Underground City tour, you visit Goreme Open Air Museum, the Heart of Cappadocia. Goreme Open Air Museum is famous for frescoes dating to 10th century describing the life of Jesus Christ and monks. Next stop is Cavusin, which is an abandoned village with old cave Greek houses. After Cavusin you go to the restaurant in Avanos to have lunch. After lunch, you visit a pottery work shop, to see how to make potteries. Then you go to Love Valley. Love Valley Cappadocia is a hidden valley with scenic formations to say the least.Despite the resemblance to man hood, these amazing rock formations are far from man-made. Next stop is Devrent Valley, which is also called Imagination Valley, where you can see natural rock formations looking like animals. Last stop is Three Beauties, three beautiful fairy chimneys with their hats, which is the symbol of Cappadocia. This tour will end approximately at 18.00 and you will be returned back to your hotel. Overnight in Cappadocia.",
        },
        {
          day: "Day 5",
          details:
            "(Breakfast included)After breakfast you will have free time in Cappadocia. Today we will depart for Kayseri Airport for our domestic flight to Istanbul and then back to home. We hope your tour was a memorable one and we would like to see you in the future in one of our tours again.Have a nice trip back home and thanks for choosing Capstone Holidays",
        },
      ],
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12684601.982891306!2d35.12933!3d39.087646!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b0155c964f2671%3A0x40d9dbd42a625f2a!2zVMO8cmtpeWU!5e0!3m2!1sen!2sin!4v1728111346399!5m2!1sen!2sin",
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
    <Helmet>
        <title>Turkey Tour Packages from India | Chennai & Coimbatore</title>
        <meta name="description" content="Turkey Tour Packages From India takes you to the must-visit places including Istanbul, Bursa, Kemaliye, Ahlat, Hatay, Vize, and many more." />
        <meta name="keywords" content="turkey tour packages from india, turkey tourist places, turkey tour, turkey tour package from Chennai, tour tour package" />

        {/* Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "WebSite",
            "name": "Capstone Holidays",
            "url": "https://www.capstoneholidays.in/tour/turkey-tour-packages-from-india/",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://www.capstoneholidays.in/tour/turkey-tour-packages-from-india/{search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })}
        </script>
      </Helmet>
      <Contentsection heading={selectedTour.heading} children={""} backgroundImage={bg1} />
      {/* Navigation Links */}
      <nav className="tour-navigation">
        <ul>
          {/* <li onClick={() => scrollToSection(detailSliderRef)}>Detail Slider</li> */}
          <li onClick={() => scrollToSection(detailsGalleryRef)}>Gallery</li>
          <li onClick={() => scrollToSection(tourDetailsRef)}>Tour Details</li>
          <li onClick={() => scrollToSection(InitiaryMapRef)}>Itinerary</li>
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
                  <div ref={detailSliderRef}>
                    <DetailSlider images={selectedTour.galleryImages} />
                  </div>

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
                // tourCode={selectedTour.tourCode}
                priceIncludes={selectedTour.priceIncludes}
                hotelDetails={selectedTour.hotelDetails}
                Priceexclusions={selectedTour.Priceexclusions}
              />
            </div>
          </div>
        
          <div className="row">
            <div className="col-12" ref={InitiaryMapRef}>
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

export default TourTurkey;
