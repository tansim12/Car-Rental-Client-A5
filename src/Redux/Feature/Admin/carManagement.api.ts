import { baseApi } from "../../api/baseApi";

const carManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // getAllStudents: builder.query({
    //     query: (args) => {
    //       const params = new URLSearchParams();
    //       if (args) {
    //         args.forEach((item: TQueryParamAcademicSemester) => {
    //           params.append(item.name, item.value as string);
    //         });
    //       }

    //       return {
    //         url: "/students",
    //         method: "GET",
    //         params: params,
    //       };
    //     },
    //     transformResponse: (response: TReduxResponse<TStudent[]>) => {
    //       return response?.data;
    //     },
    //   }),

    createCar: builder.mutation({
      query: (body) => ({
        url: "/cars",
        method: "POST",
        body: body,
      }),
    }),
  }),
});

export const { useCreateCarMutation } = carManagementApi;
