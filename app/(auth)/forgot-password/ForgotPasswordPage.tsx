":use client";
import React from "react";
import { Lock } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const ForgotPasswordPage: React.FC = () => {
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
          <form className="space-y-6">
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">
                Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-md border border-gray-300 px-4 py-3.5 text-sm text-gray-700 placeholder-gray-400 focus:border-sidebar focus:outline-none focus:ring-1 focus:ring-sidebar transition-shadow"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-200">
                  <Lock size={20} strokeWidth={1.5} />
                </div>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full rounded-md bg-emerald-900 py-6 text-lg font-medium text-white shadow-sm hover:bg-emerald-800 transition-colors mt-8"
            >
              Forgot Password
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
