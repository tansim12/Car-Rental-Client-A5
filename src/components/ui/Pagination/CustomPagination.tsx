/* eslint-disable @typescript-eslint/no-explicit-any */

import { Pagination } from "antd";
import "./customPagination.css"; // Import the custom CSS

type TCustomPaginationProps = {
  total: number;
  handlePagination: any;
  isCustomPagination?: boolean;
  limit?:number
};

const CustomPagination = ({
  total,
  handlePagination,
  isCustomPagination=true,
  limit
}: TCustomPaginationProps) => {
  return (
    <div className={`${isCustomPagination ? "custom-pagination": ""}`}>
      <Pagination
        responsive={true}
        showQuickJumper
        defaultCurrent={1}
        total={total}
        onChange={handlePagination}
        pageSize={limit && limit}
      />
    </div>
  );
};

export default CustomPagination;
