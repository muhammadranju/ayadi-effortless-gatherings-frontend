import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 - Ayadi Catering",
  description: "404",
  openGraph: {
    title: "404 - Ayadi Catering",
    description: "404",
    url: "https://www.ayadicatering.com/404",
    images: [
      {
        url: "https://www.ayadicatering.com/bg/404.png",
        width: 1200,
        height: 630,
        alt: "404",
      },
    ],
    siteName: "Ayadi Catering",
  },
};

const notFound = () => {
  return (
    <div className="bg-[#E1C3AD]">
      <div className="flex flex-col items-center justify-center h-screen mx-auto ">
        <Image
          src="/bg/404.jpg"
          alt="404"
          width={800}
          height={600}
          className="rounded-xl "
        />
        {/* <h1 className="uppercase text-4xl  mt-10 font-bold tracking-[10px] text-center">
          Page Not Found
        </h1> */}
        <Link href="/" className="mt-14 w-full  max-w-md">
          <Button className="w-full py-6 rounded-xl flex justify-center items-center  ">
            {" "}
            <Home /> Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default notFound;
