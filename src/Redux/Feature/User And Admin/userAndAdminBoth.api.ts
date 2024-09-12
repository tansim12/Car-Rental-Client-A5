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

    updateUserInfo: builder.mutation({
      query: (payload) => ({
        url: `/user/profile-update/${payload?.id}`,
        method: "PUT",
        body: payload?.body,
      }),
      invalidatesTags: ["User","AllUsers"],
    }),
  }),
});

export const { useUpdateBookingMutation, useUpdateUserInfoMutation } = userAndAdminBothApi;
