import { Metadata } from "next";
import { VerifyOtpPage } from "./VerifyOtpPage";

export const metadata: Metadata = {
  title: "Verify OTP - Ayadi Catering",
  description: "Verify OTP",
  openGraph: {
    title: "Verify OTP - Ayadi Catering",
    description: "Verify OTP",
    url: "https://www.ayadicatering.com/auth/verify-otp",
    images: [
      {
        url: "https://www.ayadicatering.com/images/auth/verify-otp.png",
        width: 1200,
        height: 630,
        alt: "Verify OTP",
      },
    ],
    siteName: "Ayadi Catering",
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
