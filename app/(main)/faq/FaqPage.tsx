"use client";
import CTA_SECTION from "@/components/pages/faq/CTA_SECTION";
import { Minus, Plus } from "lucide-react";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

// FAQ Data Structure
const FAQ_IDS = ["01", "02", "03", "04", "05", "06", "07"];

const FaqPage: React.FC = () => {
  const { t } = useTranslation();
  const [openFaq, setOpenFaq] = useState<string>("0");

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? "" : id);
  };

  return (
    <main className="w-full">
      {/* 1. HERO SECTION */}
      <div className="relative w-full h-[500px] md:h-[600px] lg:h-[800px] overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("/bg/faq-bg.png")',
          }}
        ></div>
        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white mt-[380px] px-4 md:px-16">
          <h1 className="font-tinos text-4xl md:text-5xl lg:text-7xl mb-6 drop-shadow-lg leading-tight">
            {t("faq.heroTitle")}
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl max-w-4xl text-gray-100 font-light leading-relaxed">
            {t("faq.heroDesc")}
          </p>
        </div>
      </div>

      {/* 2. FAQ SECTION */}
      <div className=" py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
          {/* Left Column: Heading */}
          <div className="lg:w-1/2 pt-4">
            <h2 className="font-tinos text-5xl md:text-6xl text-charcoal leading-tight">
              {t("faq.heroTitle")} <br />
              <span className="text-amber-700 ">{t("faq.heroTitleSpan")}</span>
            </h2>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:w-2/3 w-full">
            <div className="divide-y divide-gray-200">
              {FAQ_IDS.map((id) => (
                <div key={id} className="py-6 md:py-8 group  ">
                  <button
                    onClick={() => toggleFaq(id)}
                    className="w-full flex items-start justify-between text-left focus:outline-none cursor-pointer"
                  >
                    <div className="flex items-start gap-6 md:gap-8">
                      <span className="font-tinos text-xl md:text-2xl italic font-bold mt-1 ">
                        {id}
                      </span>
                      <span className="font-tinos text-xl md:text-2xl text-charcoal font-bold mt-1 group-hover:text-terracotta transition-colors">
                        {t(`faq.questions.${id}.q`)}
                      </span>
                    </div>
                    <div className="ml-4 mt-1">
                      {openFaq === id ? (
                        <div className="rounded-full border border-charcoal p-1">
                          <Minus className="w-6 h-6 text-gray-600" />
                        </div>
                      ) : (
                        <div className="rounded-full border border-gray-300 p-1 group-hover:border-terracotta transition-colors">
                          <Plus className="w-6 h-6 text-gray-600 group-hover:text-terracotta" />
                        </div>
                      )}
                    </div>
                  </button>

                  {/* Accordion Content */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      openFaq === id
                        ? "grid-rows-[1fr] opacity-100 mt-4"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="pl-[3.5rem] md:pl-[5rem] text-gray-600 leading-relaxed text-lg max-w-2xl">
                        {t(`faq.questions.${id}.a`)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 3. CTA SECTION */}
      <CTA_SECTION />
    </main>
  );
};

export default FaqPage;
