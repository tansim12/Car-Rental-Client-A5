/* eslint-disable @typescript-eslint/no-explicit-any */
import Calender from "../../components/ui/Calender/Calender";
import { useAdminCarReturnDateQuery } from "../../Redux/Feature/Admin/bookingManagementByAdmin.api";
import LoadingPage from "../Loading/LoadingPage";

const AdminDashboard = () => {
  const { data, isLoading } = useAdminCarReturnDateQuery([]);
  const eventData = data?.data?.map(
    (item: { title: any; start: string | number | Date;end: string | number | Date }) => ({
      title: item.title,
      end: new Date(item.end),
    })
  );
  return (
    <div>
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
