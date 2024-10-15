import React from "react";
import TourItem from "../../components/tourcard";
import bali from "../../img/Himachal/9.jpg";
import bali2 from "../../img/Himachal/10.jpg";

const TourList = () => {
  const tours = [
    {
      id: 1,
      imgSrc: bali,
      title: "Himachal – Shimla Manali Tour Package from Chennai",
      // rating: 4.8,
      price: "10,540",
      duration: "6 Days 5 Nights",
      detailPath: '/tour/shimla-manali-tour-package-from-chennai',
    },
    {
      id: 2,
      imgSrc: bali2,
      title: "Himachal Tour Package",
      // rating: 4.8,
      price: "7,735",
      duration: "6 Days, 5 Nights",
      detailPath: '/tour/himachal-tour-package',
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
