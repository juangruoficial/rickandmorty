import "./styles/ResidentList.css";
import React, { useEffect, useState } from "react";
import ResidentCard from "./ResidentCard";
import Pagination from "./Pagination";

const ResidentList = ({ residents }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const RESIDENTSPERPAGE = 20;

  useEffect(() => {
    setTotalPages(Math.ceil(residents.length / RESIDENTSPERPAGE));
    setCurrentPage(1);
  }, [residents]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const startIndex = (currentPage - 1) * RESIDENTSPERPAGE;
  const endIndex = startIndex + RESIDENTSPERPAGE;

  const currentResidents = residents.slice(startIndex, endIndex);

  return (
    <>
      <section className="residents-list">
        {currentResidents.map((resident, index) => (
          <ResidentCard key={resident} residentUrl={resident} index={index} />
        ))}
      </section>
      <section className="pagination">
        <button
          className="pagination-button"
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <Pagination
            key={index}
            index={index}
            currentPage={currentPage}
            handlePageChange={handlePageChange}
          />
        ))}
        <button
          className="pagination-button"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </section>
    </>
  );
};

export default ResidentList;
