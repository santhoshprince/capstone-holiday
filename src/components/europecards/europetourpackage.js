import React, { useState } from "react";
import TotalCard from "../../components/totalcard"; // Ensure the import path is correct
import bali from "../../img/azerbaijan/8.jpg";
import bali2 from "../../img/china/13.jpg";
import maldives from "../../img/greece/5.jpg";
import Contentbg from "../../components/contentbg";
import Sidebar from "../../components/sidebar";
import Pagination from "../../components/blogpagination"; // Your Pagination component
import bg1 from "../../img/tour/d1.jpg";

const TourList = () => {
  // The array of tour items
  const tours = [
    {
      imgSrc: bali,
      title: "Azerbaijan Europe Tour",
      rating: 4.7,
      price: "7,225",
      duration: "10 Days 9 Nights",
      detailPath: "/tour-destination/azerbaijan-europe-tour",
    },
    {
      imgSrc: bali2,
      title: "China Europe Tour",
      rating: 4.7,
      price: "8,925",
      duration: "9 Days 8 Nights",
      detailPath: "tour/china-europe-tour-package",
    },
    {
      imgSrc: maldives,
      title: "Greece Europe Tour",
      rating: 4.7,
      price: "6,800",
      duration: "9 Days 8 Nights",
      detailPath: "/tour/greece-europe-tour-package",
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
      <Contentbg heading={"Europe Tour Packages"} backgroundImage={bg1} />

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
