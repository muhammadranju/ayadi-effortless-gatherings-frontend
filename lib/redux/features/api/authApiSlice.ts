import {
  ForgotPasswordRequest,
  LoginRequest,
  LoginResponse,
  ResetPasswordRequest,
  UserProfileResponse,
  VerifyOTPRequest,
} from "@/interface/auth.interface";

import toast from "react-hot-toast";
import { logout, setCredentials, setLoading } from "../auth/authSlice";
import { apiSlice } from "./apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        dispatch(setLoading(true));
        try {
          const { data } = await queryFulfilled;
          const { token, user } = data.data;

          // Dispatch credentials with user and token from login response
          dispatch(
            setCredentials({
              user: user,
              token: token,
            }),
          );
        } catch (error) {
          // dispatch(logout());
        } finally {
          dispatch(setLoading(false));
        }
      },
    }),

    getUserProfile: builder.query<UserProfileResponse, void>({
      query: () => ({
        url: `${process.env.NEXT_PUBLIC_API_URL}/user/profile`,
        headers: {
          "Content-Type": "application/json",
        },
      }),
      providesTags: ["User"],
      // Transform response to handle different response structures
      transformResponse: (response: UserProfileResponse) => {
        return {
          user: response.user || response,
        };
      },
    }),

    logout: builder.mutation<void, void>({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(logout());
          dispatch(apiSlice.util.resetApiState()); // Clear all cached data
        } catch (error) {
          dispatch(logout());
          dispatch(apiSlice.util.resetApiState());
          throw error;
        }
      },
    }),

    refreshToken: builder.mutation<{ token: string }, void>({
      query: () => ({
        url: "/auth/refresh",
        method: "POST",
      }),
    }),

    forgotPassword: builder.mutation<void, ForgotPasswordRequest>({
      query: (credentials) => ({
        url: "/auth/forget-password",
        method: "POST",
        body: credentials,
      }),
    }),

    verifyOTP: builder.mutation<void, VerifyOTPRequest>({
      query: ({ otp, email }) => ({
        url: "/auth/verify-email",
        method: "POST",
        body: { email, oneTimeCode: otp },
      }),
    }),

    resetPassword: builder.mutation<void, ResetPasswordRequest>({
      query: ({ password, confirmPassword, authToken }) => ({
        url: "/auth/reset-password",
        headers: {
          Authorization: authToken || "",
        },
        method: "POST",
        body: { newPassword: password, confirmPassword },
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useGetUserProfileQuery,
  useRefreshTokenMutation,
  useForgotPasswordMutation,
  useVerifyOTPMutation,
  useResetPasswordMutation,
} = authApiSlice;
