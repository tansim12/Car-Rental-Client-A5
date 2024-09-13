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
        return {
          url: "/auth/signup",
          method: "POST",
          body: userInfo,
        };
      },
    }),
    forgetPassword: builder.mutation({  
      query: (body) => {
        return {
          url: "/auth/forget-password",
          method: "POST",
          body: body,
        };
      },
    }),
    
  }),
});

export const { useLoginMutation, useRegisterMutation, useForgetPasswordMutation } = authApi;
