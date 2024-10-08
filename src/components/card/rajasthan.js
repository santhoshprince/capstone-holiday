import React from "react";
import TourItem from "../../components/tourcard";
import bali from "../../img/tour/12.jpg";
import bali2 from "../../img/tour/34.jpg";

const TourList = () => {
  const tours = [
    {
      id: 1,
      imgSrc: bali,
      title: "Delhi Agra Jaipur Tour Package",
      // rating: 4.8,
      price: "14,450",
      duration: "5 Days 4 Nights",
      detailPath: '/tour/delhi-agra-jaipur-tour-package',
    },
    {
      id: 2,
      imgSrc: bali2,
      title: "Rajasthan Trip package",
      // rating: 4.8,
      price: "8,075",
      duration: "4 Days, 3 Nights",
      detailPath: '/tour/rajasthan-trip-package',
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
