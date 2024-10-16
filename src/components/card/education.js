import React from "react";
import TourItem from "../../components/tourcard";
import bali from "../../img/almaty/kids-5426102_1920.jpg";
import bali2 from "../../img/paris/eiffel-tower-975004_1920.jpg";

const TourList = () => {
  const tours = [
    {
      id: 1,
      imgSrc: bali,
      title: "ALMATY TOUR",
      rating: 4.8,
      price: "9,435",
      duration: "4 Days 5 Nights",
      detailPath: '/almaty-tour-package-from-india',
    },
    
    {
      id: 2,
      imgSrc: bali2,
      title: "Paris and Swiss Package",
      rating: 4.8,
      price: "5,80,000",
      duration: "8 Nights, 9 Days",
      detailPath: '/paris-switzerland-tour-package-from-india',
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
