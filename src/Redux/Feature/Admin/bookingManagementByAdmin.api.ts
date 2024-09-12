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
    
  }),
});

export const { useAllBookingsByAdminQuery, useUpdateBookingByAdminMutation } =
bookingManagementByAdminApi;
