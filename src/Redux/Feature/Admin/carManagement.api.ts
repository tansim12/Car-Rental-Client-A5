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
     
    }),

    createCar: builder.mutation({
      query: (body) => ({
        url: "/cars",
        method: "POST",
        body: body,
      }),
    }),
  }),
});

export const { useCreateCarMutation, useGetAllCarsByAdminQuery } =
  carManagementApi;
