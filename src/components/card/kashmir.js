import React from "react";
import TourItem from "../../components/tourcard";
import bali from "../../img/tour/12.jpg";
import bali2 from "../../img/tour/34.jpg";

const TourList = () => {
  const tours = [
    {
      id: 1,
      imgSrc: bali,
      title: "Kashmir Tour Packages from Chennai",
      // rating: 4.8,
      price: "14,450",
      duration: "7 Days 6 Nights",
      detailPath: '/tour/kashmir-tour-packages-from-chennai',
    },
    {
      id: 2,
      imgSrc: bali2,
      title: "Srinagar Gulmarg Pahalgam Tour Packages",
      // rating: 4.8,
      price: "11,305",
      duration: "5 Days, 4 Nights",
      detailPath: '/tour/srinagar-tour-packages',
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
