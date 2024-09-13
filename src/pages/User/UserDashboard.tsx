/* eslint-disable @typescript-eslint/no-explicit-any */
import Calender from "../../components/ui/Calender/Calender";
import { useUserBookingScheduleQuery } from "../../Redux/Feature/Public User/user Booking Management/userBookingManagement";
import LoadingPage from "../Loading/LoadingPage";

const UserDashboard = () => {
  const { data, isLoading } = useUserBookingScheduleQuery([]);
  const eventData = data?.data?.map(
    (item: {
      title: any;
      start: string | number | Date;
      end: string | number | Date;
    }) => ({
      title: item.title,
      start: new Date(item.start),
      end: new Date(item.end),
    })
  );
  return (
    <div>{!isLoading ? <Calender data={eventData} /> : <LoadingPage />}</div>
  );
};

export default UserDashboard;
