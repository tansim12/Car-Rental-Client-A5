/* eslint-disable @typescript-eslint/no-explicit-any */
import LoadingPage from "../../../pages/Loading/LoadingPage";
import { useUserBookingScheduleQuery } from "../../../Redux/Feature/Public User/user Booking Management/userBookingManagement";
import Calender from "./Calender";

const UserTripCalenderPage = () => {
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
    <div>
      {" "}
      <div>
        <p className="text-center text-3xl font-bold mb-10 ">
          My Recent Tripe Schedule
        </p>
      </div>
      <div>{!isLoading ? <Calender data={eventData} /> : <LoadingPage />}</div>
    </div>
  );
};

export default UserTripCalenderPage;
