import React from "react";
import TourList from "../components/thailandcard";
import Sidebar from "../components/sidebar";
import Contentsection from "../components/contentbg";
import Dubai from "../components/tourdescription";
import Balidesc from "../img/Thailand/771.jpg";
import FAQ from "../components/Faq";
import bg1 from "../img/Thailand/2150668931.jpg";
import { Helmet } from 'react-helmet';

const ThailandPage = () => {
  const faqThailand = [
    {
        question: 'When is the perfect season to visit Thailand?',
        answer: "The last days of November to May are the perfect period for travelers to take advantage of Thailand group tour packages."
    },
    {
        question: 'What are the most-liked dishes by tourists in Thailand?',
        answer: "The red hot shrimp soup, Pad Thai, Tom Yum Goong, Som Tum, Panang Gai, and Thai fried rice are the truly lip-smacking dishes of Thailand. Check our Thailand Tour Packages for the best-chosen accommodations including food."
    },
    {
        question: 'How to customize our Thailand group tour package?',
        answer: "Capstone Holidays offers customized trips based on your interests and financial constraints. Contact our tour operator at Capstone Holidays and get exciting details about the Thailand group tour package and the Thailand Tour Package from Chennai."
    },
    {
        question: 'How to check if safety measures are included in your Thailand Tour Package?',
        answer: "Safety protocols are followed religiously by our travel agency for all tours. In general, Thailand is a safety-conscious tourist nation. Anyhow, we support our customers round the clock (24/7) via phone calls and check the tourist’s safety through the tourist guides. So, our Thailand Tour Package is fully secured and trusted."
    },
    {
        question: 'In how many days does the Thailand Tour Package from Chennai cover how many locations?',
        answer: "Our Thailand Tour Package and Thailand Tour Package from Chennai cover almost all the major tourist attractions in Thailand such as Krabi, Chiang Mai, Phuket, and Bangkok, in 4 to 5 days."
    },
    {
        question: 'How much is the Thailand Tour package price at Capstone Holidays?',
        answer: "As said above, Thailand group tour packages and other Thailand Tour Packages are customizable. Contact our Thailand tour operator at Capstone Holidays and get many fascinating deals about the Thailand Tour Package."
    }
];

  return (
    <>
      <Helmet>
        <title>Take a Thailand Tour to visit Bangkok, Pattaya, Phuket and Krabi | Bangkok | Pattaya | Phuket | Krabi</title>
        <meta name="keywords" content="thailand tour, thailand tour package, pattaya tour, phuket tour, bangkok tour, krabi tour" />
        <meta name="description" content="Our Thailand Tour from Chennai takes you to the finest tourist destinations to explore the Thai cultural identity and cuisines." />
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org/",
            "@type": "WebSite",
            "name": "Capstone Holidays",
            "url": "https://www.capstoneholidays.in/thailand-tour/",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://www.capstoneholidays.in/thailand-tour/{search_term_string}",
              "query-input": "required name=search_term_string"
            }
          }
          `}
        </script>
      </Helmet>
      <Contentsection heading={"Thailand Tour"} children={""} backgroundImage={bg1} />

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
                  <Dubai
                    title="Explore Thailand"
                    description="Our Thailand Tour from Chennai takes you to the best tourist destinations such as The Sweet Tamarind Fair, Mae Hong Son Winter Feast, Alcazar show in Pattaya, Phi Phi Island tour, and Nakhon Sawan Chinese New Year, The Loi Krathong and the Chiang Mai Flower Festival with our Thailand tour package. Thailand is geographically located amid Southeast Asia. Thailand is known for its numerous islands with beautiful beaches and a mild climate. Our Pattaya tour, Phuket tour, Bangkok tour, and Krabi tour will let you know why Thailand is called as “the origin of happiness,” since its citizens are incredibly warm and inviting."
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
            <FAQ faqData={faqThailand} />
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default ThailandPage;
