import { apiSlice } from "../apiSlice";

export const buildPackageApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBuildPackageList: builder.query({
      query: (params) => {
        let queryString = "";
        if (params) {
          const searchParams = new URLSearchParams();
          if (params.category) searchParams.append("category", params.category);
          queryString = `?${searchParams.toString()}`;
        }
        return {
          url: `/build-package${queryString}`,
        };
      },
      providesTags: ["BuildPackage"],
      // Transform response to handle different response structures
      transformResponse: (response) => {
        return response;
      },
    }),
    createBuildPackage: builder.mutation({
      query: (body) => ({
        url: `/build-package`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["BuildPackage"],
      transformResponse: (response) => response,
    }),
    updateBuildPackage: builder.mutation({
      query: ({ id, data }) => ({
        url: `/build-package/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["BuildPackage"],
      transformResponse: (response) => response,
    }),
    deleteBuildPackage: builder.mutation({
      query: (id: string) => ({
        url: `/build-package/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["BuildPackage"],
      transformResponse: (response) => response,
    }),
  }),
});

export const {
  useGetBuildPackageListQuery,
  useCreateBuildPackageMutation,
  useUpdateBuildPackageMutation,
  useDeleteBuildPackageMutation,
} = buildPackageApiSlice;
