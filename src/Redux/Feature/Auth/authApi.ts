import { baseApi } from "../../api/baseApi";



const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userInfo) => {
        return {
          url: "/auth/signin",
          method: "POST",
          body: userInfo,
        };
      },
    }),
    register: builder.mutation({
      
      query: (userInfo) => {
        console.log(userInfo);
        return {
          url: "/auth/signup",
          method: "POST",
          body: userInfo,
        };
      },
    }),
    
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
