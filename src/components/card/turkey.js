import React from "react";
import TourItem from "../../components/tourcard";
// import maldives from "../img/tour/2151682910.jpg";
import maldives from "../../img/Turkey/2220.jpg"

const TourList = () => {
  const tours = [
    {
      id: 1,
      imgSrc: maldives,
      title: "Turkey Tour Packages from India – 4N / 5D",
      rating: 4.7,
      price: "25,075",
      duration: "4 Nights, 5 Days",
      detailPath: '/tour/turkey-tour-packages-from-india',
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
