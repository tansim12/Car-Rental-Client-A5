/* eslint-disable @typescript-eslint/no-unused-vars */
import { baseApi } from "../../api/baseApi";

const newsLetterApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createNewsLetter: builder.mutation({
      query: (payload) => {
        return {
          url: "/newsLetter/create",
          method: "POST",
          body: payload,
        };
      },
    }),
    sendMessageNewsLetterEmail: builder.mutation({
      query: (payload) => {
        return {
          url: "/newsLetter",
          method: "POST",
          body: payload,
        };
      },
    }),
    findAllNewsLetterEmail: builder.query({
      query: (_arg) => {
        return {
          url: "/newsLetter",
          method: "GET",
        };
      },
    }),
  }),
});

export const {
  useCreateNewsLetterMutation,
  useFindAllNewsLetterEmailQuery,
  useSendMessageNewsLetterEmailMutation,
} = newsLetterApi;
