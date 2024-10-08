import React from "react";
import TourItem from "../../components/tourcard";
import bali from "../../img/tour/12.jpg";
import bali2 from "../../img/tour/34.jpg";

const TourList = () => {
  const tours = [
    {
      id: 1,
      imgSrc: bali,
      title: "Goa Tour Package from Chennai",
      // rating: 4.8,
      price: "12,325",
      duration: "4 Days 3 Nights",
      detailPath: '/tour/goa-tour-package-from-chennai',
    },
    {
      id: 2,
      imgSrc: bali2,
      title: "Goa Travel packages",
      // rating: 4.8,
      price: "8,245",
      duration: "3 Days, 2 Nights",
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
