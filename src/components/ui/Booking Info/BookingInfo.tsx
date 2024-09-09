import { FieldValues, SubmitHandler } from "react-hook-form";
import CustomForm from "../../From/CustomForm";
import CustomSelect from "../../From/CustomSelect";
import { carAvailableAreaArray } from "../../../Const/car.const";
import CustomRangePicker from "../../From/CustomRangePicker";
import { IoCheckmarkDone } from "react-icons/io5";
import CustomOutlineButton from "../Button/CustomOutlineButton";
const BookingInfo = () => {
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
  };
  const pickUpLocOptions = carAvailableAreaArray?.map((item) => ({
    label: item,
    value: item,
  }));
  return (
    <div className="">
      <div className="bg-secondary flex justify-center items-center h-20 rounded-t-3xl">
        <p className="">
          <span className="text-2xl font-bold">$500</span> / rent per day
        </p>
      </div>

      {/* info div   */}
      <div className="bg-filterColor p-4 rounded-b-3xl">
        <div>
          <CustomForm onSubmit={onSubmit}>
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
              />
            </div>

            <div>
              <div>
                <p className="text-sm">Total booking duration: 12 days</p>
                <p>$6000</p>
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

export default BookingInfo;
