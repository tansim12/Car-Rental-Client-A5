import { useEffect, useState } from "react";
import { TQueryParams } from "../../../Types/car.types";
import { TBookings } from "../../../Types/booking.type";
import CustomPagination from "../../../components/ui/Pagination/CustomPagination";
import {
  Button,
  Input,
  message,
  Modal,
  Space,
  Table,
  TableColumnsType,
  TableProps,
  Tag,
} from "antd";
import {  DeleteOutlined } from "@ant-design/icons";
import toast from "react-hot-toast";
import { handleApiError } from "../../../utils/handleApiError";
import customPaginationFn from "../../../utils/customPaginationFn";
import moment from "moment";
import {
  useAllBookingsByAdminQuery,
  useUpdateBookingByAdminMutation,
} from "../../../Redux/Feature/Admin/bookingManagementByAdmin.api";

export type TTableData = Partial<TBookings>;
const AllBookingByAdmin = () => {
  const [params, setParams] = useState<TQueryParams[]>([]);
  const { data, isFetching: allBookingLoading } = useAllBookingsByAdminQuery([
    { name: "sort", value: "-createdAt" },
    ...params,
  ]);
  const [updateBookingByAdmin] = useUpdateBookingByAdminMutation();

  console.log(data?.data?.result);

  const tableData: TTableData[] = data?.data?.result?.map(
    (booking: TTableData) => ({
      key: booking?._id,
      _id: booking?._id,
      carImage: booking?.carId?.images?.[0],
      carId: booking?.carId,
      car_id: booking?.carId?._id,
      carName: booking?.carId?.name,
      carAvailability: booking?.carId?.availability,
      userId: booking?.userId,
      userEmail: booking?.userId?.email,
      rentalPricePerDay: booking?.rentalPricePerDay,
      isDelete: booking?.isDelete,
      adminApprove: booking?.adminApprove,
      paymentStatus: booking?.paymentStatus,
      deuPayment: booking?.deuPayment,
      advancePayment: booking?.advancePayment,
      totalCost: booking?.totalCost,
      orderCancel: booking?.orderCancel,
      endDate: booking?.endDate,
      startDate: booking?.startDate,
      dropOffArea: booking?.dropOffArea,
      pickupArea: booking?.pickupArea,
      createdAt: moment(booking?.createdAt).format("YYYY-MM-DD"),
      advancePaymentInfo: booking?.advancePaymentInfo,
      deuPaymentInfo: booking?.deuPaymentInfo,
    })
  );

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

  const columns: TableColumnsType<TTableData> = [
    {
      title: "Car",
      dataIndex: "carImage",
      key: "carImage",
      width: 100,
      fixed: isFixed ? "left" : undefined, // Conditionally apply fixed based on screen size
      render: (images: string) => (
        <img
          src={images}
          alt="Car"
          style={{ width: "100px", height: "auto", borderRadius: "5px" }} // Optional styling
        />
      ),
    },
    {
      title: "User Email",
      dataIndex: "userEmail",
      key: "userEmail",
      width: 120,
      fixed: isFixed ? "left" : undefined, // Conditionally apply fixed
      render: (name) => {
        return <span>{name?.slice(0, 15)}</span>;
      },
    },
    {
      title: "Create Booking",
      dataIndex: "createdAt",
      key: "createdAt",
      width: 120,
    },
    {
      title: "Car Id",
      dataIndex: "car_id",
      key: "car_id",
      width: 120,
    },
    {
      title: "Status",
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
      title: "Pickup Area",
      dataIndex: "pickupArea",
      key: "pickupArea",
      width: 120,
    },

    {
      title: "DropOff Area",
      dataIndex: "dropOffArea",
      key: "dropOffArea",
      width: 120,
    },

    {
      title: "Start Date",
      dataIndex: "startDate",
      key: "startDate",
      width: 120,
    },
    {
      title: "End Date",
      dataIndex: "endDate",
      key: "endDate",
      width: 120,
    },

    {
      title: "Car Availability",
      dataIndex: "carAvailability",
      key: "carAvailability",
      width: 120,
      render: (carAvailability) => {
        return (
          <div>
            {carAvailability === "unavailable" && (
              <Tag color="red">unavailable</Tag>
            )}
            {carAvailability === "available" && (
              <Tag color="green">available</Tag>
            )}
          </div>
        );
      },
    },
    {
      title: "Admin Approve",
      dataIndex: "adminApprove",
      key: "adminApprove",
      width: 120,
      render: (adminApprove) => {
        return (
          <div>
            {adminApprove === 0 && <Tag color="red">No Access(0)</Tag>}
            {adminApprove === 1 && <Tag color="green">Running(1)</Tag>}
            {adminApprove === 2 && <Tag color="blue">Returned(2)</Tag>}
            {adminApprove === 3 && <Tag color="black">Reject(3)</Tag>}
          </div>
        );
      },
    },

    {
      title: "Payment Status",
      dataIndex: "paymentStatus",
      key: "paymentStatus",
      width: 320,
      render: (paymentStatus, record) => {
        return (
          <div>
            {paymentStatus === 0 && <Tag color="red">No Payment(0)</Tag>}
            {paymentStatus === 1 && record?.adminApprove !== 1 && (
              <Tag color="green">
                Advanced Payment Done,Waiting For Admin Approve(1)
              </Tag>
            )}
            {record?.adminApprove === 1  && paymentStatus === 1 && <Tag color="blue">Can go. Deu Payment Pending(2)</Tag>}
            {paymentStatus === 2 && <Tag color="purple">Deu Payment Done(2)</Tag>}
          </div>
        );
      },
    },
    {
      title: "Price (per day)",
      dataIndex: "rentalPricePerDay",
      key: "rentalPricePerDay",
      width: 100,
    },
    {
      title: "advancePayment",
      dataIndex: "advancePayment",
      key: "advancePayment",
      width: 100,
    },

    {
      title: "totalCost",
      dataIndex: "totalCost",
      key: "totalCost",
      width: 100,
    },
    {
      title: "Due Payment",
      dataIndex: "deuPayment",
      key: "deuPayment",
      width: 100,
    },

    {
      title: "A. Txn Id",
      dataIndex: "advancePaymentInfo.mer_txnid",
      key: "A. Txn Id",
      width: 200,
      render: (_, record) => {
        return record?.advancePaymentInfo?.mer_txnid || "N/A"; // Handle possible undefined or null values
      },
    },
    {
      title: "A. Txn Phone",
      dataIndex: "advancePaymentInfo.cus_phone",
      key: "A. Txn Phone",
      width: 100,
      render: (_, record) => {
        return record?.advancePaymentInfo?.cus_phone || "N/A"; // Handle possible undefined or null values
      },
    },
    {
      title: "A. Txn Payment",
      dataIndex: "advancePaymentInfo.payment_type",
      key: "A. Txn payment",
      width: 100,
      render: (_, record) => {
        return record?.advancePaymentInfo?.payment_type || "N/A"; // Handle possible undefined or null values
      },
    },
    {
      title: "A. Txn Amount",
      dataIndex: "advancePaymentInfo.amount",
      key: "A. Txn amount",
      width: 100,
      render: (_, record) => {
        return record?.advancePaymentInfo?.amount || "N/A"; // Handle possible undefined or null values
      },
    },

    {
      title: "D. Txn Id",
      dataIndex: "deuPaymentInfo.mer_txnid",
      key: "D. Txn Id",
      width: 200,
      render: (_, record) => {
        return record?.deuPaymentInfo?.mer_txnid || "N/A"; // Handle possible undefined or null values
      },
    },

    {
      title: "D. Txn Phone",
      dataIndex: "deuPaymentInfo.cus_phone",
      key: "D. Txn Phone",
      width: 100,
      render: (_, record) => {
        return record?.deuPaymentInfo?.cus_phone || "N/A"; // Handle possible undefined or null values
      },
    },
    {
      title: "D. Txn Amount",
      dataIndex: "deuPaymentInfo.payment_type",
      key: "D. Txn payment",
      width: 100,
      render: (_, record) => {
        return record?.deuPaymentInfo?.payment_type || "N/A"; // Handle possible undefined or null values
      },
    },

    {
      title: "D. Txn Amount",
      dataIndex: "deuPaymentInfo.amount",
      key: "D. Txn amount",
      width: 100,
      render: (_, record) => {
        return record?.deuPaymentInfo?.amount || "N/A"; // Handle possible undefined or null values
      },
    },

    {
      title: "Actions",
      key: "actions",
      fixed: "right",
      width: 100,
      render: (_, record) => {
        return (
          <Space size="middle">
            {/* delete button */}
            <Button
              size="small"
              disabled={record?.isDelete }
              type="link"
              danger
              icon={<DeleteOutlined />}
              onClick={() => handleDelete(record?._id as string)}
            />
            {/* reject button */}
            <Button
              size="small"
              disabled={
                record?.isDelete ||
                record?.adminApprove === 3 ||
                record?.paymentStatus === 2 || record?.adminApprove === 1
              }
              type="link"
              danger
              onClick={() => handleRejectBooking(record?._id as string)}
            >
              Reject
            </Button>
            {/* To Go or Running button */}
            <Button
              size="small"
              disabled={
                record?.isDelete ||
                record?.adminApprove === 3 ||
                record?.paymentStatus === 2 || record?.adminApprove === 1
              }
              type="primary"
              onClick={() => handleToGo(record?._id as string)}
            >
              To Go
            </Button>
            {/* return car button */}
            <Button
              size="small"
              disabled={
                record?.isDelete ||
                record?.adminApprove === 3  || record?.adminApprove === 2
              }
              type="primary"
              className="bg-green-600 "
              onClick={() => handleReturnCar(record?._id as string)}
            >
              Return
            </Button>
          </Space>
        );
      },
    },
  ];

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
          const res = await updateBookingByAdmin(payload).unwrap();
          if (res?.success) {
            toast.success("Booking Delete Successfully done", {
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

  const handleRejectBooking = (id: string) => {
    Modal.confirm({
      title: "Are you sure you want to Reject this Booking?",
      content: `This action cannot be undone.`,
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk: async () => {
        const toastId = toast.loading("Reject Booking..");
        try {
          const payload = {
            body: {
              adminApprove: 3,
            },
            id,
          };
          const res = await updateBookingByAdmin(payload).unwrap();
          if (res?.success) {
            toast.success("Booking Reject Successfully done", {
              id: toastId,
              duration: 3000,
            });
          }
        } catch (error) {
          handleApiError(error, toastId);
        }
        message.success("Record Reject successfully.");
      },
    });
  };
  const handleToGo = (id: string) => {
    Modal.confirm({
      title: "Are you sure you want Permission to go car?",
      content: `This action cannot be undone.`,
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk: async () => {
        const toastId = toast.loading("Permission to go car ....");
        try {
          const payload = {
            body: {
              adminApprove: 1,
            },
            id,
          };
          const res = await updateBookingByAdmin(payload).unwrap();
          if (res?.success) {
            toast.success("Permission done", {
              id: toastId,
              duration: 3000,
            });
          }
        } catch (error) {
          handleApiError(error, toastId);
        }
        message.success("Record Permission successfully.");
      },
    });
  };
  const handleReturnCar = (id: string) => {
    Modal.confirm({
      title: "Are you sure you want Return car?",
      content: `This action cannot be undone.`,
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk: async () => {
        const toastId = toast.loading("Return car ....");
        try {
          const payload = {
            body: {
              adminApprove: 2,
            },
            id,
          };
          const res = await updateBookingByAdmin(payload).unwrap();
          if (res?.success) {
            toast.success("Permission done", {
              id: toastId,
              duration: 3000,
            });
          }
        } catch (error) {
          handleApiError(error, toastId);
        }
        message.success("Record Permission successfully.");
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

export default AllBookingByAdmin;
