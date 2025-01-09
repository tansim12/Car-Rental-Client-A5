/* eslint-disable @typescript-eslint/no-explicit-any */
import Calender from "../../components/ui/Calender/Calender";
import RevenueByMonthChart from "../../components/ui/Chart/RevenueByMonthChart";
import {
  useAdminCarReturnDateQuery,
  useMonthRevenueQuery,
} from "../../Redux/Feature/Admin/bookingManagementByAdmin.api";
import LoadingPage from "../Loading/LoadingPage";
import DashboardOverview from "./DashboardOverview";

const AdminDashboard = () => {
  const { data, isLoading } = useAdminCarReturnDateQuery([]);
  const { data: revenueData } = useMonthRevenueQuery({});

  const eventData = data?.data?.map(
    (item: {
      title: any;
      start: string | number | Date;
      end: string | number | Date;
    }) => ({
      title: item.title,
      end: new Date(item.end),
    })
  );

  return (
    <div>
      <div>
        <DashboardOverview />
      </div>
      <div>
        <RevenueByMonthChart revenueByMonth={revenueData?.data} />
      </div>
      <div>
        {!isLoading ? (
          <Calender data={eventData} isEnd={true} />
        ) : (
          <LoadingPage />
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
