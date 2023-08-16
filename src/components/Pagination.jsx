import React from "react";

const Pagination = ({ index, currentPage, handlePageChange }) => {
  return (
    <button
      onClick={() => handlePageChange(index + 1)}
      className={
        currentPage === index + 1 || (index === 0 && currentPage === 1)
          ? "activePage pagination-button"
          : "pagination-button"
      }
    >
      {index + 1}
    </button>
  );
};

export default Pagination;
