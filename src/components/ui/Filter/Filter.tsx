/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { FormEvent, useState } from "react";

import { Button } from "antd";
import {
  carAvailabilityArray,
  carAvailableAreaArray,
  carCategoryArray,
} from "../../../Types/car.types";
import CustomForm from "../../From/CustomForm";
import CustomCollapse from "../../From/CustomCollapse";
import CustomCollapseMultiple from "../../From/CustomCollapseMultiple";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { FaSearch } from "react-icons/fa";

interface FilterForm {
  availability?: string;
  category?: string[];
  availableAreas?: string[];
}

const Filter: React.FC = ({ setQueryObj }: any) => {
  const [isFiltersSelected, setIsFiltersSelected] = useState([]);
  const availabilityOptions = carAvailabilityArray?.map((item) => ({
    label: item,
    value: item,
  }));
  const categoryOptions = carCategoryArray?.map((item) => ({
    label: item,
    value: item,
  }));
  const availableAreaOptions = carAvailableAreaArray?.map((item) => ({
    label: item,
    value: item,
  }));

  const onSubmit: SubmitHandler<FieldValues> = (data: FilterForm) => {
    console.log(data);

    // if (setQueryObj) {
    //   setQueryObj((prev) => ({ ...prev, ...data }));
    // }
  };

  // handleSearch 
  
const handleSearch = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  
  const form = e.target as HTMLFormElement;
  const searchValue = form.search.value; // Accessing the input named 'search'

  console.log(searchValue); // This will now log the value of the search input
  
  // if (setQueryObj) {
  //   setQueryObj((prev: any) => ({ ...prev, search: searchValue }));
  // }
};
  return (
    <div className=" shadow-2xl   text-white ">
      
      {/* search section  */}
      <div className="h-24 bg-secondary rounded-t-xl flex justify-center items-center w-full">
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
        <CustomForm onSubmit={onSubmit}>
          <div className="w-56">
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
