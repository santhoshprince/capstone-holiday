import React from "react";
import TourItem from "../../components/tourcard";
// import maldives from "../img/tour/2151682910.jpg";
import maldives from "../../img/mauritius/1356.jpg"

const TourList = () => {
  const tours = [
    {
      id: 1,
      imgSrc: maldives,
      title: "Mauritius Tour Package from Chennai",
      rating: 4.7,
      price: "135,320",
      duration: "4 Nights, 5 Days",
      detailPath: '/tour/mauritius-tour-package-from-chennai',
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
