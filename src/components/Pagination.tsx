import React from "react";
interface PaginationProps {
  currentPage: number;
  totalPage: number;
  handlePreviousPage: () => void;
  handleNextPage: () => void;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPage,
  onPageChange,
  handleNextPage,
  handlePreviousPage,
}) => {
  const LIMIT = 10;
  const startPage = Math.max(1, currentPage - Math.floor(LIMIT / 2));
  const endPage = Math.min(startPage + LIMIT - 1, totalPage);
  const pageArray = Array(Math.max(0, endPage - startPage + 1))
    .fill(0)
    .map((_, index) => startPage + index);

  const displayedPageArray = pageArray.slice(0, LIMIT);

  return (
    <div className="join flex justify-center">
      {currentPage > 1 && (
        <button className="join-item btn" onClick={handlePreviousPage}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-3 h-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </button>
      )}

      {displayedPageArray.map((p: number) => (
        <button
          key={p}
          onClick={() => onPageChange(p)}
          className={`join-item btn ${currentPage === p ? "btn-active" : ""}`}
        >
          {p}
        </button>
      ))}

      {currentPage < totalPage && (
        <button className="join-item btn" onClick={handleNextPage}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-3 h-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default Pagination;
