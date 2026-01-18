"use client";
import { Sparkles } from "lucide-react";
import React from "react";
import { useTranslation } from "react-i18next";
import { FaWhatsapp } from "react-icons/fa6";

// --- RecentWorks Component ---
const RecentWorks: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="py-16 md:py-24 bg-[#F2EEE6]">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        {/*
          GRID LAYOUT EXPLANATION:
          We use a 12-column grid.
          
          ROW 1 (Header):
          - Col 1-3:  Vertical Image (Left)
          - Col 4-9:  Title Text (Center)
          - Col 10-12: Square Image (Right)

          ROW 2 (Middle Section):
          - Col 1-3:  Tall Vertical (Far Left)
          - Col 4-9:  Complex Inner Grid (Center Block)
          - Col 10-12: Tall Vertical (Far Right)

          ROW 3 (Bottom Section):
          - Col 1-3:  Vertical Image (Left)
          - Col 4-6:  Square Image (Center-Left)
          - Col 7-12: Landscape Image (Right)
        */}

        <div className="grid grid-cols-12 gap-6 auto-rows-min">
          {/* --- ROW 1 --- */}

          {/* Top Left - Vertical */}
          <div className="col-span-12 md:col-span-3 row-span-2 relative h-[300px] md:h-[400px]">
            <img
              src="/gallery/1.png"
              alt="Salad Pouring"
              className="w-full h-full object-cover rounded-sm shadow-sm"
            />
          </div>

          {/* Top Center - Title */}
          <div className="col-span-12 md:col-span-6 flex flex-col justify-center -mt-20 items-center text-center z-10 py-10 md:py-0">
            <h2 className="text-4xl md:text-6xl font-semibold text-gray-900 mb-2">
              {t("gallery.recentTitle")}
            </h2>
            <span className="text-4xl md:text-6xl text-orange-500 font-semibold">
              {t("gallery.recentTitleSpan")}
            </span>
            <p className="text-gray-900 mt-4 text-sm tracking-wide">
              {t("gallery.recentDesc")}
            </p>
          </div>

          {/* Top Right - Square */}
          <div className="col-span-12 md:col-span-3 relative h-[250px] md:h-[300px] self-start md:mt-[-50px]">
            <img
              src="/gallery/2.png"
              alt="Outdoor Table"
              className="w-full h-full object-cover rounded-sm shadow-sm"
            />
          </div>

          {/* --- ROW 2 (Middle Complex Block) --- */}

          {/* Far Left - Woman holding dish (Tall) */}
          <div className="col-span-12 md:col-span-3 relative h-[400px] md:h-[500px] md:-mt-20">
            <img
              src="/gallery/3.png"
              alt="Serving Dish"
              className="w-full h-full object-cover rounded-sm shadow-sm"
            />
          </div>

          {/* Center Block (Col 4-9) - 6 Columns internal */}
          <div className="col-span-12 md:col-span-6 grid grid-cols-6 gap-6 h-fit">
            {/* 3 Small Images in a Row */}
            <div className="col-span-2 h-[150px] md:h-[180px]">
              <img
                src="/gallery/4.jpg"
                alt="Buffet 1"
                className="w-full h-full object-cover rounded-sm shadow-sm"
              />
            </div>
            <div className="col-span-2 h-[150px] md:h-[180px]">
              <img
                src="/gallery/5.jpg"
                alt="Buffet 2"
                className="w-full h-full object-cover rounded-sm shadow-sm"
              />
            </div>
            <div className="col-span-2 h-[150px] md:h-[180px]">
              <img
                src="/gallery/6.png"
                alt="Buffet 3"
                className="w-full h-full object-cover rounded-sm shadow-sm"
              />
            </div>

            {/* Row 2 of Center Block */}
            {/* Left: Square */}
            <div className="col-span-3 h-[250px] md:h-[280px]">
              <img
                src="/gallery/6.1.jpg"
                alt="Food Box"
                className="w-full h-full object-cover rounded-sm shadow-sm"
              />
            </div>
            {/* Right: Wide */}
            <div className="col-span-3 h-[250px] md:h-[280px]">
              <img
                src="/gallery/7.png"
                alt="Food Dish"
                className="w-full h-full object-cover rounded-sm shadow-sm"
              />
            </div>
          </div>

          {/* Far Right - Woman holding plate (Tall) */}
          <div className="col-span-12 md:col-span-3 relative h-[350px] md:h-[450px] md:mt-20">
            <img
              src="/gallery/8.jpg"
              alt="Holding Plate"
              className="w-full h-full object-cover rounded-sm shadow-sm"
            />
          </div>

          {/* --- ROW 3 (Bottom) --- */}

          {/* Bottom Left - Vertical */}
          <div className="col-span-12 md:col-span-4 h-[350px] md:h-[450px]">
            <img
              src="/gallery/9.jpg"
              alt="Charcuterie"
              className="w-full h-full object-cover rounded-sm shadow-sm"
            />
          </div>

          {/* Bottom Center - Small Square */}
          <div className="col-span-12 md:col-span-3 h-[200px] md:h-[250px]">
            <img
              src="/gallery/10.png"
              alt="Small Bites"
              className="w-full h-full object-cover rounded-sm shadow-sm"
            />
          </div>

          {/* Bottom Right - Large Vertical/Landscape */}
          <div className="col-span-12 md:col-span-5 h-[400px] md:h-[500px] md:-mt-20">
            <img
              src="/gallery/3.png"
              alt="Feast Table"
              className="w-full h-full object-cover rounded-sm shadow-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Testimonials Component ---
const Testimonials: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-[#403D3D] lg:py-20 md:py-32 lg:pb-40 md:pb-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-20 relative">
          <div className="flex justify-center mb-4 text-green-500">
            <Sparkles size={40} strokeWidth={1} />
          </div>
          <h2 className="text-5xl md:text-7xl font-semibold text-white mb-2 leading-tight">
            {t("gallery.voiceLabel")} <br />
            <span className="text-orange text-6xl md:text-8xl relative block mt-2">
              {t("gallery.voiceSpan")}
            </span>
          </h2>
        </div>

        {/* Testimonial 1: Text Left, Image Right */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-24 md:mb-32">
          <div className="w-full md:w-1/2 md:pr-12 order-2 md:order-1 bg-white/10 lg:lg:py-32 py-16 border-l-4 border-orange ">
            <div className="pl-8 py-2 relative">
              <p className=" text-xl md:text-2xl text-white italic leading-relaxed mb-8">
                {t("gallery.testimonials.1.text")}
              </p>
              <div className="flex items-center gap-4">
                <div className="h-[1px] w-12 bg-orange"></div>
                <div>
                  <h4 className="text-white  text-lg tracking-wide">
                    {t("gallery.testimonials.1.author")}
                  </h4>
                  <p className="text-white text-xs uppercase tracking-widest mt-1">
                    {t("gallery.testimonials.1.role")}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 h-[400px] md:h-[500px] relative order-1 md:order-2 group">
            <div className="absolute inset-0 border border-white/10 translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
            <img
              src="/gallery/11.jpg"
              alt="Event Setup"
              className="w-full h-full object-cover relative z-10 grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>

        {/* Testimonial 2: Image Left, Text Right */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-24 md:mb-32">
          <div className="w-full md:w-1/2 h-[400px] md:h-[500px] relative group">
            <div className="absolute inset-0 border border-white/10 -translate-x-4 translate-y-4 group-hover:-translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
            <img
              src="/gallery/12.jpg"
              alt="Diplomatic Dinner"
              className="w-full h-full object-cover relative z-10 grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <div className="w-full md:w-1/2 md:pl-12 border-l-4 border-orange bg-white/10 lg:py-32 py-16">
            <div className="pl-8 py-2">
              <p className=" text-xl md:text-2xl text-white italic leading-relaxed mb-8">
                {t("gallery.testimonials.2.text")}
              </p>
              <div className="flex items-center gap-4">
                <div className="h-[1px] w-12 bg-orange"></div>
                <div>
                  <h4 className="text-white  text-lg tracking-wide">
                    {t("gallery.testimonials.2.author")}
                  </h4>
                  <p className="text-white text-xs uppercase tracking-widest mt-1">
                    {t("gallery.testimonials.2.role")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial 3: Text Left, Image Right */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 md:pr-12 order-2 md:order-1 border-l-4 border-orange bg-white/10 lg:py-32 py-16">
            <div className="pl-8 py-2">
              <p className=" text-xl md:text-2xl text-white italic leading-relaxed mb-8 w-[80%]">
                {t("gallery.testimonials.3.text")}
              </p>
              <div className="flex items-center gap-4">
                <div className="h-[1px] w-12 bg-orange"></div>
                <div>
                  <h4 className="text-white  text-lg tracking-wide">
                    {t("gallery.testimonials.3.author")}
                  </h4>
                  <p className="text-white text-xs uppercase tracking-widest mt-1">
                    {t("gallery.testimonials.3.role")}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 h-[400px] md:h-[500px] relative order-1 md:order-2 group">
            <div className="absolute inset-0 border border-white/10 translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
            <img
              src="/gallery/13.jpg"
              alt="Private Estate"
              className="w-full h-full object-cover relative z-10 grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// --- StressFree Component ---
const StressFree: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-green-500 lg:py-40 my-16 md:py-32 py-24 lg:my-20 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <img
          src="/bg/gallery-2.png"
          className=" h-full object-cover absolute"
          alt=""
        />
        <img
          src="/bg/gallery-1.png"
          className=" h-full object-cover right-0 absolute"
          alt=""
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <img src="/bg/gallery-bg.png" alt="" />
        <h2 className="text-4xl md:text-6xl  text-white mb-6 tracking-wide leading-tight">
          {t("gallery.stressFreeTitle")}
        </h2>
        <p className="text-white/90 text-lg md:text-xl font-sans max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          {t("gallery.stressFreeDesc")}
        </p>

        <button className="bg-orange-700 hover:bg-orange-600 text-white px-8 py-3 rounded-sm font-medium transition-colors duration-300 flex items-center gap-2 mx-auto cursor-pointer">
          {t("gallery.whatsapp")} <FaWhatsapp size={24} />
        </button>
      </div>
    </section>
  );
};

// --- Main App Component ---
function GalleryPage() {
  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden">
      <RecentWorks />
      <Testimonials />
      <StressFree />
    </div>
  );
}

export default GalleryPage;
