import {
  useUserMonthlyCostQuery,
  useUserPaymentAnalyticsQuery,
} from "../../Redux/Feature/Admin/bookingManagementByAdmin.api";
import PieChartComponent from "../../components/ui/Chart/PieChartComponent";
import RevenueByMonthChart from "../../components/ui/Chart/RevenueByMonthChart";
const UserDashboard = () => {
  const { data: revenueData } = useUserMonthlyCostQuery({});
  const { data: paymentStatusData } = useUserPaymentAnalyticsQuery({});

  return (
    <div>
      <div>
        <p className="text-center text-3xl font-bold my-10 ">
          My Payment Analytics
        </p>

        <PieChartComponent data={paymentStatusData?.data} />
      </div>
      <div>
        <p className="text-center text-3xl font-bold my-10 ">
          My Every Month Cost Chart
        </p>
        <RevenueByMonthChart revenueByMonth={revenueData?.data} />
      </div>
    </div>
  );
};

export default UserDashboard;
