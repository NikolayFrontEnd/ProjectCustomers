import { useState } from "react";

export const usePagination = (totalItems: number, initialPageSize = 10) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(initialPageSize);
  const totalPages = Math.ceil(totalItems / pageSize);

  const goFirst = () => setCurrentPage(0);
  const goLast = () => setCurrentPage(totalPages - 1);
  const goNext = () => setCurrentPage(prev => Math.min(prev + 1, totalPages - 1));
  const goPrev = () => setCurrentPage(prev => Math.max(prev - 1, 0));

  return { currentPage, pageSize, totalPages, setPageSize, goFirst, goLast, goNext, goPrev };
};