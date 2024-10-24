import React from "react";
import TourList from "../components/card/sikkim";
import Sidebar from "../components/sidebar";
import Contentsection from "../components/contentbg";
import Sikkim from "../components/tourdescription";
import Balidesc from "../img/sikkim/3.jpg";
import FAQ from "../components/Faq";
import bg1 from "../img/sikkim/11.jpg";
import { Helmet } from 'react-helmet';

const SikkimTours = () => {
  const faqDarjeeling = [
    {
        question: 'Why choose Darjeeling for Honeymoon?',
        answer: "The iconic Kanchenjunga peaks encircle Darjeeling, making it the perfect destination for a romantic escape. With its many smaller hills of well-manicured tea gardens, wild orchids, tall rows of pine trees, and the sound of mini mountain rails passing by, this little hill hamlet seems something out of a fairy tale. Visit us to select from the finest Darjeeling tour packages if you want to see this hill station in all its splendor."
    },
    {
        question: 'When is the most favourable season to visit Darjeeling?',
        answer: "Darjeeling's throughout the year with a pleasing temperature of 25 degrees Celsius makes it a popular destination. It should come as no surprise that March through May is the busiest travel period and when Darjeeling honeymoon packages are most affordable. The rainy season runs from June to September when the temperature is usually comfortable enough for a romantic escape but a little colder. Darjeeling is bright and joyous in December, as Christmas and New Year's Eve are rapidly approaching. So, book our Darjeeling Gangtok Tour Packages and Sikkim holiday packages to drench in the mild bliss of Darjeeling."
    },
    {
        question: 'What are the popular foods available in Darjeeling?',
        answer: "Darjeeling is world famous for its Tea. Darjeeling Tea attracts thousands of tourists every year globally. Other popular foods include The Thali meals, Thupka, Sael rotis, Churpees, and Shapalay."
    },
    {
        question: 'What activities can I do in Darjeeling?',
        answer: "From Tiger Hills, this charming hill station offers stunning views of the Kanchenjunga and an unusual dawn. A breathtaking sweeping view of the verdant slopes of green tea farms and snow-capped mountains may be seen from the rope car ride. You can see the stunning Jhakri waterfalls and ride the miniature mountain train with the Darjeeling honeymoon packages offered by Capstone Holidays. You can also take in the peace of the Japanese temple and Buddhist monastery. Book our Sikkim travel packages and West Bengal tour packages to get involved in all the above-mentioned adventurous activities and have a thrilling trip at Capstone Holidays."
    },
    {
        question: 'How to reach Darjeeling?',
        answer: "The closest airport to Darjeeling is located in Siliguri in Bagdogra. Traveling by road from Darjeeling to Bagdogra takes about two and a half hours. You can also reach Kolkata and travel to Darjeeling by train. Kolkata is two hours and fifty minutes away by plane from Delhi. Check our West Bengal tour packages to know more about Darjeeling tours and accommodations."
    },
    {
        question: 'How many days is enough to spend on a Darjeeling tour?',
        answer: "Our Darjeeling tour package and Sikkim holiday packages are worthy enough to take you around Darjeeling in 3-4 days."
    },
    {
        question: 'When is the snowfall season in Darjeeling?',
        answer: "January is the ultimate joyous season in Darjeeling. It's snowfall time and you can experience the serene ambiance throughout this town. Check out our Darjeeling Gangtok Tour Packages and Sikkim Tour Package to know the peak season time and travel deals for your dreamy trip."
    }
];

  return (
    <>
     <Helmet>
        <title>Book our Budget Sikkim Tour at Capstone Holidays | Budget North Sikkim Tour Itinerary</title>
        <meta name="keywords" content="sikkim tour, budget north sikkim tour itinerary, sikkim tourism, sikkim tourist places, sikkim travel" />
        <meta name="description" content="Sikkim tours are best sold in December when you can experience bright and clear weather, making it perfect for outdoor activities and touring." />
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org/",
            "@type": "WebSite",
            "name": "Capstone Holidays",
            "url": "https://www.capstoneholidays.in/sikkim-tour/",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://www.capstoneholidays.in/sikkim-tour/{search_term_string}",
              "query-input": "required name=search_term_string"
            }
          }
          `}
        </script>
      </Helmet>
      <Contentsection heading={"Sikkim"} children={""} backgroundImage={bg1} />

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
                  <TourList />
                  <Sikkim
                    title="Explore Sikkim"
                    description="Sikkim tours are best sold in December when you can experience bright and clear weather, whereas Sikkim tourism makes it perfect for outdoor activities and touring. Sikkim tourist places are abundant with numerous radiant lakes. The people of Sikkim hold the majority of the lakes in high regard and consider them to be sacred. The most attractive sites in Sikkim to tour with our budget north Sikkim tour itinerary are Yumthang Valley, Tsongo Lake, Lachen, and Lachung. With its sensational landscapes, abundant natural beauty, and lively local cultures, Sikkim Travel provides the ideal combination of adventure and nature discovery."
                    imageUrl={Balidesc}
                  />
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-lg-5">
              <Sidebar />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
            <h1 className="text-center mt-5">Frequently Asked Questions</h1>
            <FAQ faqData={faqDarjeeling} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SikkimTours;
