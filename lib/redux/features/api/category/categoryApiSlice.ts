import { apiSlice } from "../apiSlice";

export const categoryApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCategoryList: builder.query({
      query: () => ({
        url: `/category?sortOrder=asc&limit=3`,
      }),
      providesTags: ["Category"],
      // Transform response to handle different response structures
      transformResponse: (response) => {
        return response;
      },
    }),
    createCategory: builder.mutation({
      query: (body) => ({
        url: `/category`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["BuildPackage"],
      transformResponse: (response) => response,
    }),
    updateCategory: builder.mutation({
      query: ({ id, data }) => ({
        url: `/category/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Category"],
      transformResponse: (response) => response,
    }),
    deleteCategory: builder.mutation({
      query: (id: string) => ({
        url: `/category/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Category"],
      transformResponse: (response) => response,
    }),
  }),
});

export const {
  useGetCategoryListQuery,
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
} = categoryApiSlice;
