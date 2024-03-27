import { useState } from "react";

const useClientPaginator = ({
  data,
  perPage = 3,
}: {
  data: any[];
  perPage?: number;
}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const startIndex = (currentPage - 1) * perPage;
  const endIndex = startIndex + perPage;

  const totalPages = Math.ceil(data.length / perPage);

  const pagedData = data.slice(startIndex, endIndex);

  const isGreaterThanDataLength = currentPage >= totalPages;
  const isLessThanFirstPage = currentPage <= 1;

  const handleNext = () => {
    if (currentPage >= totalPages) return;
    else setCurrentPage((prev) => prev + 1);
  };

  const handlePrevious = () => {
    if (currentPage <= 1) return;
    else setCurrentPage((prev) => prev - 1);
  };

  return {
    pagedData,
    handleNext,
    handlePrevious,
    isGreaterThanDataLength,
    isLessThanFirstPage,
  };
};

export default useClientPaginator;
