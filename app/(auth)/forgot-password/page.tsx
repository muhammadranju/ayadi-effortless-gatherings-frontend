import { Metadata } from "next";
import { ForgotPasswordPage } from "./ForgotPasswordPage";

export const metadata: Metadata = {
  title: "Forgot Password - Ayadi Catering",
  description: "Forgot Password",
  openGraph: {
    title: "Forgot Password - Ayadi Catering",
    description: "Forgot Password",
    url: "https://www.ayadicatering.com/auth/forgot-password",
    images: [
      {
        url: "https://www.ayadicatering.com/images/auth/forgot-password.png",
        width: 1200,
        height: 630,
        alt: "Forgot Password",
      },
    ],
    siteName: "Ayadi Catering",
  },
};

const page = () => {
  return (
    <>
      <ForgotPasswordPage />
    </>
  );
};

export default page;
