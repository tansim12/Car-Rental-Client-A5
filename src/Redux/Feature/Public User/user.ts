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
    }),

    getAllCarsByUser: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: TQueryParams) => {
            params.append(item.name, item.value as string);
          });
        }
        return {
          url: "/cars",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["AllCars"],
    }),
  }),
});

export const { useGetUserInfoQuery, useGetAllCarsByUserQuery } = userApi;
