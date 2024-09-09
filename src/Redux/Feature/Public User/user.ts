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
    }),
  }),
});

export const { useGetUserInfoQuery } = userApi;
