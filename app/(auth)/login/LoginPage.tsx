"use client";
import React, { useEffect, useState } from "react";
import { Eye, EyeOff, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { toast } from "sonner";
import { logout } from "@/lib/redux/features/auth/authSlice";
import { useRouter } from "next/navigation";
import { useLoginMutation } from "@/lib/redux/features/api/authApiSlice";
import { useAppDispatch } from "@/lib/redux/hooks";
import Cookies from "js-cookie";
import { Input } from "@/components/ui/input";

export const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberPassword, setRememberPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const router = useRouter();
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useAppDispatch();
  const token = Cookies.get("token");

  useEffect(() => {
    if (token) {
      router.replace("/dashboard/overview");
      // window.location.href = "/dashboard/overview";
    }
  }, [router, token]);

  const validateForm = () => {
    let isValid = true;

    // Reset errors
    setEmailError("");
    setPasswordError("");

    // Validate email
    if (!email.trim()) {
      setEmailError("Email is required");
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Please enter a valid email address");
      isValid = false;
    }

    // Validate password
    if (!password.trim()) {
      setPasswordError("Password is required");
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

    // Handle login logic here
    try {
      const result = await login({
        email,
        password,
        rememberPassword,
      }).unwrap();

      console.log(result);
      // user successfully logged in
      if (result?.data?.user?.role === process.env.NEXT_PUBLIC_ROLE) {
        window.location.href = "/dashboard/overview";
        // router.refresh();
        toast.success("Login successful", {
          description: "Welcome to the dashboard",
        });
      }
    } catch (error: any) {
      if (
        error?.data?.message === "Password is incorrect!" ||
        error?.data?.message === "User doesn't exist!"
      ) {
        toast.error("Invalid credentials email or password", {
          description: "Please try again later",
        });
        dispatch(logout());
      }
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Clear error when user starts typing
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (emailError) setEmailError("");
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (passwordError) setPasswordError("");
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
              Welcome Back
            </h2>
            <p className="text-gray-600">Login to your account</p>
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
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Enter your email"
                  className={`h-12 bg-neutral-50 border-neutral-200 focus:bg-white rounded-xl ${
                    emailError ? "border-red-500 focus:border-red-500" : ""
                  }`}
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-200">
                  <Lock size={20} strokeWidth={1.5} />
                </div>
                {emailError && (
                  <p className="text-red-500 text-sm mt-1">{emailError}</p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">
                Password
              </label>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder="Enter Password"
                  className={`h-12 bg-neutral-50 border-neutral-200 focus:bg-white rounded-xl ${
                    emailError ? "border-red-500 focus:border-red-500" : ""
                  }`}
                />
                <button
                  onClick={togglePasswordVisibility}
                  type="button"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-200 hover:text-gray-400"
                >
                  {showPassword ? (
                    <Eye size={20} strokeWidth={1.5} />
                  ) : (
                    <EyeOff size={20} strokeWidth={1.5} />
                  )}
                </button>
              </div>
              {passwordError && (
                <p className="text-red-500 text-sm mt-1">{passwordError}</p>
              )}
            </div>

            <div className="flex items-center justify-between pt-1">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberPassword}
                  onChange={(e) => setRememberPassword(e.target.checked)}
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
              className="w-full rounded-md bg-emerald-900 py-6 text-lg font-medium text-white shadow-sm hover:bg-emerald-800 transition-colors mt-8 disabled:opacity-50"
              disabled={isLoading}
            >
              {isLoading ? "Logging in..." : "Login"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};
