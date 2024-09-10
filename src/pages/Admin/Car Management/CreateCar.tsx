import { FieldValues, SubmitHandler, } from "react-hook-form";
import CustomForm from "../../../components/From/CustomForm";
import CustomInput from "../../../components/From/CustomInput";
import CustomSelect from "../../../components/From/CustomSelect";
import {
  availableAreaOptions,
  categoryOptions,
  typesOptions,
} from "../../../utils/Options/carOptions";
import CustomDynamicInput from "../../../components/From/CustomDynamicInput";
import { Button } from "antd";

const CreateCar = () => {
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
  };
  return (
    <div>
      <div>
        <p className="text-center text-black text-xl"> CreateCar</p>
      </div>
      <div className="my-4">
        <CustomForm onSubmit={onSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 ">
            <CustomInput name="name" label="Name" type="text" />
            <CustomSelect
              name="category"
              label="Category"
              options={categoryOptions}
            />
            <CustomSelect name="type" label="Type" options={typesOptions} />
            <CustomInput name="brand" label="Brand" type="text" />
            <CustomInput name="model" label="Model" type="text" />
            <CustomInput name="VIN" label="VIN" type="text" />
            <CustomInput
              name="licensePlate"
              label="License Plate"
              type="text"
            />
            <CustomInput name="color" label="Color" type="text" />
            <CustomInput name="mileage" label="Mileage" type="number" />
            <CustomInput
              name="numberOfDoors"
              label="Number Of Doors"
              type="number"
            />
            <CustomInput
              name="seatingCapacity"
              label="Seating Capacity"
              type="number"
            />

            <CustomInput
              name="rentalPricePerDay"
              label="Rental Price PerDay"
              type="number"
            />
            <CustomInput name="advance" label="Advance" type="number" />
            <CustomSelect
              name="availableAreas"
              label="Available Areas"
              options={availableAreaOptions}
            />

            <CustomDynamicInput
            //   control={control}
              name="features"
              label="Features"
              type="text"
            //   isLabelColor={true}
            />
          </div>


          <Button htmlType="submit" >Submit</Button>
        </CustomForm>
      </div>
    </div>
  );
};

export default CreateCar;
