import React from "react";
import TotalCard from "../../components/totalcard"; // Ensure the import path is correct
import bali from "../../img/azerbaijan/8.jpg";
import bali2 from "../../img/china/13.jpg";
import maldives from "../../img/greece/5.jpg";
import Contentbg from "../../components/contentbg";
import bg1 from "../../img/tour/d1.jpg";
import { Helmet } from "react-helmet";

const TourList = () => {
  // The array of tour items
  const tours = [
    {
      imgSrc: bali,
      title: "Azerbaijan Europe Tour",
      rating: 4.7,
      price: "7,225",
      duration: "10 Days 9 Nights",
      detailPath: "/azerbaijan-tour-packages-from-india",
    },
    {
      imgSrc: bali2,
      title: "China Europe Tour",
      rating: 4.7,
      price: "8,925",
      duration: "9 Days 8 Nights",
      detailPath: "/china-tour-package-from-chennai",
    },
    {
      imgSrc: maldives,
      title: "Greece Europe Tour",
      rating: 4.7,
      price: "6,800",
      duration: "9 Days 8 Nights",
      detailPath: "/greece-tour-packages-from-india",
    },
  ];

  const seoData = {
    title: "Europe Tour Packages from Chennai | Chennai & Coimbatore",
    keywords:
      "europe tour packages from chennai, europe tour package from india, europe tour packages, europe tour package, europe tour",
    description:
      "Our Europe tour packages from Chennai are the solution for the ideal fusion of adventure and honeymoon. Plan a memorable journey with our Europe tour packages.",
    schema: {
      "@context": "https://schema.org/",
      "@type": "WebSite",
      name: "Capstone Holidays",
      url: "https://www.capstoneholidays.in/europe-tour-packages-from-chennai/",
      potentialAction: {
        "@type": "SearchAction",
        target:
          "https://www.capstoneholidays.in/europe-tour-packages-from-chennai/{search_term_string}",
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
      <Contentbg heading={"Europe Tour Packages"} backgroundImage={bg1} />

      <section className="space">
        <div className="container">
          <div className="row">
            {/* Adjusting column sizes to 4 for three columns in a row */}
            {tours.map((tour, index) => (
              <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={index}>
                <TotalCard {...tour} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TourList;
