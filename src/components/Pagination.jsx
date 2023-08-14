const Pagination = ({ index, currentPage, handlePageChange }) => {
  return (
    <>
      <button
        key={index}
        onClick={() => handlePageChange(index + 1)}
        className={
          currentPage === index + 1
            ? "activePage pagination-button"
            : "pagination-button"
        }
      >
        {index + 1}
      </button>
    </>
  );
};
export default Pagination;
