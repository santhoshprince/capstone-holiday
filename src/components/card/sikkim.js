import React from "react";
import TourItem from "../../components/tourcard";
import bali from "../../img/tour/12.jpg";
import bali2 from "../../img/tour/34.jpg";

const TourList = () => {
  const tours = [
    {
      id: 1,
      imgSrc: bali,
      title: "Darjeeling Gangtok Tour Packages",
      // rating: 4.8,
      price: "25,800",
      duration: "5 Days 4 Nights",
      detailPath: '/tour/darjeeling-gangtok-tour-packages',
    },
    {
      id: 2,
      imgSrc: bali2,
      title: "Sikkim Travel Packages",
      // rating: 4.8,
      price: "24,200",
      duration: "4 Days, 3 Nights",
      detailPath: '/tour/sikkim-travel-packages',
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
