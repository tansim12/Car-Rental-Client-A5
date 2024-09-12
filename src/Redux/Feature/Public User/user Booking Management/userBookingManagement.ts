import { TQueryParams } from "../../../../Types/car.types";
import { baseApi } from "../../../api/baseApi";

const userBookingManagement = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // createBooking: builder.mutation({
    //   query: (body) => ({
    //     url: "/bookings",
    //     method: "POST",
    //     body: body,
    //   }),
    // }),

    userAllBookings: builder.query({
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
          url: "/bookings/my-bookings",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["Booking"],
    }),
  }),
});

export const { useUserAllBookingsQuery } = userBookingManagement;
