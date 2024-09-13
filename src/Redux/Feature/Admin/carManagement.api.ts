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
    getSingleCar: builder.query({
      query: (id) => {
        return {
          url: `/cars/${id}`,
          method: "GET",
        };
      },
      providesTags: ["SingleCar"],
    }),

    createCar: builder.mutation({
      query: (body) => ({
        url: "/cars",
        method: "POST",
        body: body,
      }),
    }),
    updateCar: builder.mutation({
      query: ({ body, id }) => { // Destructure payload
        console.log(body);
        
        return {
          url: `/cars/${id}`, // Use the destructured id
          method: "PUT",
          body: body, // Use the destructured body
        };
      },
      invalidatesTags: ["AllCars", "SingleCar"],
    }),
    
  }),
});

export const {
  useCreateCarMutation,
  useGetAllCarsByAdminQuery,
  useUpdateCarMutation,
  useGetSingleCarQuery,
} = carManagementApi;
