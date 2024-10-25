import React from "react";
import TourList from "../../components/card/education";
import Sidebar from "../../components/sidebar";
import Contentsection from "../../components/contentbg";
import EducationalDescription from "../../components/tourdescription";
import Balidesc from "../../img/swiss/s1.jpg";
import { Helmet } from "react-helmet";
import bg1 from "../../img/bg/hero_bg_5_1.png";

const HimchalTour = () => {
  const seoData = {
    title: "Educational Tour Packages | Educational Trips for Students",
    keywords:
      "educational tour packages, educational trips for students, educational tour, educational tour packages in india, capstone, chennai, students trip",
    description:
      "Choose our educational tour packages for research and educational tours. Take a break from your hectic study schedule and we are always happy to help you.",
    schema: {
      "@context": "https://schema.org/",
      "@type": "WebSite",
      name: "Capstone Holidays",
      url: "https://www.capstoneholidays.in/educational-tour-packages/",
      potentialAction: {
        "@type": "SearchAction",
        target:
          "https://www.capstoneholidays.in/educational-tour-packages/{search_term_string}",
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
        heading={"Educational Tour Package"}
        children={""}
        backgroundImage={bg1}
      />

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
                  <EducationalDescription
                    title="Explore Swiss"
                    description="Immerse yourself in the breathtaking beauty of Switzerland, a land of majestic mountains, crystal-clear lakes, and charming villages. This tour offers a chance to experience the highlights of Swiss culture and natural wonders.

Begin your journey in the vibrant cities of Zurich or Geneva, where modern urban life meets stunning alpine backdrops. Stroll through quaint old towns, visit world-class museums, and enjoy Swiss cuisine at cozy cafes."
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
      </section>
      {/* <div className="container">
          <div className="row">
            <div className="col-lg-12">
            <h1 className="text-center mt-5">Frequently Asked Questions</h1>
            <FAQ faqData={faqShimlaManali} />
            </div>
          </div>

        </div> */}
    </>
  );
};

export default HimchalTour;
