import React from "react";
import TourItem from "../../components/tourcard";
import bali from "../../img/andaman/1.jpg";
import bali2 from "../../img/andaman/2.jpg";

const TourList = () => {
  const tours = [
    {
      id: 1,
      imgSrc: bali,
      title: "Andaman Tour Package from Chennai",
      // rating: 4.8,
      price: "9,435",
      duration: "4 Days 5 Nights",
      detailPath: '/tour/andaman-tour-package-from-chennai',
    },
    {
      id: 2,
      imgSrc: bali2,
      title: "Andaman and Nicobar Islands Package",
      // rating: 4.8,
      price: "8,245",
      duration: "3 Nights, 4 Days",
      detailPath: '/tour/andaman-and-nicobar-islands-package',
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
