import React, { useState } from "react";
import { Table, Button, Input, Space, Tag, Modal, message } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import type { TableColumnsType, TableProps } from "antd";
import moment from "moment";
import { TCar, TQueryParams } from "../../../Types/car.types";
import {
  useGetAllCarsByAdminQuery,
  useUpdateCarMutation,
} from "../../../Redux/Feature/Admin/carManagement.api";
import CustomPagination from "../../../components/ui/Pagination/CustomPagination";
import customPaginationFn from "../../../utils/customPaginationFn";
import { handleApiError } from "../../../utils/handleApiError";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export type TTableData = Partial<TCar>;

const ViewCars: React.FC = () => {
  const navigate = useNavigate();
  const [params, setParams] = useState<TQueryParams[]>([]);
  const { data: allCarData, isFetching: carDataLoading } =
    useGetAllCarsByAdminQuery([
      { name: "sort", value: "-createdAt" },
      ...params,
    ]);
  const [updateCar] = useUpdateCarMutation();

  const tableData: TTableData[] = allCarData?.data?.result?.map(
    (car: TTableData) => ({
      key: car?._id,
      _id: car?._id,
      image: car?.images?.[0],
      isDelete: car?.isDelete,
      name: car.name,
      category: car.category,
      brand: car.brand,
      type: car.type,
      model: car.model,
      advance: car?.advance,
      VIN: car.VIN,
      licensePlate: car.licensePlate,
      rentalPricePerDay: car.rentalPricePerDay,
      availability: car.availability,
      createdAt: moment(car?.createdAt).format("YYYY-MM-DD"),
      availableAreas: car.availableAreas,
    })
  );
  const columns: TableColumnsType<TTableData> = [
    {
      title: "Car",
      dataIndex: "image",
      key: "image",
      width: 150,
      fixed: "left",
      render: (image: string) => {
        return (
          <img
            src={image}
            alt="Car"
            style={{ width: "100px", height: "auto", borderRadius: "5px" }} // Optional styling
          />
        );
      },
    },
    {
      title: "Car Name",
      dataIndex: "name",
      key: "name",
      width: 150,
      fixed: "left",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      width: 120,
    },
    {
      title: "Status",
      dataIndex: "isDelete",
      key: "isDelete",
      width: 120,
      render: (isDelete: boolean) => {
        return (
          <Tag color={isDelete ? "red" : "green"}>
            {isDelete ? "Deleted" : "Active"}
          </Tag>
        );
      },
    },
    {
      title: "Brand",
      dataIndex: "brand",
      key: "brand",
      width: 120,
    },
    {
      title: "Availability",
      dataIndex: "availability",
      key: "availability",
      width: 120,
      render: (availability) => {
        return (
          <div>
            {availability === "available" ? (
              <Tag color="green">{availability}</Tag>
            ) : (
              <Tag color="red">{availability}</Tag>
            )}
          </div>
        );
      },
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
      width: 120,
    },
    {
      title: "Model",
      dataIndex: "model",
      key: "model",
      width: 150,
    },
    {
      title: "VIN",
      dataIndex: "VIN",
      key: "VIN",
      width: 150,
    },
    {
      title: "License Plate",
      dataIndex: "licensePlate",
      key: "licensePlate",
      width: 120,
    },
    {
      title: "Price (per day)",
      dataIndex: "rentalPricePerDay",
      key: "rentalPricePerDay",
      width: 160,
    },
    {
      title: "Advance",
      dataIndex: "advance",
      key: "advance",
      width: 160,
    },

    {
      title: "Available Areas",
      dataIndex: "availableAreas",
      key: "availableAreas",
      width: 200,
      render: (areas: string[]) => areas.join(", "), // Display as comma-separated string
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      key: "createdAt",
      width: 150,
    },
    {
      title: "Actions",
      key: "actions",
      fixed: "right",
      width: 100,
      render: (_, record) => (
        <Space size="middle">
          <Button
            type="link"
            icon={<EditOutlined />}
            onClick={() => handleEdit(record?._id as string)}
          />
          <Button
            type="link"
            danger
            icon={<DeleteOutlined />}
            onClick={() => handleDelete(record?._id as string)}
          />
        </Space>
      ),
    },
  ];

  const handleEdit = (id: string) => {
    if (id) {
      navigate(`/admin/update-car/${id}`);
    }
    // Open a modal or navigate to the edit page
  };

  const handleDelete = (id: string) => {
    Modal.confirm({
      title: "Are you sure you want to delete this record?",
      content: `This action cannot be undone.`,
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk: async () => {
        const toastId = toast.loading("Deleting..");
        try {
          const payload = {
            body: {
              isDelete: true,
            },
            id,
          };
          console.log(payload);
          
          const res = await updateCar(payload).unwrap();
          if (res?.success) {
            toast.success("Car Delete Successfully done", {
              id: toastId,
              duration: 3000,
            });
          }
        } catch (error) {
          handleApiError(error, toastId);
        }
        message.success("Record deleted successfully.");
      },
    });
  };

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
    <>
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
          loading={carDataLoading}
          dataSource={tableData}
          scroll={{ x: 1400 }}
          pagination={false}
          onChange={onChange}
          bordered
        />
      </div>
      <div className="flex justify-center items-center gap-5 my-20">
        <CustomPagination
          handlePagination={handlePagination}
          total={allCarData?.data?.meta?.total}
          isCustomPagination={false}
        />
      </div>
    </>
  );
};

export default ViewCars;
