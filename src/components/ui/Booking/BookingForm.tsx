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
import { TCar } from "../../../Types/car.types";
const BookingForm = ({ carData }: { carData: Partial<TCar> }) => {
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

    const payload = {
      pickupArea: data.pickupArea,
      carId: carData?._id,
      dropOffArea: data.dropOffArea,
      startDate, // Start date formatted as YYYY-MM-DD
      endDate, // End date formatted as YYYY-MM-DD
    };
    console.log(payload);
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
            {carData?.rentalPricePerDay} ৳
          </span>{" "}
          / rent per day
        </p>
      </div>

      {/* info div   */}
      <div className="bg-filterColor p-4 rounded-b-3xl">
        <div>
          <CustomForm onSubmit={onSubmit} resolver={zodResolver(bookingSchema)}>
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
                    {carData?.rentalPricePerDay} ৳
                  </span>
                </p>
                <p className="text-secondary text-xl font-bold mt-4 flex justify-center items-center">
                  Total Cost:{" "}
                  <span className="ml-2">
                    {(carData?.rentalPricePerDay as number) * totalDayDiffer} ৳
                  </span>
                </p>
              </div>
              <CustomOutlineButton
                icon={IoCheckmarkDone}
                isTransParent={false}
                name="Confirm"
                customCss="w-full py-5"
                textColor="black"
              />
            </div>
          </CustomForm>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
