

import { useUserMonthlyCostQuery } from "../../Redux/Feature/Admin/bookingManagementByAdmin.api";
import RevenueByMonthChart from "../../components/ui/Chart/RevenueByMonthChart";
const UserDashboard = () => {
  const { data: revenueData } = useUserMonthlyCostQuery({});

  return (
    <div>
      <div>
        <p className="text-center text-3xl font-bold my-10 border-b">
          My Every Month Cost Chart
        </p>
      </div>
      <div>
        <RevenueByMonthChart revenueByMonth={revenueData?.data} />
      </div>
    </div>
  );
};

export default UserDashboard;
