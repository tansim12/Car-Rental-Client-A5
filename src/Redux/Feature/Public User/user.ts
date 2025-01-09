/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { TQueryParams } from "../../../Types/car.types";
import { TReduxResponse } from "../../../Types/response.type";
import { TUser } from "../../../Types/user.type";
import { baseApi } from "../../api/baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUserInfo: builder.query({
      query: (userId) => {
        return {
          url: `/user/${userId}`,
          method: "GET",
        };
      },
      transformResponse: (response: TReduxResponse<TUser>) => {
        return response?.data;
      },
      providesTags: ["User"],
    }),
    createBooking: builder.mutation({
      query: (body) => ({
        url: "/bookings",
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["Booking"],
    }),

    getAllCarsByUser: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        // Group args by `name`
        const groupedArgs: Record<string, string[]> = {};

        if (args) {
          args.forEach((item: TQueryParams) => {
            if (!groupedArgs[item.name]) {
              groupedArgs[item.name] = [];
            }
            groupedArgs[item.name].push(item.value as string);
          });
        }

        // Append the grouped values for each `name`
        Object.keys(groupedArgs).forEach((name) => {
          params.append(name, groupedArgs[name].join(" "));
        });

        return {
          url: "/cars",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["AllCars"],
    }),

    getMostBookingCars: builder.query({
      query: (_arg = null) => {
        return {
          url: `/cars/most/booking`,
          method: "GET",
        };
      },
      transformResponse: (response: TReduxResponse<any>) => {
        return response?.data;
      },
    }),
    
  }),
});

export const {
  useGetUserInfoQuery,
  useGetAllCarsByUserQuery,
  useCreateBookingMutation,
  useGetMostBookingCarsQuery,
} = userApi;
