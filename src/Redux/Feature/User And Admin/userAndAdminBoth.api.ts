import { baseApi } from "../../api/baseApi";

const userAndAdminBothApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    updateBooking: builder.mutation({
      query: (payload) => ({
        url: `/bookings/${payload?.id}`,
        method: "PUT",
        body: payload?.body,
      }),
      invalidatesTags: ["Booking"],
    }),
  }),
});

export const {useUpdateBookingMutation} = userAndAdminBothApi;
