/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldValues, SubmitHandler } from "react-hook-form";
import CustomForm from "../../From/CustomForm";
import CustomSelect from "../../From/CustomSelect";
import { carAvailableAreaArray } from "../../../Const/car.const";
import CustomRangePicker from "../../From/CustomRangePicker";
import { IoCheckmarkDone } from "react-icons/io5";
import CustomOutlineButton from "../Button/CustomOutlineButton";
import { zodResolver } from "@hookform/resolvers/zod";
import { bookingSchema } from "../../../Schemas/bookingSchema";
import moment from "moment";
import { useEffect, useState } from "react";
import { calculateDaysDifference } from "../../../utils/calculateDaysDifference";
import toast from "react-hot-toast";

import { handleApiError } from "../../../utils/handleApiError";
import { useUpdateBookingMutation } from "../../../Redux/Feature/User And Admin/userAndAdminBoth.api";
const UpdateBookingForm = ({
  bookingDefaultValues,
}: {
  bookingDefaultValues: any;
}) => {
  console.log(bookingDefaultValues);

  const [updateBooking] = useUpdateBookingMutation();
  const pickUpLocOptions = carAvailableAreaArray?.map((item) => ({
    label: item,
    value: item,
  }));
  const [dateRange, setDateRange] = useState([]);
  const [totalDayDiffer, setTotalDayDiffer] = useState(1);
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const [startDate, endDate] = data.dateRange.map((date: any) =>
      moment(date).format("YYYY-MM-DD")
    );

    const newPayload = {
      pickupArea: data.pickupArea,
      dropOffArea: data.dropOffArea,
      startDate, // Start date formatted as YYYY-MM-DD
      endDate, // End date formatted as YYYY-MM-DD
    };

    const payload = {
      body: {
        ...newPayload,
      },
      id: bookingDefaultValues?.id,
    };

    const toastId = toast.loading("Booking Update....");
    try {
      const res = await updateBooking(payload).unwrap();
      if (res?.success) {
        toast.success("Booking Slot Update Successfully done", {
          id: toastId,
          duration: 3000,
        });
      }
    } catch (error) {
      handleApiError(error, toastId);
    }
  };

  useEffect(() => {
    if (dateRange?.length) {
      const [startDate, endDate] = dateRange.map((date: any) =>
        moment(new Date(date)).format("YYYY-MM-DD")
      );
      const dayDiffer = calculateDaysDifference(startDate, endDate);
      if (dayDiffer > 0) {
        setTotalDayDiffer(dayDiffer);
      }
    }
  }, [dateRange]);

  return (
    <div className="">
      <div className="bg-secondary flex justify-center items-center h-20 rounded-t-3xl">
        <p className="">
          <span className="text-2xl font-bold inline-block">
            {bookingDefaultValues?.rentalPricePerDay} ৳
          </span>{" "}
          / rent per day
        </p>
      </div>

      {/* info div   */}
      <div className="bg-filterColor p-4 rounded-b-3xl">
        <div>
          <CustomForm
            onSubmit={onSubmit}
            resolver={zodResolver(bookingSchema)}
            defaultValues={bookingDefaultValues}
          >
            <div>
              <CustomSelect
                options={pickUpLocOptions}
                name="pickupArea"
                label="Pick Up Location"
                placeholder="Select"
                isLabelColor={true}
              />
            </div>

            <div>
              <CustomSelect
                options={pickUpLocOptions}
                name="dropOffArea"
                label="Drop Off Location"
                placeholder="Select"
                isLabelColor={true}
              />
            </div>
            <div>
              <CustomRangePicker
                name="dateRange"
                label="Booking Date Range"
                placeholder="Select"
                isLabelColor={true}
                changeOnValue={setDateRange}
              />
            </div>

            <div className=" p-4 rounded-lg shadow-lg">
              <div className="text-white my-4">
                <p className="text-sm flex justify-center items-center">
                  Total Booking Duration:{" "}
                  <span className="font-bold ml-2">{totalDayDiffer} days</span>
                </p>
                <p className="text-sm flex justify-center items-center">
                  Per Day Cost:{" "}
                  <span className="font-bold ml-2">
                    {bookingDefaultValues?.rentalPricePerDay} ৳
                  </span>
                </p>
                <p className="text-secondary text-xl font-bold mt-4 flex justify-center items-center">
                  Total Cost:{" "}
                  <span className="ml-2">
                    {(bookingDefaultValues?.rentalPricePerDay as number) *
                      totalDayDiffer}{" "}
                    ৳
                  </span>
                </p>
              </div>
              <CustomOutlineButton
                icon={IoCheckmarkDone}
                isTransParent={false}
                name="Confirm"
                customCss="w-full py-5"
                textColor="black"
                disabled={bookingDefaultValues?.availability !== "available"}
              />
            </div>
          </CustomForm>
        </div>
      </div>
    </div>
  );
};

export default UpdateBookingForm;
