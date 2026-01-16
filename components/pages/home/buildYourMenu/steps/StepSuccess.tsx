import Image from "next/image";
import Link from "next/link";
import React from "react";

const StepSuccess: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center animate-in zoom-in duration-500">
      {/* 3D Chef Illustration Simulation */}
      <div className=" relative mb-8">
        <Image
          src="/do-it.png"
          alt="Chef Success"
          width={600}
          height={200}
          className="object-cover mt-20 w-[900px] h-full"
          unoptimized
        />
      </div>

      <h1 className=" font-semibold text-5xl md:text-4xl text-green-500 mb-6">
        Your Order is Confirmed!
      </h1>
      <p className=" text-xl text-center max-w-3xl font-light">
        Thank you for choosing Ayadi for your stress-free hosting experience. We
        handle every order with attention to detail, from preparation to
        delivery, so you can enjoy the moments around your table.
      </p>

      <Link
        href="/"
        className="mt-12 px-10 py-4 bg-green-500 text-white rounded-md font-medium hover:bg-[#14452F] hover:scale-105 active:scale-95 transition-all shadow-xl shadow-green-500/20 sr-only"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default StepSuccess;
