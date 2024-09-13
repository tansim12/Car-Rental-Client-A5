
import { FaCar, FaClipboardList, FaMoneyBillWave, FaCarCrash } from "react-icons/fa"; // Import icons
import { useAdminDashboardAggregateDataQuery } from "../../Redux/Feature/Admin/bookingManagementByAdmin.api";
import LoadingPage from "../Loading/LoadingPage";

const DashboardOverview = () => {
    const { data, isLoading } = useAdminDashboardAggregateDataQuery([]);

  return (
    <>
    {!isLoading ?<div className="p-6 bg-gray-100">
      <h1 className="text-2xl font-bold text-center mb-6">Admin Dashboard Overview</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {/* Total Bookings */}
        <div className="bg-white shadow-lg rounded-lg p-4 flex items-center hover:shadow-xl transition-shadow duration-300 ease-in-out">
          <FaClipboardList className="text-4xl text-blue-500 mr-4" />
          <div>
            <h2 className="text-lg font-semibold">Total Bookings</h2>
            <p className="text-xl font-bold">{data?.data?.totalBooking}</p>
          </div>
        </div>

        {/* Total Cost */}
        <div className="bg-white shadow-lg rounded-lg p-4 flex items-center hover:shadow-xl transition-shadow duration-300 ease-in-out">
          <FaMoneyBillWave className="text-4xl text-green-500 mr-4" />
          <div>
            <h2 className="text-lg font-semibold">Total Cost</h2>
            <p className="text-xl font-bold">${data?.data?.totalCost}</p>
          </div>
        </div>

        {/* Total Cars Available */}
        <div className="bg-white shadow-lg rounded-lg p-4 flex items-center hover:shadow-xl transition-shadow duration-300 ease-in-out">
          <FaCar className="text-4xl text-teal-500 mr-4" />
          <div>
            <h2 className="text-lg font-semibold">Cars Available</h2>
            <p className="text-xl font-bold">{data?.data?.totalCarAvailable}</p>
          </div>
        </div>

        {/* Total Cars Unavailable */}
        <div className="bg-white shadow-lg rounded-lg p-4 flex items-center hover:shadow-xl transition-shadow duration-300 ease-in-out">
          <FaCarCrash className="text-4xl text-red-500 mr-4" />
          <div>
            <h2 className="text-lg font-semibold">Cars Unavailable</h2>
            <p className="text-xl font-bold">{data?.data?.totalCarUnavailable}</p>
          </div>
        </div>
      </div>
    </div>:<LoadingPage />}
    </>
  );
};

export default DashboardOverview;

