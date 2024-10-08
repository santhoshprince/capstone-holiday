import React from "react";

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const handlePageClick = (pageNumber) => {
    onPageChange(pageNumber);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  // Generate an array of page numbers from 1 to totalPages
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="th-pagination">
      <ul>
        {currentPage > 1 && (
          <li>
            <a href="#" onClick={handlePreviousPage}>
              Prev
            </a>
          </li>
        )}
        {pageNumbers.map((pageNumber) => (
          <li key={pageNumber}>
            <a
              href="#"
              className={currentPage === pageNumber ? "active" : ""}
              onClick={() => handlePageClick(pageNumber)}
            >
              {pageNumber}
            </a>
          </li>
        ))}
        {currentPage < totalPages && (
          <li>
            <a href="#" onClick={handleNextPage}>
              Next
              <img src="assets/img/icon/arrow-right4.svg" alt="" />
            </a>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Pagination;
