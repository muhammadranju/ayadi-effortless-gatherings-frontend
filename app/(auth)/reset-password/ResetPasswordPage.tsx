"use client";
import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useResetPasswordMutation } from "@/lib/redux/features/api/authApiSlice";
import { useAppSelector } from "@/lib/redux/hooks";
import { selectAuthToken } from "@/lib/redux/features/auth/authSlice";
import { ResetPasswordResponse } from "@/interface/auth.interface";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { SerializedError } from "@reduxjs/toolkit";
import { ClipLoader } from "react-spinners";

export const ResetPasswordPage: React.FC = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const authToken = useAppSelector(selectAuthToken);
  const [resetPassword, { isLoading }] = useResetPasswordMutation();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return;
    }

    if (!authToken) {
      toast.error("Session expired. Please try again.");
      router.push("/forgot-password");
      return;
    }

    try {
      const result = (await resetPassword({
        password,
        confirmPassword,
        authToken,
      }).unwrap()) as unknown as ResetPasswordResponse;

      if (result.success) {
        toast.success("Password reset successfully");
        router.push("/login");
      }
    } catch (error) {
      if (error && typeof error === "object" && "status" in error) {
        const apiError = error as FetchBaseQueryError;
        if (
          apiError.status === 400 &&
          apiError.data &&
          typeof apiError.data === "object" &&
          "message" in apiError.data
        ) {
          const errorData = apiError.data as { message: string };
          toast.error(errorData.message);
        } else if (apiError.status === 401) {
          toast.error("Session expired. Please try again.");
          router.push("/forgot-password");
        } else {
          toast.error("Failed to reset password");
        }
      } else if (error && typeof error === "object" && "message" in error) {
        const serializedError = error as SerializedError;
        toast.error(serializedError.message || "Failed to reset password");
      } else {
        toast.error((error as string) || "Failed to reset password");
      }
    }
  };

  return (
    <div className="flex min-h-screen w-full bg-white">
      {/* Left Side - Illustration Area */}
      <div className="hidden w-9/12 flex-col items-center justify-center bg-white lg:flex relative overflow-hidden">
        <div className="relative flex flex-col items-center justify-center w-full max-w-7xl px-10">
          <div className="relative z-10 w-full">
            <Image
              src="/bg/login-bg.png"
              alt="Login background"
              width={1000}
              height={1000}
              className="object-cover opacity-90 w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="flex w-full items-center justify-center px-10 lg:w-1/2">
        <div className="w-full max-w-[500px]">
          {/* Header */}
          <div className="mb-6 text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-2">
              Reset Password
            </h2>
            <p className="text-gray-600">Please enter your new password.</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">
                New Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter new password"
                  className="w-full rounded-md border border-gray-300 px-4 py-3.5 text-sm text-gray-700 placeholder-gray-400 focus:border-sidebar focus:outline-none focus:ring-1 focus:ring-sidebar transition-shadow"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-200 hover:text-gray-400"
                >
                  {showPassword ? (
                    <Eye size={20} strokeWidth={1.5} />
                  ) : (
                    <EyeOff size={20} strokeWidth={1.5} />
                  )}
                </button>
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm new password"
                  className="w-full rounded-md border border-gray-300 px-4 py-3.5 text-sm text-gray-700 placeholder-gray-400 focus:border-sidebar focus:outline-none focus:ring-1 focus:ring-sidebar transition-shadow"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-200 hover:text-gray-400"
                >
                  {showConfirmPassword ? (
                    <Eye size={20} strokeWidth={1.5} />
                  ) : (
                    <EyeOff size={20} strokeWidth={1.5} />
                  )}
                </button>
              </div>
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full rounded-md bg-emerald-900 py-6 text-lg font-medium text-white shadow-sm hover:bg-emerald-800 transition-colors mt-8"
            >
              {isLoading ? (
                <ClipLoader size={20} color="#fff" />
              ) : (
                "Reset Password"
              )}
            </Button>
            {/* Back to Login Button */}
            <Link href="/login">
              <Button
                variant="outline"
                type="button"
                className="w-full rounded-md border-2 border-gray-800 py-6 text-lg font-medium text-gray-800 bg-white hover:bg-gray-50 transition-colors mb-6"
              >
                Back to login
              </Button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};
