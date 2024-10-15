import React from "react";
import TourItem from "../../components/tourcard";
// import maldives from "../img/tour/2151682910.jpg";
import maldives from "../../img/singapore/s13.jpg"

const TourList = () => {
  const tours = [
    {
      id: 1,
      imgSrc: maldives,
      title: "Singapore and Malaysia Tour Packages",
      rating: 4.7,
      price: "38,250",
      duration: "4 Nights, 5 Days",
      detailPath: '/tour/singapore-and-malaysia-tour-packages',
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
