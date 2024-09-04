/* eslint-disable @typescript-eslint/no-unused-vars */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseQueryFn = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_URL_PROD,
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    console.log(getState);
    
    // todo sent token Credential
    // const token = (getState() as RootState).auth.token

    // // If we have a token set in state, let's assume that we should be passing it.
    // if (token) {
    //   headers.set('authorization', `Bearer ${token}`)
    // }
    return headers;
  },
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const baseApi = createApi({
  tagTypes: ["AdminAllProducts","SingleData"],
  reducerPath: "baseApi",
  baseQuery: baseQueryFn,
  endpoints: () => ({}),
});
