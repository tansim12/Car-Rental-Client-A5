/* eslint-disable @typescript-eslint/no-explicit-any */

import { Pagination } from "antd";
import "./customPagination.css"; // Import the custom CSS

type TCustomPaginationProps = {
  limit: number;
  total: number;
  handlePagination: any;
};

const CustomPagination = ({
  limit,
  total,
  handlePagination,
}: TCustomPaginationProps) => {
  return (
    <div className="custom-pagination">
      <Pagination
        responsive={true}
        showQuickJumper
        defaultCurrent={1}
        pageSize={limit}
        total={total}
        onChange={handlePagination}
      />
    </div>
  );
};

export default CustomPagination;
