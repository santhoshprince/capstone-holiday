import React from "react";
import TotalCard from "../../components/totalcard"; // Ensure the import path is correct
import bali from "../../img/tour/12.jpg";
import bali2 from "../../img/tour/34.jpg";
import maldives from "../../img/bg/7.jpg";
import dubai from "../../img/Dubai/d4.jpg";
import thailand from "../../img/Thailand/895.jpg";
import turkey from "../../img/Turkey/313.jpg";
import mauritius from "../../img/mauritius/4224.jpg";
import singapore from "../../img/singapore/s5.jpg";
import vietnam from "../../img/vietnam/8.jpg";
import srilanka from "../../img/srilanka/travels-3758193_1920.jpg";
import Contentbg from "../../components/contentbg";
import { Helmet } from "react-helmet";
import bg1 from "../../img/tour/emirates.jpg";

const TourList = () => {
  // The array of tour items
  const tours = [
    {
      imgSrc: bali,
      title: "Bali Tour Packages",
      rating: 4.7,
      price: "20,825",
      duration: "6 Days 5 Nights",
      detailPath: "/tour/bali-tour-packages-from-chennai",
    },
    {
      imgSrc: bali2,
      title: "Bali Tourist Places",
      rating: 4.7,
      price: "6,800",
      duration: "3 Days 2 Nights (BALI)",
      detailPath: "/tour/bali-tourist-places",
    },
    {
      imgSrc: maldives,
      title: "Maldives Tour Package",
      rating: 4.7,
      price: "96,390",
      duration: "4 Days 5 Nights",
      detailPath: "/tour/maldives-tour-package-from-chennai",
    },
    {
      imgSrc: dubai,
      title: "Dubai Tour Packages",
      rating: 4.7,
      price: "43,350",
      duration: "4 Nights, 5 Days",
      detailPath: "/tour/dubai-tour-packages-from-chennai",
    },
    {
      imgSrc: thailand,
      title: "Thailand Tour Package from Chennai 4N / 5D",
      rating: 4.7,
      price: "15,130",
      duration: "4 Nights, 5 Days",
      detailPath: "/tour/thailand-tour-package-from-chennai",
    },
    {
      imgSrc: turkey,
      title: "Turkey Tour Packages from India – 4N / 5D",
      rating: 4.7,
      price: "25,075",
      duration: "4 Nights, 5 Days",
      detailPath: "/tour/mauritius-tour-package-from-chennai",
    },
    {
      imgSrc: mauritius,
      title: "Mauritius Tour Package",
      rating: 4.7,
      price: "135,320",
      duration: "4 Nights, 5 Days",
      detailPath: "/tour/turkey-tour-packages-from-india",
    },
    {
      imgSrc: singapore,
      title: "Singapore and Malaysia Tour Packages",
      rating: 4.7,
      price: "38,250",
      duration: "4 Nights, 5 Days",
      detailPath: "/tour/singapore-and-malaysia-tour-packages",
    },
    {
      imgSrc: vietnam,
      title: "Vietnam Cambodia Tour Package – 3N / 4D",
      rating: 4.7,
      price: "20,400",
      duration: "3 Nights, 4 Days",
      detailPath: "/tour/vietnam-cambodia-tour-package",
    },
    {
      imgSrc: srilanka,
      title: "Sri Lanka Tour Package from Chennai 4N/5D",
      rating: 4.7,
      price: "25,415",
      duration: "4 Nights, 5 Days",
      detailPath: "/tour/srilanka-tour-package-from-chennai",
    },
  ];

  const seoData = {
    title: "International Tour Packages from Chennai | Coimbatore",
    keywords:
      "international tour packages from chennai, international tour packages, international tour packages for family, international tour packages from india including flights, international tour packages from india, international tour",
    description:
      "We offer the greatest International Tour packages from Chennai that are affordable for an exciting holiday for couples and family to share golden memories.",
    schema: {
      "@context": "https://schema.org/",
      "@type": "WebSite",
      name: "Capstone Holidays",
      url: "https://www.capstoneholidays.in/international-tour-packages-from-chennai/",
      potentialAction: {
        "@type": "SearchAction",
        target:
          "https://www.capstoneholidays.in/international-tour-packages-from-chennai/{search_term_string}",
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
      <Contentbg
        heading={"International Tour Packages"}
        backgroundImage={bg1}
      />

      <section className="space">
        <div className="container">
          <div className="row">
            {tours.map((tour, index) => (
              <div className="col-md-4" key={index}>
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
