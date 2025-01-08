/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unsafe-optional-chaining */
import { FieldValues, SubmitHandler } from "react-hook-form";
import CustomForm from "../../../components/From/CustomForm";
import CustomInput from "../../../components/From/CustomInput";
import CustomSelect from "../../../components/From/CustomSelect";
import {
  availabilityOptions,
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
import {
  useGetSingleCarQuery,
  useUpdateCarMutation,
} from "../../../Redux/Feature/Admin/carManagement.api";
import { handleApiError } from "../../../utils/handleApiError";
import { zodResolver } from "@hookform/resolvers/zod";
import { carZodValidation } from "../../../Schemas/carSchema";
import ButtonBackgroundShine from "../../../components/ui/Button/ButtonBackgroundShine";
import { useNavigate, useParams } from "react-router-dom";
import CustomToggle from "../../../components/From/CustomToggle";
import LoadingPage from "../../Loading/LoadingPage";
import { uploadImagesToImgBB } from "../../../utils/imgbb";

const UpdateCar = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    data: carData,
    isError,
    isLoading: carDataLoading,
  } = useGetSingleCarQuery(id);
  const [selectImages, setSelectImages] = useState([]);

  if (isError) {
    navigate("/admin/view-cars");
  }
  const [updateCar, { isLoading }] = useUpdateCarMutation();
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    let nimages = [];
    if (selectImages?.length) {
      nimages = await uploadImagesToImgBB(selectImages as any);
    }

    const payload = {
      ...data,
      seatingCapacity: Number(data?.seatingCapacity),
      numberOfDoors: Number(data?.numberOfDoors),
      advance: Number(data?.advance),
      rentalPricePerDay: Number(data?.rentalPricePerDay),
      mileage: Number(data?.mileage),
      images: nimages.length ? nimages : data?.images,
    };

    const toastId = toast.loading("Updating...");
    try {
      const newPayload = {
        body: {
          ...payload,
        },
        id,
      };
      console.log(newPayload);

      const res = await updateCar(newPayload).unwrap();
      if (res?.success) {
        toast.success("Car updated successfully!", {
          id: toastId,
          duration: 3000,
        });
        navigate("/admin/view-cars");
      }
    } catch (error) {
      handleApiError(error, toastId);
    }
  };

  console.log(carData?.data?.images);

  return (
    <div>
      <div>
        <p className="text-center text-black text-xl"> CreateCar</p>
      </div>
      {!carDataLoading ? (
        <div className="my-4">
          <CustomForm
            onSubmit={onSubmit}
            defaultValues={carData?.data}
            resolver={zodResolver(carZodValidation.updateCarZodSchema)}
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
              <CustomDynamicInput
                name="safetyFeatures"
                label="Safety Features"
                type="text"
              />
              <CustomDynamicInput
                name="features"
                label="Features"
                type="text"
              />
              <CustomSelect
                mode="multiple"
                name="availableAreas"
                label="Available Areas"
                options={availableAreaOptions}
                placeholder="Available Areas"
              />
              <CustomSelect
                name="availability"
                label="Availability"
                options={availabilityOptions}
                placeholder="Available Areas"
              />

              <div className="flex justify-around items-center">
                <div></div>
                <CustomToggle label="Delete" name="isDelete" />
              </div>
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

            <div className="flex justify-start gap-4 rounded-lg">
              {carData?.data?.images?.map((item: any) => (
                <div >
                  <img
                    src={item}
                    alt="image"
                    className="object-cover size-20"
                  />
                </div>
              ))}
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

            <ButtonBackgroundShine
              name="Update Car"
              customCss="w-[30%]"
              isLoading={isLoading}
            />
          </CustomForm>
        </div>
      ) : (
        <LoadingPage />
      )}
    </div>
  );
};

export default UpdateCar;
