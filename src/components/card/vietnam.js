import React from "react";
import TourItem from "../../components/tourcard";
// import maldives from "../img/tour/2151682910.jpg";
import maldives from "../../img/tour/2151682910.jpg"

const TourList = () => {
  const tours = [
    {
      id: 1,
      imgSrc: maldives,
      title: "Vietnam Cambodia Tour Package – 3N / 4D",
      rating: 4.7,
      price: "20,400",
      duration: "3 Nights, 4 Days",
      detailPath: '/tour/vietnam-cambodia-tour-package',
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
