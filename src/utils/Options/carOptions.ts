import {
  carAvailabilityArray,
  carAvailableAreaArray,
  carCategoryArray,
  carTypeArray,
} from "../../Const/car.const";

export const availabilityOptions = carAvailabilityArray?.map((item) => ({
  label: item,
  value: item,
}));
export const categoryOptions = carCategoryArray?.map((item) => ({
  label: item,
  value: item,
}));
export const availableAreaOptions = carAvailableAreaArray?.map((item) => ({
  label: item,
  value: item,
}));
export const typesOptions = carTypeArray?.map((item) => ({
  label: item,
  value: item,
}));
