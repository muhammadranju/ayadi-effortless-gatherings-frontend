import { Metadata } from "next";
import { VerifyOtpPage } from "./VerifyOtpPage";

export const metadata: Metadata = {
  title: "Verify OTP - TechAdvantage",
  description: "Verify OTP",
  openGraph: {
    title: "Verify OTP - TechAdvantage",
    description: "Verify OTP",
    url: "https://www.techadvantage.com/auth/verify-otp",
    images: [
      {
        url: "https://www.techadvantage.com/images/auth/verify-otp.png",
        width: 1200,
        height: 630,
        alt: "Verify OTP",
      },
    ],
    siteName: "TechAdvantage",
  },
};

const page = () => {
  return (
    <>
      <VerifyOtpPage />
    </>
  );
};

export default page;
