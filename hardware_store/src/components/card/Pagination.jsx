import React from "react";

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  return (
    <div className="flex justify-center mt-4">
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          onClick={() => onPageChange(index + 1)}
          className={`mx-1 px-3 py-1 border rounded cursor-pointer ${
            currentPage === index + 1 ? "bg-gray-500 text-white" : "bg-white"
          }`}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
