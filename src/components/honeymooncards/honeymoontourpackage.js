import React from "react";
import TotalCard from "../../components/totalcard"; // Ensure the import path is correct
import bali from "../../img/andaman/8.jpg";
import bali2 from "../../img/tour/365.jpg";
import maldives from "../../img/kashmir/12.jpg";
import kerala from "../../img/kerala/6.jpg";
import rajasthan from "../../img/Rajasthan/10.jpg";
import Contentbg from "../../components/contentbg";
import bg1 from "../../img/tour/99.jpg";
import { Helmet } from "react-helmet";

const TourList = () => {
  const tours = [
    {
      imgSrc: bali,
      title: "Andaman Honeymoon Tour",
      rating: 4.7,
      price: "19,900",
      duration: "5 Days 4 Nights",
      detailPath: "/andaman-honeymoon-packages-from-chennai",
    },
    {
      imgSrc: bali2,
      title: "Bali Honeymoon Tour",
      rating: 4.7,
      price: "21,000",
      duration: "5 Days 4 Nights",
      detailPath: "/bali-honeymoon-packages-from-chennai",
    },
    {
      imgSrc: maldives,
      title: "Kashmir Honeymoon Tour",
      rating: 4.7,
      price: "20,500",
      duration: "5 Days 4 Nights",
      detailPath: "/kashmir-honeymoon-package-for-couple",
    },
    {
      imgSrc: kerala,
      title: "Kerala Honeymoon Tour",
      rating: 4.7,
      price: "19,000",
      duration: "5 Days 4 Nights",
      detailPath: "/kerala-honeymoon-packages-from-chennai",
    },
    {
      imgSrc: rajasthan,
      title: "Rajasthan Honeymoon Tour",
      rating: 4.7,
      price: "17,500",
      duration: "5 Days 4 Nights",
      detailPath: "/agra-honeymoon-package",
    },
  ];

  const seoData = {
    title: "Honeymoon Packages from Chennai",
    keywords:
      "honeymoon packages from chennai, honeymoon tour packages, honeymoon packages, international honeymoon packages, domestic honeymoon packages",
    description:
      "Our customized Honeymoon packages from Chennai should be on your bucket list if you are planning to celebrate a grand yet dreamy honeymoon.",
    schema: {
      "@context": "https://schema.org/",
      "@type": "WebSite",
      name: "Capstone Holidays",
      url: "https://www.capstoneholidays.in/honeymoon-packages-from-chennai/",
      potentialAction: {
        "@type": "SearchAction",
        target:
          "https://www.capstoneholidays.in/honeymoon-packages-from-chennai/{search_term_string}",
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
      <Contentbg heading={"Honeymoon Tour Packages"} backgroundImage={bg1} />

      <section className="space">
        <div className="container">
          <div className="row">
            {tours.map((tour, index) => (
              <div className="col-xxl-4 col-lg-4 col-md-6 mb-4" key={index}>
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
