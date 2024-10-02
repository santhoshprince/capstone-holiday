import React from "react";
import TourItem from "../components/tourcard";
import maldives from "../img/tour/tour_4_1.jpg";
import bali2 from "../img/tour/tour_4_2.jpg";

const TourList = () => {
  const tours = [
    {
      id: 1,
      imgSrc: maldives,
      title: "Maldives Tour Package from Chennai",
      rating: 4.7,
      price: "96,390",
      duration: "4 Days 5 Nights",
      detailPath: '/tour/maldivestour-package-from-chennai',
    },
  ];

  return (
    <div className="row gy-24 gx-24">
      {tours.map((tour, index) => (
        <TourItem key={tour.id} {...tour} />
      ))}
    </div>
  );
};

export default TourList;
