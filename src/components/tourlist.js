import React from "react";
import TourItem from "../components/tourcard";
import bali from "../img/tour/12.jpg";
import bali2 from "../img/tour/34.jpg";

const TourList = () => {
  const tours = [
    {
      id: 1,
      imgSrc: bali,
      title: "Bali Tour Packages from Chennai",
      // rating: 4.8,
      price: "20,825",
      duration: "6 Days 5 Nights",
      detailPath: '/tour/bali-tour-packages-from-chennai',
    },
    {
      id: 2,
      imgSrc: bali2,
      title: "Bali Tourist Places",
      // rating: 4.8,
      price: "₹ 6,800",
      duration: "3 Days 2 Nights (BALI)",
      detailPath: '/tour/bali-tour-places',
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
