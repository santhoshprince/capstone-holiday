import React, { useState } from "react";
import TotalCard from "../../components/totalcard"; // Ensure the import path is correct
import bali from "../../img/tour/12.jpg";
import bali2 from "../../img/tour/34.jpg";
import maldives from "../../img/tour/2151682910.jpg";
import Contentbg from "../../components/contentbg";
import Sidebar from "../../components/sidebar";
import Pagination from "../../components/blogpagination"; // Your Pagination component

const TourList = () => {
  // The array of tour items
  const tours = [
    {
      imgSrc: bali,
      title: "Andaman Tour Package from Chennai",
      // rating: 4.8,
      price: "9,435",
      duration: "4 Days 5 Nights",
      detailPath: '/tour/andaman-tour-package-from-chennai',
    },
    {
      imgSrc: bali2,
      title: "Andaman and Nicobar Islands Package",
      // rating: 4.8,
      price: "8,245",
      duration: "3 Nights, 4 Days",
      detailPath: '/tour/andaman-and-nicobar-islands-package',
    },
    {
      imgSrc: bali,
      title: "Goa Tour Package from Chennai",
      // rating: 4.8,
      price: "12,325",
      duration: "4 Days 3 Nights",
      detailPath: '/tour/goa-tour-package-from-chennai',
    },
    {
      imgSrc: bali2,
      title: "Goa Travel packages",
      // rating: 4.8,
      price: "8,245",
      duration: "3 Days, 2 Nights",
      detailPath: '/tour/goa-travel-packages',
    },
    {
      imgSrc: bali,
      title: "Himachal – Shimla Manali Tour Package from Chennai",
      // rating: 4.8,
      price: "10,540",
      duration: "6 Days 5 Nights",
      detailPath: '/tour/shimla-manali-tour-package-from-chennai',
    },
    {
      imgSrc: bali2,
      title: "Himachal Tour Package",
      // rating: 4.8,
      price: "7,735",
      duration: "6 Days, 5 Nights",
      detailPath: '/tour/himachal-tour-package',
    },
    {
      imgSrc: bali,
      title: "Kerala Tour Packages from Chennai",
      // rating: 4.8,
      price: "10,370",
      duration: "4 Days 3 Nights",
      detailPath: '/tour/kerala-tour-packages-from-chennai',
    },
    {
      imgSrc: bali2,
      title: "Cochin Munnar Tour Package",
      // rating: 4.8,
      price: "6,970",
      duration: "4 Days, 3 Nights",
      detailPath: '/tour/munnar-tour-package',
    },
    {
      imgSrc: bali,
      title: "Kashmir Tour Packages from Chennai",
      // rating: 4.8,
      price: "14,450",
      duration: "7 Days 6 Nights",
      detailPath: '/tour/kashmir-tour-packages-from-chennai',
    },
    {
      imgSrc: bali2,
      title: "Srinagar Gulmarg Pahalgam Tour Packages",
      // rating: 4.8,
      price: "11,305",
      duration: "5 Days, 4 Nights",
      detailPath: '/tour/srinagar-tour-packages',
    },
    {
      imgSrc: bali,
      title: "Delhi Agra Jaipur Tour Package",
      // rating: 4.8,
      price: "14,450",
      duration: "5 Days 4 Nights",
      detailPath: '/tour/delhi-agra-jaipur-tour-package',
    },
    {
      imgSrc: bali2,
      title: "Rajasthan Trip package",
      // rating: 4.8,
      price: "8,075",
      duration: "4 Days, 3 Nights",
      detailPath: '/tour/rajasthan-trip-package',
    },
    {
      imgSrc: bali,
      title: "Darjeeling Gangtok Tour Packages",
      // rating: 4.8,
      price: "25,800",
      duration: "5 Days 4 Nights",
      detailPath: '/tour/darjeeling-gangtok-tour-packages',
    },
    {
      imgSrc: bali2,
      title: "Sikkim Travel Packages",
      // rating: 4.8,
      price: "24,200",
      duration: "4 Days, 3 Nights",
      detailPath: '/tour/sikkim-travel-packages',
    },
  ];

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2; // Number of items to show per page

  // Calculate total pages
  const totalPages = Math.ceil(tours.length / itemsPerPage);

  // Get current page items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentTours = tours.slice(indexOfFirstItem, indexOfLastItem);

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Contentbg heading={"Domestic Tour Packages"} />

      <section className="space">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-lg-7">
              {currentTours.map((tour, index) => (
                <TotalCard key={index} {...tour} />
              ))}
              {/* Pagination component */}
              <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                onPageChange={handlePageChange}
              />
            </div>
            <div className="col-xxl-4 col-lg-5">
              <Sidebar />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TourList;
