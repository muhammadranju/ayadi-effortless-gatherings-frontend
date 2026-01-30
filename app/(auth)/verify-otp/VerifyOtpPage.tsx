"use client";
import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { useVerifyOTPMutation } from "@/lib/redux/features/api/authApiSlice";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { selectUserEmail } from "@/lib/redux/features/auth/authSlice";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { setAuthToken } from "@/lib/redux/features/auth/authSlice";
import { VerifyOTPResponse } from "@/interface/auth.interface";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { SerializedError } from "@reduxjs/toolkit";
import { ClipLoader } from "react-spinners";

export const VerifyOtpPage = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [timer, setTimer] = useState(180);
  const [isResending, setIsResending] = useState(false);
  const [otpError, setOtpError] = useState("");
  const [verifyOTP, { isLoading }] = useVerifyOTPMutation();
  const userEmail = useAppSelector(selectUserEmail);
  const dispatch = useAppDispatch();
  const router = useRouter();

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const validateForm = () => {
    let isValid = true;
    setOtpError("");
    const otpValue = otp.join("");
    if (otpValue.length !== 4) {
      setOtpError("Please enter all 4 digits");
      isValid = false;
    } else if (!/^\d{4}$/.test(otpValue)) {
      setOtpError("OTP must contain only numbers");
      isValid = false;
    }
    return isValid;
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    if (!validateForm()) return;

    const otpValue = otp.join("");

    try {
      const result = (await verifyOTP({
        otp: Number(otpValue),
        email: userEmail,
      }).unwrap()) as unknown as VerifyOTPResponse;

      if (result.success) {
        if (result.data) {
          dispatch(setAuthToken(result.data));
        }
        toast.success("OTP verified successfully");
        router.push("/reset-password");
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
        } else {
          toast.error("Failed to verify OTP");
        }
      } else if (error && typeof error === "object" && "message" in error) {
        const serializedError = error as SerializedError;
        toast.error(serializedError.message || "Failed to verify OTP");
      } else {
        toast.error((error as string) || "Failed to verify OTP");
      }
    }
  };

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) return;
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 4) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleResend = () => {
    setIsResending(true);
    setTimer(180);
    setTimeout(() => setIsResending(false), 1000);
  };

  const formatTime = (seconds: number) => {
    return `${String(Math.floor(seconds / 60)).padStart(2, "0")} : ${String(
      seconds % 60,
    ).padStart(2, "0")}`;
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

      {/* Right Side - OTP Verification Form */}
      <div className="flex w-full items-center justify-center px-6 lg:w-1/2">
        <div className="w-full max-w-[500px]">
          {/* Header */}
          <div className="mb-8 text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-3">
              Verify Reset Password
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Enter the code sent to your email to reset your password.
            </p>
          </div>

          {/* OTP Input Boxes */}
          <div className="flex flex-col mb-8">
            <div className="flex gap-3 justify-center mb-2">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => {
                    inputRefs.current[index] = el;
                  }}
                  type="text"
                  placeholder="0"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className={`w-14 h-14 border-2 rounded-lg text-center text-2xl font-semibold text-gray-700 focus:outline-none focus:ring-2 transition-all ${
                    otpError
                      ? "border-red-500 focus:border-red-500 focus:ring-red-100"
                      : "border-gray-300 focus:border-emerald-700 focus:ring-emerald-100"
                  }`}
                />
              ))}
            </div>
            {otpError && (
              <p className="text-red-500 text-xs text-center">{otpError}</p>
            )}
          </div>

          {/* Verify Button */}
          <Button
            type="submit"
            onClick={handleSubmit}
            disabled={isLoading || userEmail.length === 0}
            className="w-full rounded-md bg-emerald-900 py-6 text-lg font-medium text-white shadow-sm hover:bg-emerald-800 transition-colors mb-4"
          >
            {isLoading ? (
              <ClipLoader color="#ffffff" size={24} />
            ) : (
              "Verify Code"
            )}
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

          {/* Resend Timer */}
          <div className="text-center">
            {timer > 0 ? (
              <p className="text-gray-600 text-sm">
                Resend code in{" "}
                <span className="font-semibold text-amber-600">
                  {formatTime(timer)}
                </span>
              </p>
            ) : (
              <button
                onClick={handleResend}
                // disabled={isResending}
                className="text-sm font-medium text-emerald-900 hover:text-emerald-800 transition-colors disabled:opacity-50"
              >
                {isResending ? "Sending..." : "Resend Code"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
