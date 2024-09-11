import { FieldValues, SubmitHandler } from "react-hook-form";
import CustomForm from "../../../components/From/CustomForm";
import CustomInput from "../../../components/From/CustomInput";
import CustomSelect from "../../../components/From/CustomSelect";
import {
  availableAreaOptions,
  categoryOptions,
  typesOptions,
} from "../../../utils/Options/carOptions";
import CustomDynamicInput from "../../../components/From/CustomDynamicInput";
import CustomDynamicDoubleInput from "../../../components/From/CustomDynamicDoubleInput";
import CustomReactQuill from "../../../components/From/CustomReactQuill";
import CustomFileUpload from "../../../components/From/CustomFileUpload";
import { useState } from "react";
import toast from "react-hot-toast";
import { useCreateCarMutation } from "../../../Redux/Feature/Admin/carManagement.api";
import { handleApiError } from "../../../utils/handleApiError";
import { zodResolver } from "@hookform/resolvers/zod";
import { carZodValidation } from "../../../Schemas/carSchema";
import ButtonBackgroundShine from "../../../components/ui/Button/ButtonBackgroundShine";

const CreateCar = () => {
  const [selectImages, setSelectImages] = useState([]);
  const [createStudent, {isLoading}] = useCreateCarMutation();
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
    const payload = {
      ...data,
      seatingCapacity: Number(data?.seatingCapacity),
      numberOfDoors: Number(data?.numberOfDoors),
      advance: Number(data?.advance),
      rentalPricePerDay: Number(data?.rentalPricePerDay),
      mileage: Number(data?.mileage),
    };

    const formData = new FormData();
    formData.append("data", JSON.stringify(payload));
    if (selectImages && selectImages?.length > 0) {
      for (let i = 0; i < selectImages?.length; i++) {
        formData.append("file", selectImages[i]);
      }
    }

    const toastId = toast.loading("Creating");
    try {
      const res = await createStudent(formData).unwrap();
      if (res?.success) {
        toast.success("Car Create Successfully done", {
          id: toastId,
          duration: 3000,
        });
      }
    } catch (error) {
      handleApiError(error, toastId);
    }
  };

  return (
    <div>
      <div>
        <p className="text-center text-black text-xl"> CreateCar</p>
      </div>
      <div className="my-4">
        <CustomForm
          onSubmit={onSubmit}
          defaultValues={carData}
          resolver={zodResolver(carZodValidation.createCarZodSchema)}
        >
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

            <div className="flex justify-center items-center gap-4">
              <CustomInput
                name="rentalPricePerDay"
                label="Price PerDay"
                type="number"
              />
              <CustomInput name="advance" label="Advance" type="number" />
            </div>
            <CustomSelect
              mode="multiple"
              name="availableAreas"
              label="Available Areas"
              options={availableAreaOptions}
              placeholder="Available Areas"
            />

            <CustomDynamicInput
              name="safetyFeatures"
              label="Safety Features"
              type="text"
            />
            <CustomDynamicInput name="features" label="Features" type="text" />
          </div>

          <div>
            <CustomDynamicDoubleInput
              name="faqs"
              label="Faqs"
              type="text"
              option={["question", "answer"]}
            />
          </div>

          <div>
            <CustomReactQuill name="description" label="Description" />
          </div>

          <div>
            <div>
              <CustomFileUpload
                changeOnValue={setSelectImages}
                name="file"
                label="Images"
                type="file"
              />
            </div>
          </div>

          <ButtonBackgroundShine name="Create Car" customCss="w-[30%]" isLoading={isLoading} />
        </CustomForm>
      </div>
    </div>
  );
};

export default CreateCar;
const carData = {
  name: "Toyota Camry 23",
  category: "Luxury",
  brand: "Toyota",
  description: "A comfortable and reliable sedan with great fuel efficiency.",
  type: "New Arrival",
  model: "Camry XSE",
  VIN: "4T1BF1FK6HU123456",
  licensePlate: "ABC1234",
  color: "Silver",
  mileage: 25000,
  rentalPricePerDay: 500,
  advance: 100,
  availability: "available",
  availableAreas: ["Dhaka", "Chittagong", "Sylhet", "Pabna"],
  numberOfDoors: 4,
  seatingCapacity: 5,
  features: ["Leather seats", "Sunroof", "Bluetooth connectivity"],
  safetyFeatures: ["Anti-lock braking system", "Airbags", "Rearview camera"],
  faqs: [
    {
      question: "What is the fuel efficiency of the car?",
      answer: "The car has a fuel efficiency of 28 miles per gallon.",
      id: "66d4aefec8e2acb52b10846e",
    },
    {
      question: "Is the car available for long-term rentals?",
      answer:
        "Yes, the car is available for both short-term and long-term rentals.",
      id: "66d4aefec8e2acb52b10846f",
    },
  ],
  isDeleted: false,
  createdAt: "2024-09-01T18:14:22.564Z",
  updatedAt: "2024-09-03T14:33:33.919Z",
  version: 0,
};
