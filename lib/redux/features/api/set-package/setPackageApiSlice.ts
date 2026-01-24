import { apiSlice } from "../apiSlice";

export const packageApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSetPackageList: builder.query({
      query: () => ({
        url: `/set-package`,
      }),
      providesTags: ["Package"],
      // Transform response to handle different response structures
      transformResponse: (response) => {
        return response;
      },
    }),
    createSetPackage: builder.mutation({
      query: (body) => ({
        url: `/set-package`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Package"],
      transformResponse: (response) => response,
    }),
    updateSetPackage: builder.mutation({
      query: ({ id, data }) => ({
        url: `/set-package/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Package"],
      transformResponse: (response) => response,
    }),
    deleteSetPackage: builder.mutation({
      query: (id: string) => ({
        url: `/set-package/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Package"],
      transformResponse: (response) => response,
    }),
  }),
});

export const {
  useGetSetPackageListQuery,
  useCreateSetPackageMutation,
  useUpdateSetPackageMutation,
  useDeleteSetPackageMutation,
} = packageApiSlice;
