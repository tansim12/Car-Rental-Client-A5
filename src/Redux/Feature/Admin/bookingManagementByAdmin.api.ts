/* eslint-disable @typescript-eslint/no-unused-vars */
import { TQueryParams } from "../../../Types/car.types";
import { baseApi } from "../../api/baseApi";

const bookingManagementByAdminApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    allBookingsByAdmin: builder.query({
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
          url: "/bookings",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["Booking"],
    }),

    updateBookingByAdmin: builder.mutation({
      query: (payload) => ({
        url: `/bookings/${payload?.id}`,
        method: "PUT",
        body: payload?.body,
      }),
      invalidatesTags: ["Booking"],
    }),

    adminCarReturnDate: builder.query({
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
          url: "/bookings/admin-car-return-schedule",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["Booking"],
    }),
    adminDashboardAggregateData: builder.query({
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
          url: "/bookings/admin-aggregate-data",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["Booking"],
    }),
    monthRevenue: builder.query({
      query: (_args) => {
        return {
          url: "/bookings/admin/monthly/revenue",
          method: "GET",
        };
      },
    }),
  }),
});

export const {
  useAllBookingsByAdminQuery,
  useUpdateBookingByAdminMutation,
  useAdminCarReturnDateQuery,
  useAdminDashboardAggregateDataQuery,
  useMonthRevenueQuery,
} = bookingManagementByAdminApi;
