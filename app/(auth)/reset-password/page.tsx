import { Metadata } from "next";
import { ResetPasswordPage } from "./ResetPasswordPage";
export const metadata: Metadata = {
  title: "Reset Password - Ayadi Catering",
  description: "Reset Password",
  openGraph: {
    title: "Reset Password - Ayadi Catering",
    description: "Reset Password",
    url: "https://www.ayadicatering.com/auth/reset-password",
    images: [
      {
        url: "https://www.ayadicatering.com/images/auth/reset-password.png",
        width: 1200,
        height: 630,
        alt: "Reset Password",
      },
    ],
    siteName: "Ayadi Catering",
  },
};

const page = () => {
  return (
    <>
      <ResetPasswordPage />
    </>
  );
};

export default page;
