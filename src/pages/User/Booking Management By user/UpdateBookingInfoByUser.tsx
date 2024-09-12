/* eslint-disable @typescript-eslint/no-explicit-any */

import UpdateBookingForm from '../../../components/ui/Booking/UpdateBookingForm';

const UpdateBookingInfoByUser = ({ bookingData }: { bookingData: any }) => {
  
 return (
    <div>
      <UpdateBookingForm bookingDefaultValues={bookingData}  />
    </div>
  );
};

export default UpdateBookingInfoByUser;
