import { TQueryParams } from "../../../Types/car.types";

import { baseApi } from "../../api/baseApi";

const carManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCarsByAdmin: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: TQueryParams) => {
            params.append(item.name, item.value as string);
          });
        }
        return {
          url: "/cars/find-cars-admin",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["AllCars"],
    }),

    createCar: builder.mutation({
      query: (body) => ({
        url: "/cars",
        method: "POST",
        body: body,
      }),
    }),
    updateCar: builder.mutation({
      query: ({ body, file, id }) => {
        const formData = new FormData();
        // Append the JSON data to FormData as a string
        formData.append("data", JSON.stringify(body));
        // Append the file to FormData if it exists
        if (file) {
          for (let i = 0; i < file?.length; i++) {
            formData.append("file", file[i]);
          }
        }
        return {
          url: `/cars/${id}`, // Use the id directly
          method: "PUT",
          body: formData, // Send FormData
        };
      },
      invalidatesTags: ["AllCars"],
    }),
  }),
});

export const {
  useCreateCarMutation,
  useGetAllCarsByAdminQuery,
  useUpdateCarMutation,
} = carManagementApi;
