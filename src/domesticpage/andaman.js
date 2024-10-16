import React from "react";
import TourList from "../components/card/andaman";
import Sidebar from "../components/sidebar";
import Contentsection from "../components/contentbg";
import AndamanDescription from "../components/tourdescription";
import Balidesc from "../img/andaman/3.jpg";
import FAQ from "../components/Faq";
import bg1 from "../img/andaman/9.jpg";

const AndamanTour = () => {
  const faqAndaman = [
    {
        question: 'What makes Andaman the premier choice for a honeymoon?',
        answer: "The Andaman and Nicobar Islands are an excellent option if you're thinking of a romantic escape with your soulmate that involves delicious food with a candlelight dinner, thrilling water activities, and lovely beaches. Our Andaman and Nicobar Islands Package offers a detailed review of Andaman travel and activities for your honeymoon trip."
    },
    {
        question: 'When can I admire Andaman the most?',
        answer: "Andaman can be visited with family or your loved partner after the monsoon days. From October to April, the atmosphere is favorable for admiration and sightseeing. Check our Andaman Group Tour Packages and Andaman Tour Package for Family to learn more about Andaman vacations."
    },
    {
        question: 'How many Andaman honeymoon trips have you achieved so far?',
        answer: "Capstone Holidays has successfully recorded approximately 230 trips to the Andaman and Nicobar Islands with its Andaman and Nicobar Islands Package and Andaman Holiday Package."
    },
    {
        question: 'Tell us about the most visited beaches in Andaman.',
        answer: "The most beautiful and most-visited beaches in Andaman and Nicobar include Radhanagar Beach, Elephant Beach, Wandoor Beach, Rock Beach, and Vijaya Nagar Beach. Book our Ultimate Andaman Packages to get a wholesome beachy vibe."
    },
    {
        question: 'Does Andaman have an airport?',
        answer: "Yes. Port Blair in Andaman has an international airport that is connected to major cities in India and other countries. Traveling to Andaman via cruise is not advisable as it takes about 2 days to reach. We have included transport information to and from the Andaman Islands in our Andaman Tour Package from Chennai."
    },
    {
        question: 'What languages are widely spoken in Andaman?',
        answer: "Hindi and English are widely spoken in the Andaman and Nicobar Islands. Other regional languages of India are also spoken. To ensure a delightful trip, our Capstone Holidays tourist guide in the Andaman Islands will assist you with all aspects of your travel, including lodging and transportation."
    },
    {
        question: 'How to clear the visa procedures for an Andaman trip?',
        answer: "If you are an Indian tourist, any identity proof is enough to travel to Andaman. International tourists may require an Indian visa to enter the Andaman Islands. Our Andaman Travel Packages and Ultimate Andaman Packages in Capstone Holidays will assist you throughout this procedure."
    },
    {
        question: 'How many destinations do Andaman and Nicobar Islands Packages cover during the trip?',
        answer: "Nearly every beach will be visited, and you'll stay at posh hotels. Havelock Island, Neil Island, Little Andaman, and Samudrika Marine Museum are all included in our 5-night, 6-day Andaman and Nicobar Islands Package and Ultimate Andaman Packages."
    }
];

  return (
    <>
      <Contentsection heading={"Andaman"} children={"Destination"} backgroundImage={bg1} />

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
                  <AndamanDescription
                    title="Explore Andaman"
                    description="Discover the serene beauty of the Andaman Islands, a tropical paradise known for its crystal-clear waters, white sandy beaches, and lush greenery. Visit popular destinations like Havelock Island, famous for Radhanagar Beach, one of Asia’s best beaches. Explore the coral reefs and marine life with snorkeling and scuba diving adventures. Experience the history of Port Blair by visiting the Cellular Jail and enjoy breathtaking sunsets at Chidiya Tapu. The Andaman tour is perfect for those seeking relaxation, adventure, and unforgettable experiences in nature"
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
            <FAQ faqData={faqAndaman} />
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default AndamanTour;
