import React from "react";
import TourItem from "../../components/tourcard";
import bali from "../../img/goa/3.jpg";
import bali2 from "../../img/goa/5.jpg";

const TourList = () => {
  const tours = [
    {
      imgSrc: bali,
      title: "Goa Tour Package",
      // rating: 4.8,
      price: "12,325",
      duration: "4 Days 3 Nights",
      detailPath: '/tour/goa-tour-package-from-chennai',
    },
    {
      imgSrc: bali2,
      title: "Goa Travel packages",
      // rating: 4.8,
      price: "8,245",
      duration: "3 Days, 2 Nights",
      detailPath: '/tour/goa-travel-packages',
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
