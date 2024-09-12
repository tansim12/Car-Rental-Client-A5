import { useEffect, useState } from "react";

import { TQueryParams } from "../../../Types/car.types";
import CustomPagination from "../../../components/ui/Pagination/CustomPagination";
import {
  Button,
  Drawer,
  Input,
  Space,
  Table,
  TableColumnsType,
  TableProps,
  Tag,
} from "antd";
import { EditOutlined } from "@ant-design/icons";

import customPaginationFn from "../../../utils/customPaginationFn";
import moment from "moment";
import { useGetAllUserQuery } from "../../../Redux/Feature/Admin/userManagement";
import { TUser } from "../../../Types/user.type";
import UserUpdateForm from "./UserUpdateForm";

export type TTableData = Partial<TUser>;
const AllUsers = () => {
  const [params, setParams] = useState<TQueryParams[]>([]);
  const { data, isFetching: allBookingLoading } = useGetAllUserQuery([
    { name: "sort", value: "-createdAt" },
    ...params,
  ]);
  const tableData: TTableData[] = data?.data?.result?.map((u: TTableData) => ({
    key: u?._id,
    _id: u?._id,
    isDelete: u?.isDelete,
    passwordChangeAt: u?.passwordChangeAt,
    status: u?.status,
    phone: u?.phone,
    role: u?.role,
    email: u?.email,
    name: u?.name,
    createdAt: moment(u?.createdAt).format("YYYY-MM-DD"),
  }));

  const [isFixed, setIsFixed] = useState(true); // State to handle fixed column

  // Function to handle window resize and update the fixed state
  const handleResize = () => {
    setIsFixed(window.innerWidth >= 768); // Set to true if the window width is >= 768px (adjust as needed)
  };

  useEffect(() => {
    // Set initial fixed value
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [selectedUserData, setSelectedUserData] = useState<object | null>({});
  const [drawerVisible, setDrawerVisible] = useState(false);

  const handleEdit = (userData: object) => {
    setSelectedUserData(userData);
    setDrawerVisible(true);
  };

  const handleCloseDrawer = () => {
    setDrawerVisible(false);
  };

  const columns: TableColumnsType<TTableData> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: 100,
      fixed: isFixed ? "left" : undefined, // Conditionally apply fixed based on screen size
      render: (name: string) => <span>{name?.slice(0, 10)}</span>,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      width: 120,
      fixed: isFixed ? "left" : undefined, // Conditionally apply fixed
      render: (name) => {
        return <span>{name?.slice(0, 25)}</span>;
      },
    },
    {
      title: "Create",
      dataIndex: "createdAt",
      key: "createdAt",
      width: 120,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      width: 80,
      render: (status: string) => {
        return <Tag color={status === "block" ? "red" : "green"}>{status}</Tag>;
      },
    },

    {
      title: "Delete",
      dataIndex: "isDelete",
      key: "isDelete",
      width: 80,
      render: (isDelete: boolean) => {
        return (
          <Tag color={isDelete ? "red" : "green"}>
            {isDelete ? "Deleted" : "Active"}
          </Tag>
        );
      },
    },

    {
      title: "PasswordChangeAt",
      dataIndex: "passwordChangeAt",
      key: "passwordChangeAt",
      width: 120,
    },

    {
      title: "Phone",
      dataIndex: "phone",
      key: "Phone",
      width: 120,
    },

    {
      title: "Role",
      dataIndex: "role",
      key: "role",
      width: 120,
      render: (role) => {
        return <Tag color={role === "user" ? "blue" : "green"}>{role}</Tag>;
      },
    },

    {
      title: "Actions",
      key: "actions",
      fixed: "right",
      width: 40,
      render: (_, record) => {
        return (
          <Space size="middle">
            {/* edit button  */}
            <Button
              size="small"
              type="link"
              icon={<EditOutlined />}
              onClick={() =>
                handleEdit({
                  ...record,
                })
              }
            ></Button>
          </Space>
        );
      },
    },
  ];

  const onChange: TableProps<TTableData>["onChange"] = (
    _pagination,
    filters,
    _sorter,
    extra
  ) => {
    if (extra.action === "filter") {
      const queryParams: TQueryParams[] = [];

      filters.name?.forEach((item) =>
        queryParams.push({ name: "name", value: item })
      );
      //   setParams(queryParams);
    }
  };

  // Handle filtering by rental price or search
  const handleSearch = (value: string) => {
    console.log(value);
    setParams([{ name: "searchTerm", value: value }, ...params]);
  };

  const handlePagination = customPaginationFn(setParams);

  return (
    <div>
      <div>
        <Space style={{ marginBottom: 16 }}>
          <Input.Search
            placeholder="Search by car name, brand, or rental price"
            onSearch={handleSearch}
            onChange={(e) => handleSearch(e.target.value)}
            style={{ width: 300 }}
          />
        </Space>
        <Table
          columns={columns}
          loading={allBookingLoading}
          dataSource={tableData}
          scroll={{ x: 1600 }}
          pagination={false}
          onChange={onChange}
          bordered
        />
      </div>

      {selectedUserData && (
        <Drawer
          title="Edit Booking"
          placement="left"
          closable={true}
          onClose={handleCloseDrawer}
          width={290}
          visible={drawerVisible}
        >
          <div>
            <UserUpdateForm userData={selectedUserData} />
          </div>
        </Drawer>
      )}

      <div className="flex justify-center items-center gap-5 my-20">
        <CustomPagination
          handlePagination={handlePagination}
          total={data?.data?.meta?.total}
          isCustomPagination={false}
        />
      </div>
    </div>
  );
};

export default AllUsers;
