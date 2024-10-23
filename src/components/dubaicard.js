import React from "react";
import TourItem from "../components/tourcard";
import maldives from "../img/tour/d2.jpg";
import bali2 from "../img/tour/tour_4_2.jpg";

const TourList = () => {
  const tours = [
    {
      id: 1,
      imgSrc: maldives,
      title: "Dubai Tour Packages",
      rating: 4.7,
      price: "43,350",
      duration: "4 Nights, 5 Days",
      detailPath: '/tour/dubai-tour-packages-from-chennai',
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
