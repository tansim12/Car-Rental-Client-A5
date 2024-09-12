import { useEffect, useState } from "react";
import {
  usePaymentMutation,
  useUpdateBookingByUserMutation,
  useUserAllBookingsQuery,
} from "../../../Redux/Feature/Public User/user Booking Management/userBookingManagement";
import { TQueryParams } from "../../../Types/car.types";
import { TBookings } from "../../../Types/booking.type";
import CustomPagination from "../../../components/ui/Pagination/CustomPagination";
import {
  Button,
  Drawer,
  Input,
  message,
  Modal,
  Space,
  Table,
  TableColumnsType,
  TableProps,
  Tag,
} from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import toast from "react-hot-toast";
import { handleApiError } from "../../../utils/handleApiError";
import customPaginationFn from "../../../utils/customPaginationFn";
import moment from "moment";
import { MdOutlinePayment } from "react-icons/md";
import UpdateBookingInfoByUser from "./UpdateBookingInfoByUser";

export type TTableData = Partial<TBookings>;
const AllBookingByUser = () => {
  const [params, setParams] = useState<TQueryParams[]>([]);
  const { data, isFetching: allBookingLoading } = useUserAllBookingsQuery([
    { name: "sort", value: "-createdAt" },
    ...params,
  ]);
  const [updateBooking] = useUpdateBookingByUserMutation();
  const [createPayment] = usePaymentMutation();
  console.log(data);

  const tableData: TTableData[] = data?.data?.result?.map(
    (booking: TTableData) => ({
      key: booking?._id,
      _id: booking?._id,
      carImage: booking?.carId?.images[0],
      carId: booking?.carId,
      carName: booking?.carId?.name,
      carAvailability: booking?.carId?.availability,
      rentalPricePerDay: booking?.rentalPricePerDay,
      isDelete: booking?.isDelete,
      adminApprove: booking?.adminApprove,
      paymentStatus: booking?.paymentStatus,
      deuPayment: booking?.deuPayment,
      userId: booking?.userId,
      advancePayment: booking?.advancePayment,
      totalCost: booking?.totalCost,
      orderCancel: booking?.orderCancel,
      endDate: booking?.endDate,
      startDate: booking?.startDate,
      dropOffArea: booking?.dropOffArea,
      pickupArea: booking?.pickupArea,
      createdAt: moment(booking?.createdAt).format("YYYY-MM-DD"),
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

  const [selectedBookingData, setSelectedBookingData] = useState<object | null>(
    {}
  );
  const [drawerVisible, setDrawerVisible] = useState(false);

  const handleEdit = (bookingData: object) => {
    console.log(bookingData);

    setSelectedBookingData(bookingData);
    setDrawerVisible(true);
  };

  const handleCloseDrawer = () => {
    setDrawerVisible(false);
  };

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
      title: "Car Name",
      dataIndex: "carName",
      key: "carName",
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
      title: "orderCancel",
      dataIndex: "orderCancel",
      key: "orderCancel",
      width: 100,
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
            {adminApprove === 0 && <Tag color="red">No Access</Tag>}
            {adminApprove === 1 && <Tag color="green">You Can Go</Tag>}
            {adminApprove === 2 && <Tag color="blue">Returned</Tag>}
            {adminApprove === 3 && <Tag color="black">Reject</Tag>}
          </div>
        );
      },
    },

    {
      title: "Payment Status",
      dataIndex: "paymentStatus",
      key: "paymentStatus",
      width: 320,
      render: (paymentStatus) => {
        return (
          <div>
            {paymentStatus === 0 && (
              <Tag color="red">Please Advanced Payment</Tag>
            )}
            {paymentStatus === 1 && (
              <Tag color="green">
                Advanced Payment Done,Waiting For Admin Approve
              </Tag>
            )}
            {paymentStatus === 2 && <Tag color="blue">Deu Payment Done</Tag>}
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
      title: "deuPayment",
      dataIndex: "deuPayment",
      key: "deuPayment",
      width: 100,
    },

    {
      title: "Actions",
      key: "actions",
      fixed: "right",
      width: 100,
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
                  startDate: record?.startDate,
                  endDate: record?.endDate,
                  carId: record?.carId?._id,
                  dropOffArea: record?.dropOffArea,
                  pickupArea: record?.pickupArea,
                  rentalPricePerDay: record?.rentalPricePerDay,
                  availability:record?.carId?.availability,
                  id:record?._id
                })
              }
            ></Button>
            {/* delete button */}
            <Button
              size="small"
              disabled={record?.orderCancel}
              type="link"
              danger
              icon={<DeleteOutlined />}
              onClick={() => handleDelete(record?._id as string)}
            />
            {/* advanced payment button */}
            <Button
              size="small"
              type="primary"
              disabled={
                record?.paymentStatus === 1 ||
                record?.paymentStatus === 2 ||
                record?.orderCancel ||
                record?.adminApprove !== 0
              }
              icon={<MdOutlinePayment />}
              onClick={() => handleAdvancePayment(record?._id as string)}
            >
              Advance
            </Button>

            {/* deu payment button  */}
            <Button
              size="small"
              type="primary"
              disabled={
                record?.paymentStatus !== 1 ||
                record?.orderCancel ||
                record?.adminApprove !== 1
              }
              icon={<MdOutlinePayment />}
              onClick={() => handleDuePayment(record?._id as string)}
            >
              Due
            </Button>
          </Space>
        );
      },
    },
  ];

  const handleAdvancePayment = async (bookingId: string) => {
    if (bookingId) {
      const toastId = toast.loading("Advance Payment..");
      try {
        const payload = {
          bookingId,
          isAdvancePayment: true,
        };
        const res = await createPayment(payload).unwrap();
        if (res?.success) {
          if (res?.data?.url) {
            window.location.href = res.data.url; // Opens the URL in a new tab
          }
        }
      } catch (error) {
        handleApiError(error, toastId);
      }
    }
  };
  const handleDuePayment = async (bookingId: string) => {
    if (bookingId) {
      const toastId = toast.loading("Due Payment..");
      try {
        const payload = {
          bookingId,
          isAdvancePayment: false,
        };
        const res = await createPayment(payload).unwrap();
        if (res?.success) {
          if (res?.data?.url) {
            window.location.href = res.data.url; // Opens the URL in a new tab
          }
        }
      } catch (error) {
        handleApiError(error, toastId);
      }
    }
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
              orderCancel: true,
            },
            id,
          };
          const res = await updateBooking(payload).unwrap();
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

      {selectedBookingData && (
        <Drawer
          title="Edit Booking"
          placement="left"
          closable={true}
          onClose={handleCloseDrawer}
          visible={drawerVisible}
        >
          <UpdateBookingInfoByUser
            bookingData={selectedBookingData as object}
          />
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

export default AllBookingByUser;
