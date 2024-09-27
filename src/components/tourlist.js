import React from "react";
import TourItem from "../components/tourcard";
import bali from "../img/tour/tour_4_1.jpg";
import bali2 from "../img/tour/tour_4_2.jpg";

const TourList = () => {
  const tours = [
    {
      id: 1,
      imgSrc: bali,
      title: "Bali Tour Packages from Chennai",
      rating: 4.8,
      price: "20,825",
      duration: "6 Days 5 Nights",
      detailLink: "tour-details.html",
    },
    {
      id: 2,
      imgSrc: bali2,
      title: "Bali Trip with Capstone Holidays",
      rating: 4.8,
      price: "19,635",
      duration: "6 Days 5 Nights",
      detailLink: "tour-details.html",
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
