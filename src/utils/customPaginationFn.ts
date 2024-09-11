/* eslint-disable @typescript-eslint/no-explicit-any */
import { PaginationProps } from "antd";

const customPaginationFn = (setParams: any) => {
  const handlePagination: PaginationProps["onChange"] = (
    pageNumber,
    pageSize
  ) => {
    setParams((prevParams: any) => {
      const updatedParams = [...prevParams];

      // Check if the 'page' param exists
      const pageIndex = updatedParams.findIndex(
        (param) => param?.name === "page"
      );

      if (pageIndex >= 0) {
        // Update existing 'page' param
        updatedParams[pageIndex] = { name: "page", value: pageNumber };
      } else {
        // Add new 'page' param
        updatedParams.push({ name: "page", value: pageNumber });
      }

      // Ensure the 'limit' param is also correctly set
      const limitIndex = updatedParams.findIndex(
        (param) => param?.name === "limit"
      );
      if (limitIndex >= 0) {
        updatedParams[limitIndex] = { name: "limit", value: pageSize };
      } else {
        updatedParams.push({ name: "limit", value: pageSize });
      }

      return updatedParams;
    });
  };
  return handlePagination;
};

export default customPaginationFn;
