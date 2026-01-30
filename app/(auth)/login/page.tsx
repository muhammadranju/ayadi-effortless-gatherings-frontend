import { Metadata } from "next";
import { LoginPage } from "./LoginPage";
export const metadata: Metadata = {
  title: "Login - Ayadi Catering",
  description: "Login",
  openGraph: {
    title: "Login - Ayadi Catering",
    description: "Login",
    url: "https://www.ayadicatering.com/auth/login",
    images: [
      {
        url: "https://www.ayadicatering.com/images/auth/login.png",
        width: 1200,
        height: 630,
        alt: "Login",
      },
    ],
    siteName: "Ayadi Catering",
  },
};
const page = () => {
  return (
    <>
      <LoginPage />
    </>
  );
};

export default page;
