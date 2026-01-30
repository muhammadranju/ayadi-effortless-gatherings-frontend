"use client";
import React, { useState } from "react";
import { Lock } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useForgotPasswordMutation } from "@/lib/redux/features/api/authApiSlice";
import { useAppDispatch } from "@/lib/redux/hooks";
import { useRouter } from "next/navigation";
import { setUserEmail } from "@/lib/redux/features/auth/authSlice";
import { toast } from "sonner";
import { ForgotPasswordResponse } from "@/interface/auth.interface";
import { Input } from "@/components/ui/input";

export const ForgotPasswordPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
  const [forgotPassword, { isLoading }] = useForgotPasswordMutation();
  const dispatch = useAppDispatch();
  const router = useRouter();

  const validateForm = () => {
    let isValid = true;

    // Reset error
    setEmailError("");

    // Validate email
    if (!email.trim()) {
      setEmailError("Email is required");
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Please enter a valid email address");
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form before submission
    if (!validateForm()) {
      return;
    }

    try {
      const result = (await forgotPassword({
        email,
      }).unwrap()) as unknown as ForgotPasswordResponse;

      if (result?.success) {
        dispatch(setUserEmail(email));
        setOpenDialog(true);

        // Only use browser APIs when in browser environment
        if (typeof window !== "undefined") {
          toast.success("Password reset link sent successfully");

          setTimeout(() => {
            router.push("/verify-otp");
            setOpenDialog(false);
          }, 2000);
        }
      }
    } catch (error: any) {
      // Handle error if needed
      if (typeof window !== "undefined") {
        toast.error(
          (error.data.message as string) ||
            "Failed to send password reset link",
          {
            description: "Please try again later",
          },
        );
      }
    }
  };

  // Clear error when user starts typing
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (emailError) setEmailError("");
  };

  return (
    <div className="flex min-h-screen w-full bg-white">
      {/* Left Side - Illustration Area */}
      <div className="hidden w-9/12 flex-col items-center justify-center bg-white lg:flex relative overflow-hidden">
        <div className="relative flex flex-col items-center justify-center w-full max-w-7xl px-10">
          {/* Image Placeholder imitating the 3D illustration */}
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
              Forgot Password
            </h2>
            <p className="text-gray-600">
              Enter your email address and we&apos;ll send you a link to reset
              your password.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">
                Email
              </label>
              <div className="relative">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`h-12 bg-neutral-50 border-neutral-200 focus:bg-white rounded-xl ${
                    emailError ? "border-red-500 focus:border-red-500" : ""
                  }`}
                />
                {emailError && (
                  <p className="text-red-500 text-xs mt-1">{emailError}</p>
                )}
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-200">
                  <Lock size={20} strokeWidth={1.5} />
                </div>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full rounded-md bg-emerald-900 py-6 text-lg font-medium text-white shadow-sm hover:bg-emerald-800 transition-colors mt-8"
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Forgot Password"}
            </Button>
            {/* Back to Login Button */}
            <Link href="/login">
              <Button
                variant="outline"
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
