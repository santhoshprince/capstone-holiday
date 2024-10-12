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
      title: "Andaman Honeymoon Tour",
      rating: 4.7,
      price: "19,900",
      duration: "5 Days 4 Nights",
      detailPath: "tour/anadaman-honeymoon-tour-packages",
    },
    {
      imgSrc: bali2,
      title: "Bali Honeymoon Tour",
      rating: 4.7,
      price: "21,000",
      duration: "5 Days 4 Nights",
      detailPath: "tour/bali-honeymoon-tour-packages",
    },
    {
      imgSrc: maldives,
      title: "Kashmir Honeymoon Tour",
      rating: 4.7,
      price: "20,500",
      duration: "5 Days 4 Nights",
      detailPath: "/tour/greece-europe-tour-package",
    },
    {
      imgSrc: maldives,
      title: "Kerala Honeymoon Tour",
      rating: 4.7,
      price: "19,000",
      duration: "5 Days 4 Nights",
      detailPath: "tour/kerala-honeymoon-tour-packages",
    },
    {
      imgSrc: maldives,
      title: "Rajasthan Honeymoon Tour",
      rating: 4.7,
      price: "17,500",
      duration: "5 Days 4 Nights",
      detailPath: "tour/rajasthan-honeymoon-tour-packages",
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
      <Contentbg heading={"Honeymoon Tour Packages"} />

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
