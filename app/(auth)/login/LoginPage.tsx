":use client";
import React from "react";
import { EyeOff, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export const LoginPage: React.FC = () => {
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
              Welcome Back
            </h2>
            <p className="text-gray-600">Login to your account</p>
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

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="w-full rounded-md border border-gray-300 px-4 py-3.5 text-sm text-gray-700 placeholder-gray-400 focus:border-sidebar focus:outline-none focus:ring-1 focus:ring-sidebar transition-shadow"
                />
                <button
                  type="button"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-200 hover:text-gray-400"
                >
                  <EyeOff size={20} strokeWidth={1.5} />
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between pt-1">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-sidebar focus:ring-sidebar"
                />
                <span className="text-sm text-gray-600">Remember Password</span>
              </label>
              <Link
                href="/forgot-password"
                className="text-sm font-medium text-[#D48D73] hover:underline"
              >
                Forgot Password
              </Link>
            </div>

            <Button
              type="submit"
              className="w-full rounded-md bg-emerald-900 py-6 text-lg font-medium text-white shadow-sm hover:bg-emerald-800 transition-colors mt-8"
            >
              Login
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};
