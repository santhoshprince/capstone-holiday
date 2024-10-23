import React from "react";
import TourItem from "../../components/tourcard";
import bali from "../../img/kerala/11.jpg";
import bali2 from "../../img/kerala/16.jpg";

const TourList = () => {
  const tours = [
    {
      imgSrc: bali,
      title: "Kerala Tour Packages",
      // rating: 4.8,
      price: "10,370",
      duration: "4 Days 3 Nights",
      detailPath: '/tour/kerala-tour-packages-from-chennai',
    },
    {
      imgSrc: bali2,
      title: "Cochin Munnar Tour Package",
      // rating: 4.8,
      price: "6,970",
      duration: "4 Days, 3 Nights",
      detailPath: '/tour/munnar-tour-package',
    },
  ];

  return (
    <div className="row gy-24 gx-24">
      {tours.map((tour, index) => (
        <TourItem key={index} {...tour} />
      ))}
    </div>
  );
};

export default TourList;
