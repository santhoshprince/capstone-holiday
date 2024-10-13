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
      title: "Kerala Group Tour package",
      rating: 4.7,
      price: "7,225",
      duration: "5 Days 4 Nights",
      detailPath: "/tour-destination/kerala-group-tour",
    },
    {
      imgSrc: bali2,
      title: "Andaman Group Tour Packages",
      rating: 4.7,
      price: "8,925",
      duration: "5 Days 4 Nights",
      detailPath: "/tour/andaman-group-tour-packages",
    },
    {
      imgSrc: maldives,
      title: "Bali Group Tour Package",
      rating: 4.7,
      price: "6,800",
      duration: "3 Days 2 Nights",
      detailPath: "/tour/bali-group-tour-package",
    },
    {
      imgSrc: maldives,
      title: "Shimla Manali Group Tour",
      rating: 4.7,
      price: "9,350",
      duration: "5 Nights, 6 Days",
      detailPath: "/tour/dubai-tour-packages-from-chennai",
    },
    {
      imgSrc: maldives,
      title: "Sri Lanka Group Tour Package – 4N/5D",
      rating: 4.7,
      price: "21,250",
      duration: "4 Nights, 5 Days",
      detailPath: "/tour/sri-lanka-group-tour-package/",
    },
    {
      imgSrc: maldives,
      title: "Singapore Malaysia Group Tour – 4N / 5D",
      rating: 4.7,
      price: "34,000",
      duration: "4 Nights, 5 Days",
      detailPath: '/tour-destination/singapore-malaysia-tour',
    },
    {
      imgSrc: maldives,
      title: "Thailand Group Tour Package – 4N / 5D",
      rating: 4.7,
      price: "14,025",
      duration: "4 Nights, 5 Days",
      detailPath: '/tour/thailand-group-tour-package',
    },
    {
      imgSrc: maldives,
      title: "Vietnam Group Tour Packages – 3N / 4D",
      rating: 4.7,
      price: "17,000",
      duration: "3 Nights, 4 Days",
      detailPath: '/tour/vietnam-group-tour-packages',
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
      <Contentbg heading={"Group Tour Packages"} />

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
