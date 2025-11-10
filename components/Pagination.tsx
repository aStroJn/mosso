import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange, className = '' }) => {
  if (totalPages <= 1) return null;

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  // Logic to create page numbers with ellipses for large number of pages
  const getPageNumbers = () => {
    const pageNumbers: (number | string)[] = [];
    if (totalPages <= 7) { // Show all pages if 7 or less
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      pageNumbers.push(1);
      if (currentPage > 3) {
        pageNumbers.push('...');
      }
      
      let startPage = Math.max(2, currentPage - 1);
      let endPage = Math.min(totalPages - 1, currentPage + 1);

      if (currentPage <= 3) {
        startPage = 2;
        endPage = 4;
      }

      if (currentPage >= totalPages - 2) {
        startPage = totalPages - 3;
        endPage = totalPages - 1;
      }
      
      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }
      
      if (currentPage < totalPages - 2) {
        pageNumbers.push('...');
      }
      pageNumbers.push(totalPages);
    }
    return pageNumbers;
  };

  const pageNumbers = getPageNumbers();

  return (
    <nav className={`flex items-center justify-center gap-2 mt-12 ${className}`} aria-label="Pagination">
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-border-light dark:border-border-dark bg-secondary-background-light dark:bg-secondary-background-dark text-text-secondary-light dark:text-text-secondary-dark transition-colors hover:bg-primary/10 disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Go to previous page"
      >
        <span className="material-symbols-outlined">chevron_left</span>
      </button>

      {pageNumbers.map((page, index) =>
        typeof page === 'number' ? (
          <button
            key={`page-${page}`}
            onClick={() => onPageChange(page)}
            className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-medium transition-colors ${
              currentPage === page
                ? 'bg-primary text-white shadow'
                : 'bg-secondary-background-light dark:bg-secondary-background-dark text-text-secondary-light dark:text-text-secondary-dark hover:bg-primary/10'
            }`}
            aria-current={currentPage === page ? 'page' : undefined}
            aria-label={`Go to page ${page}`}
          >
            {page}
          </button>
        ) : (
          <span key={`ellipsis-${index}`} className="flex h-10 w-10 items-center justify-center text-text-secondary-light dark:text-text-secondary-dark">
            {page}
          </span>
        )
      )}

      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-border-light dark:border-border-dark bg-secondary-background-light dark:bg-secondary-background-dark text-text-secondary-light dark:text-text-secondary-dark transition-colors hover:bg-primary/10 disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Go to next page"
      >
        <span className="material-symbols-outlined">chevron_right</span>
      </button>
    </nav>
  );
};

export default Pagination;
