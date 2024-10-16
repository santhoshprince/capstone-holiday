import React from "react";
import TotalCard from "../../components/totalcard"; // Ensure the import path is correct
import bali from "../../img/kerala/17.jpg";
import bali2 from "../../img/andaman/6.jpg";
import maldives from "../../img/tour/11021.jpg";
import manali from "../../img/kashmir/7.jpg";
import srilanka from "../../img/srilanka/3.jpg";
import singapore from "../../img/singapore/s1.jpg";
import thailand from "../../img/Thailand/779.jpg";
import vietnam from "../../img/vietnam/12.jpg";
import Contentbg from "../../components/contentbg";
import bg1 from "../../img/bg/hero_bg_7_1.jpg";
import { Helmet } from 'react-helmet';

const TourList = () => {
  // The array of tour items
  const tours = [
    {
      imgSrc: bali,
      title: "Kerala Group Tour package",
      rating: 4.7,
      price: "7,225",
      duration: "5 Days 4 Nights",
      detailPath: "/tour/kerala-group-tour-package",
    },
    {
      imgSrc: bali2,
      title: "Andaman Group Tour Packages",
      rating: 4.7,
      price: "8,925",
      duration: "5 Days 4 Nights",
      detailPath: "/tour/andaman-group-tour-packages",
    },
    {
      imgSrc: maldives,
      title: "Bali Group Tour Package",
      rating: 4.7,
      price: "6,800",
      duration: "3 Days 2 Nights",
      detailPath: "/tour/bali-group-tour-package",
    },
    {
      imgSrc: manali,
      title: "Shimla Manali Group Tour",
      rating: 4.7,
      price: "9,350",
      duration: "5 Nights, 6 Days",
      detailPath: "/tour/dubai-tour-packages-from-chennai",
    },
    {
      imgSrc: srilanka,
      title: "Sri Lanka Group Tour Package – 4N/5D",
      rating: 4.7,
      price: "21,250",
      duration: "4 Nights, 5 Days",
      detailPath: "/tour/sri-lanka-group-tour-package/",
    },
    {
      imgSrc: singapore,
      title: "Singapore Malaysia Group Tour – 4N / 5D",
      rating: 4.7,
      price: "34,000",
      duration: "4 Nights, 5 Days",
      detailPath: '/tour-destination/singapore-malaysia-tour',
    },
    {
      imgSrc: thailand,
      title: "Thailand Group Tour Package – 4N / 5D",
      rating: 4.7,
      price: "14,025",
      duration: "4 Nights, 5 Days",
      detailPath: '/tour/thailand-group-tour-package',
    },
    {
      imgSrc: vietnam,
      title: "Vietnam Group Tour Packages – 3N / 4D",
      rating: 4.7,
      price: "17,000",
      duration: "3 Nights, 4 Days",
      detailPath: '/tour/vietnam-group-tour-packages',
    },
  ];

  const seoData = {
    title: 'Group Tour Packages | International Group Tour Packages',
    keywords: 'group tour packages, international group tour packages, domestic group tour packages from india, international group tour, domestic group tour',
    description: 'Avail our Group Tour Packages for thrilling yet memorable domestic and international trips. Choose Capstone Holidays for customized group tours.',
    schema: {
        "@context": "https://schema.org/",
        "@type": "WebSite",
        "name": "Capstone Holidays",
        "url": "https://www.capstoneholidays.in/group-tour-packages/",
        "potentialAction": {
            "@type": "SearchAction",
            "target": "https://www.capstoneholidays.in/group-tour-packages/{search_term_string}",
            "query-input": "required name=search_term_string"
        }
    }
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
      <Contentbg heading={"Group Tour Packages"} backgroundImage={bg1} />

      <section className="space">
        <div className="container">
          <div className="row">
            {/* Map through tours and create cards */}
            {tours.map((tour, index) => (
              <div className="col-xxl-4 col-lg-4 col-md-6" key={index}>
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
