import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Auth - Ayadi Catering",
  description: "Auth",
  openGraph: {
    title: "Auth - Ayadi Catering",
    description: "Auth",
    url: "https://www.ayadicatering.com/auth",
    images: [
      {
        url: "https://www.ayadicatering.com/images/auth/auth.png",
        width: 1200,
        height: 630,
        alt: "Auth",
      },
    ],
    siteName: "Ayadi Catering",
  },
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen grid place-items-center">
      <div className="w-full bg-white">{children}</div>
    </div>
  );
}
