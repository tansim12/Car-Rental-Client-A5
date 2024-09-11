/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { FormEvent, useState } from "react";
import { Button } from "antd";
import CustomForm from "../../From/CustomForm";
import CustomCollapse from "../../From/CustomCollapse";
import CustomCollapseMultiple from "../../From/CustomCollapseMultiple";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { FaSearch } from "react-icons/fa";
import {
  availabilityOptions,
  availableAreaOptions,
  categoryOptions,
} from "../../../utils/Options/carOptions";
import { TQueryParams } from "../../../Types/car.types";

interface FilterForm {
  availability?: string;
  category?: string[];
  availableAreas?: string[];
}

const Filter = ({
  setParams,
}: {
  setParams: React.Dispatch<React.SetStateAction<TQueryParams[]>>;
}) => {
  const [isFiltersSelected, setIsFiltersSelected] = useState([]);

  const onSubmit: SubmitHandler<FieldValues> = (data: FilterForm) => {
    const newPayload: Record<string, any> = {}; // Initialize as an empty object

    if (data?.availability) {
      newPayload.availability = data.availability; // Assign availability if it exists
      if (setParams) {
        setParams((prev: any) => [
          ...prev,
          { name: "availability", value: newPayload?.availability },
        ]);
      }
    }

    if (data?.category?.length) {
      newPayload.category = data.category.join(" "); // Join category array into a string if it has elements
      if (setParams) {
        setParams((prev: any) => [
          ...prev,

          { name: "category", value: newPayload?.category },
        ]);
      }
    }

    if (data?.availableAreas?.length) {
      newPayload.availableAreas = data.availableAreas.join(" "); // Join availableAreas array into a string if it has elements
      if (setParams) {
        setParams((prev: any) => [
          ...prev,
          { name: "availableAreas", value: newPayload?.availableAreas },
        ]);
      }
    }
  };

  // handleSearch

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const searchValue = form.search.value; // Accessing the input named 'search'
    if (searchValue) {
      if (setParams) {
        setParams((prev: any) => {
          const newPrev = prev?.filter((item: { name: string; }) => item?.name !== "searchTerm");
          return [...newPrev, { name: "searchTerm", value: searchValue }];
        });
      }
    }
  };
  return (
    <div className=" shadow-2xl   text-white ">
      {/* search section  */}
      <div
        className="h-24 bg-secondary rounded-t-xl flex justify-center items-center w-full"
        style={{ zIndex: "999px" }}
      >
        <form onSubmit={handleSearch} className="relative">
          <input
            type="text"
            name="search"
            placeholder="Search .."
            className="w-full p-3 rounded-full bg-gray-800 text-white focus:outline-none"
          />
          <button
            className="absolute right-0 top-0 bottom-0 
             p-3 rounded-full bg-secondary text-gray-900 m-1"
          >
            <FaSearch />
          </button>
        </form>
      </div>

      <div className="bg-filterColor px-5 rounded-b-3xl p-3 ">
        <CustomForm onSubmit={onSubmit} isReset={false}>
          <div className="">
            <CustomCollapse
              label="Availability"
              name="availability"
              changeOnValue={setIsFiltersSelected}
              options={availabilityOptions}
            />
          </div>
          <CustomCollapseMultiple
            label="Category"
            name="category"
            changeOnValue={setIsFiltersSelected}
            options={categoryOptions}
          />
          <CustomCollapseMultiple
            label="Available Areas"
            name="availableAreas"
            changeOnValue={setIsFiltersSelected}
            options={availableAreaOptions}
          />
          {isFiltersSelected?.length && (
            <Button
              className="border-none bg-secondary  text-black font-bold w-full"
              htmlType="submit"
            >
              Filter
            </Button>
          )}
        </CustomForm>
      </div>
    </div>
  );
};

export default Filter;
